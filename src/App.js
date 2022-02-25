import './assets/style/App.css';
import {Outlet} from "react-router-dom";
import Menu from "./components/Menu";
import {Component} from "react";
import {initFavorites} from "./store/reducers/favsReducer";
import {connect} from "react-redux";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfFavs: []
        }
    }
    componentDidMount() {
        this.props.initFavorites();
    }

    render() {
        return (
            <>
                <Outlet />
                <Menu />
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initFavorites: () => dispatch(initFavorites())
    }
};

const mapStateToProps = state => {
    return {
        listOfFavs: state.favs.listOfFavs
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
