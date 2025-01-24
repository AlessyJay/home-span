import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { settings } from "@/constants/data";
import { useGlobalContext } from "@/lib/globalProvider";
import { logout } from "@/lib/appwrite";

const SettignsItems = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemsProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-row items-center justify-between py-3"
    >
      <View className="flex flex-row items-center gap-3">
        <Image source={icon} className="size-6" />
        <Text
          className={`font-rubikMedium text-lg text-black-300 ${textStyle}`}
        >
          {title}
        </Text>
      </View>

      {showArrow && <Image source={icons.rightArrow} className="size-5" />}
    </TouchableOpacity>
  );
};

const profile = () => {
  const { user, refetch } = useGlobalContext();

  const handleLogout = async () => {
    const result = await logout();

    if (result) {
      Alert.alert("Success", "Logout successfully");
      refetch();
    } else {
      Alert.alert("Error", "Failed to logout");
    }
  };
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="mt-5 flex flex-row items-center justify-between">
          <Text className="font-rubikBold text-xl">Profile</Text>
          <Image source={icons.bell} className="size-5" />
        </View>

        <View className="mt-5 flex flex-row justify-center">
          <View className="relative mt-5 flex flex-col items-center">
            <Image
              source={{ uri: user?.avatar }}
              className="relative size-44 rounded-full"
            />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>

            <Text className="mt-2 font-rubikBold text-2xl">{user?.name}</Text>
          </View>
        </View>

        <View className="mt-10 flex flex-col">
          <SettignsItems title="My Bookings" icon={icons.calendar} />
          <SettignsItems title="Payments" icon={icons.wallet} />
        </View>

        <View className="mt-5 flex flex-col border-t border-primary-200 pt-5">
          {settings.slice(2).map((item, index) => (
            <SettignsItems key={index} {...item} />
          ))}
        </View>

        <View className="mt-5 flex flex-col border-t border-primary-200 pt-5">
          <SettignsItems
            icon={icons.logout}
            title="Logout"
            textStyle="text-danger"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
