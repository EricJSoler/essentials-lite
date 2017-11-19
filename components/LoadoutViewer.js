import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LoadoutItemView from "./LoadoutItemView";
import LoadoutSummaryView from "./LoadoutSummaryView";
import {Container, Content} from 'native-base';

export default class LoadoutViewer extends React.Component
{
    
    render()
    {
        return(
            <Container>
                <Content>
                    {this.renderLoadoutSummary()}
                    {this.renderItems()}        
                </Content>
            </Container>
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
        let arr = this.props.loadoutData.items;
        console.log(arr);
        return arr.map((entry,index,origObject) => this.renderSingleEntry(entry, index, origObject));

    }

}