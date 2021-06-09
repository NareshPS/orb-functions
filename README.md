# orb-functions
*orb-functions* exposes a few useful functions to make programming using map, reduce, filter and other similar constructs less verbose.

# Installation
Browser Installation. The module is exported as *orbfns* global variable.

```html
<script src="https://cdn.jsdelivr.net/npm/orb-functions@1.0.0/dist/index.js"></script>
```

Node Installation
```js
npm install orb-functions
```

### self
It returns the first input argument it is called with.

```js
// Example
const input = [1, 2, 3]
const toObject = ({items, key: kfn = self, value: vfn = self}) =>
  items.reduce((c /** container */, v) => (c[kfn(v)] = vfn(v), c), {})

toObject({items: input})
// Output {1:1, 2:2, 3:3}

toObject({items: input, value: Math.square})
// Output {1:1, 2:4, 3:6}
```

### constant
It is useful in the situations which require a function to return a fixed value.

```js
// Example
const input = 'suhm'
const cfn = constant(input)
cfn()
// Output 'suhm'
```
