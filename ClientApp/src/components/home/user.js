import React, { Component } from 'react';

class User extends Component {

    state = {
        users: [
            { id: 1, name: 'juergen' },
            { id: 3, name: 'marion' },
            { id: 2, name: 'peter' },
            { id: 4, name: 'mo' }]
    };

    render() {
        return <div className='panel panel-default'>
            <div className='panel-body'>
                <h3>Users online:</h3>
                <ul className='chat-users'>
                    {this.state.users.map(user =>
                        <li key={user.id}>{user.name}</li>
                    )}
                </ul>
            </div>
        </div>
    }
}

export default User;