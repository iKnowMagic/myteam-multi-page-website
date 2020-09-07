/**
 * Usage: await sleep(1000)
 * @param {number} milliseconds
 */

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export default sleep
