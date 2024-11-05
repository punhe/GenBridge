export const detailedGrades = {
  Toán: [
    { category: 'Bài tập 1', score: 8.0 },
    { category: 'Bài tập 2', score: 8.5 },
    { category: 'Giữa kỳ', score: 8.0 },
    { category: 'Cuối kỳ', score: 8.5 },
  ],
  'Tiếng Việt': [
    { category: 'Bài tập 1', score: 7.0 },
    { category: 'Bài tập 2', score: 8.0 },
    { category: 'Giữa kỳ', score: 7.5 },
    { category: 'Cuối kỳ', score: 8.0 },
  ],
  'Tiếng Anh': [
    { category: 'Bài tập 1', score: 8.0 },
    { category: 'Bài tập 2', score: 8.0 },
    { category: 'Giữa kỳ', score: 8.0 },
    { category: 'Cuối kỳ', score: 8.0 },
  ],
  'Đạo đức': [
    { category: 'Bài tập 1', score: 9.0 },
    { category: 'Bài tập 2', score: 9.5 },
    { category: 'Giữa kỳ', score: 9.0 },
    { category: 'Cuối kỳ', score: 9.0 },
  ],
  'Tự nhiên và Xã hội': [
    { category: 'Bài tập 1', score: 7.0 },
    { category: 'Bài tập 2', score: 7.5 },
    { category: 'Giữa kỳ', score: 7.0 },
    { category: 'Cuối kỳ', score: 7.5 },
  ],
  'Giáo dục thể chất': [
    { category: 'Bài tập 1', score: 9.5 },
    { category: 'Bài tập 2', score: 9.0 },
    { category: 'Giữa kỳ', score: 9.0 },
    { category: 'Cuối kỳ', score: 9.0 },
  ],
};

const calculateSemesterAverage = (grades) => {
  const totalScore = grades.reduce((sum, item) => sum + item.score, 0);
  return (totalScore / grades.length).toFixed(2);
};

export const gradeData = Object.keys(detailedGrades).map((subject) => {
  const hk1Grades = detailedGrades[subject].slice(0, 2); // First two entries for HK1
  const hk2Grades = detailedGrades[subject].slice(2); // Last two entries for HK2
  const averageHK1 = calculateSemesterAverage(hk1Grades);
  const averageHK2 = calculateSemesterAverage(hk2Grades);

  return {
    subject,
    HK1: averageHK1,
    HK2: averageHK2,
  };
});