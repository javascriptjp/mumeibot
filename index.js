const {Worker} = require('worker_threads')
const StartServer = (path)=>{Promise.all([new Promise(r=>new Worker(path).on('exit',r))]).then(()=>StartServer(path))}
StartServer("./bot.main.js")
const http = require('http');
const server=http.createServer((n,t)=>{t.write("<3"),t.end()}).listen(8080)