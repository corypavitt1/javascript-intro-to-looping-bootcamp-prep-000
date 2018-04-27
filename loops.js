function forLoop(array) {
  for (var i = 0; i < array.length; i++) {
    if (i === 1) {
      array[i].push(`I am 1 strange loop.`)
    } else {array.push(`I am ${i} strange loops.`)}
  }

return array
}
