import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/globalProvider";
import { Redirect } from "expo-router";

const SignIn = () => {
  const { refetch, loading, isLoggedIn } = useGlobalContext();

  if (!loading && isLoggedIn) return <Redirect href="/" />;

  const handleLogin = async () => {
    const result = await login();

    if (result) {
      refetch();
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="h-4/6 w-full"
          resizeMode="contain"
        />

        <View className="px-10">
          <Text className="text-center font-rubik text-base uppercase text-black-200">
            Welcome to HomeSpan
          </Text>

          <Text className="mt-2 text-center font-rubikExtraBold text-3xl text-black-300">
            Let&apos;s Get You Closer To {"\n"}
            <Text className="font-rubikExtraBold text-primary-300">
              Your Dream Home
            </Text>
          </Text>
          <Text className="mt-12 text-center font-rubik text-lg text-black-200">
            Login to HomeSpan with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="shadow-zinc-300 mt-5 flex w-full flex-row items-center justify-center gap-5 rounded-full bg-white py-4 shadow-md"
          >
            <Image
              source={icons.google}
              className="size-5"
              resizeMode="contain"
            />
            <Text className="font-rubikMedium text-xl text-black-300">
              Sign Up with Google
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
