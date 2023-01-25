import {BaseSolution} from '../solutions/base'
import {aocSolutions} from './solution-map'

export default (name: string, params: {flags: Record<string, any>, args: Record<string, any>}): BaseSolution => {
  const Maker = aocSolutions.get(name)

  if (Maker) {
    return new (Maker)(params.args, params.flags)
  }

  throw new Error(`Could not find class {Day${params.args?.day}}.\nIs file: 'day${params.args?.day}.ts' imported & mapped in 'src/service/solution-map.ts? '`)
}
