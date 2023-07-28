import { check, sleep } from 'k6'
import { testApi } from './steps/test-api.steps.js'

export const options = {
  vus: 3, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
  duration: '1m', // This can be shorter or just a few iterations
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
  },
}

export default async () => {
  // const urlRes = http.get('https://test-api.k6.io')
  const urlRes = testApi.get()
  sleep(1)
  // MORE STEPS
  // Here you can have more steps or complex script
  // Step1
  // Step2
  // etc.
}
