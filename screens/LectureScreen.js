import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LectureScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bài giảng, tài liệu học tập</Text>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.subject}>Toán</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.subject}>Tiếng Anh</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.subject}>Văn</Text>
      </TouchableOpacity>
      <Text style={styles.seeMore}>Xem thêm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#ff6347', marginBottom: 20 },
  item: { backgroundColor: '#f5f5f5', padding: 20, borderRadius: 10, marginBottom: 10 },
  subject: { fontSize: 18, color: '#333' },
  seeMore: { color: '#007bff', textAlign: 'center', marginTop: 10 },
});

export default LectureScreen;