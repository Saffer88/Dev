// @ts-check
import {test, expect} from '@playwright/test'

test('show fact and image', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageContent = await image.getAttribute('alt')

  console.log({textContent}, {imageContent})
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageContent?.includes('a')).toBeTruthy()

})


