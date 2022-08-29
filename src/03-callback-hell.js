"use strict";

const directions = [
  'Starting point: Ironhack Miami',
  '↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue',
  '➔ Turn right onto S Miami Ave',
  '* Chipotle Mexican Grill 891 S Miami Ave, Miami'
];


function getDirections(step, callback, errorCallback, time) {
  setTimeout(() => {
    console.log( directions[step] );
    
    if (!directions[step]) errorCallback('Instructions not found.');
    else callback();
  }, 1000); 
  
}
// getDirections(0, () => {}, () => {}, 1000);
// getDirections(1, () => {}, () => {}, 3000);
// getDirections(2,  () => {},() => {},  2000);
// getDirections(3,  () => {},() => {},  1000);
// Single callback
// getDirections(0, ()=> {
//   getDirections(1, () => {}, () => {}, 3000);
// }, () => {}, 4000);


// Callbacks in sequence
getDirections(0, () => {
  getDirections(1, () => {
    getDirections(2, () => {
      getDirections(4, () => {
        
        console.log('You arrived at your destination!');
        // getDirections(4, () => {}, (err) => console.log(err) ) ;

  	  }, (err) => console.log(err));
    }, (err) => console.log(err));
  }, (err) => console.log(err));
}, (err) => console.log(err));