import { View, Text, Image, Share } from 'react-native'
import {TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import Color from '../Shared/Color';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { ScrollView } from 'react-native-gesture-handler';

export default function ReadNews() {

    const news = useRoute().params.news;
    const navigation = useNavigation();
    useEffect(()=>{

    }, [])

    const shareNews=()=>{
      Share.share({
        message: news.title+"\nRead More"+news.description
      })
    }

  return (
    <ScrollView style={{backgroundColor: Color.white, flex: 1}}>
      <View style={{marginTop: 10, marginBottom: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />      
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>shareNews()}>
          <Entypo name="share" size={28} color="black" />    
        </TouchableOpacity>     
      </View>

      <Image source={{uri:news.urlToImage}} 
      style={{width: '100%', height: 300, borderRadius: 15}}
      />

      <Text style={{marginTop: 10, fontSize: 22, fontWeight: 'bold'}}>{news.title}</Text>
      <Text style={{marginTop: 10, color: Color.primary, fontSize: 16}}>{news.source.name}</Text>
      <Text style={{marginTop: 10, fontSize: 18, color: Color.gray, lineHeight: 30}}>{news.description}</Text>

      <TouchableOpacity onPress={()=>WebBrowser.openBrowserAsync(news.url)}>
        <Text style={{marginTop: 10, color:Color.primary, fontSize: 16, fontWeight: 'bold'}}>Read More</Text>
      </TouchableOpacity>
      
    </ScrollView>
  )
}