import { View, Text ,StatusBar,Image,SafeAreaView,TextInput, Touchable, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
const img1=require("../assets/images/photo1.png")
const img=require("../assets/images/sunny.png")
const index = () => {
  const[show,row]=useState(false);
  const [r,s]=useState([1,2,3]);
  return (
    <View className='flex-1 '>
    <StatusBar barStyle="dark-content" />
    <Image blurRadius={2} className='absolute h-full w-full -z-50' source={img1}/>
    <SafeAreaView >
      <TextInput placeholder='search city' placeholderTextColor={'white'}
      className='text-white pl-4 h-15 bg-neutral-300 m-4 mb-0 rounded-xl shadow-inner'
      onPress={()=>row(!show)}/>
       { show?( 
         <View className='bg-white ml-5 mt-1 mr-5 rounded-md p-3'>
         {r.map((loc,index)=>{
       return(
         <TouchableOpacity className='border-b'>
           <Text className='italic font-bold text-xl '>usa</Text>
         </TouchableOpacity>
       )
      }
       )}
       </View>
       ):null
        }
    </SafeAreaView>
    <View className=' m-10 items-center  mb-0 pb-0'>
      <Text className='text-9xl text-white mb-0 '>USA</Text>
    </View>
    <View  className='flex-2  h-2/4 w-full mt-0 m-4'
    >
     <Image source={img} className='h-4/5 w-4/5 m-12 pl-10 '  />
    </View>
    <View className='flex-auto items-center'>
      <Text className='text-white pt-20 text-5xl'>23</Text>
    </View>
    </View>
  )
}
export default index
