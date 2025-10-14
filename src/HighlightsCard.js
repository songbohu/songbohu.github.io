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
                        <b>Office Hours:</b> Every Friday, 9:00–12:00, TR-17, English Faculty Building. Feel free to drop by with questions about the lab, assignments, or broader topics in NLP research.
                    </List.Item>



                    <List.Item>
                        I will be at EMNLP 2025 (Suzhou, China). Happy to meet and chat!
                    </List.Item>


                    <List.Item>
                        We recently published <a href="https://www.jmir.org/2025/1/e68720">a scoping review</a> on NLP for public health in Africa. Also see our article in <a href="https://theconversation.com/ai-chatbots-can-boost-public-health-in-africa-why-language-inclusion-matters-260861">The Conversation</a>.

                    </List.Item>
                </List>
            </Card>
        )

    }


}

export default HighlightsCard;