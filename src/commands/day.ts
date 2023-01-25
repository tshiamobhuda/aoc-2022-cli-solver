import {Args, Command, Flags, ux} from '@oclif/core'
import factory from '../service/factory'

enum Part {
  A = 'a',
  B = 'b'
}

export default class Day extends Command {
  static description = 'Solves advent of code puzzles'

  static examples = [
    '<%= config.bin %> <%= command.id %> 1 a',
  ]

  static flags = {
    test: Flags.boolean({
      char: 't',
      default: false,
    }),
  }

  static args = {
    day: Args.integer({
      required: true,
      description: 'A number between 1 and 25 specifying which puzzle of the day for Advent of code you want solved',
      min: 1,
      max: 25,
    }),
    part: Args.string({
      required: true,
      description: 'A character either a or b specifying which part of the Advent of code puzzle you want solved',
      options: ['a', 'b'],
    }),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Day)
    let result

    // this.log(`running day command with args: [${args.day} | ${args.part}]`)
    // this.log(`--test [-t] is set to: [${flags.test}]`)

    ux.action.start('starting a process', 'initializing', {stdout: true})

    const solution = factory(args.day.toString(), {args, flags})

    if (args.part === Part.A && solution) {
      result = await solution.partA()
    }

    if (args.part === Part.B && solution) {
      result = await solution.partB()
    }

    ux.action.stop()

    this.log(`solution to AOC Day ${args.day} part ${args.part} is:`)
    this.log(result)
  }
}
