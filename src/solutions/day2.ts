import {BaseSolution} from './base'

export class Day2 extends BaseSolution {
  public partA(): Promise<string | number> {
    const points: Record<string, number> = {
      'A X': 4,
      'A Y': 8,
      'A Z': 3,
      'B X': 1,
      'B Y': 5,
      'B Z': 9,
      'C X': 7,
      'C Y': 2,
      'C Z': 6,
    }

    return Promise.resolve(this.determineScore(points))
  }

  public partB(): Promise<string | number> {
    const points: Record<string, number> = {
      'A X': 3,
      'A Y': 4,
      'A Z': 8,
      'B X': 1,
      'B Y': 5,
      'B Z': 9,
      'C X': 2,
      'C Y': 6,
      'C Z': 7,
    }

    return Promise.resolve(this.determineScore(points))
  }

  private determineScore(pointSystem: Record<string, number>): number {
    let score = 0
    const tournament = this
    .testInput
    .split('\n')
    .filter((v: string) => v.length > 0)

    for (const round of tournament) {
      score += pointSystem[round]
    }

    return score
  }
}
