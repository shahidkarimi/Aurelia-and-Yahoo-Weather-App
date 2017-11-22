import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';
import {bindable, bindingMode} from 'aurelia-framework';
@autoinject
export class Users {
  @bindable keyword:string;
  @bindable cityInfo;
  @bindable cityid:string;
  @bindable busy:boolean = false;

  constructor(private http: HttpClient) {
   this.searchNowWala();
  }

  
  searchNowWala(){
    this.http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost/weather.php?command=search&keyword=');
    });
  }

  activate(params) {
   this.keyword = params.keyword; 
   this.loadDetailsWala();
  }

  private async attached(): Promise<void> {
   
    
  }
  public startSearch(){
    this.searchNowWala();
    this.loadDetailsWala();
  }
  public loadDetailsWala() {
    this.busy = true;
    return this.http.fetch(this.keyword)
    .then(response => response.json())
    .then(data => this.cityInfo = data as any).then(()=>{
      this.busy = false;
    });
  }
}
