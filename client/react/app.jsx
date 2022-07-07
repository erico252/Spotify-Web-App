class DataFetch extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isFetching: false,
            message: {}
        }
    }
    componentDidMount(){
        this.fetchUsers();
    }
    fetchUsers(){
        this.setState({...this.state, isFetching: true})
        fetch("http://localhost:3001/api")
            .then(response => response.json())
            .then(result => {
                this.setState({message: result})
                console.log(result)
            })
            .catch(e => {
                console.log(e)
            })
        this.setState({...this.state, isFetching: false})
    }
    render(){
        return(
            <div>
                {this.state.message.message}
            </div>
        )
    }
        
}

class Welcome extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                Hello! Welcome To the page! Dont turn server off, just recomplile
            </div>
        )
    }
}

class Page extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div className="we">
            <Welcome/>
            <DataFetch/>
            <p>Eat your potasium!</p>
        </div>
        )
    }
}


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Page/>);