import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <Button variant="contained" color="primary">
      Material Button
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#react-app'));