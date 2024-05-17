//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  return operation(array.filter((score) => score > 70));
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
function standard(count) {
  if (count.length >= 5) {
    return "ผ่านเกณฑ์ ✅";
  } else {
    return "ไม่ผ่านเกณฑ์ ❌";
  }
}

let scoreRoom1Result = `นักเรียนห้องที่ 1 ${atLeastFive(
  studentScoresRoom1,
  standard
)}`;
let scoreRoom2Result = `นักเรียนห้องที่ 2 ${atLeastFive(
  studentScoresRoom2,
  standard
)}`;
let scoreRoom3Result = `นักเรียนห้องที่ 3 ${atLeastFive(
  studentScoresRoom3,
  standard
)}`;

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
