import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const notifications = [
  {
    id: '6',
    title: 'Cảnh báo điểm xu hướng',
    type: 'warning',
    subject: 'Tổng quan',
    content: 'Điểm môn Toán đang có xu hướng giảm. Cần chú ý và cải thiện.',
    dueDate: '',
    date: '10/10',
  },
  {
    id: '1',
    title: 'Bài tập về nhà',
    type: 'homework',
    subject: 'Toán',
    content: 'Nội dung: bài 1,2,3 trang 94',
    dueDate: 'Hạn nộp: 3/10',
    date: '30/9',
  },
  {
    id: '2',
    title: 'Học phí',
    type: 'fees',
    subject: '',
    content: 'Học phí tháng 10 đã được cập nhật, vui lòng thanh toán trước ngày 15/10.',
    dueDate: 'Hạn cuối: 15/10',
    date: '1/10',
  },
  {
    id: '3',
    title: 'Hoạt động ngoại khóa',
    type: 'activity',
    subject: 'Thể thao',
    content: 'Tham gia bóng đá vào thứ Bảy tại sân A.',
    dueDate: '',
    date: '5/10',
  },
  {
    id: '4',
    title: 'Bài tập về nhà',
    type: 'homework',
    subject: 'Vật Lý',
    content: 'Nội dung: bài 4,5 trang 101',
    dueDate: 'Hạn nộp: 7/10',
    date: '2/10',
  },
  {
    id: '5',
    title: 'Cảnh báo tham gia lớp',
    type: 'warning',
    subject: 'Tổng quan',
    content: 'Bạn đã vắng mặt 3 buổi gần đây. Vui lòng kiểm tra và điều chỉnh.',
    dueDate: '',
    date: '8/10',
  },
];

const sortNotifications = (data) => {
  return data.sort((a, b) => (a.type === 'warning' ? -1 : 1));
};

const StreamScreen = () => {
  const navigation = useNavigation();
  const [filteredNotifications, setFilteredNotifications] = useState(sortNotifications(notifications));
  const [filterType, setFilterType] = useState('all');

  const filterNotifications = (type) => {
    setFilterType(type);
    if (type === 'all') {
      setFilteredNotifications(sortNotifications(notifications));
    } else {
      setFilteredNotifications(sortNotifications(notifications).filter((item) => item.type === type));
    }
  };

  const renderNotification = ({ item }) => {
    const isWarning = item.type === 'warning';
    
    return (
      <TouchableOpacity
        onPress={() => {
          if (isWarning) {
            Alert.alert(
              'Cảnh báo điểm số',
              'Bạn đang có xu hướng điểm giảm. Hãy trao đổi với giáo viên để cải thiện.',
              [{ text: 'OK', onPress: () => {} }]
            );
          } else {
            navigation.navigate('ClassWorkScreen');
          }
        }}
        style={[
          styles.notificationItem,
          isWarning && styles.warningItem
        ]}
      >
        <Text style={[styles.title, isWarning && styles.warningTitle]}>{item.title}</Text>
        {item.subject && <Text style={styles.subject}>Môn: {item.subject}</Text>}
        <Text style={styles.content}>{item.content}</Text>
        {item.dueDate && <Text style={styles.dueDate}>{item.dueDate}</Text>}
        <Text style={styles.date}>{item.date}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screenTitle}>Thông báo</Text>
      
      <View style={styles.filterContainer}>
        <TouchableOpacity 
          style={[
            styles.filterButton, 
            filterType === 'all' && styles.activeFilterButton
          ]}
          onPress={() => filterNotifications('all')}
        >
          <Text style={styles.filterButtonText}>Tất cả</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.filterButton, 
            filterType === 'warning' && styles.activeFilterButton
          ]}
          onPress={() => filterNotifications('warning')}
        >
          <Text style={styles.filterButtonText}>Cảnh báo</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.filterButton, 
            filterType === 'homework' && styles.activeFilterButton
          ]}
          onPress={() => filterNotifications('homework')}
        >
          <Text style={styles.filterButtonText}>Bài tập</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.filterButton, 
            filterType === 'fees' && styles.activeFilterButton
          ]}
          onPress={() => filterNotifications('fees')}
        >
          <Text style={styles.filterButtonText}>Học phí</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.filterButton, 
            filterType === 'activity' && styles.activeFilterButton
          ]}
          onPress={() => filterNotifications('activity')}
        >
          <Text style={styles.filterButtonText}>Hoạt động</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={filteredNotifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  activeFilterButton: {
    backgroundColor: '#007bff',
  },
  filterButtonText: {
    color: '#000',
  },
  listContainer: {
    paddingHorizontal: 15,
  },
  notificationItem: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  warningItem: {
    backgroundColor: '#fff3cd',
    borderWidth: 1,
    borderColor: '#ffeeba',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  warningTitle: {
    color: '#856404',
  },
  subject: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
    marginBottom: 5,
  },
  dueDate: {
    fontSize: 14,
    color: '#007bff',
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
});

export default StreamScreen;
