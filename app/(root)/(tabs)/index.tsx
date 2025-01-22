import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-3xl my-10 font-rubik">
        Welcome to LandScaling
      </Text>
      <Link href="/explore" className="text-2xl my-5">
        Explore
      </Link>
      <Link href="/sign-in" className="text-2xl">
        SignIn
      </Link>
      <Link href="/property/1" className="text-2xl">
        Property
      </Link>
    </View>
  );
}
