import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from "react-native";

// Sample data for students and grades
const students = [
  { id: "1", name: "Nguyễn Văn A" },
  { id: "2", name: "Trần Thị B" },
  { id: "3", name: "Lê Văn C" },
];

const gradeData = [
  { subject: "Toán", HK1: "8.5", HK2: "9.0" },
  { subject: "Văn", HK1: "7.0", HK2: "7.5" },
  { subject: "Anh", HK1: "9.0", HK2: "8.5" },
];

const detailedGrades = {
  "Nguyễn Văn A": {
    Toán: [
      { category: "Kiểm tra 1", score: "8.5" },
      { category: "Thi học kỳ", score: "9.0" },
    ],
    Văn: [
      { category: "Bài luận", score: "7.0" },
      { category: "Thi học kỳ", score: "7.5" },
    ],
  },
  // Additional student grades can be added here
};

const TeacherGradeScreen = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [editingSubject, setEditingSubject] = useState(null);
  const [newScore, setNewScore] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const toggleExpand = (subject) => {
    setExpandedSubject(expandedSubject === subject ? null : subject);
  };

  const addGrade = (subject) => {
    if (!newCategory || !newScore) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    detailedGrades[selectedStudent.name] =
      detailedGrades[selectedStudent.name] || {};
    detailedGrades[selectedStudent.name][subject] =
      detailedGrades[selectedStudent.name][subject] || [];
    detailedGrades[selectedStudent.name][subject].push({
      category: newCategory,
      score: newScore,
    });

    setNewCategory("");
    setNewScore("");
    Alert.alert("Thành công", "Đã thêm điểm mới.");
  };

  if (!selectedStudent) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Chọn học sinh</Text>
        <FlatList
          data={students}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedStudent(item)}
              style={styles.studentItem}
            >
              <Text style={styles.studentName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bảng điểm - {selectedStudent.name}</Text>
      <Button
        title="Chọn học sinh khác"
        onPress={() => setSelectedStudent(null)}
      />
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cellHeader}>Môn</Text>
          <Text style={styles.cellHeader}>HK1</Text>
          <Text style={styles.cellHeader}>HK2</Text>
        </View>

        <FlatList
          data={gradeData}
          keyExtractor={(item) => item.subject}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity onPress={() => toggleExpand(item.subject)}>
                <View style={styles.row}>
                  <Text style={styles.cell}>{item.subject}</Text>
                  <Text style={styles.cell}>{item.HK1}</Text>
                  <Text style={styles.cell}>{item.HK2}</Text>
                </View>
              </TouchableOpacity>

              {expandedSubject === item.subject && (
                <View style={styles.detailsContainer}>
                  <Text style={styles.detailHeader}>
                    Điểm chi tiết cho {item.subject}:
                  </Text>
                  {detailedGrades[selectedStudent.name]?.[item.subject]?.map(
                    (detail, index) => (
                      <View key={index} style={styles.detailRow}>
                        <Text style={styles.detailCell}>{detail.category}</Text>
                        <Text style={styles.detailCell}>{detail.score}</Text>
                      </View>
                    )
                  )}

                  {editingSubject === item.subject && (
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="Nhập loại điểm (VD: Kiểm tra 1)"
                        value={newCategory}
                        onChangeText={setNewCategory}
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Nhập điểm"
                        keyboardType="numeric"
                        value={newScore}
                        onChangeText={setNewScore}
                      />
                      <Button
                        title="Thêm điểm"
                        onPress={() => addGrade(item.subject)}
                      />
                    </View>
                  )}

                  <Button
                    title={
                      editingSubject === item.subject ? "Đóng" : "Chấm điểm"
                    }
                    onPress={() =>
                      setEditingSubject(
                        editingSubject === item.subject ? null : item.subject
                      )
                    }
                  />
                </View>
              )}
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff6347",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  studentItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  studentName: { fontSize: 18 },
  table: { borderWidth: 1, borderColor: "#ddd" },
  row: { flexDirection: "row" },
  cellHeader: {
    flex: 1,
    padding: 10,
    fontWeight: "bold",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    borderWidth: 1,
  },
  cell: { flex: 1, padding: 10, textAlign: "center", borderWidth: 1 },
  detailsContainer: {
    backgroundColor: "#f0f8ff",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  detailHeader: { fontWeight: "bold", fontSize: 14, marginBottom: 5 },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  detailCell: { fontSize: 14 },
  inputContainer: { marginVertical: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default TeacherGradeScreen;
