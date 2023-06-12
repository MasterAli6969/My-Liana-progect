function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return names[0] + "likes this";
  } else if (names.length === 2) {
    return names[0] + "," + names[1] + " like this";
  } else if (names.length === 3) {
    return names[0] + "," + names[1] + "," + names[2] + " like this";
  } else if (names.length === 4) {
    return names[0] + "," + names[1] + " and 2 others like this";
  }
}

function problem(x) {
  if (typeof x === "number") {
    return x * 50 + 6;
  } else if (typeof x === "string") {
    return "Error";
  }
}

function getCharacters(obj, key, val) {
  var foundCharacters = [];
  for (let i = 0; i < obj.characters.length; i++) {
    const character = obj.characters[i];

    if (
      character.hasOwnProperty(key) &&
      character[key].toString().toLowerCase() === val.toString().toLowerCase()
    ) {
      foundCharacters.push(character);
    }
  }
  return foundCharacters;
}

function sameCase(a, b) {
  if (typeof a != "string" || typeof b != "string") {
    return -1;
  } else if (a.toUpperCase() == b.toUpperCase()) {
    return 1;
  } else if (typeof a || typeof b != "string" || a.toUpperCase() != b.toUpperCase()) {
    return 0
  }
}
