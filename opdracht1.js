
//opdracht a

const tvType = inventory.map((invName) => {
    return invName.name;
})
console.log(tvType);




//opdracht b

const soldTvss = inventory.filter((soldTV) => {
    return soldTV.originalStock - soldTV.sold === 0;
})

console.log(soldTvss);



//opdracht c

const ambilightTvs = inventory.filter((ambilightTv) =>{
    return ambilightTv.options.ambiLight === true;
})

console.log(ambilightTvs);



//opdracht d
function sortArray(banaan) {
    return banaan.sort((a, b) =>
    {
        if (a.price - b.price > 0) {
            return 1
        } else if (a.price - b.price < 0) {
            return  -1
        } else {
            return 0
        }
    })
}

console.log(sortArray(inventory));


// korte versie
// function sortArraysShort(tvs) {
//     return tvs.sort((a, b) => a.price -b.price)
// }
//
// console.log(sortArraysShort(inventory));

//inventory.sort((a, b) =>{
  //  return a.price - b.price;
//})

//console.log(inventory)