import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// this class will be created with having its props set to have loadoutItem 
// this.props.loadoutItem will be an instance of HardCodedDB.js EmptyItem object
// it will contain all the properties as shown in HardCodedDB.js
export default class LoadoutItemView extends React.Component
{
    
    render()
    {
        return(
            <View>
                <Text>{this.props.loadoutItem.displayName}</Text>
            </View>
        )
    }
}