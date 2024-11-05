import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importing MaterialCommunityIcons

const TeacherDetail = ({ route }) => {
  const { teacher } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [chatVisible, setChatVisible] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{teacher.name}</Text>
      <Text style={styles.subject}>Môn dạy: {teacher.subject}</Text>
      <Text style={styles.description}>Thông tin giảng viên: {teacher.description}</Text>
      <Text style={styles.experience}>Kinh nghiệm: {teacher.experience}</Text>
      <Text style={styles.contact}>Liên hệ: {teacher.contact}</Text>

      {/* Floating Chat Button */}
      <TouchableOpacity style={styles.floatingChatButton} onPress={() => setChatVisible(true)}>
        <Icon name="chat" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Chat Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={chatVisible}
        onRequestClose={() => setChatVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.chatBox}>
            {/* Close Button */}
            <TouchableOpacity style={styles.closeButton} onPress={() => setChatVisible(false)}>
              <Icon name="close" size={20} color="#000" />
            </TouchableOpacity>

            {/* Messages List */}
            <FlatList
              data={messages}
              renderItem={({ item }) => (
                <View style={item.sender === 'user' ? styles.userMessage : styles.teacherMessage}>
                  <Text style={styles.messageText}>{item.text}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              style={styles.chatList}
            />

            {/* Message Input and Send Button */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                value={message}
                onChangeText={setMessage}
                placeholder="Nhập tin nhắn..."
              />
              <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
                <Text style={styles.sendButtonText}>Gửi</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subject: { fontSize: 18, color: '#555', marginBottom: 10 },
  description: { fontSize: 16, color: '#666', marginBottom: 10 },
  experience: { fontSize: 16, color: '#333', marginBottom: 10 },
  contact: { fontSize: 16, color: '#007bff', marginBottom: 20 },
  floatingChatButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007bff',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: { flex: 1, justifyContent: 'flex-end' },
  chatBox: {
    height: '40%',
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
  chatList: { flex: 1, marginTop: 30 },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#d1e7dd',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  teacherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f8d7da',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  messageText: { fontSize: 16 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  textInput: { flex: 1, height: 40, borderColor: '#ddd', borderWidth: 1, borderRadius: 20, paddingHorizontal: 15 },
  sendButton: { marginLeft: 10, padding: 10, backgroundColor: '#007bff', borderRadius: 20 },
  sendButtonText: { color: '#fff', fontSize: 16 },
});

export default TeacherDetail;
