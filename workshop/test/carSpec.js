/**
 * Introducir el testeo asíncrono, usando Done como callback.
 * Introducir el concepto de DI.
 * Introducir el primer stub sobre el prototype de una clase. (Explicar prototype?!)
 * */

import chai, {expect} from 'chai';
import sinon from 'sinon';

import {Car, Engine} from '../src/car'

describe('Car', () => {
  describe('#start', () => {

    let startStub;
    beforeEach(() => {
      debugger
      startStub = sinon.stub(Engine.prototype, 'start');
    });
    afterEach(() => {
      startStub.restore();
    });

    it('with a working engine, expect that the car will start', (done) => {
      startStub.returns(Promise.resolve());
      const car = new Car(new Engine());
      
      car.start().then(() => {
        expect(car.started).to.be.true;
        done();
      });
    });

    it('with a broken engine, expect that the car will not start', (done) => {
      startStub.returns(Promise.reject());
      const car = new Car(new Engine());
      
      car.start().then(() => {
        expect(car.started).to.be.false;
        done();
      });
    });

  });
});
