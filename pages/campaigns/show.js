import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign'

class CampaignShow extends Component {
static async getInitialProps(props){
    const campaign = Campaign(props.query.address)

    return {}
    


}

    render() {
        return (
            <Layout>
            <h3>Campaign Show</h3>
            </Layout>
            
        ) 
    }
}

export default CampaignShow;