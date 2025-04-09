require('dotenv').config()

const express = require('express')

const app = express()

const port = 5000

const githubData = {
    "login": "daksh2624",
    "id": 206917270,
    "node_id": "U_kgDODFVOlg",
    "avatar_url": "https://avatars.githubusercontent.com/u/206917270?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/daksh2624",
    "html_url": "https://github.com/daksh2624",
    "followers_url": "https://api.github.com/users/daksh2624/followers",
    "following_url": "https://api.github.com/users/daksh2624/following{/other_user}",
    "gists_url": "https://api.github.com/users/daksh2624/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/daksh2624/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/daksh2624/subscriptions",
    "organizations_url": "https://api.github.com/users/daksh2624/orgs",
    "repos_url": "https://api.github.com/users/daksh2624/repos",
    "events_url": "https://api.github.com/users/daksh2624/events{/privacy}",
    "received_events_url": "https://api.github.com/users/daksh2624/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 1,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2025-04-09T16:39:45Z",
    "updated_at": "2025-04-09T16:40:07Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send('dakshcom')
})

app.get('/login', (req, res) => {
    res.send('<h1> Please login to chai aur code </h1>')
})

app.get('/youtube', (req, res) =>{
    res.send("<h2> Chai aur Code </h2>")
})

app.get('/gitHub', (req, res) =>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})