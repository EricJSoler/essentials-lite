import React from "react";
import { StatusBar, Image,TouchableOpacity } from "react-native";
import { Container, Thumbnail,  Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import {getTrendingList} from "../assets/HardCodedDB";
import LoadoutSummaryView from "../components/LoadoutSummaryView";
import { AppLoading, Font, Asset } from 'expo';
import { FontAwesome } from '@expo/vector-icons';

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      console.log('dont know how to fetch non string img');
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class MyHomeScreen extends React.Component {

  state =
  {
    isReady: false
  };

  async _loadAssetsAsync() {

    var trendingList = getTrendingList();
    var imageArray = [];
    for (var i = 0; i < trendingList.length; i++) {
      imageArray.push(trendingList[i].imageUri);
    }      
    const imageAssets = cacheImages(imageArray);
  
    const fontAssets = cacheFonts([FontAwesome.font]);
    
    await Promise.all([...imageAssets, ...fontAssets]);
  }


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
    var myNavigator = this.props.navigation; //TODO: can i remove? this.props.navigation.navigate("Details", {loadout: arrEntry}) //'https://cdn0.iconfinder.com/data/icons/smile-emoticons/78/smyle_emoticons-07-512.png'
    
    return trendingList.map( (arrEntry, index, listItself) => {
      var author = arrEntry.author;
      if(author === undefined)
      {
        author = '';
      }

      return (
        (
          <Card key={index} style={{flex: 1}} >
            <CardItem button onPress={() => this.navigateToDetailsPageForLoadout(arrEntry)}>
              <Left>
                <Thumbnail source={{uri: arrEntry.imageUri}} />  
                <Body>  
                  <Text>{arrEntry.displayName}</Text>
                  <Text note>{author}</Text>
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
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    else
    {
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
                  <Button  small light onPress={() => this.props.navigation.navigate("SignInScreenAdmin")}>
                      <Text>Click Me!</Text>
                  </Button>
                </Body>
              </CardItem>
            </Card>
            {this.renderDataBaseLoadouts()}    
          </Content>
        </Container>
      );
    }
  }
}
