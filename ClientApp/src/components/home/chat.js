import React, { Component } from 'react';
import moment from 'moment';

class Chat extends Component {

    constructor() {
        super();
        this.state = {
            messages: [],// messages: ChatMessage[];
            currentMessage: ''
        }

        //this.handlePanelRef = this.handlePanelRef.bind(this);
        //this.handleMessageRef = this.handleMessageRef.bind(this);
    }

    handleMessageChange = event => {
        this.setState({ currentMessage: event.target.value });
    }


    handlePanelRef = (div) => {
        this.panel = div;
    }

    handleMessageRef = (input) => {
        this.msg = input;
    }

    onSubmit = event => {
        event.preventDefault();
        this.addMessage();
    }

    addMessage() {
        let currentMessage = this.state.currentMessage;
        if (currentMessage.length === 0) {
            return;
        }
        let id = this.state.messages.length;
        let date = new Date();
    
        let messages = this.state.messages;
        messages.push({
            id: id,
            date: date,
            message: currentMessage,
            sender: 'juergen'
        })
        this.setState({
            messages: messages,
            currentMessage: ''
        });
        this.msg.focus();
        this.panel.scrollTop = this.panel.scrollHeight - this.panel.clientHeight;
    }

    render() {
        return <div className='panel panel-default'>
            <div className='panel-body panel-chat'
                ref={this.handlePanelRef}>
                <ul>
                    {this.state.messages.map(message =>
                        <li key={message.id}><strong>{message.sender} </strong>
                            ({moment(message.date).format('HH:mm:ss')})<br />
                            {message.message}</li>
                    )}
                </ul>
            </div>
            <div className='panel-footer'>
                <form className='form-inline' onSubmit={this.onSubmit}>
                    <label className='sr-only' htmlFor='msg'>Message</label>
                    <div className='input-group col-md-12'>
                        <button className='chat-button input-group-addon'>:-)</button>
                        <input type='text' value={this.state.currentMessage}
                            onChange={this.handleMessageChange}
                            className='form-control'
                            id='msg'
                            placeholder='Your message'
                            ref={this.handleMessageRef} />
                        <button className='chat-button input-group-addon'>Send</button>
                    </div>
                </form>
            </div>
        </div>;
    }
}
export default Chat;