import fs from 'fs/promises'

import {
  parseTarballFromBuffer,
  verifyReferences,
  timed as t,
} from '../src/prepare'

console.log('scanning tarball...')

const contents = await t('parse', async () => {
  const file = await fs.readFile('./tarball.tar')
  return parseTarballFromBuffer(file)
})

t('verify', () => verifyReferences(contents))