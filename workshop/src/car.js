export class Engine {
  constructor() {
  }

  start() {
    return ( Math.random() * (10 - 0) + 0 ) > 5 ? Promise.resolve() : Promise.reject()
  }
}


export class Car {
  constructor(engine) {
    this.engine = engine;
    this.started = false;
  }

  start() {
    return this.engine.start()
                      .then(() => this.started = true)
                      .catch(() => this.started = false);
  }
}
