function checkPart(part) {
    if (part === part.split("").reverse().join("")) {
        return true;
    } else {
        for (let i in part) {
            let newPart = part.substring(0, i) + part.substring(+i + 1);
            if (newPart === newPart.split("").reverse().join("")) return true;
        }
    }

    return false;
}

console.log(checkPart("uwu")); // true
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log(checkPart("miidim")); // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log(checkPart("midu")); // false
// "midu" no puede ser un palíndromo después de eliminar un carácter
