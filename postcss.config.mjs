import path from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/postcss'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Turbopack omits opts.from when invoking PostCSS. Without it,
// @tailwindcss/postcss resolves `tailwindcss` starting from the project's
// parent directory (process.cwd()'s dirname), where node_modules doesn't
// exist. This plugin sets opts.from so the resolver starts inside the project.
const fixFrom = {
  postcssPlugin: 'fix-postcss-from',
  Once(root, { result }) {
    if (!result.opts.from) {
      result.opts.from =
        root.source?.input?.file ?? path.join(__dirname, 'src/app/globals.css')
    }
  },
}
fixFrom.postcss = true

export default {
  plugins: [fixFrom, tailwindcss()],
}
