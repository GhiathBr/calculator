var f = "";
res=document.getElementById("res");
function numbers(x) {
    f = f + x;
    console.log(f);
    document.getElementById("res").value=f;
    return f;
}

function act(a) {
    switch (a) {
        case "ac":
            f = "";
            console.log(f);
            document.getElementById("res").value=f;
            document.getElementById("top")=""
            return f;
        case "pm":
            
            if (f[0]==="-"){
                f=f.substring(1);
                
            }
            else{
                f = "-" + f;
            }
            console.log(f);
            return f;
        case "%":
            if (f[f.length - 1]!=="%"){
                f=f+"%"
                break;
            }
            console.log(f);
            return f;
       
    }

}
function op(x){
 s=Number(f);
t=document.getElementById("top").value;
switch(x){


case "+":
    t=t+s;
    f=f+"+"
    document.getElementById("top").value=f;
    console.log("t=",t); 
    console.log("f=",f); 
    break;
    
case("x"):
t=t*s;
f=f+"x"
document.getElementById("top").value=f;
console.log("t=",t); 
    console.log("f=",f); 
break;


case "-":
    t=t-s;
    f=f+"-"
    document.getElementById("top").value=f;
    console.log("t=",t); 
    console.log("f=",f); 
    break;
  
    
 

    case "/":
    
    f=f+"/"
    document.getElementById("top").value=f;
    console.log("t=",t); 
    console.log("f=",f); 
    break;
    
    case "=":
     k=document.getElementById("top").value=t+numbers(x);
     k=k.slice(0,-1);
     
     
     console.log(t); 
     console.log(k);
     break
}
f="";
document.getElementById("res")="";

console.log("f=",f); 
}