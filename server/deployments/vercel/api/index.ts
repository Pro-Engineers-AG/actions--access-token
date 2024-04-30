import {appInit} from '../../../app.js'
import * as process from 'process'

if (!process.env['GITHUB_ACTIONS_TOKEN_ALLOWED_AUDIENCE']) {
  // --- guess audience from VERCEL_UR
  process.env['GITHUB_ACTIONS_TOKEN_ALLOWED_AUDIENCE'] = process.env['VERCEL_URL']!
      .replace(/-[^-]+(?=\.vercel\.app$)/, '')
}

const app = await appInit()
export default app.callback()
