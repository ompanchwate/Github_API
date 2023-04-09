
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  // const { data } = useSWR('/api/github', fetcher);
  const [username, setUsername] = useState()

  const [data, setData] = useState()
  const [allrepos, setAllRepos] = useState()


  const handleClick = async (e) => {
    console.log(username)
    e.preventDefault()
    const res = await fetch('/api/api_github', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username
      }),
    });

    const response = await res.json();
    console.log(response)

    setData({
      url: response.username.data.html_url,
      user: response.username.data.name,
      repos: response.repos,
      followers: response.followers,
      starred: response.starred,
      img: response.username.data.avatar_url,
      bio: response.username.data.bio
    })

    setAllRepos(response.allrepos.data)
    console.log(response.allrepos.data[1].name)
  }

  return (
    <>
      <div className=' bg-slate-800 pb-[5.5rem] overflow-hidden '>
        <h1 className='text-xl md:text-3xl font-bold tracking-wider uppercase pt-8 justify-center flex text-white underline underline-offset-8'>search Github Account</h1>

        {/* FORM */}
        <form className='pt-10 flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-6 justify-center items-center' onSubmit={handleClick}>
          <input type="text" placeholder='Enter username' className='w-60 md:w-72 p-2 outline-none px-4 rounded-lg' value={username} onChange={(e) => setUsername(e.target.value)} />
          <button className=' bg-blue-800 p-1 md:p-2 px-6 text-lg text-white hover:bg-blue-600 rounded-lg' type='submit' >Search</button>
        </form>

        {/* DISPLAY USERNAME AND BIO*/}
        <div className='flex flex-col md:flex-row items-center justify-center md:space-x-9 mt-10'>
          {data ? <img src={data ? data.img : ""} alt="" className='rounded-full h-40 hover:scale-110 duration-300 cursor-pointer' id='' /> : ""}
          <div className='text-white text-2xl flex flex-col text-justify md:text-left mx-5 justify-center items-center md:items-start md:mt-2'>
            <a href={data ? data.url : ""} className='md:text-3xl'>{data ? data.user : "Loading..."}</a>
            <h1 className='text-xl md:text-2xl'>{data ? data.bio : ""}</h1>
          </div>
        </div>


        {/* DISPLAY STATS */}
        <div className="flex space-y-4 md:space-y-0 md:space-x-16  flex-col md:flex-row  justify-center items-center pt-14 text-white text-xl ">
          <div className="bg-black w-52 p-5 rounded-xl hover:scale-105 duration-200 cursor-pointer" >
            <label className='font-bold tracking-wider'>REPOSITORIES</label>
            <h1 className='text-lg'>{data ? data.repos : "Loading..."}</h1>
          </div>
          <div className="bg-black w-52 p-5 flex-col rounded-xl hover:scale-105 duration-200 cursor-pointer">
            <label className='font-bold tracking-wider'>FOLLOWERS</label>
            <h1 className='text-lg'>{data ? data.followers : "Loading..."}</h1>
          </div>

          <div className="bg-black w-52 p-5 rounded-xl hover:scale-105 duration-200 cursor-pointer">
            <label className='font-bold tracking-wider'>STARRED</label>
            <h1 className='text-lg'>{data ? data.starred : "Loading..."}</h1>
          </div>
        </div>

        {/* ALL REPOSITORIES */}
        <div className='flex flex-col mx-10 lg:mx-60 pt-16 pb-10'>
          {allrepos ? <h1 className='uppercase font-bold text-2xl mb-5 text-white'>Repositories</h1> : ""}
          {allrepos ? Object.keys(allrepos).map((data,index) => (
            <Link key={index} href={allrepos[data].html_url}>
              <div className='bg-gray-600 text-white rounded-lg p-5 mt-2 hover:scale-105 duration-300 '>
                <h1 className=''><span className='font-bold text-lg'>{Number(data) + 1}. Title : </span> {allrepos[data].name}</h1>
                <p> <span className='font-bold text-lg'> Description  :</span> {allrepos[data].description}</p>
              </div>
            </Link>
          )) : ""
          }
        </div>
      </div>

      <footer className='h-[8.2rem] bg-slate-900 text-white flex justify-center items-center text-xl'>
        <p>Made with ❣️ by <a href="https://github.com/ompanchwate/" className='hover:underline hover:underline-offset-4'>Om Panchwate</a> </p>
      </footer>
    </>
  )
}
