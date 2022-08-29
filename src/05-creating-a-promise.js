"use strict";

const myPromise = new Promise(function (resolve, reject) {
   // if (true) {  /* condition */
      resolve(1234);  // fulfilled successfully
   // }
   // else {
      // reject("ERROR");  // error, rejected
   // }
})
.then((text) => console.log(text))
.catch((err) => {console.log(err)})
.finally(() => {
   console.log("FIN");
})
;
