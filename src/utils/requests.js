let http
let isK6Run

try {
  http = require('k6/http')
  isK6Run = true
} catch (error) {
  isK6Run = false
}

export const requests = {
  async get(url) {
    // if CONTEXT env var is set to 'load' then dynamically import k6/http
    if (isK6Run) {
      return http.get(url)
    } else {
      return import('@playwright/test')
        .then(pwr => pwr.request.newContext())
        .then(ctx => ctx.get(url))
    }
  },
}
