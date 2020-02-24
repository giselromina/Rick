import { Component} from '@angular/core';
import { AuthService } from '../auth-service.service';


@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css']
})
export class UserLogComponent  {

  constructor(public auth: AuthService) { }

  public pageTitle = 'Welcome to my App, I do my best';
  public textBody = ' Made for: Gisel Ragusa Diaz jejje';
  public titleBody = 'Rick and Morty';
  public titleRick = 'Rick wants to login in the app';
  public imgUrl = '../../../assets/img/rick-morty11.jpg';
  public loginTitle = `Morty's mind blowers`;
  public loginText = 'LOGIN';



}
