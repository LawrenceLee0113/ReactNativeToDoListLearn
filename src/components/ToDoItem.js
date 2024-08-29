import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import CheckBox from "./CheckBox";

export default function ToDoItem({ children = "", check = false ,size = 16, style = {},checkFunc=()=>{} }) {
    // const [isCheck , setIsCheck] = useState(value);
    
    return (
        <View style={[styles.container,style]}>
            <CheckBox value={check} size={size} style={{marginRight:20}} checkFunc={checkFunc}/>

            <Text style={{justifyContent:"center",alignItems:"center",fontSize:size}}>
            { children }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: "#999",
        padding: 10,
    },
});
