import { View, Text, Image, Pressable, FlatList } from 'react-native';
import React from 'react';
import { images } from '../constants';
import { CustomWrapper, TaskItem } from '../components';
import { FontAwesome5, Entypo, AntDesign } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import Animated, { FadeInLeft, FadeInRight, Layout, SlideInRight, SlideOutLeft } from 'react-native-reanimated';

const taskData = [
  {
    title: 'Kurs: Phase 01',
    description: 'Erledigt zu 70%',
    inProgress: true,
    image: images.taskImg,
    score: 70,
  },
  {
    title: 'Kurs: Phase 02',
    description: 'Erledigt zu 0%',
    inProgress: false,
    image: images.taskImg,
    score: 0,
  },
  {
    title: 'Kurs: Phase 03',
    description: 'Erledigt zu 0%',
    inProgress: false,
    image: images.taskImg,
    score: 0,
  },
];

const HomeScreen = () => {
  const router = useRouter();

  return (
    <CustomWrapper>
      {/* header */}
      <Animated.View
        entering={FadeInRight}
        exiting={FadeInRight}
        layout={Layout}
        className="flex py-3 w-full flex-row justify-between"
      >
        <Animated.Text
          entering={SlideInRight}
          exiting={SlideOutLeft}
          layout={Layout}
          className="text-2xl font-bold text-black"
        >
          Willkommen, Arthur!
        </Animated.Text>
        <Animated.Image
          entering={SlideInRight}
          exiting={SlideOutLeft}
          layout={Layout}
          source={images.profile}
          className="w-12 h-12 rounded-full object-contain"
        />
      </Animated.View>
      {/* tasks */}
      <View className="flex flex-col self-center mr-7 w-full gap-y-2">
        <FlatList
          data={taskData}
          renderItem={({ item }) => (
            <Animated.View
              entering={SlideInRight}
              exiting={SlideOutLeft}
              layout={Layout}
            >
              <TaskItem
                image={item.image}
                title={item.title}
                description={item.description}
                inProgress={item.inProgress}
                score={item.score}
              />
            </Animated.View>
          )}
        />
      </View>
      {/* Uberblick */}
      <Animated.Text
        entering={SlideInRight}
        exiting={SlideOutLeft}
        layout={Layout}
        className="text-start text-xl py-4 text-black font-bold"
      >
        Überblick über deine Trainingspläne
      </Animated.Text>
      <Animated.View
        entering={SlideInRight}
        exiting={SlideOutLeft}
        layout={Layout}
        className="flex flex-row w-full items-center bg-white py-4 rounded-xl px-2 justify-between"
      >
        <View className="flex justify-center rounded-xl items-center p-3 bg-blue-200/10">
          <FontAwesome5 name="calendar-alt" color={'#578DEB'} size={27} />
        </View>
        <Pressable onPress={() => router.push('/Plan')}>
          <Animated.Text
            entering={SlideInRight}
            exiting={SlideOutLeft}
            layout={Layout}
            className="text-lg text-center text-black font-semibold"
          >
            Neuen Trainingsplan hochladen
          </Animated.Text>
        </Pressable>
        <AntDesign name="right" size={20} color={'#B6B7B8'} />
      </Animated.View>
      {/* arrows */}
      <Animated.View
        entering={SlideInRight}
        exiting={SlideOutLeft}
        layout={Layout}
        className="flex flex-row justify-center gap-x-5 ml-9 self-end w-40 h-16 items-center"
      >
        <AntDesign name="left" size={21} color={'#B6B7B8'} />
        <Animated.Text
          entering={SlideInRight}
          exiting={SlideOutLeft}
          layout={Layout}
          className="text-black-200 text-base"
        >
          1 von 3
        </Animated.Text>
        <AntDesign name="right" size={21} color={'#B6B7B8'} />
      </Animated.View>
      {/* plans */}
      <Animated.View
        entering={SlideInRight}
        exiting={SlideOutLeft}
        layout={Layout}
        className="flex flex-col w-full rounded-2xl shadow mb-5"
      >
        <Pressable className="flex py-3 flex-row justify-between bg-white w-full px-2 items-center">
          <Animated.Text
            entering={SlideInRight}
            exiting={SlideOutLeft}
            layout={Layout}
            className="text-xl font-bold text-black"
          >
            Physio Trainer Max
          </Animated.Text>
          <View className="flex justify-center items-center">
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft}
              layout={Layout}
              className="text-lg text-center font-bold py-1 px-2 rounded-lg bg-blue-200/10 text-blue-100"
            >
              14.10.2024
            </Animated.Text>
          </View>
        </Pressable>
        {/* img */}
        <Animated.Image
          entering={SlideInRight}
          exiting={SlideOutLeft}
          layout={Layout}
          source={images.plan1}
          className="w-full h-52 rounded-t-3xl"
        />
        {/* btn */}
        <Pressable>
          <Animated.Text
            entering={SlideInRight}
            exiting={SlideOutLeft}
            layout={Layout}
            className="text-2xl text-blue-100 font-bold text-center py-3"
          >
            Plan ansehen
          </Animated.Text>
        </Pressable>
      </Animated.View>
      {/* plan 2 */}
      <Animated.View
        entering={SlideInRight}
        exiting={SlideOutLeft}
        layout={Layout}
        className="flex flex-col w-full rounded-2xl shadow mb-5"
      >
        <View className="flex py-3 flex-row justify-between bg-white w-full px-2 items-center">
          <Animated.Text
            entering={SlideInRight}
            exiting={SlideOutLeft}
            layout={Layout}
            className="text-xl font-bold text-black"
          >
            Physio Trainer Max
          </Animated.Text>
          <View className="flex justify-center items-center">
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft}
              layout={Layout}
              className="text-lg text-center font-bold py-1 px-2 rounded-lg bg-blue-200/10 text-blue-100"
            >
              14.10.2024
            </Animated.Text>
          </View>
        </View>
        <View className="flex flex-row w-full shadow-md items-center bg-white py-4 rounded-xl px-2 justify-between">
          <View className="flex flex-row items-center justify-start gap-x-2">
            <View className="flex justify-center rounded-xl items-center p-2 bg-blue-200/10">
              <AntDesign name="filetext1" color={'#578DEB'} size={27} />
            </View>
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft}
              layout={Layout}
              className="text-lg text-black font-semibold"
            >
              Trainingsplan.pdf
            </Animated.Text>
          </View>
          <Entypo name="dots-three-horizontal" color={'#000'} size={27} />
        </View>
        {/* btn */}
      </Animated.View>
    </CustomWrapper>
  );
};

export default HomeScreen;
