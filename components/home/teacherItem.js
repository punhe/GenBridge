import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const TeacherItem = ({ teacher }) => {
  const navigation = useNavigation();  // Access navigation here

  return (
    <TouchableOpacity 
      className="max-w-[126px] min-h-[176px] bg-white p-2 rounded-xl shadow mx-2"
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('TeacherDetail', { teacher });  // Navigate with teacher data
      }}
    >
      <View className="rounded-xl">
        <Image 
          source={teacher?.image} 
          style={{ height: 115, width: 110 }} 
        />
      </View>
      <View className="mt-2">
        <Text className="font-exoSemibold text-base capitalize text-darkGrayText">
          {teacher.name}
        </Text>
        <Text className="font-exo text-xs">
          {teacher.subject}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TeacherItem;
