import NetworkStore from './network';
import System from './system';
import Dapp from './dapp';
import HelloStore from './hello';

class RootStore {
  constructor() {
    this.network = new NetworkStore(this);
    this.system = new System(this);
    this.dapp = new Dapp(this);
    this.hello = new HelloStore(this);
  }
}

const store = new RootStore();
export default store;
