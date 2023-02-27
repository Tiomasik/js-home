// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log(inAscendingScoreOrder)

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// console.log(inDescendingScoreOrder)

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// console.log(inAlphabeticalOrder)

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308
const numbers = [5, 10, 15, 20, 25];
 
// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Індекс ${i}, значення ${numbers[i]}`);
}

// Метод перебирання forEach
numbers.forEach((number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
});