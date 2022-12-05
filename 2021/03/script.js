function isValid(letter) {
  if (
    letter.indexOf("{") !== -1 ||
    letter.indexOf("[") !== -1 ||
    letter.indexOf("(") === -1 ||
    letter.indexOf(")") === -1 ||
    letter.indexOf("()") !== -1 ||
    letter.indexOf("(") > letter.indexOf(")")
  ) return false;

  return true;
}

let letter = "bici coche (balón) bici coche peluche"; // -> ✅
("(muñeca) consola bici"); // ✅

("bici coche (balón bici coche"); // -> ❌
("peluche (bici [coche) bici coche balón"); // -> ❌
("(peluche {) bici"); // -> ❌
letter = ("() bici"); // ❌

console.log(isValid(letter));
