const { Octokit } = require('@octokit/rest')


export default async (req, res) => {
    const octokit = new Octokit({
        auth: process.env.GITHUB_AUTH_TOKEN
    });

    // const name  = req.body.username;
    const name  = req.body.username;

    console.log(name)

    const username = await octokit.request(`/users/${name}`)

    const followers = await octokit.request(`/users/${name}/followers`)
    const followerCount = followers.data.length;

    const repos = await octokit.request(`/users/${name}/repos`)
    const reposCount = repos.data.length

    const starred = await octokit.request(`/users/${name}/starred`)
    const starredCount = starred.data.length

    // return res.status(201).json({hi:name});
    return res.status(200).json({ username: username, repos: reposCount, followers: followerCount, starred: starredCount, allrepos: repos});
} 