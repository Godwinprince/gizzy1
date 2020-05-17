import React  from 'react';
import axions from 'axios';
import ReactDom from 'react-dom';


componentDidMount() {
  axios.get('https://dog.ceo/api/breeds/image/random');
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}
{
  status: "success",
  message: "https://images.dog.ceo/breeds/pembroke/n02113023_3167.jpg"
}
constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
    }
  }
componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      this.setState({ imageURL: response.data.message });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const { imageURL } = this.state;
    return (
      <img src={imageURL} />
    );
  }

ReactDom.render(<InDex />, document.getElementById('root'))
export default InDex;

