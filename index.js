var crypto = require('crypto')
module.exports = sign

function sign (payload, secret) {
  if(!Buffer.isBuffer(payload)) payload = new Buffer(payload)
  if (!secret) return ''
  return 'sha256=' + crypto.createHmac('sha256', secret)
    .update(payload)
    .digest('hex')
}
