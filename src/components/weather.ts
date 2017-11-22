import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

import {bindable, bindingMode} from 'aurelia-framework';

@autoinject
export class Weather {
  weatherInfo= {};
  @bindable cityid = null;    
  @bindable busy:boolean = false;                              
  constructor(private http: HttpClient) { 
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost/weather.php?command=location&woeid=');
    });
  }
  public loadDetails() { 
    this.busy = true;
    return this.http.fetch(this.cityid)
      .then(response => response.json())
      .then(users => this.weatherInfo = users as any).then(()=>{
        this.busy = false;
      });
  }

  private async attached(): Promise<void> {
    this.loadDetails();
  }

  public gotoDetails(){
     location.href = "#/weather/"+this.cityid;
  }

  public roundMe(n){
    return Math.round(n);
  }
}
