import { requests } from '../utils/requests.js'

export const testApi = {
  get() {
    return requests.get('https://test-api.k6.io')
  },
}
