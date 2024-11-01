import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const notifications = [
  {
    id: '1',
    title: 'Bài tập về nhà',
    subject: 'Toán',
    content: 'Nội dung: bài 1,2,3 trang 94',
    dueDate: 'Hạn nộp: 3/10',
    date: '30/9',
  },
  {
    id: '2',
    title: 'Bài tập về nhà',
    subject: 'Văn',
    content: 'Nội dung: bài 1,2,3 trang 90',
    dueDate: 'Hạn nộp: 3/10',
    date: '30/9',
  },
  {
    id: '3',
    title: 'Đóng quỹ lớp',
    subject: '',
    content: 'Nội dung: mua chổi và phần cho lớp nên phụ huynh đóng 50k.',
    dueDate: 'Hạn nộp: 10/10',
    date: '30/9',
  },
];

const StreamScreen = () => {
  const navigation = useNavigation();

  const renderNotification = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ClassWorkScreen')}
      className="bg-white p-4 my-2 rounded-lg shadow-md"
    >
      <Text className="font-bold text-lg">{item.title}</Text>
      <Text className="text-gray-600">Môn: {item.subject}</Text>
      <Text className="text-gray-600">{item.content}</Text>
      <Text className="text-gray-600">{item.dueDate}</Text>
      <Text className="text-gray-400 text-right">{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-bgWhite p-4">
      <Text className="text-2xl font-bold text-center mb-4">Thông báo</Text>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
      />
      <Text className="text-center text-blue-500 mt-4">Xem thêm</Text>
    </SafeAreaView>
  );
};

export default StreamScreen;
