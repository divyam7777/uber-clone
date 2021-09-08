import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import tw from "tailwind-react-native-classnames"
import NavOptions from '../components/NavOptions'

const Homescreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5 pl-7`}>
                <Image 
                    style = {{
                        height:80,
                        width:80,
                        resizeMode: 'contain',
                        marginTop:-10,
                        marginLeft:10,
                    }}
                    source={{
                        uri:"https://1000logos.net/wp-content/uploads/2021/04/Uber-logo.png",
                    }}

                />
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default Homescreen

const styles = StyleSheet.create({})
