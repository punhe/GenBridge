import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';

const ClassWorkScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>GenBridge</Text>
      <Text style={styles.subHeader}>Bài tập</Text>

      <ScrollView contentContainerStyle={styles.gridContainer}>
        <View style={styles.subjectBox}>
          <Text style={styles.subjectText}>Toán</Text>
          <Text style={styles.assignmentText}>Bài 1,2,3 trang 94</Text>
          <Text style={styles.dueDateText}>Hạn nộp: 3/10</Text>
        </View>

        <View style={styles.subjectBox}>
          <Text style={styles.subjectText}>Tiếng Việt</Text>
          <Text style={styles.assignmentText}>Bài 1,2,3 trang 80</Text>
          <Text style={styles.dueDateText}>Hạn nộp: 4/10</Text>
        </View>

        <View style={styles.subjectBox}>
          <Text style={styles.subjectText}>Tiếng Anh</Text>
          <Text style={styles.assignmentText}>Chép 20 từ vựng</Text>
          <Text style={styles.dueDateText}>Hạn nộp: 3/10</Text>
        </View>

        <View style={styles.subjectBox}>
          <Text style={styles.subjectText}>Đạo đức</Text>
          <Text style={styles.assignmentText}>Chưa có</Text>
        </View>

        <View style={styles.subjectBox}>
          <Text style={styles.subjectText}>Tự nhiên và Xã hội</Text>
          <Text style={styles.assignmentText}>Chưa có</Text>
        </View>

        <View style={styles.subjectBox}>
          <Text style={styles.subjectText}>Giáo dục thể chất</Text>
          <Text style={styles.assignmentText}>Chưa có</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6F61',
    textAlign: 'center',
    marginVertical: 15,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#FF6F61',
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  subjectBox: {
    width: '45%',
    padding: 20,
    marginVertical: 12,
    borderRadius: 12,
    backgroundColor: '#FFF3E0',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  subjectText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6F61',
    marginBottom: 8,
  },
  assignmentText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  dueDateText: {
    fontSize: 12,
    color: '#888',
  },
});

export default ClassWorkScreen;
