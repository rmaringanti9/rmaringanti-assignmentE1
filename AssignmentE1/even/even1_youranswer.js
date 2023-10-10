// Copy from your exam paper as is (EVEN number seats)
const days = ["Sun","Mon","Tue","Thu"];
let btn = document.getElementByTagName("input");
let day = "Fri";
btn.onclick = showDays;
function showDays(){
days.appendChild(day);
const divs = document.getElementByTagName("div");
for each(divs){
let i=0;
while (i<days.length){
divs.textContext = days[i];
break;
}
i++;
}
}