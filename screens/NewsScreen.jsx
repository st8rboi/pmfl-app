import React from "react";
import { Text, View } from "react-native";
import ArticleItem from "../components/Article";
import { FlatList, TouchableOpacity } from "react-native";
import news from '../assets/news/arctiles.json'

export const News = () => {
    return (
        <View>
            <FlatList
                data={news}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => alert('hello')}>
                        <ArticleItem
                            title={item.title}
                            lead={item.lead}
                            text={item.text}
                            img_url={item.image_url}
                            data={item.data}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}