// //Iterator example
// function nameIterator(names){
//   let nextIndex = 0;

//   return{
//     next: function(){
//       return nextIndex < names.length ? 
//       {value: names[nextIndex++], done: false} :
//       {done: true}
//     }
//   }
// }

// //create an array of names
// const namesArr = ['Jack', 'Jill', 'John'];

// //init iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// //Generators Example
// function* sayNames(){
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }

// const name = sayNames();
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());

//ID Creator
function* createIds(){
  let index = ['Jack', 'Jill'];
  let count = 0;

  while(true){
    yield index[count++]
  }
}

const gen = createIds();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next())