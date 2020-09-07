const puppeteer = require('puppeteer')

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

describe('App', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch()
  })
  test('home - mobile', async () => {
    const page = await browser.newPage()
    await page.goto('http://localhost:8082')
    await page.setViewport({
      width: 375,
      height: 4000
    })
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
  test('about - mobile', async () => {
    const page = await browser.newPage()
    await page.goto('http://localhost:8082/about')
    await page.setViewport({
      width: 375,
      height: 4000
    })
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
  test('contact - mobile', async () => {
    const page = await browser.newPage()
    await page.goto('http://localhost:8082/contact')
    await page.setViewport({
      width: 375,
      height: 4000
    })
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
  test('home - mobile - menu', async () => {
    const page = await browser.newPage()
    await page.goto('http://localhost:8082')
    await page.setViewport({
      width: 375,
      height: 4000
    })
    await page.tap('.main-header-menu-trigger')
    await sleep(1000) // wait for the menu to expand
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
  test('about - mobile - menu', async () => {
    const page = await browser.newPage()
    await page.goto('http://localhost:8082/about')
    await page.setViewport({
      width: 375,
      height: 4000
    })
    await page.tap('.main-header-menu-trigger')
    await sleep(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
  test('contact - mobile - menu', async () => {
    const page = await browser.newPage()
    await page.goto('http://localhost:8082/contact')
    await page.setViewport({
      width: 375,
      height: 4000
    })
    await page.tap('.main-header-menu-trigger')
    await sleep(1000)
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
