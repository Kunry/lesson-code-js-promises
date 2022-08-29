"use strict";

const asyncFunction = async () => {
  const pr1 = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ironhack');
    }, 2000);
  });

  console.log(pr1);
}

asyncFunction();


