const sisi = document.getElementById('sisi')

const hitung = document.getElementById('hitung')

const output = document.getElementById('output')

hitung.addEventListener('click', function() {
    let s = sisi.value 
    let l = s*s
    let k = 4*s
    output.innerHTML = `Luas adalah ${s} x ${s} = ${l} dan
    Keliling adalah 4 x ${s} = ${k}`
})
