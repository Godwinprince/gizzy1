import React, { Component } from 'react';
import axions from 'axios';
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text } from 'react'
import ReactDom from 'react-dom';



class InDex extends React.Component {
		render(){
		return(
				<div>eee</div>
			)
	}
}

constructor(props){
	super(props)
	this.state = {
		UserName: '',
		UserEmail: '',
		UserPassword: ''
	}
}

UserRegistrationfunction  = () => {
const {username} = this.state;
const {useremail} = this.state;
const {userpassword} = this.state;

fetch('https://http://localhost/top/students/lesson.php', {
	method: 'post',
	headers: {
		'Accept': 'application/json',
		'Content-Type':'application/json',
	},
body: JSON.stringify({
	name: UserName,
	email: UserEmail,
	password: UserPassword
})
}).then((response) => response.json())
	.then((responsejson) => {
		Alert.alert(responsejson);
	}).catch((error) => {
		console.error(error);
	});

}

ReactDom.render(<InDex />, document.getElementById('root'))
export default InDex;

