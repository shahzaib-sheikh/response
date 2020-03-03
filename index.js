const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public', {
    cacheControl: true,
    dotfiles: "ignore",
    etag: true,
    extensions: ['html', 'htm'],
    fallthrough: true,
    immutable: false,
    index: "index.html",
    lastModified: true,
    maxAge: "1000",
    redirect: true,
    setHeaders: (res, path, stat) => {

    }
}))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))