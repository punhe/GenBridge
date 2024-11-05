import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { images } from '../assets';
import Button from '../components/button';
import Input from '../components/input';
import { EyeIcon } from 'react-native-heroicons/solid';

const { signin } = images;

export default function TeacherSignInScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-bgWhite px-8">
      <View className="flex-1 flex justify-around my-4">
        {/** ====================== Hình ảnh ============================= */} 
        <View className="flex-row justify-center mb-[-15%]">
          <Image source={signin} style={{ width: 266, height: 266 }} />
        </View>

        {/** ====================== Các ô nhập thông tin đăng nhập ============================= */} 
        <View className="flex flex-col w-full items-center justify-center mt-3">
          <Input label={'Email Giáo Viên'} placeholder={'teacher@example.com'} />
          <Input
            label={'Mật khẩu'}
            placeholder={'********'}
            Icon={EyeIcon}
            last
          />
        </View>

        {/** ====================== Nút hành động ============================= */} 
        <Button
          primaryBtnText={'Đăng Nhập'}
          onPrimaryBtnPress={() => navigation.navigate('TeacherHomeScreen')}
        />

        {/** ====================== Quay Lại Trang Đăng Nhập ============================= */} 
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-blue-600 text-center mt-4 underline">
            Quay Lại Trang Đăng Nhập
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
