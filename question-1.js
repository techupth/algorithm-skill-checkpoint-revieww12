function findStudentById(students, id) {
  // Your code here
  let index = null;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      index = students[i];
    }
  }
  return index;
}

// Test case
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

console.log(findStudentById(students, 2)); // Output: { id: 2, name: 'Bob' }
console.log(findStudentById(students, 4)); // Output: null
// ถ้าค่า argument id ตรงกับค่า name อันไหน ก็จะดึงค่านั้นออกมา ถ้าไม่ตรงก็จะส่งค่า null ออกมา
