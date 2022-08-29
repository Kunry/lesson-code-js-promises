"use strict";

// The `callback` parameter represents a function

function func1(callback) {
  console.log("Hi");

  callback();
}

function func2() {
  console.log("Goodbye!");
}

func1( func2 );
const array = [2,3];

const mapFunction = (e, _index, _array) => {
  console.log(e);
}
array.map( (e, _index, _array) => {
  console.log(e);
})