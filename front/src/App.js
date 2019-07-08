import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import SignUp from './SignUp';
import SignIn from './SignIn';
import Profile from './Profile';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';

const theme = createMuiTheme();

function App() {
  return (
    <MuiThemeProvider theme={theme} >
      <Grid  container
        alignItems='center'
        style={{ height:  '100%' }}>
          <Grid  item  xs={12}  sm={6}>
            <Paper elevation={4} style={{ margin:  32 }}>
              <Grid  container
                alignItems='center'
                justify='center'>
              <Grid item xs={12} sm={6} style={{textAlign:'center'}}>
                <img 
                src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="homer simpson eating donut"
                />
              </Grid>
                <Grid  item sm={6} xs={12}
                  alignContent='center' 
                >
                    <BrowserRouter>
                      <Switch>
                        <Route exact path="/" component={SignIn}   />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/profile" component={Profile} />
                    </Switch>
                  </BrowserRouter>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
