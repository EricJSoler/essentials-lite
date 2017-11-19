import React from "react";
import { StatusBar, View, Image } from "react-native";
import { Container, Thumbnail, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

export default class MyDetailsScreen extends React.Component {

renderLoadoutSummary(arrEntry, index)
{
  if(index === undefined)
  {
    index = 0;
  }

  return(
    (
      <Card key={index} style={{flex: 1}} >
        <CardItem >
          <Left>
            <Thumbnail source={{uri: 'https://cdn0.iconfinder.com/data/icons/smile-emoticons/78/smyle_emoticons-07-512.png'}} />
            <Body>
              <Text>{arrEntry.displayName}</Text>
              <Text note>11/20/2017</Text>
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

renderLoadoutItems(loadout)
{
  let itemsArr = loadout.items;
  console.log('rendering loadout items ' + itemsArr)
   return itemsArr.map((item,index,origObject) => {
    return (
      (
        <Card key={index} style={{flex: 1}}>
          <CardItem>
            <Left>
                {/* <Thumbnail source={{uri: 'https://cdn0.iconfinder.com/data/icons/smile-emoticons/78/smyle_emoticons-07-512.png'}} /> */}
                <Body> 
                <Text>{item.displayName}</Text>
                <Text note>11/20/2017</Text>
                </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
                {/* <View style={{flex: 1}}>
                    <Image source={{uri: 'http://2qibqm39xjt6q46gf1rwo2g1.wpengine.netdna-cdn.com/wp-content/uploads/2017/04/web1_M2-170424-EDH-ManOfTheYearFinalists-222x300.jpg'}} 
                        style={customStyles.backgroundImage}
                    />
                </View> */}
                <Text>
                {item.description}
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
  });
}

  render() {
    return (

      <Container>
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

const customStyles = {
  backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      width: 222,
      height: 300,
      justifyContent: 'center'
  }
}