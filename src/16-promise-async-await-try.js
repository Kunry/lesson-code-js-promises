'use strict';

const asyncFunctionError = async () => {
  try {
    const pr1 = await new Promise((resolve, reject) => {
      throw new Error('Rejected by throwing an Error!');
    });
    console.log(pr1);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("FIN");
  }
};

asyncFunctionError();
