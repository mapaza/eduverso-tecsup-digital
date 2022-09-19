import React, {useEffect} from 'react';
import Header from '../Header';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router';

ReactGA.initialize('UA-194024357-1');

const Layout = ({children}) => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    })

    return(
        <div>
            <Header />
            {children}
        </div>
    )

}

export default withRouter(Layout);
