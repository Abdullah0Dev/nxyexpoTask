import { View, Text, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import { images } from '../constants';
import Animated, { Layout, SlideInRight, SlideOutLeft } from 'react-native-reanimated';

export interface TaskItemProps {
  title: string;
  description: string;
  inProgress: boolean;
  image: ImageSourcePropType;
  score: number;
}

const TaskItem: React.FC<TaskItemProps> = ({
  title,
  description,
  inProgress,
  image,
  score,
}) => {
  return (
    <Animated.View
      entering={SlideInRight}
      exiting={SlideOutLeft}
      layout={Layout}
      className="flex flex-row w-full items-center justify-between py-2 rounded-2xl bg-white"
    >
      <View className="flex flex-row items-center justify-center gap-x-0">
        <Animated.Image
          entering={SlideInRight}
          exiting={SlideOutLeft}
          layout={Layout}
          source={image}
          className="h-20 rounded-xl"
          resizeMode="contain"
        />
        <View className="flex flex-col items-start gap-y-1">
          <Animated.Text
            entering={SlideInRight}
            exiting={SlideOutLeft}
            layout={Layout}
            className="text-xl font-semibold text-black"
          >
            {title}
          </Animated.Text>
          <Animated.Text
            entering={SlideInRight}
            exiting={SlideOutLeft}
            layout={Layout}
            className="text-base text-black-100"
          >
            {description}
          </Animated.Text>
          <View
            style={{ width: 140 }}
            className="bg-black-200 h-1 rounded-full flex items-start justify-start"
          >
            <Animated.View
              entering={SlideInRight}
              exiting={SlideOutLeft}
              layout={Layout}
              style={{ width: `${(score / 170) * 100}%` }}
              className="bg-blue-100 h-full rounded-full"
            />
          </View>
        </View>
      </View>
      {/* status */}
      <View className="flex flex-row justify-between">
        <View className="flex items-center">
          <Animated.Text
            entering={SlideInRight}
            exiting={SlideOutLeft}
            layout={Layout}
            className="text-lg font-bold py-1 px-2 rounded-lg bg-blue-200/10 text-blue-100"
          >
            {inProgress ? ' Im Gange' : ' offen '}
          </Animated.Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default TaskItem;
