import React from "react";
import { StatusBar, View, Image } from "react-native";
import { Container, Thumbnail, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { WebBrowser, AppLoading, Font, Asset} from 'expo';
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

export default class MyDetailsScreen extends React.Component {

  state =
  {
    isReady: false
  };

  async _loadAssetsAsync() {
    
    var itemsList = this.props.navigation.state.params.loadout;
    var imageArray = [];
    for (var i = 0; i <  itemsList.length; i++) {
      imageArray.push( itemsList[i].imageUri);
    }      

    const imageAssets = cacheImages(imageArray);
  
    const fontAssets = cacheFonts([FontAwesome.font]);
    
    await Promise.all([...imageAssets, ...fontAssets]);
  }

renderLoadoutSummary(arrEntry, index)
{
  if(index === undefined)
  {
    index = 0;
  }

  var author = arrEntry.author;
  if(author === undefined)
  {
    console.log('warning: author was undefined when rendering loadout summary');
    author = '';
  }

  return(
    (
      <Card key={index} style={{flex: 1}} >
        <CardItem >
          <Left>
            <Thumbnail source={{uri: arrEntry.imageUri}} />
            <Body>
              <Text>{arrEntry.displayName}</Text>
              <Text note>{author}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem >
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
  ); 
}

_handleItemPress(item)
{
  console.log('opening uri: [' + item.adUri + ']');
  WebBrowser.openBrowserAsync(
    item.adUri
  );
}

renderLoadoutItems(loadout)
{
  let itemsArr = loadout.items;
  console.log('rendering loadout items ' + itemsArr);

   return itemsArr.map((item,index,origObject) => {
    return (
      (
        <Card key={index} style={{flex: 1}}>
          <CardItem button onPress={ () => this._handleItemPress(item)}>
            <Left>
                {/* <Thumbnail source={{uri: 'https://cdn0.iconfinder.com/data/icons/smile-emoticons/78/smyle_emoticons-07-512.png'}} /> */}
                {/* <Body>  */}
                <Button transparent textStyle={{color: '#87838B'}} onPress={ () => this._handleItemPress(item)}>
                  <Icon name='checkbox' />
                </Button>
                
                <Text>{item.displayName}</Text>
                {/* </Body> */}
            </Left>
          </CardItem>
          <CardItem  >
            <Body>
              <View style={{flex: 1, width: 200, height: 200, margin: 5}}>         

                <Image 
                style={{flex:1, height: undefined, width: undefined, resizeMode: 'contain'}}
                  source={{uri: item.imageUri}}
                />
                </View>
                <Text>
                  {item.description}
                </Text>
            </Body>
          </CardItem>
          <CardItem button onPress={ () => this._handleItemPress(item)}>
            <Left>
                <Button transparent textStyle={{color: '#87838B'}} onPress={ () => this._handleItemPress(item)}>
                <Icon name="cart" />
                <Text>Click to Buy!</Text>
                </Button>
            </Left>
          </CardItem>
        </Card>
      )
    );
  });
}

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync.bind(this)}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    else
    {
      return (
        <Container >
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>DetailsScreen</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            {this.renderLoadoutSummary(this.props.navigation.state.params.loadout)}
            {this.renderLoadoutItems(this.props.navigation.state.params.loadout)}
          </Content>
        </Container>
      );
    }
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