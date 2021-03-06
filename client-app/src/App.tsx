import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { validateLocaleAndSetLanguage } from 'typescript';
import { Icon, Header, List } from 'semantic-ui-react'

// npx create-react-app client-app --use-npm --template typescript

class App extends Component {
  state = {
    values: []
  };

  componentDidMount(){
    axios.get('http://localhost:5000/api/values')
      .then((response) => {
        this.setState({
          values: response.data
        })
      })

    // this.setState({
    //   values: [{id: 1, name: 'Value 101'}, {id: 2, name: 'Value 102'}]
    // });
  }

  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.values.map((value: any) => (
              <List.Item key="value.id">{value.id} -&gt; {value.name}</List.Item>
            ))}
        </List>
      </div>
    );
  }
}

export default App;
