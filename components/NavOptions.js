import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from "tailwind-react-native-classnames"

const data = [
    {
        id : "1",
        title : "Get a ride",
        image : "https://links.papareact.com/3pn",
        screen : "MapScreen"
    },
    {
        id : "2",
        title : "Get a food",
        image : "https://links.papareact.com/28w",
        screen : "MapScreen"//dont work as of now.
    },
]

const NavOptions = () => {
    
    return (
        <FlatList
        data={data}
        horizontal
        keyExtractors={(item)=>item.id}
        renderItem={({item})=>(
            <TouchableOpacity style = {tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 rounded-lg `}>
                <View>
                    <Image
                        style = {{ width : 120 , height : 120 , resizeMode: "contain"}}
                        source={{ uri: item.image}} 
                    />
                </View>
                <Text style = {tw`mt-2 text-lg font-bold`}>{item.title}</Text>
            </TouchableOpacity>
        )}
        />
    )
}

export default NavOptions

const styles = StyleSheet.create({})
