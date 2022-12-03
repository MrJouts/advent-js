function wrapping(gifts) {
  return gifts.map(gift => {
    let wrapper = "*".repeat(gift.length + 2)
    return `${wrapper}\n*${gift}*\n${wrapper}`
  })
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)