const map = new Map();

map.set('js','JavaScript')
map.set('py','python')
map.set('java','Java')
map.set('cpp', 'C++')
map.set('cpp', 'C++')

// console.log(map);

for (const [key,value] of map) {
    // console.log(`${key} : ${value}`)
}



const countryName = new Map()

countryName.set('IN', 'India')
countryName.set('BD', 'Bangaladesh')
countryName.set('SL', 'Srilanka')

for (const [key,value] of countryName) {
    console.log(`${key} : ${value}`)
}