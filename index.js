var url = require('url')
var querystring = require('querystring')
var adventureTime = require('adventure-time')

var production = !location.port // a bit hackish but assume production if no custom port
var qs = url.parse(window.location.href, true).query

if (!qs.id) {
  qs.id = Math.random().toString(36).slice(2)
  window.location.href = window.location.href.split('?')[0] + '?' + querystring.stringify(qs)
}

var opts = {
  guide: 'guide/',
  console: 'terminal.html',
  server: qs.server || (production ? 'docker.try-dat.com' : 'dev.try-dat.com:8080'),
  id: qs.id,
  secure: production
}


if (production) {
  qs.secure = 'true'
  opts.guide = 'https://try-dat.com/guide/'
}

if (!qs.server) qs.server = opts.server

// for debugging production w/ local frontend
// qs.server = 'docker.try-dat.com'
// qs.secure = 'true'
  
opts.console += '?'+querystring.stringify(qs)

var adventure = adventureTime(opts)
