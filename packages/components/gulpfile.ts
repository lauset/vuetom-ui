import path from 'path'
import { src, dest, series, parallel } from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'

const distFolder = path.resolve(__dirname, '/dist/theme')
const sassFolder = path.resolve(__dirname, 'theme/*.scss')
const themeFolder = path.resolve(__dirname, 'theme/**')

function buildThemeChalk() {
  const sass = gulpSass(dartSass)
  const noElPrefixFile = /(index|base)/
  return src(sassFolder)
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(dest(distFolder))
}

export function copyThemeChalkSource() {
  return src(themeFolder).pipe(
    dest(distFolder)
  )
}

export const build = parallel(
  // copyThemeChalkSource,
  series(buildThemeChalk)
)

export default build
