/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


 function waitOneSecond () {
    return new Promise((resolve, reject) => {
        let start = Date.now()
        setTimeout(() => {
            resolve(start);
        }, 1000);
    })
}

function waitTwoSecond () {
    return new Promise((resolve, reject) => {
        let start = Date.now()
        setTimeout(() => {
            resolve(start);
        }, 2000);
    })
}

function waitThreeSecond () { 
    let start = Date.now();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(start);
        }, 3000);
    })
    
}
function calculateTime() {
        
         Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()]).then((value) => console.log(`${Math.floor(Date.now()/1000 - value[0]/1000)} seconds`));

}


calculateTime();


