var test = require('tape')
var sign = require('./index.js')
test('can', function (t) {
  var secret = '123'
  var v = sign('a', secret)
  t.equals(v, 'sha256=69e99e82127c1f146f50653e02b92c4bb0c3bc182a6165a5bbce5f4f94e1ccb7', 'should generate correct sigs')
  v = sign('a', '')
  t.equals(v, '', 'no secret = empty sig')

  t.end()
})
