let inp = document.querySelector('#min')
let btn = document.querySelector('button')
let ans = document.querySelector('#secs')

btn.addEventListener('click',()=>{
    ans.value = eval(`${inp.value}*${60}`)
})