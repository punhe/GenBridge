import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { images } from "../assets";
import Button from "../components/button";
import Input from "../components/input";
import { Octicons } from "@expo/vector-icons";

const { signin } = images;

export default function TeacherSignInScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "test@gmail.com" && password === "test") {
      navigation.navigate("TeacherHomeScreen");
    } else {
      Alert.alert(
        "Đăng nhập thất bại",
        "Email hoặc mật khẩu không chính xác. Vui lòng thử lại với test@gmail.com/test"
      );
    }
  };

  //   return (
  //     <KeyboardAvoidingView
  //       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  //       style={{ flex: 1 }}
  //     >
  //       <SafeAreaView className="flex-1 bg-bgWhite">
  //         <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
  //           <View className="flex-1 flex justify-around my-4 px-8">
  //             {/** ====================== Hình ảnh ============================= */}
  //             <View className="flex-row justify-center mb-[-15%]">
  //               <Image source={signin} style={{ width: 266, height: 266 }} />
  //             </View>

  //             {/** ====================== Các ô nhập thông tin đăng nhập ============================= */}
  //             <View className="flex flex-col w-full items-center justify-center mt-3">
  //               <Input
  //                 label={'Email Giáo Viên'}
  //                 placeholder={'teacher@example.com'}
  //                 value={email}
  //                 onChangeText={setEmail}
  //               />
  //               <Input
  //                 label={'Mật khẩu'}
  //                 placeholder={'********'}
  //                 Icon={EyeIcon}
  //                 last
  //                 value={password}
  //                 onChangeText={setPassword}
  //                 secureTextEntry
  //               />
  //             </View>

  //             {/** ====================== Nút hành động ============================= */}
  //             <Button
  //               primaryBtnText={'Đăng Nhập'}
  //               onPrimaryBtnPress={handleLogin}
  //             />

  //             {/** ====================== Quay Lại Trang Đăng Nhập ============================= */}
  //             <TouchableOpacity onPress={() => navigation.goBack()}>
  //               <Text className="text-blue-600 text-center mt-4 underline">
  //                 Quay Lại Trang Đăng Nhập
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //         </ScrollView>
  //       </SafeAreaView>
  //     </KeyboardAvoidingView>
  //   );
  // }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/** ================== Image Section ================== */}
        <View style={styles.imageContainer}>
          <Image source={signin} style={styles.image} />
        </View>

        {/** ================== Form Section ================== */}
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Octicons name="mail" size={hp(2.7)} color="gray" />
              <TextInput
                placeholder="Hãy nhập email"
                placeholderTextColor="gray"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={styles.input}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Octicons name="lock" size={(hp(2.7), wp(8))} color="gray" />
              <TextInput
                placeholder="Mật khẩu"
                placeholderTextColor="gray"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
              />
            </View>
          </View>

          {/** ================== Button Section ================== */}
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>

          {/** ====================== Quay Lại Trang Đăng Nhập ============================= */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.teacherLoginText}>
              Quay Lại Trang Đăng Nhập
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: wp(5),
    backgroundColor: "#F5F5F5",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: hp(10),
    marginBottom: hp(5),
  },
  image: {
    width: wp(70),
    height: hp(30),
    resizeMode: "contain",
  },
  formContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: hp(4),
    fontWeight: "bold",
    color: "#333",
    marginBottom: hp(2),
  },
  inputContainer: {
    width: wp(80),
    marginBottom: hp(3),
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: wp(4),
    height: hp(7),
    marginBottom: hp(2),
  },
  input: {
    flex: 1,
    fontSize: hp(2),
    color: "#333",
    marginLeft: wp(2),
  },
  button: {
    backgroundColor: "#1E90FF",
    borderRadius: 10,
    paddingVertical: hp(1.5),
    width: wp(80),
    alignItems: "center",
    marginBottom: hp(2),
  },
  buttonText: {
    fontSize: hp(2.5),
    color: "#fff",
    fontWeight: "bold",
  },
  teacherLoginText: {
    color: "#1E90FF",
    fontSize: hp(2),
    fontWeight: "500",
    textAlign: "center",
    marginTop: 50,
  },
});
