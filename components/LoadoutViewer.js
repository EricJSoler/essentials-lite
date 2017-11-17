import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LoadoutItemView from "./LoadoutItemView";
import LoadoutSummaryView from "./LoadoutSummaryView";


export default class LoadoutViewer extends React.Component
{
    
    render()
    {
        return(
            <ScrollView>
                {this.renderLoadoutSummary()}
                {this.renderItems()}        
            </ScrollView>
        )
    }



    renderLoadoutSummary()
    {
        return(
            <LoadoutSummaryView loadout={this.props.loadoutData} />
        )
    }

    renderSingleEntry(entry, index, origObject)
    {
        console.log(entry);
        return (
            (
                <LoadoutItemView key={index} loadoutItem={entry}/> 
            )
        );
    }

    renderItems()
    {
        let arr = this.props.loadoutData.entryList;
        console.log(arr);
        return arr.map((entry,index,origObject) => this.renderSingleEntry(entry, index, origObject));

    }

}