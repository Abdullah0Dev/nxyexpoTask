import { View, Text, ViewProps, FlatList } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

interface CustomWrapperProps {
  children: ReactNode;
}

const CustomWrapper = ({ children, ...props }: CustomWrapperProps) => {
  const data = [{ key: "1" }];

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View className="mx-5 items-center h-full bg-[#FBFCFD]" {...props}>
            {children}
          </View>
        )}
      />
      <StatusBar backgroundColor={"#ffffff"}  barStyle={"dark-content"}  />
    </SafeAreaView>
  );
};

export default CustomWrapper;
