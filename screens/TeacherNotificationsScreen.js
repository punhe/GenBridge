import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

let notifications = [
  { id: '1', title: 'Nhắc nhở họp', content: 'Họp giáo viên lúc 3 giờ chiều tại phòng 101.', date: '1/11', audience: 'teacher' },
  { id: '2', title: 'Bài tập về nhà', content: 'Nộp bài tập Toán cho lớp 8A.', date: '1/11', audience: 'parent' },
  { id: '3', title: 'Chuyến đi thực tế', content: 'Dã ngoại tại bảo tàng vào thứ Sáu.', date: '30/10', audience: 'parent' },
  { id: '4', title: 'Cập nhật học kỳ', content: 'Kế hoạch học kỳ mới sẽ bắt đầu từ ngày 15/11.', date: '29/10', audience: 'teacher' },
];

export default function TeacherNotificationsScreen() {
  const [showParentNotifications, setShowParentNotifications] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const filterNotifications = () => {
    return notifications.filter((notification) =>
      showParentNotifications ? notification.audience === 'parent' : notification.audience === 'teacher'
    );
  };

  const addNotification = () => {
    if (!newTitle.trim() || !newContent.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin.');
      return;
    }

    const newNotification = {
      id: `${notifications.length + 1}`,
      title: newTitle,
      content: newContent,
      date: new Date().toLocaleDateString(),
      audience: 'parent',
    };

    notifications.push(newNotification);
    setNewTitle('');
    setNewContent('');
    Alert.alert('Thành công', 'Thông báo đã được gửi đến phụ huynh.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Trang thông báo</Text>

      <View style={styles.toggleContainer}>
        <TouchableOpacity 
          onPress={() => setShowParentNotifications(false)} 
          style={[styles.toggleButton, !showParentNotifications && styles.activeButton]}>
          <Text style={[styles.toggleText, !showParentNotifications && styles.activeText]}>Thông báo Giáo viên</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setShowParentNotifications(true)} 
          style={[styles.toggleButton, showParentNotifications && styles.activeButton]}>
          <Text style={[styles.toggleText, showParentNotifications && styles.activeText]}>Thông báo Phụ huynh</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filterNotifications()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationContent}>{item.content}</Text>
            <Text style={styles.notificationDate}>{item.date}</Text>
          </View>
        )}
      />

      {/** ================== Form to Add New Notification ================== **/}
      <Text style={styles.sectionTitle}>Tạo thông báo mới cho phụ huynh</Text>
      <TextInput
        style={styles.input}
        placeholder="Tiêu đề thông báo"
        value={newTitle}
        onChangeText={setNewTitle}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Nội dung thông báo"
        value={newContent}
        onChangeText={setNewContent}
        multiline
      />
      <TouchableOpacity style={styles.addButton} onPress={addNotification}>
        <Text style={styles.addButtonText}>Gửi Thông Báo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa', // Nền sáng nhẹ
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 20,
    textAlign: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Tạo khoảng cách đều giữa các nút
    marginBottom: 20,
    paddingBottom: 10,
  },
  toggleButton: {
    flex: 1, // Đảm bảo mỗi nút chiếm đều không gian ngang
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#007bff',
    alignItems: 'center',
    marginHorizontal: 5, // Tạo khoảng cách giữa các nút
  },
  activeButton: {
    backgroundColor: '#007bff',
  },
  toggleText: {
    fontSize: 16,
    color: '#007bff',
  },
  activeText: {
    color: '#fff', // Màu chữ khi nút được chọn
  },
  notificationItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginVertical: 5,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationContent: {
    fontSize: 16,
    color: '#555',
  },
  notificationDate: {
    fontSize: 14,
    color: '#888',
    textAlign: 'right',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007bff',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
