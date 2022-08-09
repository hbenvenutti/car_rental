import { Application } from '/shared/modules/deps.ts';

import { router } from '/shared/infra/http/routes/index.routes.ts';

class App {
  server = new Application();

  constructor(){
    this.routes()
  }

  routes() {
    this.server.use(router.routes);
  }

  middlewares() {}

  exceptionHandler(){}
}

export default new App().server
