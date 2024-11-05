import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const LectureDetail = ({ route }) => {
  const { lecture } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Banner Image */}
      <Image source={lecture.image} style={styles.banner} />

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.title}>{lecture.title}</Text>
        <Text style={styles.duration}>Thời lượng: {lecture.duration}</Text>
        <Text style={styles.description}>
          Đây là nội dung chi tiết của bài giảng "{lecture.title}". Trong bài giảng này, bạn sẽ tìm hiểu về các khái niệm cơ bản và nâng cao, giúp bạn nắm vững kiến thức một cách hiệu quả. Hãy bắt đầu học ngay để có thể áp dụng những gì đã học vào thực tế!
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  banner: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: {
    padding: 20,
    marginTop: -20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff6347',
    textAlign: 'center',
    marginBottom: 10,
  },
  duration: {
    fontSize: 18,
    color: '#2e8b57',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    textAlign: 'justify',
  },
});

export default LectureDetail;
