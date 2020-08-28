const { NavLink, withRouter } = ReactRouterDOM
import eventBus from '../services/event-bus-service.js'
class _Search extends React.Component {
    state = {
        page: '/'

    }

    componentDidMount() {
        this.getPage()
    }
    componentDidUpdate() {
        this.getPage()
    }
    getPage(){

        let path = this.props.location.pathname
        path = path.split('/')[1] || '/'
        if (this.state.page !== path) this.setState({ page: path })
    }
    setSearch=(ev)=>{
        if(this.state.page==='mail') eventBus.emit('search', { input:ev.target.value })
        if(this.state.page==='keep') eventBus.emit('filterKeep', { input:ev.target.value })
        
    }

    render() {
        console.log(this.state.page);
        if(this.state.page==='/') return <div></div>
        return <input onChange={this.setSearch} placeholder={'search ' + this.state.page} type="text" />


    }

}
export const Search = withRouter(_Search)