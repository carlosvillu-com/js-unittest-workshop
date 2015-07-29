/**
 * El objetivo es practicar la nomenclatura correcta de los tests.
 *
 * Hay que proponer que testeen los métodos add y division.
 * Aprovechar para introducir como montar el entorno de tests: Karma, Browserify y chai
 * */


import chai, {expect} from 'chai';
import sinon from 'sinon';

import Calculator from '../src/calculator';

describe('Calculator', () => {
  it('expects to be an instantiable class', () => {
    expect(Calculator).to.not.be.undefined;
  });

  describe('an instance', () => {
    let calculator;
    beforeEach(() => {
      calculator = new Calculator();
    });

    afterEach(() => {
      calculator = null;
    });

    describe('#add', () => {

      it('two positive numbers returns a positive result', () => {
        expect(calculator.add(1,2) > -1).to.be.true;
      });

      it('two negative numbers returns a negative result', () => {
        expect(calculator.add(-1,-2) <= -1).to.be.true;
      });
    });

    describe('#division', () => {

      it('by denominators other than zero returns a result', () => {
        expect(calculator.division(4,2)).to.be.eql(2);
      }); 

      it('by zero returns Infinity', () => {
        expect(calculator.division(4,0)).to.be.eql(Infinity);
      });
    });
  });
});
