import React from 'react';
import './index.css';
import { MailOutlined, GithubOutlined, LinkedinOutlined, GoogleOutlined} from '@ant-design/icons';
import {Row,Col, Card} from 'antd';
import MyPhoto from "./media/me.jpg"

class IntroductionCard extends React.Component {

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
                // cover={
                //     <img
                //         alt="example"
                //         src={MyPhoto}
                //     />
                // }
                actions={[
                    <MailOutlined
                        onClick={()=> {
                            window.location.href = 'mailto:sh2091@cam.ac.uk';
                        }}
                    />,
                    <GithubOutlined onClick={()=> {
                        window.location.href = 'https://github.com/songbohu';
                    }}/>,
                    <LinkedinOutlined
                        onClick={()=> {
                            window.location.href = 'https://www.linkedin.com/in/songbohu/';
                        }}
                    />,

                    <GoogleOutlined
                        onClick={()=> {
                            window.location.href = 'https://scholar.google.co.uk/citations?user=AKjpAowAAAAJ&hl=en&oi=ao';
                        }}
                    />
                ]}
            >
                <div>
                    <Row>
                        <Col>
                            <h3 style={{ marginLeft: "0px", marginTop:"-10px"}}>
                                Songbo Hu 胡淞博
                            </h3>

                            Hi there! I am a fourth year PhD student at the <a href="https://ltl.mmll.cam.ac.uk">Language Technology Lab</a>, <a href="https://www.cam.ac.uk">Cambridge</a>.

                            I am supervised by Prof. <a href="https://sites.google.com/site/annakorhonen/">Anna Korhonen </a> and Dr. <a href="https://sites.google.com/site/ivanvulic/">Ivan Vulić</a>.

                            I am building robust and trustworthy dialogue systems that perform well in diverse linguistic contexts.
                        </Col>

                    </Row>
                </div>
            </Card>
        )

    }


}

export default IntroductionCard;
