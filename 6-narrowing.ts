// Example 1
const displayLength = (object: string | number) => {
  // return object.length -> Error
  if (typeof object === 'string') {
    return object.length
  }

  return object.toString().length // In this point, TS knows object is a number.
}

displayLength('1')



// Example 2
interface Mario {
  company: 'Nintendo',
  name: string,
  jump: () => void
}

interface Sonic {
  company: 'Sega',
  name: string,
  run: () => void
}

type Character = Mario | Sonic

function play(character: Character) {

  if (character.company === 'Nintendo') {
    character.jump()
    return
  }
  //in this point the character only can be Sonic
  character.run()


}