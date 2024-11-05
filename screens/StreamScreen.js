import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const notifications = [
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
    title: 'Bài tập về nhà',
    type: 'homework',
    subject: 'Văn',
    content: 'Nội dung: bài 1,2,3 trang 90',
    dueDate: 'Hạn nộp: 3/10',
    date: '30/9',
  },
  {
    id: '3',
    title: 'Đóng quỹ lớp',
    type: 'fees',
    subject: '',
    content: 'Nội dung: mua chổi và phần cho lớp nên phụ huynh đóng 50k.',
    dueDate: 'Hạn nộp: 10/10',
    date: '30/9',
  },
  {
    id: '4',
    title: 'Thông báo nộp học phí',
    type: 'fees',
    subject: '',
    content: 'Học phí tháng 10: 2,000,000 VND',
    dueDate: 'Hạn nộp: 5/10',
    date: '1/10',
  },
  {
    id: '5',
    title: 'Hoạt động ngoại khóa',
    type: 'activity',
    subject: '',
    content: 'Tổ chức dã ngoại tại công viên vào ngày 15/10.',
    dueDate: '',
    date: '5/10',
  },
];

const StreamScreen = () => {
  const navigation = useNavigation();
  const [filteredNotifications, setFilteredNotifications] = useState(notifications);
  const [filterType, setFilterType] = useState('all');

  const filterNotifications = (type) => {
    setFilterType(type);
    if (type === 'all') {
      setFilteredNotifications(notifications);
    } else {
      setFilteredNotifications(notifications.filter((item) => item.type === type));
    }
  };

  const renderNotification = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ClassWorkScreen')}
      className="bg-white p-4 my-2 rounded-lg shadow-md"
    >
      <Text className="font-bold text-lg">{item.title}</Text>
      {item.subject ? <Text className="text-gray-600">Môn: {item.subject}</Text> : null}
      <Text className="text-gray-600">{item.content}</Text>
      {item.dueDate ? <Text className="text-gray-600">{item.dueDate}</Text> : null}
      <Text className="text-gray-400 text-right">{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-bgWhite p-4">
      <Text className="text-2xl font-bold text-center mb-4">Thông báo</Text>

      {/* Filter Buttons */}
      <View className="flex flex-row justify-around mb-4">
        <TouchableOpacity onPress={() => filterNotifications('all')}>
          <Text className={`text-lg ${filterType === 'all' ? 'font-bold text-blue-600' : 'text-gray-600'}`}>Tất cả</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterNotifications('homework')}>
          <Text className={`text-lg ${filterType === 'homework' ? 'font-bold text-blue-600' : 'text-gray-600'}`}>Bài tập</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterNotifications('fees')}>
          <Text className={`text-lg ${filterType === 'fees' ? 'font-bold text-blue-600' : 'text-gray-600'}`}>Học phí</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterNotifications('activity')}>
          <Text className={`text-lg ${filterType === 'activity' ? 'font-bold text-blue-600' : 'text-gray-600'}`}>Hoạt động</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredNotifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default StreamScreen;
