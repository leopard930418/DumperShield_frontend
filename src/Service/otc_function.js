import Web3 from 'web3';
import { contractAddresses, currencyAddresses } from '../constants';
import { getAccountaddress } from "./metamask_function";

const DumperShieldFactory = require('../Abi/DumperShieldFactory.json');
const Degen = require('../Abi/Degen.json');

export const getBalanceOfTokens = async (balanceOfTokensData) => {
    let address = contractAddresses.DUMPERSHIELD_FACTORY_ADDRESS;

    console.log(address)
    // let web3,contractInstance;
    let web3, contractInstance;
    web3 = new Web3(window.web3.currentProvider);
    contractInstance = new web3.eth.Contract(DumperShieldFactory, address);
    // new_value = web3.utils.toBN(parseInt((value)*Math.pow(10,18)));
    console.log(">>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<");
    console.log(balanceOfTokensData)
    try {
        let balances = await contractInstance.methods.balanceOf(
            balanceOfTokensData.token,
            balanceOfTokensData.user,
        ).call()
        console.log("><><><><><><><<><");
        console.log(balanceOfTokensData.token);
        console.log("><><><><><><><<><");
        console.log(balances)
        return balances;
    } catch (e){
        console.log(e)
        return { available: 0, total: 0 }
    }

}

export const otcTransferToken = async (otcTransferTokenData, txCb, receiptCb, errorCb) => {

    console.log("justin otcTransferTokenData: ", otcTransferTokenData)
    let address = contractAddresses.DUMPERSHIELD_FACTORY_ADDRESS;
    console.log(address)
    // let web3,contractInstance,new_value,response,CurrentgasPrice;
    let web3, contractInstance, CurrentgasPrice, gasPrice, response;
    web3 = new Web3(window.web3.currentProvider);
    contractInstance = new web3.eth.Contract(DumperShieldFactory, address);
    // new_value = web3.utils.toBN(parseInt((value)*Math.pow(10,18)));

    let transferType = otcTransferTokenData.transferType;

    let userAddress = localStorage.getItem('account');

    await web3.eth.getGasPrice()
        .then((res) => {
            CurrentgasPrice = res;
        })
    const ss = gasPrice != '0' ? gasPrice * Math.pow(10, 9) : CurrentgasPrice;

    let payloadData = '';
    if (transferType === "transferAsSale") {
        console.log("justin 1")
        payloadData = contractInstance.methods.sellToken(
            otcTransferTokenData.buyer,
            otcTransferTokenData.tokenSell,
            otcTransferTokenData.sellAmount,
            otcTransferTokenData.wantToken,
            otcTransferTokenData.router,
            otcTransferTokenData.value,
            otcTransferTokenData.confirmatory
        ).encodeABI()
    } else if (transferType === "tokenTaxProtected") {
        console.log("justin 2")

        payloadData = contractInstance.methods.transferRestricted(
            otcTransferTokenData.token,
            otcTransferTokenData.to,
            otcTransferTokenData.value,
            otcTransferTokenData.confirmatory
        ).encodeABI()
    } else {
        console.log("justin 3")

        payloadData = contractInstance.methods.transfer(
            otcTransferTokenData.token,
            otcTransferTokenData.to,
            otcTransferTokenData.value
        ).encodeABI()
    }

    await web3.eth.sendTransaction({
        from: userAddress,
        to: address,
        gas: 0x94ED0,
        gasPrice: CurrentgasPrice,
        data: payloadData
    })
        .then(async (result) => {
            console.log(result)
            await txCb(result.hash);
            // await result.wait().then(async (receipt) => {
            receiptCb(result);
            // });
        })
        .catch(error => {
            console.log(error);
            errorCb(error);
            // alert(err.message);
            // response = err;
            // setTimeout(() => {
            //     window.location.reload()
            // }, 4000);
        });
    // return response;
}

export const addressApprove = async (spenderAddress, SellAmount) => {
    let address = currencyAddresses.DEGEN;
    const AccountAddress = await getAccountaddress();
    console.log(address)
    // let web3,contractInstance;
    let web3, contractInstance;
    web3 = new Web3(window.web3.currentProvider);
    contractInstance = new web3.eth.Contract(Degen, address);
    // new_value = web3.utils.toBN(parseInt((value)*Math.pow(10,18)));
    console.log(">>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<");
    console.log(Degen);
    console.log("/////////////" + address);

    console.log('AccountAddress', AccountAddress);
    try {
        return (await contractInstance.methods.approve(spenderAddress, SellAmount).send({ from: AccountAddress }))
    } catch (e){
        console.log(e)
    }

}