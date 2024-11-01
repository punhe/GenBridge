import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { images } from '../assets';
import Button from '../components/button';

const { welcome } = images;

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-bgWhite">
      <View className="flex-1 flex justify-around my-4">
        {/** ====================== Image =================================== */}
        <View className="flex-row justify-center">
          <Image source={welcome} style={{ width: 324, height: 324 }} />
        </View>
        <View className="flex flex-col items-center mt-[-20%]">
          <Text className="text-4xl font-bold text-center text-primary">
            GenBridge
          </Text>
        </View>

        {/** ====================== Welcome Text ============================= */}
        <View className="flex flex-col gap-2 mt-[-25%]">
          <Text className="text-darkGrayText text-xl text-center font-exoSemibold">
            Kết nối để nuôi dưỡng tương lai của trẻ
          </Text>
          <Text className="text-darkGrayText text-lg text-center font-exo">
            Theo dõi và quản lý tình trạng học tập của con em dễ dàng hơn bao giờ hết.
          </Text>
        </View>

        {/** ====================== Action button ============================= */}
        <Button
          primaryBtnText={'Bắt đầu thôi'}
          onPrimaryBtnPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </SafeAreaView>
  );
}
