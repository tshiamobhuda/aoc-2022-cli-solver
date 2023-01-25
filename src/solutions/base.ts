export class BaseSolution {
  protected args: Record<string, any>
  protected flags: Record<string, any>

  constructor(args: Record<string, any>, flags: Record<string, any>) {
    this.flags = flags
    this.args = args
  }

  public async partA(): Promise<string> {
    return Promise.reject(new Error('PartA not implemented.'))
  }

  public async partB(): Promise<string> {
    return Promise.reject(new Error('PartB not implemented.'))
  }
}
