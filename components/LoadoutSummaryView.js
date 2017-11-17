import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// this class will be created with having its props set to have loadout 
// this.props.loadout will be an instance of HardCodedDB.js EmptyLoadout object
// it will contain all the properties as shown in HardCodedDB.js
export default class LoadoutSummaryView extends React.Component
{
    
    render()
    {
        return(
            <View style={{flex: 1, backgroundColor: 'gray'}}>
                <Text> {this.props.loadout.displayName} </Text>
            </View>
        )
    }
}