import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

// Mapping object for dynamic imports
const images = {
  math: require('../assets/images/math.png'),
  english: require('../assets/images/english.png'),
  literature: require('../assets/images/literature.png'),
};

const lectures = [
  { id: 1, image: images.math, title: 'Phương trình bậc nhất', duration: '08:57' },
  { id: 2, image: images.english, title: 'Phương trình bậc hai', duration: '12:21' },
  { id: 3, image: images.literature, title: 'Điều kiện và số nghiệm', duration: '11:45' },
  { id: 4, image: images.math, title: 'Luyện tập phương trình bậc nhất', duration: '09:30' },
  { id: 5, image: images.english, title: 'Luyện tập phương trình bậc hai', duration: '13:50' },
  { id: 6, image: images.literature, title: 'Luyện tập điều kiện và số nghiệm', duration: '10:10' },
];

const LectureScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {lectures.map((lecture) => (
        <TouchableOpacity
          key={lecture.id}
          style={styles.item}
          onPress={() => navigation.navigate('LectureDetail', { lecture })}
        >
          <Image source={lecture.image} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title}>{lecture.title}</Text>
            <Text style={styles.metadata}>{lecture.duration}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  item: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#f5f5f5', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 10 
  },
  image: { 
    width: 60, 
    height: 60, 
    borderRadius: 10,
    marginRight: 15 
  },
  info: { flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  metadata: { fontSize: 14, color: '#666' },
});

export default LectureScreen;
