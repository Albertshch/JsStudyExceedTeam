const arr = ['every., -/ hunter #! wishes ;: {} to $ % ^ & * know'];

const newArr = [];


arr.forEach(person => {
newArr.push(person.replace(/[^\w\s]|_/g, ""));
});
console.log(newArr);


// const res = arr.forEach((elem, index, array) => {
//     console.log(elem, index, array);
// });

