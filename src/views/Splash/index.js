import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CustomInput from './../../components/CustomInput';
import CustomButton from './../../components/CustomButton';
import { Translate } from 'react-localize-redux';
import { ScrollView } from 'react-native-gesture-handler';

class Splash extends Component {
	onChangeField = (text, label, error) => {
		console.log(text, label, error);
	};

	onPress() {
		console.log('Pressato');
	}

	render() {
		return (
			<ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
				<Text>
					<Translate id="welcome" />
				</Text>
				<CustomInput
					label="email"
					showLabel={false}
					type="email"
					placeholder="inserisci email"
					onChangeField={this.onChangeField}
				/>
				<CustomInput
					label="password"
					type="password"
					placeholder="inserisci password"
					onChangeField={this.onChangeField}
				/>
				<CustomInput label="name" type="text" placeholder="inserisci nome" onChangeField={this.onChangeField} />
				<CustomInput
					label="phone"
					type="phone"
					placeholder="inserisci telefono"
					onChangeField={this.onChangeField}
				/>

				<CustomButton text="bottone" onPress={() => this.onPress()} />
			</ScrollView>
		);
	}
}

export default Splash;
