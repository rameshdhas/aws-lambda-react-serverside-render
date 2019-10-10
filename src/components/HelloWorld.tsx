import * as React from 'react';

interface HelloWorldState {
  buttonClicked: boolean;
}

class HelloWorld extends React.Component<void, HelloWorldState> {
  constructor(props: any) {
    super(props);
    this.state = {
      buttonClicked: false
    };
  }

  render() {
    const backgroundStyles = {
      backgroundColor: '#fff',
      height: '100%',
      width: '100%'
    };
    const textStyles = {
      color: 'black',
      textAlign: 'center',
      paddingTop: '25%',
      paddingBottom: '25%'
    };

    return (
      <div style={backgroundStyles}>
        <h1 style={textStyles}>Hello New Jersey!</h1>
      </div>
    );
  }
}

export default HelloWorld;