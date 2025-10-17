const textBox=document.getElementById("textBox");
const far=document.getElementById("far");
const cel=document.getElementById("cel");
const result=document.getElementById("result");
const b1=document.getElementById("b1");

let temp;
b1.onclick=function(){
    if(far.checked){
        temp=Number(textBox.value);
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(2)+"°F";

    }
    else if(cel.checked)
    {
        temp=Number(textBox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(2)+"°C";
    }
    else{
        result.textContent="Select Please!";
    }
}