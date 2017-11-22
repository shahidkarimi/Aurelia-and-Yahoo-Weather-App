import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {bindable, bindingMode} from 'aurelia-framework';
import 'fetch';

@autoinject
export class Weatherd {
  @bindable weatherInfo= {};
  @bindable cityid = null;    
  @bindable busy:boolean = false;   
  @bindable woeid;                           
  constructor(private http: HttpClient) { 
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost/weather.php?command=location&woeid=');
    });
  }
  public loadDetails() { 
    this.busy = true;
    return this.http.fetch(this.woeid)
      .then(response => response.json())
      .then(users => this.weatherInfo = users as any).then(()=>{
        this.busy = false;
      });
  }

  activate(params){
    this.woeid = params.woeid;
    this.loadDetails();
  }

  roundMe($n){
    return Math.round($n);
  }

  getDayOfWeek(str){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(str);
    return days[d.getDay()];
  }
}
