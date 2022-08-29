const directions = [
  'Starting point: Ironhack Madrid',
  '➔ Turn right toward P. de la Chopera',
  '← At the roundabout, take the 1st exit onto P. de la Chopera',
  '* Lune Creperie P. de la Chopera 33, Madrid'
];


function obtainDirections(step) {
  return new Promise (function (resolve, reject) {
    setTimeout(() => {
      console.log( directions[step] );

      if (!directions[step]) reject('Instructions not found.')
      else resolve(step);
    }, 2000); 
    
  })
}


obtainDirections(0)
.then((step) => { console.log(step); return obtainDirections(step + 1)} )
.then((step) => { console.log(step); return obtainDirections(step + 1)} )
.then((step) => { console.log(step); return obtainDirections(step + 1)} )
  .then(() => console.log('You arrived at your destination!') )
  .catch((err) => console.log(err));