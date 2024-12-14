let guessNumEl=document.getElementById("inputNum");
let errorEl=document.getElementById("Errormsg");

let  randomNum ;
let count=0;

function GeneraterandomNum(){
    randomNum = Math.ceil(Math.random()*10);
}
GeneraterandomNum();
console.log(randomNum);


function guessNum(){
      count=count+1;
    let guess = parseInt(guessNumEl.value);

    if( guess > randomNum ){
        
        errorEl.textContent="VALUE IS TOO HIGH !!!";
        errorEl.style.color="red";
        
    }
    else if( guess<randomNum ){
        errorEl.textContent="VALUE IS TOO LOW !!!"
        errorEl.style.color="red";
    }
    else{
        errorEl.textContent="HURRAY!!! YOU WON..IN "+count+" ATTEMPT..";
        
        // errorEl.textContent= count+"in attempt";
        errorEl.style.color="green";
       
    }


}

function reset(){

    GeneraterandomNum();
    console.log(randomNum);
    errorEl.textContent="";
    guessNumEl.textContent="";

}







// anather part of set time out and  interval or timmer avoid this......
// let responce = "sucess"
// let count=0;

// let resetId= setInterval(()=>{

//     // alert("Session time out");

//     // for show continues counting
//     count= count+1;
//     console.log(count)
// },1000);

// function reset(){
//       if (responce==="sucess"){
//         clearInterval(resetId);
//       }
    
// }