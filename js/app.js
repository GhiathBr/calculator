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
            t="";
            console.log(f);
            document.getElementById("top").value="";
            document.getElementById("res").value="";
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
                f=f.slice(0,-1);
                f=Number(f);
                f=f/100;
                document.getElementById("top").value=f;
                document.getElementById("res").value="";
          

                break;
            }
            console.log(f);
            return f;
       
    }

}
function op(x){
 
t=document.getElementById("top").value;
switch(x){


case "+":
    
    f=f+"+"
    document.getElementById("top").value=t+f;
    document.getElementById("res").value="";
    
    console.log("f=",f); 
    break;
    
case("x"):

f=f+"x"
document.getElementById("top").value=t+f;
document.getElementById("res").value="";

    console.log("f=",f); 
break;


case "-":
    
    f=f+"-"
    document.getElementById("top").value=t+f;
    document.getElementById("res").value="";
   
    console.log("f=",f); 
    break;
  
    
 

    case "/":
    
    f=f+"/";
    document.getElementById("top").value=t+f;
    document.getElementById("res").value="";
    
    console.log("f=",f); 
    break;
    
    case "=":
       t=t+numbers(x);
       t=t.slice(0,-1);
     document.getElementById("top").value=t;
     document.getElementById("res").value=""
     console.log("t after slicing the =",t);
     p = t.search(/[+\-x/]/);
     r=t.substring(0,p);
     r=Number(r);
     o=t[p];
     b=t.substring(p+1);
     b=Number(b);

     console.log(p) ;
     console.log(r) ;
     console.log(o) ;
     console.log(b) ;
     switch(o){
        case("x"):
        document.getElementById("top").value=r*b;
        break;
        case("+"):
        document.getElementById("top").value=r+b;
        break;
        case("-"):
        document.getElementById("top").value=r-b;
        break;
        case("/"):
        document.getElementById("top").value=r/b;
        break
        
        
        }
     break;
}


f="";
console.log("f=",f); 
}