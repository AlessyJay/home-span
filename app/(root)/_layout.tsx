import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useGlobalContext } from "@/lib/globalProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, Slot } from "expo-router";

const AppLayout = () => {
  const { loading, isLoggedIn } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className="felx h-full items-center justify-center bg-white">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );
  }

  if (!isLoggedIn) return <Redirect href="/sign-in" />;

  return <Slot />;
};

export default AppLayout;
