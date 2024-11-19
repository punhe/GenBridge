import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

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
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f3f4f6",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff6347",
    marginBottom: 30,
    textAlign: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    color: "#444",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 20,
    fontSize: 16,
  },
});

export default LeaveRequestScreen;
