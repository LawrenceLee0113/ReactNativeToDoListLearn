import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CheckBox({ value = false ,size = 16,style={},checkFunc=()=>{} }) {
    const [isCheck , setIsCheck] = useState(value);
    
    return (
        <TouchableOpacity style={[{padding:0,margin:0},style]} onPress={() => {setIsCheck(!isCheck);checkFunc();}}>
            <Text style={{fontSize: size+4}}>{isCheck ? "☑️" : "⬜"}</Text>
        </TouchableOpacity>
    );
}