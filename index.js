const {Worker} = require('worker_threads')
const server = (path)=>{Promise.all([new Promise(r=>new Worker(path).on('exit',r))]).then(()=>server(path))}
server("./bot.main.js")
const http = require('http');
const server=http.createServer((n,t)=>{t.write("<3"),t.end()}).listen(8080)