import {BaseSolution} from '../solutions/base'
import {Day1} from '../solutions/day1'
import {Day2} from '../solutions/day2'
import {Day3} from '../solutions/day3'

export const aocSolutions = new Map <string, typeof BaseSolution>([
  ['1', Day1],
  ['2', Day2],
  ['3', Day3],
])
