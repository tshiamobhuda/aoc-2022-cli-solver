import {BaseSolution} from './base'

const alphaArray = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ']

export class Day3 extends BaseSolution {
  public partA(): Promise<string | number> {
    let total = 0
    const rucksacks = this.getTestInputAsArray()

    for (const contents of rucksacks) {
      const contentsArr = [...contents]

      const halfA = contentsArr.slice(0, (contentsArr.length / 2))
      // eslint-disable-next-line unicorn/prefer-set-has
      const halfB = contentsArr.slice(contentsArr.length / 2)

      const intersection = halfA.find(x => halfB.includes(x))

      if (intersection === undefined) {
        return Promise.reject(new Error('Could not find item that appears in both compartments'))
      }

      total += this.getItemPriority(intersection)
    }

    return Promise.resolve(total)
  }

  public partB(): Promise<string | number> {
    let total = 0
    let groupIndex = 0
    const rucksacks = this.getTestInputAsArray()

    while (groupIndex <= (rucksacks.length - 3)) {
      for (const item of alphaArray) {
        const group1 = [...rucksacks[groupIndex]]
        const group2 = [...rucksacks[groupIndex + 1]]
        const group3 = [...rucksacks[groupIndex + 2]]

        if (group1.includes(item) && group2.includes(item) && group3.includes(item)) {
          total += this.getItemPriority(item)
        }
      }

      groupIndex += 3
    }

    return Promise.resolve(total)
  }

  private getItemPriority(item: string): number {
    return alphaArray.indexOf(item) + 1
  }
}
