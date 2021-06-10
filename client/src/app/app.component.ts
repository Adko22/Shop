import { Component, OnInit } from '@angular/core';
import { Local } from 'protractor/built/driverProviders';
import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';


  constructor(private basketService: BasketService, private accountSerivce: AccountService) { }
 
  ngOnInit(): void {
    this.loadBasket();
    this.loadCurrentUser();
  }

  loadBasket() {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe(() => {
        console.log('initialised basket');
      }, error => {
        console.log(error);
      });
    }
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');
      this.accountSerivce.loadCurrentUser(token).subscribe(() => {
        console.log('loaded user')
      }, error => {
        console.log(error);
      }); 
  }

}