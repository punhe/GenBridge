import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { scheduleData } from '../assets/data/scheduleData';

const ScheduleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thời Khóa Biểu</Text>
      <FlatList
        data={scheduleData}
        keyExtractor={(item) => item.day}
        renderItem={({ item }) => (
          <View style={styles.dayContainer}>
            <Text style={styles.day}>{item.day}</Text>
            <View style={styles.subjectsContainer}>
              {item.subjects.map((subject, index) => (
                <View key={index} style={styles.subjectCard}>
                  <Text style={styles.time}>{subject.time}</Text>
                  <Text style={styles.subject}>{subject.subject}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  header: { fontSize: 26, fontWeight: 'bold', color: '#ff6347', textAlign: 'center', marginBottom: 20 },
  dayContainer: { marginBottom: 20 },
  day: { fontSize: 22, fontWeight: 'bold', color: '#555', marginBottom: 10, padding: 10, backgroundColor: '#e6e6fa', borderRadius: 8, textAlign: 'center' },
  subjectsContainer: { paddingHorizontal: 10, paddingVertical: 5 },
  subjectCard: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingVertical: 12, 
    paddingHorizontal: 15, 
    borderRadius: 8, 
    marginVertical: 5, 
    backgroundColor: '#ffffff',
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  time: { fontSize: 16, color: '#555', fontWeight: '600' },
  subject: { fontSize: 16, color: '#333', fontWeight: '600' },
});

export default ScheduleScreen;
