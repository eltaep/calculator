let input=document.querySelector('input');
let allbuttons=document.querySelectorAll('p');
let done=true;


allbuttons.forEach((btn,index)=>{
  btn.addEventListener('click',()=>{
    if(done==false){
      input.value=''
      done=true;

    }
    input.value+=btn.innerHTML;

  })

})
let result=document.querySelector('.resulto');
result.onclick=()=>{
  input.value=eval(input.value)
  done=false;



}
document.querySelector('.clear').onclick=(function(){
  input.value=''
})