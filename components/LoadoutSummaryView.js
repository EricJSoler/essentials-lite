import React from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';

var height= Dimensions.get('window').width - 50;
var width= Dimensions.get('window').width - 50;


// this class will be created with having its props set to have loadout 
// this.props.loadout will be an instance of HardCodedDB.js EmptyLoadout object
// it will contain all the properties as shown in HardCodedDB.js
export default class LoadoutSummaryView extends React.Component
{
    
    render()
    {
        return(
            // <View style={{flex: 1, backgroundColor: 'gray'}}>
            //     <Text> {this.props.loadout.displayName} </Text>
            // </View>
              <Card style={{flex: 1}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'https://cdn0.iconfinder.com/data/icons/smile-emoticons/78/smyle_emoticons-07-512.png'}} />
                    <Body>
                      <Text>{this.props.loadout.displayName}</Text>
                      <Text note>11/20/2017</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body>
                    <View style={{flex: 1}}>
                        <Image source={{uri: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/21150227_1840027879346738_9109414479665193630_n.jpg?oh=0c97db334d29d997d4fba8f2debae5a0&oe=5AA49B80'}} 
                            style={customStyles.backgroundImage}
                        />
                    </View>
                    <Text>
                    {this.props.loadout.description}
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
        width: width,
        height: height,
        justifyContent: 'center'
    }
  }