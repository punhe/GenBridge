import { View, Text, Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SelectGradeScreen from '../screens/SelectGradeScreen';
import SelectProvinceScreen from '../screens/SelectProvinceScreen';
import StreamScreen from '../screens/StreamScreen';
import ClassWorkScreen from '../screens/ClassWorkScreen';
import GradeScreen from '../screens/GradeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import LectureScreen from '../screens/LectureScreen';
import LeaveRequestScreen from '../screens/LeaveRequestScreen';
import ExamScreen from '../screens/ExamScreen';
import { themeColors } from '../theme';
import { images } from '../assets';
import LectureDetail from '../screens/LectureDetail';
import TeacherDetail from '../screens/TeacherDetail';
import TeacherSignInScreen from '../screens/TeacherSignInScreen';
import TeacherHomeScreen from '../screens/TeacherHomeScreen';
import TeacherScheduleScreen from '../screens/TeacherScheduleScreen';
import TeacherAttendanceScreen from '../screens/TeacherAttendanceScreen';
import TeacherChatWithParentsScreen from '../screens/TeacherChatWithParentsScreen';
import TeacherNotificationsScreen from '../screens/TeacherNotificationsScreen';
import TeacherGradeScreen from '../screens/TeacherGradeSreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="TeacherSignInScreen"
          component={TeacherSignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectGrade"
          component={SelectGradeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectProvince"
          component={SelectProvinceScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        
        {/** ================= Thêm các màn hình bổ sung ================= */}
        <Stack.Screen
          name="GradeScreen"
          component={GradeScreen}
          options={{ title: 'Bảng điểm học tập' }}
        />
        <Stack.Screen
          name="ClassWorkScreen"
          component={ClassWorkScreen}
          options={{ title: 'Bài tập' }}
        />
        <Stack.Screen
          name="ScheduleScreen"
          component={ScheduleScreen}
          options={{ title: 'Thời khóa biểu' }}
        />
        <Stack.Screen
          name="LectureScreen"
          component={LectureScreen}
          options={{ title: 'Bài giảng, tài liệu học tập' }}
        />
        <Stack.Screen
          name="LectureDetail"
          component={LectureDetail}
          options={{ title: 'Chi tiết bài giảng' }}
        />
        <Stack.Screen
          name="LeaveRequestScreen"
          component={LeaveRequestScreen}
          options={{ title: 'Xin nghỉ học' }}
        />
        <Stack.Screen
          name="ExamScreen"
          component={ExamScreen}
          options={{ title: 'Bài kiểm tra, kì thi' }}
        />
        <Stack.Screen
          name="TeacherDetail"
          component={TeacherDetail}
          options={{ title: 'Liên hệ với giáo viên' }}
        />
          <Stack.Screen
          name="TeacherHomeScreen"
          component={TeacherHomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TeacherScheduleScreen"
          component={TeacherScheduleScreen}
          options={{ title: 'Lịch dạy' }}
        />
        <Stack.Screen
          name="TeacherAttendanceScreen"
          component={TeacherAttendanceScreen}
          options={{ title: 'Điểm danh học sinh' }}
        />
        <Stack.Screen
          name="TeacherChatWithParentsScreen"
          component={TeacherChatWithParentsScreen}
          options={{ title: 'Phụ huynh liên hệ' }}
        />
        <Stack.Screen
          name="TeacherNotificationsScreen"
          component={TeacherNotificationsScreen}
          options={{ title: 'Thông báo' }}
        />
        <Stack.Screen
          name="TeacherGradeScreen"
          component={TeacherGradeScreen}
          options={{ title: 'Chấm điểm học sinh' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const { streamIcon, classWorkIcon, exploreIcon } = images;
const extraTabOptions = {
  tabBarLabelStyle: { fontFamily: 'exo', fontSize: 12 },
  tabBarStyle: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    backgroundColor: '#FFFFFF',
    height: 60,
    paddingBottom: 8,
  },
  tabBarActiveTintColor: themeColors.bgPurple,
  tabBarInactiveTintColor: themeColors.darkGrayText,
};

function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Trang chủ" screenOptions={extraTabOptions}>
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={exploreIcon}
              style={{
                tintColor: color,
                width: size,
                height: size,
              }}
            />
          ),
          tabBarLabel: 'Trang chủ',
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={StreamScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={streamIcon}
              style={{
                tintColor: color,
                width: size,
                height: size,
              }}
            />
          ),
          tabBarLabel: 'Thông báo',
        }}
      />
      <Tab.Screen
        name="Bài tập"
        component={ClassWorkScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={classWorkIcon}
              style={{
                tintColor: color,
                width: size,
                height: size,
              }}
            />
          ),
          tabBarLabel: 'Bài tập',
        }}
      />
    </Tab.Navigator>
  );
}
