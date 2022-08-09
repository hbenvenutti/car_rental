import { Application } from '../../../../deps.ts';
import { router } from './routes/index.routes.ts';

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
