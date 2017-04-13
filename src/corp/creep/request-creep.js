/**
 * return Object with an extra order
 *
 * @param {Object} object
 * @param {Object} params
 * @return {Object}
 */
export default function requestCreep(object, params) {
  let input_object = Object.assign({}, object)
  let input_params = Object.assign({}, params)

  input_params['id'] = getRandomInt(10000,99999)
  input_params['done'] = false

  let orders = input_object.CREEPCORP.orders
  orders.push(input_params)

  let output = input_object

  return JSON.stringify(orders)
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
