import './assets/style/App.css';
import {Outlet} from "react-router-dom";
import Menu from "./components/Menu";
import {Component} from "react";
import {initFavorites} from "./store/reducers/favsReducer";
import {connect} from "react-redux";
import ReactGA from 'react-ga';
import CookieConsent from "react-cookie-consent";
import {cookiesHelper} from "./helpers/cookies.helper";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfFavs: [],
            consent: false
        }
    }
    componentDidMount() {
        this.props.initFavorites();
        let consent = cookiesHelper.getConsentValue();
        if(consent == 'true'){
            this.setState({consent: true});
        }else{
            this.setState({consent: false});
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.consent == true){
            ReactGA.initialize('UA-221438667-1');
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }

    render() {
        return (
            <>
                <Outlet />
                <Menu />
                <CookieConsent
                    className="text-center"
                enableDeclineButton
                disableStyles={true}
                buttonText="J'accepte"
                declineButtonText="Je refuse"
                cookieName="CookieConsent"
                expires={150}
                containerClasses="bg-white w-full fixed bottom-0 h-fit z-30 p-4 text-center"
                buttonClasses="bg-blue-400 px-4 py-2 rounded-lg text-white ml-3"
                overlay={true}
                onAccept={() => {
                    this.setState({consent: true});
                }}
                onDecline={() => {
                    this.setState({consent: false});
                }}
                ><p className=" block text-center pb-4">Pour fonctionner correctement, ce site utilise des cookies. Merci de les accepter pour utiliser la totalité des services.</p></CookieConsent>
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
