import test from 'tape';

import { WORK, CARRY, MOVE } from '../test-helpers'
import { MININGCORP, CREEPCORP } from '../../util/constants';

import requestCreep from '../../corp/creep/request-creep'


let data = {
  CREEPCORP: {
    orders: [
      {
        id: 325436,
        customer: MININGCORP,
        tick: 23124132432,
        body: [WORK,CARRY,MOVE,MOVE],
        done: false
      }
    ]
  }
};

let params = {
  customer: MININGCORP,
  tick: 3214432534,
  body: [WORK,CARRY,MOVE,MOVE,MOVE]
}

test('That creep-corp receive order function', assert => {
  let testData = data
  let testParams = params

  let newTestData = requestCreep(testData, params)

  const actual = testData.CREEPCORP.orders.length + 1

  const expected = newTestData

  assert.equal(actual, expected,
    'its should add a new order to its order queue.');
  assert.end();
});
