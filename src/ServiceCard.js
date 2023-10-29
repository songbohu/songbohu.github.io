import React from 'react';
import './index.css';
import {Card, List} from 'antd';

class ServiceCard extends React.Component {

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
                        Service
                    </h3>}
                >
                    <List.Item>
                        <b>Conference and workshop reviewing:</b>
                        <br/>
                        ACL (2023), EACL (2023), EMNLP (2022 - 2023), NLP4ConvAI (2022 - 2023).
                    </List.Item>
                    <List.Item>
                        <b>Journal reviewing:</b>
                        <br/>
                        IEEE/ACM TASLP.
                    </List.Item>
                    {/*<List.Item>*/}
                    {/*    <b>Outreach:</b>*/}
                    {/*    <br/>*/}
                    {/*    I am happy to provide guidance to young students, such as high school or undergraduate students, embarking on your research projects. Feel free to email me for a chat.*/}
                    {/*</List.Item>*/}
                </List>
            </Card>
        )

    }


}

export default ServiceCard;