import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drower from './components/Columns';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const store = configureStore()
function App() {
  return (
    <Provider store={store}>
       <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
          Challenge - Making Sense
          </Typography>
        </Toolbar>
      </AppBar>
      <Drower />
      </Container>
    </React.Fragment>
    
    </Provider>
  );
}

export default App;
