import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { images } from "../assets";
import Button from "../components/button";

const { welcome } = images;
const { width } = Dimensions.get("window");

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#E8F0FF", "#FFFFFF"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "space-between", paddingVertical: 20, paddingHorizontal: 16 }}>
          {/* Image Section */}
          <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
            <View
              style={{
                borderRadius: 40,
                overflow: "hidden",
                shadowColor: "#000",
                shadowOpacity: 0.15,
                shadowRadius: 10,
                shadowOffset: { width: 0, height: 6 },
              }}
            >
              <Image
                source={welcome}
                style={{
                  width: width * 0.75,
                  height: width * 0.75,
                  borderRadius: 40,
                }}
                resizeMode="cover"
              />
            </View>
          </View>

          {/* Text Section */}
          <View style={{ marginTop: 24, paddingHorizontal: 12 }}>
            <Text
              style={{
                fontSize: 28,
                textAlign: "center",
                color: "#2C3E50",
                fontWeight: "600",
                lineHeight: 36,
              }}
            >
              Gắn kết để xây dựng tương lai
            </Text>
            <Text
              style={{
                fontSize: 16,
                textAlign: "center",
                color: "#34495E",
                lineHeight: 24,
                marginTop: 12,
                opacity: 0.8,
              }}
            >
              Theo dõi và quản lý tiến độ học tập của học sinh một cách hiệu quả, chính xác và dễ dàng hơn bao giờ hết.
            </Text>
          </View>

          {/* Button Section */}
          <View style={{ marginTop: 32, paddingHorizontal: 12 }}>
            <Button
              primaryBtnText="Bắt đầu ngay"
              onPrimaryBtnPress={() => navigation.navigate("SignIn")}
              style={{
                width: "100%",
                backgroundColor: "linear-gradient(90deg, #4CAF50, #81C784)",
                borderRadius: 30,
                paddingVertical: 14,
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "#000",
                shadowOpacity: 0.2,
                shadowRadius: 10,
                shadowOffset: { width: 0, height: 6 },
              }}
              textStyle={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: "bold",
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
