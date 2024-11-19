import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { gradeData, detailedGrades } from "../assets/data/gradeData";

const GradeScreen = () => {
  const [expandedSubject, setExpandedSubject] = useState(null);

  const toggleExpand = (subject) => {
    setExpandedSubject(expandedSubject === subject ? null : subject);
  };

  const calculateAverage = (key) => {
    const total = gradeData.reduce(
      (sum, item) => sum + parseFloat(item[key]),
      0
    );
    return (total / gradeData.length).toFixed(2);
  };

  const averageHK1 = calculateAverage("HK1");
  const averageHK2 = calculateAverage("HK2");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kết quả học tập</Text>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cellHeader}>Môn học</Text>
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
                  {detailedGrades[item.subject]?.map((detail, index) => (
                    <View key={index} style={styles.detailRow}>
                      <Text style={styles.detailCell}>{detail.category}</Text>
                      <Text style={styles.detailCell}>{detail.score}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          )}
        />

        <View style={styles.row}>
          <Text style={styles.cellAverage}>Điểm trung bình</Text>
          <Text style={styles.cellAverage}>{averageHK1}</Text>
          <Text style={styles.cellAverage}>{averageHK2}</Text>
        </View>
      </View>
      <Text style={styles.header}>Bấm vào môn học để xem chi tiết</Text>
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
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
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
  cellAverage: {
    flex: 1,
    padding: 10,
    fontWeight: "bold",
    backgroundColor: "#e0f7fa",
    textAlign: "center",
    borderWidth: 1,
  },
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
});

export default GradeScreen;
