import { Component, OnInit } from '@angular/core';
import { OrderHistory } from 'src/app/common/order-history';
import { OrderHistoryService } from 'src/app/services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orderHistoryList: OrderHistory[] = [];
  storage: Storage = sessionStorage;

  constructor(private orderHistoryService: OrderHistoryService) { }

  ngOnInit(): void {
    this.handleOrderHistory();
  }

  handleOrderHistory() {
    // Get the email from the storage
    const userEmail = JSON.parse(this.storage.getItem('userEmail')!);

    // If email exists, fetch order history
    if (userEmail) {
      this.orderHistoryService.getOrderHistory(userEmail).subscribe(
        (        data: { _embedded: { orders: OrderHistory[]; }; }) => {
          this.orderHistoryList = data._embedded.orders;
        }
      );
    }
  }

}
