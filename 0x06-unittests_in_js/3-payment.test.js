const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('spies', () => {
  it('has the same math', () => {
    const spyUtils = sinon.spy(Utils, 'calculateNumber');
    const spyConsole = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 30);

    expect(spyUtils.calledOnceWithExactly('SUM', 100, 30)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 130')).to.be.true;

    spyUtils.restore();
    spyConsole.restore();
  });
});
