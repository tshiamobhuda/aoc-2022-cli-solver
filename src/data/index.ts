/* eslint-disable unicorn/prefer-module */
import {readFileSync} from 'node:fs'
import {join} from 'node:path'

export const getTestPuzzleInput = (day: number): string => {
  return readFileSync(join(__dirname, `day${day}`), {encoding: 'utf8'})
}
