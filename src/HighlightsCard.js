import React from 'react';
import './index.css';
import {Card, List} from 'antd';

class HighlightsCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }


    render() {
        return(
            <Card
                style={{width: '100%'}}
            >
                <List
                    header={ <h3 style={{ marginLeft: "0px", marginTop:"-10px"}}>
                        Highlights
                    </h3>}
                >
                    <List.Item>
                        [January 15th, 2024] We release <a href="https://github.com/cambridgeltl/e2e_tod_toolkit">DIALIGHT</a>, a toolkit for developing and evaluating multilingual task-oriented dialogue systems!
                    </List.Item>
                    <List.Item>
                        [December 4th, 2023] I am in Singapore 🇸🇬, for EMNLP 2023!
                    </List.Item>
                    <List.Item>
                        [July 24th, 2023] We release <a href="https://github.com/cambridgeltl/multi3woz">Multi3WOZ</a>, a large-scale multilingual dataset for task-oriented dialogue systems.
                    </List.Item>
                    <List.Item>
                        [May 1st, 2023] I am in Dubrovnik, Croatia 🇭🇷, for EACL 2023!
                    </List.Item>
                </List>
            </Card>
        )

    }


}

export default HighlightsCard;