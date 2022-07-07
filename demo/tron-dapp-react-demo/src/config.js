const env = process.env.REACT_APP_ENV;

const Config = {
  version: 'v1.0.0',
  chain: {
    privateKey: '01',
    fullHost: 'https://api.trongrid.io'
  },
  trongrid: {
    host: 'https://api.trongrid.io',
    key: 'xxxxxx'
  },
  service: {},
  contract: {
    usdt: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
    hello: 'TMFBbXee3Pvk3Sg15D5qfUi1HJiPoNSgp6'
  },
  defaultDecimal: 6,
  tronLinkTime: 8,
  justSwap: 'https://justswap.org/',
  tronscanUrl: 'https://tronscan.io/#'
};

let devConfig = {};
if (env === 'test') {
  devConfig = {
    chain: {
      //privateKey: '01',
      privateKey: '5c943295d4ef390aff56a913b868c7969ef3c0201d8aeab132735799e94b7013', // no key on Shasta
      //https://developers.tron.network/reference/select-network#note
      fullHost: 'https://api.shasta.trongrid.io'
      //fullHost: 'https://api.nileex.io'
    },
    service: {},
    contract: {
      usdt: 'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf',
      hello: 'TMFBbXee3Pvk3Sg15D5qfUi1HJiPoNSgp6'
    },
    justSwap: 'https://justswap.org/',
    tronscanUrl: 'https://shasta.tronscan.io/#'
    //tronscanUrl: 'https://nile.tronscan.io/#'
  };
}
export default Object.assign(Config, devConfig);
