import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function BlurTabBarBackground() {
  return (
    // <BlurView
    //   // System chrome material automatically adapts to the system's theme
    //   // and matches the native tab bar appearance on iOS.
    //   tint="light"
    //   intensity={80}
    //   style={StyleSheet.absoluteFill}
    // />
    <View style={[StyleSheet.absoluteFill, { backgroundColor: "#030042" }]} />
  );
}

export function useBottomTabOverflow() {
  const tabHeight = useBottomTabBarHeight();
  const { bottom } = useSafeAreaInsets();
  return tabHeight - bottom;
}
