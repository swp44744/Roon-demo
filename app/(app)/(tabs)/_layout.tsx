import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialCommunityIcons from '@expo/vector-icons'
import BlurTabBarBackground from '@/components/ui/TabBarBackground.ios';

const strings = {
  home: 'Home',
  explore: 'Explore',
  experts: 'Experts',
  settings: 'You',
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => <BlurTabBarBackground />,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: strings.home,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: strings.explore,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="s.circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="experts"
        options={{
          title: strings.experts,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="stethoscope" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: strings.settings,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="heart" color={color} />,
        }}
      />
    </Tabs>
  );
}
