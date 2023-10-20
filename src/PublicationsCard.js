import React from 'react';
import './index.css';
import {Card, List} from 'antd';

class PublicationsCard extends React.Component {

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
                    }
                >

                    <List.Item>
                        <b>Songbo Hu</b>, Han Zhou, Zhangdie Yuan, Milan Gritta, Guchun Zhang, Ignacio Iacobacci, Anna Korhonen, and Ivan Vulić. <a href="https://arxiv.org/pdf/2310.12892" style={{"textDecoration": "underline"}}>A Systematic Study of Performance Disparities in Multilingual Task-Oriented Dialogue Systems.</a>. EMNLP, Dec 2023, to appear.
                    </List.Item>

                    <List.Item>
                        <b>Songbo Hu</b>,* Han Zhou,* Mete Hergul, Milan Gritta, Guchun Zhang, Ignacio Iacobacci, Ivan Vulić,** and Anna Korhonen.** <a href="https://arxiv.org/abs/2307.14031" style={{"textDecoration": "underline"}}>Multi3WOZ: A Multilingual, Multi-Domain, Multi-Parallel Dataset for Training and Evaluating Culturally Adapted Task-Oriented Dialog Systems</a>. TACL, to appear.
                    </List.Item>
                    {/*<List.Item>*/}
                    {/*    <b>Songbo Hu</b>,* Han Zhou,* Mete Hergul, Milan Gritta, Guchun Zhang, Ignacio Iacobacci, Ivan Vulić,** and Anna Korhonen.** <font style={{color:"#1677ff"}}>Multi3WOZ: A Multilingual, Multi-Domain, Multi-Parallel Dataset for Training and Evaluating Culturally Adapted Task-Oriented Dialog Systems.</ font> TACL, to appear.*/}
                    {/*</List.Item>*/}
                    <List.Item>
                        Zhangdie Yuan,* <b>Songbo Hu</b>,* Ivan Vulić, Anna Korhonen, and Zaiqiao Meng. <a href="https://aclanthology.org/2023.eacl-main.106/" style={{"textDecoration": "underline"}}>Can Pretrained Language Models (Yet) Reason Deductively?</a> EACL, May 2023.
                    </List.Item>
                    <List.Item>
                        <b>Songbo Hu</b>, Ivan Vulić, Fangyu Liu, and Anna Korhonen. <a href="https://arxiv.org/abs/2211.03648" style={{"textDecoration": "underline"}}>Reranking Overgenerated Responses for End-to-End Task-Oriented Dialogue Systems</a>. CoRR, abs/2211.03648, Nov 2022.
                    </List.Item>
                    <List.Item>
                        Christian Geishauser, <b>Songbo Hu</b>, Hsien-chin Lin, Nurul Lubis, Michael Heck, Shutong Feng, Carel van Niekerk, and Milica Gašić. <a href="https://ieeexplore.ieee.org/document/9687856" style={{"textDecoration": "underline"}}>What does the User Want? Information Gain for Hierarchical Dialogue Policy Optimisation</a>. IEEE ASRU, December 2021.
                    </List.Item>
                    <List.Item>
                        Hsien-chin Lin, Nurul Lubis, <b>Songbo Hu</b>, Carel van Niekerk, Christian Geishauser, Michael Heck, Shutong Feng, and Milica Gašić. <a href="https://aclanthology.org/2021.sigdial-1.47/" style={{"textDecoration": "underline"}}>Domain-independent User Simulation with Transformers for Task-oriented Dialogue Systems</a>. SIGdial, July 2021.
                    </List.Item>

                </List>
            </Card>
        )

    }


}

export default PublicationsCard;
