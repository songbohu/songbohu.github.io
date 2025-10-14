import React from 'react';
import './index.css';
import { Breadcrumb, Layout, Row,Col} from 'antd';

import IntroductionCard from "./IntroductionCard"
import EducationCard from "./EducationCard";
import HighlightsCard from "./HighlightsCard";
import PublicationsCard from "./PublicationsCard";
const { Header, Content, Footer } = Layout;


class HomepageDesktop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageID : 0,
        }
    }

    componentDidMount() {
    }

    render() {
        return(

        <Layout>
            <Header
                style={{
                    backgroundColor:'#F5F5F5FF',
                    padding: 0,
                    height:30,
                }}
            >
            </Header>


            <Content className="site-layout" style={{ padding: '0 50px', backgroundColor:'#F5F5F5FF'}}>
                <Row>
                    <Col>
                        <Breadcrumb
                            // separator=">"
                            items={[
                                {
                                    title: 'University of Cambridge',
                                    href: 'https://www.cam.ac.uk',
                                },
                                {
                                    title: 'Language Technology Lab',
                                    href: 'https://ltl.mmll.cam.ac.uk',
                                },
                                {
                                    title: 'Songbo Hu',
                                }
                            ]}
                            style={{"fontSize":20, marginLeft: "0px", marginTop:"0px"}}
                        />
                    </Col>
                </Row>
                <Row>
                    <h1>
                    </h1>
                </Row>

                <Row gutter={16}>
                    <Col
                        span={8}
                    >
                        <Row>
                            <IntroductionCard/>
                        </Row>
                        <Row>
                            <h3>
                            </h3>
                        </Row>
                        <Row>
                            <EducationCard/>
                        </Row>
                        <Row>
                            <h3>
                            </h3>
                        </Row>

                    </Col>

                    <Col span={16}>

                        <Row>
                            <HighlightsCard/>
                        </Row>


                        <Row>
                            <h3>
                            </h3>
                        </Row>

                        <Row>
                            <PublicationsCard/>
                        </Row>
                    </Col>

                </Row>
                <Row>
                    <h1>
                    </h1>
                </Row>
                <Row>

                    <Col flex="auto">
                    </Col>

                </Row>
            </Content>
            <Footer style={{ textAlign: 'center', backgroundColor:'#F5F5F5FF' }}>Songbo Hu ©2025</Footer>
        </Layout>
        )

    }

}

export default HomepageDesktop;
