import React, { Component } from 'react';
import List  from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

class Profile extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: "homer.simpson@wildcodeschool.pt",
            name: "Homer",
            lastname: "Simpson"
        }
    }

    render () {
        return (
            <div>
                <List>
                    <ListItem>
                    <ListItemText  
                        primary={this.state.email}
                        secondary={this.state.name}
                    />
                    </ListItem>
                </List>
                <Button />
            </div>
    )
    }
}

export default Profile;