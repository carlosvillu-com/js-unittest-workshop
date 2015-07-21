import $ from 'jquery';

export default class PokeApiClient {

  constructor(request = $.ajax) {
    this.request = request;
  }

  all() {
    return this.request(`${PokeApiClient.BASE_URL}/pokedex/1`)
               .then((resp) => JSON.parse(resp));
  }
}

PokeApiClient.BASE_URL = 'http://pokeapi.co/api/v1';
