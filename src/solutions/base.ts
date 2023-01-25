import {getTestPuzzleInput} from './../data/'
export class BaseSolution {
  protected args: Record<string, any>
  protected flags: Record<string, any>
  protected testInput: string

  constructor(args: Record<string, any>, flags: Record<string, any>) {
    this.flags = flags
    this.args = args

    this.testInput = getTestPuzzleInput(args.day)
  }

  public async partA(): Promise<string> {
    return Promise.reject(new Error('PartA not implemented.'))
  }

  public async partB(): Promise<string> {
    return Promise.reject(new Error('PartB not implemented.'))
  }
}
