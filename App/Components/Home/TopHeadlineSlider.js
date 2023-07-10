import { View, Text, FlatList, Touchable, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

export default function TopHeadlineSlider({newsList}) {

  const navigation = useNavigation();

  return (
    <View style={{marginTop: 15}}>
      <FlatList
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
          <TouchableOpacity  
          onPress={()=>navigation.navigate('read-news', {news: item})} 
          style={{width: Dimensions.get('screen').width*0.77, marginRight: 15}}
          >
            <Image source={{uri:item.urlToImage}} 
            style={{height:350, borderRadius: 10}} />
            <Text numberOfLines={3} style={{marginTop: 10, fontSize: 23, fontWeight: 'bold'}}>{item.title}</Text>
            <Text style={{marginTop: 5, color: Colors.primary}}>{item?.source?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}