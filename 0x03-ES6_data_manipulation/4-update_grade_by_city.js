export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const newGradeObj = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
    if (newGradeObj) {
      return { ...student, grade: newGradeObj.grade };
    }
    return { ...student, grade: 'N/A' };
  });
}
