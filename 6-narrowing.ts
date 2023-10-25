// Example 1
const displayLength = (object: string | number) => {
  // return object.length -> Error
  if (typeof object === 'string') {
    return object.length
  }

  return object.toString().length // In this point, TS knows object is a number.
}

displayLength('1')
