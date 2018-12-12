import React, {Component} from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends Component{
    state = {
        showGamesPlayed:true,
    };

    toggleGamesPlayedPanel = () => {
        this.setState(oldSate => ({
            showGamesPlayed: !oldSate.showGamesPlayed,
        }));
    };

    render(){
        const {showGamesPlayed} = this.state;
        const {users} = this.props;

        const gamesPlayedButton = (
            <div>
                <button className="smallButton" onClick={this.toggleGamesPlayedPanel}>
                    {showGamesPlayed ? 'Hode': 'Show'}
                    the number of Games Played
                </button>
            </div>
        );

        return (
            <div>
                <h1>Users</h1>
                {users && users.length} > 0 ? gamesPlayedButton: ''}
                <ol>
                    {users.map(user => (
                        <User key={user.username}user={user} showGamesPlayed={showGamesPlayed}/>
                    ))}
                </ol>
            </div>
        );
    }
}

UserList.PropTypes = {
    users:PropTypes.array.isRequired,
};

export default UserList;