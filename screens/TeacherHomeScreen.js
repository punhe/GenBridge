import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function TeacherHomeScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('TeacherSignInScreen');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 }}>
      <View style={{ flex: 1, marginTop: 20 }}>
        {/** ====================== Header with Logout Icon ============================= */} 
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', flex: 1 }}>
            Trang Chủ Giáo Viên
          </Text>
          <TouchableOpacity onPress={handleLogout}>
            <Icon name="sign-out-alt" size={24} color="#4A90E2" />
          </TouchableOpacity>
        </View>

        {/** ====================== Features ============================= */} 
        <ScrollView style={{ marginTop: 20 }}>
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
      </View>
    </SafeAreaView>
  );
}

const FeatureButton = ({ icon, label, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: '#fff',
      padding: 16,
      marginVertical: 8,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    }}
  >
    <Icon name={icon} size={24} color="#4A90E2" />
    <Text style={{ fontSize: 18, fontWeight: '500', marginLeft: 16 }}>{label}</Text>
  </TouchableOpacity>
);
