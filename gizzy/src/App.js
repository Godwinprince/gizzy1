import React from 'react';
import axions from 'axios';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './contacts.php'; 



class App extends React.Component {
  
  constructor(props) {
  super(props);
  this.state = {
    contacts: []
  }
  }


  componentDidMount() {
    const url = 'http://localhost:3000/api/contact.php';
    axios.get(url).then(response => response.data).then((data) => {this.setState({ contacts: data });
      console.log(this.state.contacts);
      alert('llllllllllllyuteess');
     })

     alert('iiiiiiiiiiii'+this.state.contacts+'kkk')
  }

/* componentDidMount() {
    const url = '/api/contacts.php'
    axios.get(url).then(response => response.data).then((data) => {this.setState({ contacts: data })
      console.log(this.state.contacts)
     })
  }
*/
    handleFormSubmit( event ) {
        event.preventDefault();
        console.log(this.state);
    }

  render() {
    return (
        <React.Fragment>
        <h1>Contact Management</h1>
        <table border='1' width='100%' >
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>City</th>
            <th>Job</th>     
        </tr>

        {this.state.contacts.map((contact) => (
        <tr>
            <td>{ contact.name }</td>
            <td>{ contact.email }</td>
            <td>{ contact.country }</td>
            <td>{ contact.city }</td>
            <td>{ contact.job }</td>
        </tr>
        ))}
        </table>
        </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


export default App;

//INSERT INTO `contacts`(`name`, `email`, `city`, `country`, `job`) VALUES ('ESSIEN, EMMANUEL ESSIEN', 'essien@yahoo.com', 'Uyo', 'Nigeria', 'Santana')