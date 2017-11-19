import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { Container, Thumbnail, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import {getTrendingList} from "../assets/HardCodedDB";
import LoadoutSummaryView from "../components/LoadoutSummaryView";

export default class MyHomeScreen extends React.Component {

  navigateToDetailsPageForLoadout(arrEntry)
  {
    this.props.navigation.navigate("Details", {loadout: arrEntry});
  }
  getRandomString()
  {
    return 'yo';
  }
  renderDataBaseLoadouts()
  {
    var trendingList = getTrendingList();
    var myNavigator = this.props.navigation; //this.props.navigation.navigate("Details", {loadout: arrEntry}) //'https://cdn0.iconfinder.com/data/icons/smile-emoticons/78/smyle_emoticons-07-512.png'
    return trendingList.map( (arrEntry, index, listItself) => {
      return (
        (
          <Card key={index} style={{flex: 1}} >
            <CardItem button onPress={() => this.navigateToDetailsPageForLoadout(arrEntry)}>
              <Left>
                <Thumbnail source={{uri: arrEntry.imageUri}} />  
                <Body>  
                  <Text>{arrEntry.displayName}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem button onPress={() => this.navigateToDetailsPageForLoadout(arrEntry)}>
              <Body>
                {/* <View style={{flex: 1}}> */}
                    {/* <Image source={{uri: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/21150227_1840027879346738_9109414479665193630_n.jpg?oh=0c97db334d29d997d4fba8f2debae5a0&oe=5AA49B80'}} 
                        style={customStyles.backgroundImage}
                    /> */}
                {/* </View> */}
                <Text>
                {arrEntry.description}
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.navigateToDetailsPageForLoadout(arrEntry)}>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>   
        )
      ); 
      }, this);

    //return arr.map((entry,index,origObject) => this.renderSingleLoadout(entry, index, origObject)); <Text>{item.displayName}</Text>
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>We got you</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate("Details", {loadOut: 'load1'})}>
              <Body>
                <Text>Check out what we got for you this week!</Text>
              </Body>
            </CardItem>
          </Card>
          {this.renderDataBaseLoadouts()}    
        </Content>
      </Container>
    );
  }
}

