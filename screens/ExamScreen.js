import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExamScreen = () => {
  const exams = [
    {
      id: 1,
      title: "Kiểm tra 15 phút",
      subject: "Toán",
      content: "Phép tính",
      date: "1/10",
    },
    {
      id: 2,
      title: "Thi giữa kì I",
      subject: "Tất cả",
      content: "Từ đầu kì đến giữa kì",
      date: "15/10",
    },
    {
      id: 3,
      title: "Thi cuối học kì I",
      subject: "Tất cả",
      content: "Từ đầu kì đến cuối kì",
      date: "24/12",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bài kiểm tra, kì thi</Text>
      {exams.map((exam) => (
        <View key={exam.id} style={styles.card}>
          <Text style={styles.title}>{exam.title}</Text>
          <Text style={styles.detail}>Môn: {exam.subject}</Text>
          <Text style={styles.detail}>Nội dung: {exam.content}</Text>
          <Text style={styles.detail}>Ngày: {exam.date}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f3f4f6",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ff6347",
    marginBottom: 25,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#34495e",
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    color: "#7f8c8d",
    lineHeight: 22,
  },
});

export default ExamScreen;
