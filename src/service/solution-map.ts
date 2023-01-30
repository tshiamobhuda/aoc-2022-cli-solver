import {BaseSolution} from '../solutions/base'
import {Day1} from '../solutions/day1'
import {Day2} from '../solutions/day2'
import {Day3} from '../solutions/day3'
import {Day4} from '../solutions/day4'

export const aocSolutions = new Map <string, typeof BaseSolution>([
  ['1', Day1],
  ['2', Day2],
  ['3', Day3],
  ['4', Day4],
])
