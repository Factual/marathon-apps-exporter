const fs = require('fs')
const http = require('http')

const connect = require('connect')
const fetch = require('node-fetch')
const qs = require('qs')

const PORT = process.env.PORT || '3000'
const README = fs.readFileSync("./public/index.html")

async function getApps(marathonUrl) {
  const res = await fetch(`${marathonUrl}/v2/apps?embed=apps.taskStats`)
  const body = await res.text()
  return JSON.parse(body)['apps']
}

async function generateMetrics(marathonUrl, timestamp) {
  const apps = await getApps(marathonUrl)
  const metrics = []

  apps.forEach((app) => {
    [
      'instances',
      'cpus',
      'mem',
      'tasksStaged',
      'tasksRunning',
      'tasksHealthy',
      'tasksUnhealthy',
    ].forEach((attr) => {
      metrics.push(`marathon_app_${attr}{id="${app.id}"} ${app[attr]} ${timestamp}`)
    })
    metrics.push('')
  })

  return metrics.join("\n")
}

const app = connect()
app.use((req, res, next) => {
  const [ path, query ] = req.url.split('?')
  console.log(req.url, path, query)
  req.path = path
  req.query = query ? qs.parse(query) : {}
  next()
})

app.use(async (req, res) => {
  console.log(req.path)
  if (req.path != '/metrics') {
    res.end(README)
  } else {
    const marathonUrl = req.query['marathon-url']
    try {
      res.end(await generateMetrics(marathonUrl, Date.now()))
    } catch (e) {
      res.statusCode = 500
      res.end('ERROR')
    }
  }
})

http.createServer(app).listen(PORT);
console.log(`Server started at ${PORT}`)
