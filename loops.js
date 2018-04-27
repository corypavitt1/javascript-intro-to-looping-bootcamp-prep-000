function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am 1 strange loop.`)
    } else {array.push(`I am ${i} strange loops.`)}
  }

return array
}

function whileLoop(n) {
  while ( n > 0) {
    console.log(`${n}`)
    n--
  }
  return ('done')
}

function maybeTrue(n) {
  if (array.length > 0) {
    n--
  }
}

do {
  array.pop();
} while (maybeTrue());
