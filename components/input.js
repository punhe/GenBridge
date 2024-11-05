import { View, Text, TextInput } from 'react-native';
import React from 'react';

export default function Input({
  label,
  placeholder,
  Icon,
  last = false,
  value,
  onChangeText,
  secureTextEntry = false
}) {
  return (
    <View className={`w-full ${!last ? 'mb-6' : 'mb-2'}`}>
      <Text className="text-gray-700 ml-4 mb-2">{label}</Text>
      <View className="flex-row items-center border border-gray-300 p-4 rounded-2xl">
        <TextInput
          placeholder={placeholder}
          className="flex-1"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
        {Icon && (
          <Icon size={20} color="gray" />
        )}
      </View>
    </View>
  );
}