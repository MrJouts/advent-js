function getGiftsToRefill(a1, a2, a3) {
    return Array.from(new Set(
        a1
        .filter((gift) => !a2.includes(gift) && !a3.includes(gift))
        .concat(a2.filter((gift) => !a1.includes(gift) && !a3.includes(gift)))
        .concat(a3.filter((gift) => !a1.includes(gift) && !a2.includes(gift)))
    ));
}

console.log("test");

const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

const gifts = getGiftsToRefill(a1, a2, a3); // ['muñeca', 'pc']

console.log(gifts);
