import React from "react";

function Geuss({SecretNum,term}){

    let Result;

 if(term){
    if(term > SecretNum){
        Result = 'Higher';
        
    }else if(term < SecretNum){
        Result ='Lower';
    }else if(term == SecretNum){
        Result ='Yippee! Correct';
    } else {
        Result ='Enter the valid Input!'
    }
}

return<h3>Your Guess: {Result}</h3>
}

export default Geuss;