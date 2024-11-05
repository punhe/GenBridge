import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Text, List, Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ClassWorkScreen = () => {
  const [expanded, setExpanded] = useState({});

  const handlePress = (subject) => {
    setExpanded((prev) => ({
      ...prev,
      [subject]: !prev[subject],
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="GenBridge" subtitle="Bài tập" />
      </Appbar.Header>

      <ScrollView>
        <List.Section>
          {assignments.map((assignment, index) => (
            <List.Accordion
              key={index}
              title={assignment.subject}
              description={assignment.task}
              left={(props) => <List.Icon {...props} icon={assignment.icon} />}
              expanded={!!expanded[assignment.subject]}
              onPress={() => handlePress(assignment.subject)}
              style={[
                styles.accordion,
                !assignment.details && styles.disabledAccordion,
              ]}
              titleStyle={[
                styles.title,
                !assignment.details && styles.disabledText,
              ]}
              descriptionStyle={[
                styles.description,
                !assignment.details && styles.disabledText,
              ]}
            >
              {assignment.details ? (
                assignment.details.map((detail, i) => (
                  <List.Item key={i} title={detail} />
                ))
              ) : (
                <List.Item title="Chưa có bài tập" />
              )}
            </List.Accordion>
          ))}
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
};

const assignments = [
  {
    subject: 'Toán',
    task: 'Bài 1,2,3 trang 94',
    dueDate: '3/10',
    icon: 'calculator',
    details: ['Bài 1: Phép cộng', 'Bài 2: Phép trừ', 'Bài 3: Phép nhân'],
  },
  {
    subject: 'Tiếng Việt',
    task: 'Bài 1,2,3 trang 80',
    dueDate: '4/10',
    icon: 'book',
    details: ['Bài 1: Chính tả', 'Bài 2: Tập đọc', 'Bài 3: Ngữ pháp'],
  },
  {
    subject: 'Tiếng Anh',
    task: 'Chép 20 từ vựng',
    dueDate: '3/10',
    icon: 'alphabetical',
    details: ['Danh sách từ vựng'],
  },
  {
    subject: 'Đạo đức',
    task: 'Chưa có',
    icon: 'account-group',
  },
  {
    subject: 'Tự nhiên và Xã hội',
    task: 'Chưa có',
    icon: 'earth',
  },
  {
    subject: 'Giáo dục thể chất',
    task: 'Chưa có',
    icon: 'run',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  accordion: {
    backgroundColor: '#FFFFFF',
    marginBottom: 5,
  },
  disabledAccordion: {
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontWeight: 'bold',
    color: '#000000',
  },
  description: {
    color: '#555555',
  },
  disabledText: {
    color: '#B0B0B0',
  },
});

export default ClassWorkScreen;
