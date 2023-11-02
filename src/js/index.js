// Importa React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Incluye tus estilos en el paquete de webpack
import '../styles/index.css';

class SimpleCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const digits = String(this.state.counter)
      .padStart(6, '0')
      .split('')
      .map((digit, index) => (
        <div key={index} className="count">
          {digit}
        </div>
      ));

    return (
      <div className="timer">
        <div className="d-flex justify-content-evenly align-items-center">
          <div className="clock">
            <p style={{ fontSize: '60px', marginBottom: '0', lineHeight: '60px' }}>🕒</p>
          </div>
          {digits}
        </div>
      </div>
    );
  }
}

// Renderiza tu aplicación de React
ReactDOM.render(<SimpleCounter />, document.querySelector('#app'));