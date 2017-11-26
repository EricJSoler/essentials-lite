import React from 'react';
import { StyleSheet, Text, View, ScrollView, Keyboard } from 'react-native';
import {getEntries} from '../assets/HardCodedDB';
import {Header,Item,Icon,Input,Button} from 'native-base';
import LoadoutViewer from '../components/LoadoutViewer';

export default class SearchHardCodedDBScreen extends React.Component
{
    state = {
		searchBarText: "",
		onCall: false,
		loadoutData: undefined
    }
   
    searchHardCodedDB = () =>{
        this.setState({onCall: true});
        Keyboard.dismiss();
		if(this.state.searchBarText === ""){
            console.log('empty search string');
			return;
		}
        console.log('Searching data for: [' + this.state.searchBarText + "]" );
        var tempLoadoutData = getEntries(this.state.searchBarText);
		this.setState({loadoutData: tempLoadoutData});
        this.setState({onCall: false});
    }

    renderBody = () =>{
		if(this.state.onCall){
			return(
                <View style={{flex:1}}>
                    <Text> Loading </Text>
                </View>
			)
		}
        else if(this.state.loadoutData != undefined)
        {
            return(
                <LoadoutViewer loadoutData={this.state.loadoutData} />
			)
        }
        else
        {
			return(
                <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
				    <Text> Search Meee </Text>
                </View>
			)
		}
	}
    
	render(){
		return(
			<View style={{flex: 1}}>
				<Header
					searchBar
					rounded
				>
					<Item>
						<Icon name="ios-search" onPress={this.searchHardCodedDB}/>
						<Input 
							value={this.state.searchBarText}
							placeholder="Search Essentials"
							onChangeText={(searchBarText)=>this.setState({searchBarText})}
						/>
					</Item>
                    <Button transparent onPress={this.searchHardCodedDB}>
                        <Text>Search</Text>
                    </Button>
				</Header>
				{this.renderBody()}
			</View>
		)
	}


}




// sloc)  1.33 KB
// //import stuff
// import React from 'react';
// import {View,Text} from 'react-native';
// import {Header,Item,Icon,Input,Button} from 'native-base';
// import PokeLoader from './PokeLoader';
// import SearchBody from './SearchBody';
// import axios from 'axios';

// //create stuff
// class Search extends React.Component{
// 	state = {
// 		pokeSearch: "",
// 		onCall: true,
// 		data: {}
// 	}
// 	searchPoke = () =>{
// 		this.setState({onCall: true});
// 		if(this.state.pokeSearch === ""){
// 			return;
// 		}
// 		var self = this;
// 		axios.get("http://pokeapi.co/api/v2/pokemon/"+this.state.pokeSearch.toLowerCase())
// 		.then(function(response){
// 			console.log(response.data);
// 			self.setState({data: response.data});
// 			self.setState({onCall: false});
// 		})
// 		.catch(function(error){
// 			console.log(error);
// 		});
// 	}
// 	renderBody = () =>{
// 		if(this.state.onCall){
// 			return(
// 				<PokeLoader />
// 			)
// 		}
// 		else{
// 			return(
// 				<SearchBody data={this.state.data}/>
// 			)
// 		}
// 	}

// }