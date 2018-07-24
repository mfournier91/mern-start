const React = require('react')
const ReactDom = require('react-dom')
const {getConfig} = require('../../backend/config')
require('whatwg-fetch')
require('./index.css')

class App extends React.Component {
    state = {
        message: null
    }

    componentDidMount() {
        fetch(getConfig("backendUri")+"api").then((data) => data.json())
            .then(res => this.setState({
                message:res.message[0].message
            }))
    }

    render() {
        const {message} = this.state
        return (
            <div>
            {message || 'Loading'}
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'))