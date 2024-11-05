import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Switch, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Sample data for students' attendance
const initialStudents = [
  { id: '1', name: 'Nguyễn Văn A', attended: false },
  { id: '2', name: 'Trần Thị B', attended: false },
  { id: '3', name: 'Lê Văn C', attended: false },
  { id: '4', name: 'Phạm Thị D', attended: false },
];

export default function TeacherAttendanceScreen() {
  const [attendance, setAttendance] = useState(initialStudents);

  const toggleAttendance = (id) => {
    setAttendance((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, attended: !student.attended } : student
      )
    );
  };

  const saveAttendance = () => {
    // This function would normally save the attendance to a backend service
    Alert.alert('Thành công', 'Trạng thái điểm danh đã được lưu.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Điểm danh học sinh</Text>
      <FlatList
        data={attendance}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.studentItem}>
            <Text style={styles.name}>{item.name}</Text>
            <Switch
              value={item.attended}
              onValueChange={() => toggleAttendance(item.id)}
            />
          </View>
        )}
      />
      <TouchableOpacity style={styles.saveButton} onPress={saveAttendance}>
        <Text style={styles.saveButtonText}>Lưu</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  studentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
