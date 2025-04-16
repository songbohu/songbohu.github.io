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
                        <b>Songbo Hu</b>,* Abigail Oppong,* Ebele Mogo, Charlotte Collins, Giulia Occhini, Anna Barford, and Anna Korhonen. <a href="https://www.jmir.org/2025/1/e68720" style={{"textDecoration": "underline"}}>Natural Language Processing Technologies for Public Health in Africa: Scoping Review</a>. JMIR, 2025.
                    </List.Item>

                    <List.Item>
                        Petre Breazu, Miriam Schirmer, <b>Songbo Hu</b>, and Napoleon Katsos. <a href="https://www.tandfonline.com/doi/full/10.1080/17447143.2025.2476967" style={{"textDecoration": "underline"}}>Large Language Models and the Challenge of Analyzing Discriminatory Discourse: Human-AI Synergy in Researching Hate Speech on Social Media</a>. Journal of Multicultural Discourses, 2025.
                    </List.Item>

                    <List.Item>
                        Teemu Vahtola, <b>Songbo Hu</b>, Mathias Creutz, Ivan Vulić, Anna Korhonen, and Jörg Tiedemann. <a href="https://aclanthology.org/2025.nodalida-1.75/" style={{"textDecoration": "underline"}}>Analyzing the Effect of Linguistic Instructions on Paraphrase Generation</a>. NoDaLiDa-Baltic-HLT, March 2025.
                    </List.Item>

                    <List.Item>
                        <b>Songbo Hu</b>, Xiaobin Wang, Zhangdie Yuan, Anna Korhonen, and Ivan Vulić. <a href="https://aclanthology.org/2024.naacl-demo.4/" style={{"textDecoration": "underline"}}>DIALIGHT: Lightweight Multilingual Development and Evaluation of Task-Oriented Dialogue Systems with Large Language Models</a>. NAACL-HLT System Demonstrations, June 2024.
                    </List.Item>

                    <List.Item>
                        <b>Songbo Hu</b>, Ivan Vulić, Fangyu Liu, and Anna Korhonen. <a href="https://aclanthology.org/2024.lrec-main.1219/" style={{"textDecoration": "underline"}}>Reranking Overgenerated Responses for End-to-End Task-Oriented Dialogue Systems</a>. LREC-COLING, May 2024.
                    </List.Item>


                    <List.Item>
                        <b>Songbo Hu</b>, Han Zhou, Zhangdie Yuan, Milan Gritta, Guchun Zhang, Ignacio Iacobacci, Anna Korhonen, and Ivan Vulić. <a href="https://aclanthology.org/2023.emnlp-main.422/" style={{"textDecoration": "underline"}}>A Systematic Study of Performance Disparities in Multilingual Task-Oriented Dialogue Systems</a>. EMNLP, December 2023.
                    </List.Item>

                    <List.Item>
                        <b>Songbo Hu</b>,* Han Zhou,* Mete Hergul, Milan Gritta, Guchun Zhang, Ignacio Iacobacci, Ivan Vulić,** and Anna Korhonen.** <a href="https://aclanthology.org/2023.tacl-1.79/" style={{"textDecoration": "underline"}}>Multi3WOZ: A Multilingual, Multi-Domain, Multi-Parallel Dataset for Training and Evaluating Culturally Adapted Task-Oriented Dialog Systems</a>. TACL, 2023.
                    </List.Item>

                    <List.Item>
                        Zhangdie Yuan,* <b>Songbo Hu</b>,* Ivan Vulić, Anna Korhonen, and Zaiqiao Meng. <a href="https://aclanthology.org/2023.eacl-main.106/" style={{"textDecoration": "underline"}}>Can Pretrained Language Models (Yet) Reason Deductively?</a> EACL, May 2023.
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
