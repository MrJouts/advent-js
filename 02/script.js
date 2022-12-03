function countHours(year, holidays) {
  let count = 0
  holidays.forEach(dayAndMonth => {
    let day = new Date(dayAndMonth+"/"+year).getDay()
    if (day != 0 && day != 6) {
      count+= 2
    }
  })
  return count
}

const year = 2023
const holidays = ['01/06', '04/01', '12/25']
 
console.log(countHours(year, holidays))