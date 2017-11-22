import {Router, RouterConfiguration} from 'aurelia-router';


export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'The Weather App';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Home' },
      { route: ['search','search/:keyword'],href: '#/search',         name: 'search',        moduleId: 'search',        nav: true, title: 'Search' },
      { route: 'weather/:woeid', href: '#/weather',  name: 'weatherd', moduleId: 'weatherd', nav: true, title: '' }
    ]);

    this.router = router;
  }
}
