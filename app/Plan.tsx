import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import * as ImagePicker from 'expo-image-picker';
import { images } from '../constants';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { CustomWrapper } from '../components';
import { useRouter } from 'expo-router';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';

const PlanScreen = () => {
  const router = useRouter();

  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [imageUris, setImageUris] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [toggleMenus, setToggleMenus] = useState<boolean[]>([]);

  const pickImage = async () => {
    setLoading(true);
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUris((prevUris) => [...prevUris, result.assets[0].uri]);
      setToggleMenus((prevToggleMenus) => [...prevToggleMenus, false]);
    }
    setLoading(false);
  };

  const handleToggleMenu = (index: number) => {
    setToggleMenus((prevToggleMenus) => {
      const newToggleMenus = [...prevToggleMenus];
      newToggleMenus[index] = !newToggleMenus[index];
      return newToggleMenus;
    });
  };

  const handleDateSelect = (day: any) => {
    setDate(day.dateString);
    setShowCalendar(false);
  };

  const handleCancelUpload = (uri: string, index: number) => {
    setImageUris((prevUris) => prevUris.filter((imageUri) => imageUri !== uri));
    setToggleMenus((prevToggleMenus) => prevToggleMenus.filter((_, i) => i !== index));
  };

  const handleChangeUpload = () => {
    pickImage();
  };

  return (
    <CustomWrapper>
      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        layout={Layout}
        className="flex py-3 w-full flex-row justify-between items-center"
      >
        <Pressable
          onPress={() => router.back()}
          className="flex justify-center rounded-full items-center p-3 bg-blue-200/10"
        >
          <AntDesign name="left" color={'#000'} size={30} />
        </Pressable>
        <Entypo name="dots-three-horizontal" color={'#000'} size={27} />
      </Animated.View>
      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        layout={Layout}
        className={"w-full mt-1"}
      >
        <TextInput
          placeholder="Hier Titel eingeben"
          placeholderTextColor={'#000'}
          multiline={true}
          value={title}
          onChangeText={setTitle}
          style={{ textAlignVertical: 'top' }}
          className="border-gray-400 text-black w-full mb-4 flex-wrap font-bold text-wrap text-2xl self-start"
        />
      </Animated.View>

      <View className="flex py-3 flex-row justify-between bg-white w-full px-2 items-center">
        <Text className="text-xl font-bold text-black">Datum festlegen</Text>
        <TouchableOpacity
          onPress={() => setShowCalendar(!showCalendar)}
          className="flex justify-center items-center"
        >
          <Text className="text-lg text-center font-bold py-1 px-2 rounded-lg bg-blue-200/10 text-blue-100">
            {date || 'TT.MM.JJJJ'}
          </Text>
        </TouchableOpacity>
      </View>

      {showCalendar && (
        <View className="bg-white p-4 rounded-lg">
          <Calendar
            onDayPress={handleDateSelect}
            markedDates={{
              [date]: { selected: true, selectedColor: '#0A7AFF' },
            }}
          />
        </View>
      )}

      <View className="mb-4 w-full">
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          layout={Layout}
        >
          <Text className="text-xl text-black font-semibold my-5">
            Lade hier deinen Trainingsplan hoch
          </Text>
        </Animated.View>
        <TouchableOpacity
          onPress={pickImage}
          className={`${
            loading || imageUris.length ? 'bg-white' : 'h-52'
          } border border-gray-400 w-full justify-center bg-blue-200/10 p-4 rounded-lg items-center`}
        >
          {loading ? (
            <ActivityIndicator size="large" color="#0A7AFF" />
          ) : (
            <Animated.View
              entering={FadeIn}
              exiting={FadeOut}
              layout={Layout}
              className="flex flex-col gap-y-1 items-center justify-center"
            >
              <AntDesign name="upload" color={'#0A7AFF'} size={32} />
              <Text className="text-xl text-black-200">
                Hier tippen zum Hochladen
              </Text>
            </Animated.View>
          )}
        </TouchableOpacity>
      </View>

      {imageUris.map((uri, index) => (
        <Animated.View
          key={index}
          entering={FadeIn}
          exiting={FadeOut}
          layout={Layout}
          className="my-4 w-full relative"
        >
          <Image source={{ uri }} className="w-full h-52 rounded-lg" />
          <Pressable
            onPress={() => handleToggleMenu(index)}
            className="absolute top-3 z-10 right-4 p-3 rounded-xl bg-black-100"
          >
            <Entypo name="dots-three-horizontal" color={'#000'} size={27} />
          </Pressable>
          {toggleMenus[index] && (
            <View className="z-30 absolute top-20 right-4 items-center px-4 bg-white rounded-xl flex-col flex gap-y-1">
              <Pressable onPress={handleChangeUpload}>
                <Text className="w-full mt-1 h-12 text-blue-100 text-xl font-bold">
                  Ersetzen
                </Text>
              </Pressable>
              <Pressable
                onPress={() => handleCancelUpload(uri, index)}
                className="border-t-2 pt-1 justify-center items-center flex border-black/30 w-full"
              >
                <Text className="w-full h-12 text-center text-red text-xl font-bold">
                  Löschen
                </Text>
              </Pressable>
            </View>
          )}
        </Animated.View>
      ))}
    </CustomWrapper>
  );
};

export default PlanScreen;
