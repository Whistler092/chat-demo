import React, { Component } from 'react';
import User from './home/user';
import Chat from './home/chat';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div className='row'>
            <div className='col-sm-3'>
              	<User />
            </div>
            <div className='col-sm-9'>
                <Chat />
            </div>
        </div>
    );
  }
}
