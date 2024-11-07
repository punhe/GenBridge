import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const parents = [
  { id: '1', name: 'Nguyễn Văn A' },
  { id: '2', name: 'Trần Thị B' },
  { id: '3', name: 'Lê Văn C' },
  { id: '4', name: 'Phạm Thị D' },
  { id: '5', name: 'Hoàng Văn E' },
];

const chatData = [
  { id: '1', message: 'Chào cô giáo, tôi muốn hỏi về tiến độ học của con.', sender: 'phụ huynh' },
  { id: '2', message: 'Chào anh/chị, con đang có tiến bộ trong môn Toán nhưng cần cố gắng thêm ở môn Văn.', sender: 'giáo viên' },
  { id: '3', message: 'Vậy tôi có thể hỗ trợ con bằng cách nào ạ?', sender: 'phụ huynh' },
  { id: '4', message: 'Anh/chị có thể giúp con luyện thêm các bài đọc hiểu và viết luận vào cuối tuần.', sender: 'giáo viên' },
];

export default function TeacherChatWithParentsScreen() {
  const [selectedParent, setSelectedParent] = useState(null);
  const [chat, setChat] = useState(chatData);
  const [message, setMessage] = useState('');

  const selectParent = (parent) => {
    setSelectedParent(parent);
    setChat([...chatData]); // Reset chat khi chọn phụ huynh mới
  };

  const sendMessage = () => {
    if (message.trim()) {
      setChat([...chat, { id: `${chat.length + 1}`, message, sender: 'giáo viên' }]);
      setMessage('');
    }
  };

  if (!selectedParent) {
    // Màn hình chọn phụ huynh
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Chọn phụ huynh để trò chuyện</Text>
        <FlatList
          data={parents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.parentItem} onPress={() => selectParent(item)}>
              <Text style={styles.parentName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Trò chuyện với {selectedParent.name}</Text>
      <FlatList
        data={chat}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={item.sender === 'giáo viên' ? styles.teacherMessage : styles.parentMessage}>
            <Text style={styles.messageText}>{item.message}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Nhập tin nhắn..."
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Gửi</Text>
        </TouchableOpacity>
      </View>
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
  parentItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  parentName: {
    fontSize: 18,
    color: '#007bff',
  },
  teacherMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#d1e7dd',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  parentMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f8d7da',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
