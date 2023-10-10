// Copy from your exam paper as is (EVEN number seats)
let clicker=document.getElementById("compute");
let ans=document.getElementById("sum");
clicker.onclick=funcompute;

function funcompute(){
    let value=clicker.innerHTML.text;
    let nBegin = parseInt(value);
    for(let i=nBegin;i<=1000;i++){
        let sum=0;
        if(i%2!=0){
            sum=sum+i;
        }
    }
    ans.textContent=sum;
}