import {expect, test} from '@oclif/test'

describe('day', () => {
  test
  .stdout()
  .command(['day', '1', 'a'])
  .it('runs day 1 a', ctx => {
    expect(ctx.stdout).to.contain('solution')
  })

  test
  .stderr()
  .command(['day', '25', 'b'])
  .catch(error => expect(error.message).to.contain('Could not find class'))
  .it('It requires existing solution file')
})
