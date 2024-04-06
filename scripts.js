const  hiddenPara =document.querySelector('.hidden');
const btn = document.querySelector('button');

btn.addEventListener('click',()=> {
  hiddenPara.setAttribute('class','show');
})
