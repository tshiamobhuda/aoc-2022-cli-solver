import {BaseSolution} from './base'

export class Day4 extends BaseSolution {
  public partA(): Promise<string | number> {
    let total = 0
    const pairs = this.getTestInputAsArray()

    for (const pair of pairs) {
      const assignments = pair.split(',')
      const elf1 = assignments[0].split('-').map((value: string) => Number.parseInt(value, 10))
      const elf2 = assignments[1].split('-').map((value: string) => Number.parseInt(value, 10))

      const elf1Sections = this.range(elf1[0], elf1[1])
      const elf2Sections = this.range(elf2[0], elf2[1])

      const {smallSet, largeSet} = this.compare(elf1Sections, elf2Sections)

      if (largeSet[0] < smallSet[0] && largeSet[largeSet.length - 1] >= smallSet[smallSet.length - 1]) {
        total += 1
      }
    }

    return Promise.resolve(total)
  }

  public partB(): Promise<string | number> {
    let total = 0
    const pairs = this.getTestInputAsArray()

    for (const pair of pairs) {
      const {elf1Sections, elf2Sections} = this.buildSections(pair)
      const intersection = elf1Sections.find((value: number) => elf2Sections.includes(value))

      if (intersection) {
        total += 1
      }
    }

    return Promise.resolve(total)
  }

  private range(start: number, stop: number, step = 1): Array<number> {
    return Array.from(
      {length: ((stop - start) / step) + 1},
      (value, index) => start + index,
    )
  }

  private compare(arr1: Array<number>, arr2: Array<number>) {
    if (Math.max(arr1.length, arr2.length) === arr1.length) {
      return {smallSet: arr2, largeSet: arr1}
    }

    return {smallSet: arr1, largeSet: arr2}
  }

  private buildSections(pair: string) {
    const assignments = pair.split(',')
    const elf1 = assignments[0].split('-').map((value: string) => Number.parseInt(value, 10))
    const elf2 = assignments[1].split('-').map((value: string) => Number.parseInt(value, 10))

    const elf1Sections = this.range(elf1[0], elf1[1])
    const elf2Sections = this.range(elf2[0], elf2[1])

    return {elf1Sections, elf2Sections}
  }
}
