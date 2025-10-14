import React from 'react';
import './index.css';
import {Card, List} from 'antd';

class EducationCard extends React.Component {

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
                        Ranked 1st in class.
                    </List.Item>
                </List>
            </Card>
        )

    }


}

export default EducationCard;
