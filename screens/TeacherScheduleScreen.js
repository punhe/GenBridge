import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const scheduleData = [
  { id: "1", subject: "Toán", time: "8:00 AM - 9:30 AM", day: "Thứ Hai" },
  {
    id: "2",
    subject: "Tiếng Anh",
    time: "10:00 AM - 11:30 AM",
    day: "Thứ Hai",
  },
  { id: "3", subject: "Khoa học", time: "1:00 PM - 2:30 PM", day: "Thứ Ba" },
  { id: "4", subject: "Lịch sử", time: "8:00 AM - 9:30 AM", day: "Thứ Tư" },
];

export default function TeacherScheduleScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Xem lịch dạy</Text>
      <FlatList
        data={scheduleData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.scheduleItem}>
            <Text style={styles.subject}>{item.subject}</Text>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.day}>{item.day}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff6347",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  scheduleItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  subject: {
    fontSize: 18,
    fontWeight: "bold",
  },
  time: {
    fontSize: 16,
    color: "#666",
  },
  day: {
    fontSize: 16,
    color: "#666",
  },
});
