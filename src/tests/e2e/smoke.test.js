import * as pwr from '@playwright/test'
import { test, expect } from '@playwright/test'
import { testApi } from '../../steps/test-api.steps'


test('smoke test', async ({}) => {
  const response = /** @type {pwr.APIResponse} */ (await testApi.get())

  expect(response.ok()).toBeTruthy()
})
