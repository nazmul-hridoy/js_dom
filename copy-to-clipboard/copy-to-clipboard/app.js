const input = document.querySelector('#input');
const btn = document.getElementById('btn');
let random = Math.floor(Math.random() * 100000);
//  btn.onclick = function(){
//     input.select();
//     document.execCommand('copy');

//      alert('Copied!!!')
// }

function copyText(){
    document.getElementById('input').select();
    document.execCommand('copy');

     alert('Copied!!!')
}
console.log(random);