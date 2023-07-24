import React from 'react';
import './index.css';
import { Breadcrumb, Layout, Row,Col} from 'antd';

import HomepageDesktop from './HomepageDesktop';
import HomepageMobile from './HomepageMobile';
const { Header, Content, Footer } = Layout;

class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageID : 0,
        }
    }

    componentDidMount() {
    }

    render() {
        if(window.innerWidth < 800){
        return(<HomepageMobile/>)}else
        {return(<HomepageDesktop/>) }
    }

}

export default Homepage;
