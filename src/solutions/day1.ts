import {BaseSolution} from './base'

export class Day1 extends BaseSolution {
  public async partA(): Promise<string|number> {
    return Promise.resolve(Math.max(...this.calculateAllEflTotalCalories()))
  }

  public partB(): Promise<string | number> {
    const total = this
    .calculateAllEflTotalCalories()
    .sort((a, b) => b - a)

    return Promise.resolve(total[0] + total[1] + total[2])
  }

  private calculateAllEflTotalCalories(): Array<number> {
    const allElfCalories = this.testInput.split('\n\n')
    const allElfTotalCalories: Array<number> = []

    for (const elfCalories of allElfCalories) {
      const calories = elfCalories.split('\n').map((v: string) => Number(v)).reduce((p: number, c: number) => p + c)
      allElfTotalCalories.push(calories)
    }

    return allElfTotalCalories
  }
}
