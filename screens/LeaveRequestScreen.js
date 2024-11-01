import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const LeaveRequestScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Đơn xin nghỉ</Text>
      <Text style={styles.label}>Họ và tên</Text>
      <TextInput style={styles.input} placeholder="Nhập họ và tên" />
      <Text style={styles.label}>Lý do nghỉ</Text>
      <TextInput style={styles.input} placeholder="Nhập lý do nghỉ" />
      <Text style={styles.label}>Ngày nghỉ</Text>
      <TextInput style={styles.input} placeholder="Nhập ngày nghỉ" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#ff6347', marginBottom: 20 },
  label: { fontSize: 16, marginVertical: 10 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 5, backgroundColor: '#f9f9f9' },
});

export default LeaveRequestScreen;