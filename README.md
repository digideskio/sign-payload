# sign-payload
sha256 sign payload with secret. used in npm webhooks.

```js
var sign = require('sign-payload')

var data = 'hi'


var sig = sign(data,'a secret!')
console.log(sig)

```

logs:

```
sha256=cef37d39f0b2eca340e889baa7bb9f7c81d34c0f122c61ba23912b5bac601403
```
