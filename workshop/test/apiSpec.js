/**
 * Trabajamos con fake server
 * Comentar sobre fake AJAX
 * Comentar que no podemos usarlo con Fetch nativo :(
 * comentar que jQuery Ajax es lo peor
 * Detalle de DI
 * */

import chai, {expect} from 'chai';
import sinon from 'sinon';

import PokeApiClient from '../src/api';


describe('PokeApiClient', () => {
  let client;
  let server;
  beforeEach(() => {
    server = sinon.fakeServer.create();
    server.autoRespond = true;
    client = new PokeApiClient();
  });

  afterEach(() => {
    server.restore();
    client = null;
  });

  describe('#all', () => {

    it('Returns a list of pokemons if there is no server error', (done) => {
      const response = JSON.stringify({
        pokemon: [{pokemon: 1}, {pokemon: 2}]
      });
      server.respondWith('GET', `${PokeApiClient.BASE_URL}/pokedex/1`, response);

      client.all().then((pokedex) => {
        expect(pokedex.pokemon).to.be.an.instanceof(Array);
        done()
      });

      server.respond();
    });

    it('Returns an error if there is a server error', (done) => {
      const response = [
        404,
        {'Content-Type': 'application/json'},
        JSON.stringify({error: 400, msg: 'NOT_FOUND'})
      ];

      server.respondWith('GET', `${PokeApiClient.BASE_URL}/pokedex/1`, response);
      
      // EPIC fail ese fail :(
      client.all().fail((err) => {
        expect(err).to.not.be.undefined;
        done();
      });

    });

  });

});
