// Libraries
import { observable } from 'mobx';
import Config from '../config';

import { triggerSmartContract, sign, sendRawTransaction, MAX_UINT256, view } from '../utils/blockchain';
import { BigNumber, setTransactionsData } from '../utils/helper';

export default class HelloStore {
  @observable helloModalInfo = {
    visible: false,
    step: 1,
    title: '',
    obj: {},
    txId: '',
    callbacks: false // Callback after closing the trading window
  };

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  trigger = async (address, functionSelector, parameters = [], options = {}, intlObj = {}, callbacks = false) => {
    try {
      //this.openTransModal({ ...intlObj, step: 1 });
      const transaction = await triggerSmartContract(
        address,
        functionSelector,
        Object.assign({ feeLimit: 20 * 1e6 }, options),
        parameters
      );

      const signedTransaction = await sign(transaction);
      const result = await sendRawTransaction(signedTransaction);
      //this.openTransModal({ ...intlObj, step: 2, txId: result.transaction.txID });
      if (result && result.result) {
        setTransactionsData(result.transaction.txID, intlObj);
      }

      callbacks && this.executeCallback(callbacks);
      return result;
    } catch (error) {
      if (error && error.message == 'Confirmation declined by user') {
        //this.openTransModal({ ...intlObj, step: 3 });
      }
      console.log(`trigger error ${address} - ${functionSelector}`, error.message ? error.message : error);
      return {};
    }
  };

  //   approveToken = async (popData, callbacks = false) => {
  //     const intlObj = {
  //       action: 'approve',
  //       title: 'deposit.confirm_approve',
  //       callbacks
  //     };
  //     const txID = await this.lendApprove(popData, intlObj);
  //     txID && this.hideTransModal();
  //     return txID;
  //   };

  setGreeting = async value => {
    const intlObj = {};
    console.log(Config.contract.hello);
    const result = await this.trigger(
      Config.contract.hello,
      'postMessage(string)',
      [{ type: 'string', value: value }],
      {},
      intlObj
    );
    return result && result.transaction ? result.transaction.txID : '';
  };

  getGreeting = async () => {
    console.log(Config.contract.hello);
    const result = await view(Config.contract.hello, 'getMessage', [], true);

    console.log('Get Greeting', result);
  };

  setData = (obj = {}) => {
    const self = this;
    Object.keys(obj).map(key => {
      self[key] = obj[key];
    });
  };

  executeCallback = (args = [], timeout = 5000) => {
    args.map(arg => {
      let method = arg.shift();
      // Edge case: Skip executing this here so it's only called after an error (via lookForCleanCallBack)
      // If the callback is to execute a getter function is better to wait as sometimes the new value is not uopdated instantly when the tx is confirmed
      setTimeout(() => {
        method = method.split('/');
        if (method[0] === 'system') {
          this[method[1]](...arg);
        } else {
          let object = null;
          switch (method[0]) {
            case 'network':
              object = this.rootStore.network;
              break;
            case 'dapp':
              object = this.rootStore.dapp;
              break;
            case 'hello':
              object = this.rootStore.hello;
              break;
            default:
              break;
          }
          object && object[method[1]](...arg);
        }
      }, timeout);
    });
  };
}
