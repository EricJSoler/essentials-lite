import React from 'react';
import {View,  Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';
// this class will be created with having its props set to have loadoutItem 
// this.props.loadoutItem will be an instance of HardCodedDB.js EmptyItem object
// it will contain all the properties as shown in HardCodedDB.js
export default class LoadoutItemView extends React.Component
{
    
    render()
    {
        return(
        <Card style={{flex: 1}}>
        <CardItem>
        <Left>
            {/* <Thumbnail source={{uri: 'https://cdn0.iconfinder.com/data/icons/smile-emoticons/78/smyle_emoticons-07-512.png'}} /> */}
            <Body>
            <Text>{this.props.loadoutItem.displayName}</Text>
            <Text note>11/20/2017</Text>
            </Body>
        </Left>
        </CardItem>
        <CardItem>
        <Body>
            <View style={{flex: 1}}>
                <Image source={{uri: 'http://2qibqm39xjt6q46gf1rwo2g1.wpengine.netdna-cdn.com/wp-content/uploads/2017/04/web1_M2-170424-EDH-ManOfTheYearFinalists-222x300.jpg'}} 
                    style={customStyles.backgroundImage}
                />
            </View>
            <Text>
            {this.props.loadoutItem.description}
            </Text>
        </Body>
        </CardItem>
        <CardItem>
            <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="logo-github" />
                <Text>1,926 stars</Text>
                </Button>
            </Left>
            </CardItem>
        </Card>
        )
    }
}

const customStyles = {
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: 222,
        height: 300,
        justifyContent: 'center'
    }
  }