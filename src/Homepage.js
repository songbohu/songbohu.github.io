import React, { useState } from 'react';
import './index.css';
import { AppstoreOutlined, MailOutlined, GithubOutlined, HomeOutlined, BarsOutlined, LinkedinOutlined , EditOutlined, GoogleOutlined} from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Row,Col, Divider, Avatar, Card, List} from 'antd';
import CamLogo from "./media/camLogo.png";
import SvgComponent from "./media/ltl_logo2"
import MyPhoto from "./media/me_4.jpg"

const { Header, Content, Footer } = Layout;
const { Meta } = Card;


const items: MenuProps['items'] = [
    {
        label: 'Home',
        key: 'home',
        icon: <HomeOutlined  />,
    },
    {
        label: 'Projects',
        key: 'projects',
        icon: <BarsOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
];


const edu_data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];


// const [current, setCurrent] = useState('=');
// const onClick = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
// };
// return
// };

class Homepage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            pageID : 0,
            manu_key: "home"
        }
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            manu_key: e.key,
        });
    };


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
                                    // title: <img width={"180px"} src={CamLogo} alt="logo" style={{marginLeft: "20px", marginTop:"10px"}}/>,
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
                        {/*Songbo Hu 胡淞博*/}
                    </h1>
                </Row>

                <Row gutter={16}>
                    <Col
                        span={8}
                    >
                        <Row>
                            <Card
                                style={{width: '100%'}}

                                // style={{ width: 350}}
                                cover={
                                    <img
                                        // style={{ width: 200}}
                                        alt="example"
                                        src={MyPhoto}
                                    />
                                }
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
                                    // href={"https://www.linkedin.com/in/songbohu/"}
                                ]}
                            >
                                <div>
                                    <Row>
                                        <Col>
                                            <h3 style={{ marginLeft: "0px", marginTop:"-10px"}}>
                                                Songbo Hu 胡淞博
                                            </h3>

                                            Hi there! I am a second year PhD student at the <a href="https://ltl.mmll.cam.ac.uk">Language Technology Lab</a>, <a href="https://www.cam.ac.uk">Cambridge</a>.

                                            I am supervised by Prof. <a href="https://sites.google.com/site/annakorhonen/">Anna Korhonen </a> and Dr. <a href="https://sites.google.com/site/ivanvulic/">Ivan Vulić</a>.

                                            I am building robust and trustworthy dialogue systems that perform well in diverse linguistic contexts.
                                        </Col>

                                    </Row>

                                    {/*The above photo is me at EACL 2023 in Croatia.*/}
                                </div>
                                {/*<Meta*/}
                                {/*<Meta*/}
                                {/*    // avatar={<Avatar src="./media.me.png" />}*/}
                                {/*    title="Songbo Hu 胡淞博"*/}
                                {/*    description="Hi There"*/}
                                {/*/>*/}
                            </Card>
                        </Row>
                        <Row>
                            <h3>
                                {/*Songbo Hu 胡淞博*/}
                            </h3>
                        </Row>

                        <Row>

                            <Card
                                style={{width: '100%'}}

                            >

                                {/*<Divider orientation="left">Default Size</Divider>*/}
                                <List
                                    header={ <h3 style={{ marginLeft: "0px", marginTop:"-10px"}}>
                                        Education
                                    </h3>}
                                >
                                    <List.Item>
                                        <b>University of Cambridge</b>
                                        <br/>
                                        PhD in Computation, Cognition and Language, 2021 - current.
                                        <br/>

                                        <a href={"https://www.girton.cam.ac.uk"}>Girton College</a>. Funded by <a href={"https://www.cambridgetrust.org"}>Cambridge Trust</a>.
                                    </List.Item>
                                    <List.Item>
                                        <b>University of Cambridge</b>
                                        <br/>
                                        MPhil in Advanced Computer Science, 2020 - 2021.
                                    </List.Item>
                                    <List.Item>
                                    <b>University of Edinburgh</b>
                                        <br/>
                                        BSc in Artificial Intelligence and Computer Science, 2016 - 2020.
                                        <br/>
                                        Top performance in degree.
                                    </List.Item>
                                </List>
                            </Card>
                        </Row>
                        <Row>
                            <h3>
                                {/*Songbo Hu 胡淞博*/}
                            </h3>
                        </Row>

                        <Row>

                            <Card
                                style={{width: '100%'}}

                            >

                                {/*<Divider orientation="left">Default Size</Divider>*/}
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
                                        <b>Journal reviewing: </b>
                                        <br/>
                                        IEEE/ACM TASLP
                                    </List.Item>
                                </List>
                            </Card>
                        </Row>

                    </Col>

                    <Col span={16}>

                        <Row>
                            <Card
                                style={{width: '100%'}}
                            >
                                {/*<h3 style={{ marginLeft: "0px", marginTop:"-10px"}}>*/}
                                {/*    News*/}
                                {/*</h3>*/}
                                {/*<Divider orientation="left">Default Size</Divider>*/}
                                <List
                                    header={ <h3 style={{ marginLeft: "0px", marginTop:"-10px"}}>
                                        Highlights
                                    </h3>}
                                >
                                    <List.Item>
                                        [July 24th, 2023] We release <a href="https://github.com/cambridgeltl/multi3woz">Multi3WOZ</a>, a large-scale multilingual dataset for task-oriented dialogue systems.
                                    </List.Item>
                                    <List.Item>
                                        [May 1st, 2023] I am in Dubrovnik, Croatia 🇭🇷, for EACL 2023!
                                    </List.Item>
                                </List>
                            </Card>
                        </Row>


                        <Row>
                            <h3>
                                {/*Songbo Hu 胡淞博*/}
                            </h3>
                        </Row>

                        <Row>
                            <Card
                                style={{width: '100%'}}


                            >
                                {/*<h3 style={{ marginLeft: "0px", marginTop:"-10px"}}>*/}
                                {/*    News*/}
                                {/*</h3>*/}
                                {/*<Divider orientation="left">Default Size</Divider>*/}
                                <List
                                    header={
                                    <div>
                                        <h3 style={{ marginLeft: "0px", marginTop:"0px"}}>
                                            Publications
                                        </h3>
                                        <font style={{"fontSize":"small", }}>*equal contribution **equal senior contribution</font>


                                    </div>

                                        //
                                }
                                >
                                    <List.Item>
                                        <b>Songbo Hu</b>,* Han Zhou,* Mete Hergul, Milan Gritta, Guchun Zhang, Ignacio Iacobacci, Ivan Vulić,** and Anna Korhonen.** <font style={{color:"#1677ff"}}>Multi3WOZ: A Multilingual, Multi-Domain, Multi-Parallel Dataset for Training and Evaluating Culturally Adapted Task-Oriented Dialog Systems.</ font> TACL, to appear.
                                    </List.Item>
                                    <List.Item>
                                        Zhangdie Yuan,* <b>Songbo Hu</b>,* Ivan Vulić, Anna Korhonen and Zaiqiao Meng. <a href="https://aclanthology.org/2023.eacl-main.106/" style={{"textDecoration": "underline"}}>Can Pretrained Language Models (Yet) Reason Deductively?</a> EACL, May 2023.
                                    </List.Item>
                                    <List.Item>
                                        <b>Songbo Hu</b>, Ivan Vulić, Fangyu Liu, and Anna Korhonen. <a href="https://arxiv.org/abs/2211.03648" style={{"textDecoration": "underline"}}>Reranking Overgenerated Responses for End-to-End Task-Oriented Dialogue Systems.</a> CoRR, abs/2211.03648, Nov 2022.
                                    </List.Item>
                                    <List.Item>
                                        Christian Geishauser, <b>Songbo Hu</b>, Hsien-chin Lin, Nurul Lubis, Michael Heck, Shutong Feng, Carel van Niekerk, Milica Gašić. <a href="https://ieeexplore.ieee.org/document/9687856" style={{"textDecoration": "underline"}}>What does the User Want? Information Gain for Hierarchical Dialogue Policy Optimisation.</a> IEEE ASRU, December 2021.
                                    </List.Item>
                                    <List.Item>
                                        Hsien-chin Lin, Nurul Lubis, <b>Songbo Hu</b>, Carel van Niekerk, Christian Geishauser, Michael Heck, Shutong Feng, Milica Gašić. <a href="https://aclanthology.org/2021.sigdial-1.47/" style={{"textDecoration": "underline"}}>Domain-independent User Simulation with Transformers for Task-oriented Dialogue Systems.</a> SIGdial, July 2021.
                                    </List.Item>

                                </List>
                            </Card>
                        </Row>
                    </Col>

                </Row>
                <Row>
                    <h1>
                        {/*Songbo Hu 胡淞博*/}
                    </h1>
                </Row>
                <Row>

                    <Col flex="auto">
                    </Col>

                </Row>




                {/*<div style={{ padding: 24, minHeight: 380}}>Content</div>*/}
            </Content>
            <Footer style={{ textAlign: 'center', backgroundColor:'#F5F5F5FF' }}>Songbo Hu ©2023</Footer>
        </Layout>
        )

    }



}

export default Homepage;
