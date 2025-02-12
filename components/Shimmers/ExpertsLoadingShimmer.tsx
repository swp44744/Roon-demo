import React from 'react'
import ContentLoader, { Rect } from 'react-content-loader/native'
import { Dimensions, StyleSheet, View } from 'react-native'

const ExpertsLoadingShimmer = () => {
    const { width, } = Dimensions.get("window");
  const itemWidth = (width - 84) / 2
  const loaderWidth = width - 16
  return (
    <View style={styles.container}>
      <ContentLoader
        speed={2}
        width={width}
        height={600}
        viewBox={`0 0 ${loaderWidth} 576`}
        backgroundColor={'#051265'}
        foregroundColor={'#3d3de0'}>
        <Rect x="16" y="0" rx="6" ry="6" width={itemWidth} height={180} />
        <Rect
          x={itemWidth + 52}
          y="0"
          rx="6"
          ry="6"
          width={itemWidth}
          height={180}
        />

        <Rect x="16" y="200" rx="6" ry="6" width={itemWidth} height={180} />
        <Rect
          x={itemWidth + 52}
          y="200"
          rx="6"
          ry="6"
          width={itemWidth}
          height={180}
        />

        <Rect x="16" y="400" rx="6" ry="6" width={itemWidth} height={180} />
        <Rect x={itemWidth + 52} y="400" rx="6" ry="6" width={itemWidth} height={180} />
      </ContentLoader>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
})
export default ExpertsLoadingShimmer