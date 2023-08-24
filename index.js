function add(){ 
window.num=Math.ceil(Math.random() *9)
window.num1=Math.ceil(Math.random() *9)
document.getElementById('two').innerHTML=`The Sum of ${window.num} and ${window.num1} is =`
document.getElementById('three').innerHTML=""
document.getElementById('four').innerHTML=""
}

function sub() {
    let text=document.getElementById('one')
    let number=text.value
    answer=document.getElementById('three').innerHTML=number

    ans=window.num+window.num1

    whencorrect=`WELL DONE`
    whenwrong=`NOT REALLY. The Correct Answer is ${ans}`


    work=""


    if (answer==ans) {
        work=whencorrect
    } else {
        work=whenwrong
    }
    document.getElementById('four').innerHTML=work
}
function mut(){ 
window.num2=Math.ceil(Math.random() *9)
window.num3=Math.ceil(Math.random() *9)
document.getElementById('six').innerHTML=`The Product of ${window.num2} and ${window.num3} is =`
document.getElementById('seven').innerHTML=""
document.getElementById('eight').innerHTML=""
}
    
function sud() {
    let text=document.getElementById('five')
    let number=text.value
    answer=document.getElementById('seven').innerHTML=number
    
     ans=window.num2*window.num3
    
     whencorrect=`WELL DONE`
     whenwrong=`NOT REALLY. The Correct Answer is ${ans}`
    
    
     work=""
    
    
     if (answer==ans) {
    work=whencorrect
} else {
    work=whenwrong
}
document.getElementById('eight').innerHTML=work
}


function trac(){ 
window.num4=Math.ceil(Math.random() *9)
window.num5=Math.ceil(Math.random() *9)
document.getElementById('ten').innerHTML=`IF You Minus this ${window.num4} From  ${window.num5} is =`
document.getElementById('eleven').innerHTML=""
document.getElementById('twelve').innerHTML=""
}
        
function tion(){
    let text=document.getElementById('nine')
    let number=text.value
    answer=document.getElementById('eleven').innerHTML=number
        
    ans=window.num4-window.num5
        
    whencorrect=`WELL DONE`
    whenwrong=`NOT REALLY. The Correct Answer is ${ans}`
        
        
    work=""
        
        
    if (answer==ans) {
      work=whencorrect
    } else {
      work=whenwrong
    }
     document.getElementById('twelve').innerHTML=work
 } 
 function div(){ 
    window.num6=Math.ceil(Math.random() *9)
    window.num7=Math.ceil(Math.random() *9)
    document.getElementById('fourteen').innerHTML=`If you  Divide ${window.num6} With ${window.num7} is =`
    document.getElementById('fifteen').innerHTML=""
    document.getElementById('sixteen').innerHTML=""
    }
    
    function sion(){
        let text=document.getElementById('thirteen')
        let number=text.value
        answer=document.getElementById('fifteen').innerHTML=number
    
        ans=window.num6/window.num7
    
        whencorrect=`WELL DONE`
        whenwrong=`NOT REALLY. The Correct Answer is ${ans}`
    
    
        work=""
    
    
        if (answer==ans) {
            work=whencorrect
        } else {
            work=whenwrong
        }
        document.getElementById('sixteen').innerHTML=work
    }
    
 
    