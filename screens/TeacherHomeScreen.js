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

  return (
    <SafeAreaView className="flex-1 bg-bgWhite px-8">
      <View className="flex-1 my-4">
        {/** ====================== Tiêu đề ============================= */} 
        <Text className="text-2xl font-bold text-center mb-6">Trang Chủ Giáo Viên</Text>

        {/** ====================== Các tính năng ============================= */} 
        <ScrollView>
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
    className="bg-white p-4 my-3 rounded-lg shadow-md flex-row items-center"
  >
    <Icon name={icon} size={24} color="#4A90E2" />
    <Text className="text-lg font-medium ml-4">{label}</Text>
  </TouchableOpacity>
);
