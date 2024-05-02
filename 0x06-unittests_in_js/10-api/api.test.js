const request = require('request');
const { expect } = require('chai');

describe('This is an integration Testing', () => {
  describe('GET /', () => {
    it('Code: 200 | Body: Welcome to the payment system', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/12', () => {
    it('Responds with 200 and id 12 in msg', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/12',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });
  });

  describe('GET /cart/ice2', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/ice12',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /available_payments JSON string', () => {
    it('Responds with 200 with correct JSON string', (done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(
          '{"payment_methods":{"credit_cards":true,"paypal":false}}'
        );
        done();
      });
    });
  });

  describe('POST /login with body', () => {
    it('Responds with 200 with correct name Betty', (done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
        json: {
          userName: 'Betty',
        },
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });

  describe('POST /login with no body', () => {
    it('Responds with 200 with correct name Undefined', (done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome undefined');
        done();
      });
    });
  });
});
