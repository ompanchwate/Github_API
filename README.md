

# Github Account Search Application

We can search any Github user using the user's username and can also see his Github Statistics and all the Repositories.

## Snaps
<img  width="800"  src="https://user-images.githubusercontent.com/86113092/231270174-517be1d7-9e6f-4102-9d3f-eac218aacc93.png">
<img  width="800"  src="https://user-images.githubusercontent.com/86113092/231270293-d0e410ff-3767-4c08-8c99-8363259a840f.png">
<img  width="800"  src="https://user-images.githubusercontent.com/86113092/231270399-04a3f35b-a9de-4153-ae10-0cd153875268.png">


## To generate a private Github Token
1. Go to your Github Account's setting.
2. Select Developers Settings
3. Select Personal access Tokens-> Fine grained Tokens
4. Click on the Generate new Token
5. Fill the required details and click create.
6. Not token will be generated, Copy the token ( It can't be seen again)

## Getting Started
1. Clone the project :
```git clone https://github.com/ompanchwate/Github_API.git```

2. To install all the dependencies : ```npm i```

3. now create a .env file in the main project and add this
  **GITHUB_AUTH_TOKEN = 'Your Personal Access Token'**

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```



