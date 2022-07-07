class DataFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      message: {}
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.setState({ ...this.state,
      isFetching: true
    });
    fetch("http://localhost:3001/api").then(response => response.json()).then(result => {
      this.setState({
        message: result
      });
      console.log(result);
    }).catch(e => {
      console.log(e);
    });
    this.setState({ ...this.state,
      isFetching: false
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, this.state.message.message);
  }

}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, "Hello! Welcome To the page! Dont turn server off, just recomplile");
  }

}

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "we"
    }, /*#__PURE__*/React.createElement(Welcome, null), /*#__PURE__*/React.createElement(DataFetch, null), /*#__PURE__*/React.createElement("p", null, "Eat your potasium!"));
  }

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(Page, null));
