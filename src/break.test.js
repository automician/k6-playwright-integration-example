import http from 'k6/http'
import { check, sleep} from 'k6'

export const options = {
  // Key configurations for breakpoint in this section
  executor: 'ramping-arrival-rate', //Assure load increase if the system slows
  stages: [
    { duration: '2h', target: 20000 }, // just slowly ramp-up to a HUGE load
  ],
  thresholds: {
    http_req_failed: ['rate<0.50'], // http errors should be less than 50%
    http_req_duration: ['med<20000'], // 50% of requests should be below 20s
  },
  abortOnFail: true, // abort a test when a threshold is crossed
};

export default () => {
  const urlRes = http.get('https://test-api.k6.io')
  // MORE STEPS
  // Here you can have more steps or complex script
  // [sleep + ]Step1
  // [sleep + ]Step2
  // etc.
  /* sleep(1) // FINAL SLEEP IS NOT NEEDED, because is controlled by  ramping-arrival-rate executor, that we configured above*/
}

