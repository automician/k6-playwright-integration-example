/** Init code **
 * = everythin outside exported default function, setup and teardown
 * - cannot make HTTP requests
 */
import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
  vus: 10,
  duration: '10s',
  thresholds: {
    // the rate of successful checks should be higher than 90%
    checks: ['rate>0.9'],
  },
}

export function setup() {
  /** one time setup code **
   * * to skip: $ k6 run --no-setup ...
   */

  const res = http.get('https://httpbin.test.k6.io/get');
  return /* should be immutable data, not function */ { data: res.json() }
}


export function teardown(data) {
  /** one time tear down code **
   * * to skip: $ k6 run --no-teardown ...
   */
  
  console.log(JSON.stringify(data))
}

export default function (data /* cannot be mutated*/) {
  /** VU code **
   * + runs over and over through the test duration
   * - does not load files from your local filesystem.
   * - does not import any other modules.
   */

  console.log(JSON.stringify(data))

  const userData = { username: 'example@gmail.com', password: 'secret' }
  let res = http.post('https://test-api.k6.io/auth/token/login/', userData)

  check(res, { 'unsuccess login': (r) => r.status === 401 })

  sleep(0.3)    
}
