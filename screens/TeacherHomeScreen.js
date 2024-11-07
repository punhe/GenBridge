import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';

export default function TeacherHomeScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('TeacherSignInScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/** ====================== Header with Logout Icon ============================= */} 
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}></Text>
        <TouchableOpacity onPress={handleLogout}>
          <Icon name="sign-out-alt" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/** ====================== Profile Section ============================= */}
      <View style={styles.profileContainer}>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>GV: Lê Mạnh Hùng</Text>
          <Text style={styles.profileClass}>Lớp: 3</Text>
        </View>
      </View>

      {/** ====================== Feature List ============================= */} 
      <ScrollView contentContainerStyle={styles.featureList}>
        <FeatureButton
          icon="calendar-alt"
          label="Xem lịch dạy"
          onPress={() => navigation.navigate('TeacherScheduleScreen')}
        />
        <FeatureButton
          icon="user-check"
          label="Điểm danh học sinh"
          onPress={() => navigation.navigate('TeacherAttendanceScreen')}
        />
        <FeatureButton
          icon="comments"
          label="Kênh chat với phụ huynh"
          onPress={() => navigation.navigate('TeacherChatWithParentsScreen')}
        />
        <FeatureButton
          icon="bell"
          label="Trang thông báo"
          onPress={() => navigation.navigate('TeacherNotificationsScreen')}
        />
        <FeatureButton
          icon="clipboard-list"
          label="Chấm điểm học sinh"
          onPress={() => navigation.navigate('TeacherGradeScreen')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const FeatureButton = ({ icon, label, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.featureButton}>
    <LinearGradient
      colors={['#4A90E2', '#007AFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.buttonBackground}
    >
      <Icon name={icon} size={24} color="#fff" />
      <Text style={styles.buttonText}>{label}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f44336',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileInfo: {
    flexDirection: 'column',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileClass: {
    fontSize: 16,
    color: '#888',
  },
  featureList: {
    padding: 20,
  },
  featureButton: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  buttonBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 16,
  },
});
