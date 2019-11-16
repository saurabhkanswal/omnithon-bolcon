import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x3663DfBCCda81C92bC82DEe488eA524BD41aEa16'

);

export default instance;