import fullStar from "../assets/icons/fullStar.svg";
import notFullStar from "../assets/icons/notFullStar.svg";
import {Component} from "react";
import {toggleFavorite} from "../store/reducers/favsReducer";
import {connect} from "react-redux";
import {favsHelper} from "../helpers/favs.helper";

class AddToFav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: null,
            listOfFavs: [],
            star: notFullStar
        }
    }

    componentDidMount() {
        this.setState({listOfFavs: this.props.listOfFavs});
        this.setState({city: this.props.city});
        this.setState({star: (favsHelper.isCityInFavs(this.props.city, this.props.listOfFavs) ? fullStar : notFullStar)})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listOfFavs !== this.props.listOfFavs) {
            this.setState({listOfFavs: this.props.listOfFavs})
            this.setState({star: (favsHelper.isCityInFavs(this.props.city, this.props.listOfFavs) ? fullStar : notFullStar)});
        }
        if(prevProps.city !== this.props.city) {
            this.setState({city: this.props.city});
            this.setState({star: (favsHelper.isCityInFavs(this.props.city, this.props.listOfFavs) ? fullStar : notFullStar)});
        }
    }

    render(){
        return (
            <img className={`h-8 w-8 ${this.props.fav ? 'relative w-2/6' : 'absolute right-4'}`} src={this.state.star} onClick={(e)=>{e.preventDefault();this.toggleFav(this.state.city)}} />
        )
    }

    toggleFav(city) {
        this.props.toggleFavorite(city);
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        toggleFavorite: (favorite) => dispatch(toggleFavorite(favorite))
    }
}

const mapStateToProps = (state) => {
    return {
        listOfFavs: state.favs.listOfFavs
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToFav);