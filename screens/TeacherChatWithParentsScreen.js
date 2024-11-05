import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const chatData = [
  { id: '1', message: 'Chào cô, tôi muốn hỏi về bài tập về nhà.', sender: 'phụ huynh' },
  { id: '2', message: 'Vâng, phụ huynh muốn hỏi gì ạ?', sender: 'giáo viên' },
];

export default function TeacherChatWithParentsScreen() {
  const [chat, setChat] = useState(chatData);
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim()) {
      setChat([...chat, { id: `${chat.length + 1}`, message, sender: 'giáo viên' }]);
      setMessage('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Kênh chat với phụ huynh</Text>
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
