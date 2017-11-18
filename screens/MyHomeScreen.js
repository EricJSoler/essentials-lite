import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";


export default class MyHomeScreen extends React.Component {

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
            <CardItem>
              <Body>
                <Text>Check out what we got for you this week!</Text>
              </Body>
            </CardItem>
          </Card>

          
          <Card>          
            <CardItem button onPress={() => this.props.navigation.navigate("Details")}>
              <Body>
                <Text>Check out what we got for you this week!</Text>
              </Body>
            </CardItem>
          </Card>

          
        </Content>
      </Container>
    );
  }
}

