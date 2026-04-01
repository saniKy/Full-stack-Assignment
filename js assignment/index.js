const students = [
  { name: "Aman", marks: 78, subject: "Math" },
  { name: "Riya", marks: 45, subject: "Science" },
  { name: "Karan", marks: 88, subject: "Math" },
  { name: "Neha", marks: 34, subject: "English" },
  { name: "Arjun", marks: 92, subject: "Science" },
  { name: "Priya", marks: 67, subject: "English" },
  { name: "Rahul", marks: 51, subject: "Math" },
  { name: "Simran", marks: 29, subject: "Science" },
  { name: "Vikas", marks: 74, subject: "English" },
  { name: "Anjali", marks: 81, subject: "Math" }
];

// Pass / Fail
const passStudents = students.filter(s => s.marks >= 40);
const failStudents = students.filter(s => s.marks < 40);

// Average
const average =
  students.reduce((sum, s) => sum + s.marks, 0) / students.length;

// Topper
const topper = students.reduce((top, s) =>
  s.marks > top.marks ? s : top
);

// Group by subject
const grouped = students.reduce((acc, s) => {
  acc[s.subject] = acc[s.subject] || [];
  acc[s.subject].push(s);
  return acc;
}, {});

console.log(passStudents);
console.log(failStudents);
console.log("Average:", average);
console.log("Topper:", topper);
console.log("Grouped:", grouped);