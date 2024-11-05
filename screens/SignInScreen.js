import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { images } from '../assets';
import Button from '../components/button';
import Input from '../components/input';
import { EyeIcon } from 'react-native-heroicons/solid';

const { signin } = images;

export default function SignInScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'test@gmail.com' && password === 'test') {
      navigation.navigate('Home');
    } else {
      Alert.alert(
        'Đăng nhập thất bại',
        'Email hoặc mật khẩu không chính xác. Vui lòng thử lại với test@gmail.com/test'
      );
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-bgWhite px-8">
      <View className="flex-1 flex justify-around my-4">
        {/** ====================== Hình ảnh ============================= */}
        <View className="flex-row justify-center mb-[-15%]">
          <Image source={signin} style={{ width: 266, height: 266 }} />
        </View>

        {/** ====================== Các ô nhập thông tin đăng nhập ============================= */}
        <View className="flex flex-col w-full items-center justify-center mt-3">
          <Input 
            label={'Địa chỉ email'} 
            placeholder={'nhập mail vào đây'} 
            value={email}
            onChangeText={setEmail}
          />
          <Input
            label={'Mật khẩu'}
            placeholder={'********'}
            Icon={EyeIcon}
            last
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/** ====================== Nút hành động ============================= */}
        <Button
          primaryBtnText={'Đăng Nhập'}
          onPrimaryBtnPress={handleLogin}
        />

        {/** ====================== Đăng Nhập Giáo Viên (Text Link) ============================= */}
        <TouchableOpacity onPress={() => navigation.navigate('TeacherSignInScreen')}>
          <Text className="text-blue-600 text-center mt-4 underline">
            Đăng Nhập Giáo Viên
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}