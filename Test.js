import React from "react";
import { Text, View, ImageBackground } from "react-native";
import DropdownComponent from "./components/DropDown";

const fetchData = async (limit = 10) => {
    const response = await fetch(
        'https://65ba3f9fb4d53c0665526458.mockapi.io/teams'
    );
    const predata = await response.json();
    console.log(predata['AFK'])
}
fetchData()
const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

export const Test = () => {
    return (
        <View>
            <DropdownComponent data={data} />
        </View>
    );
}