import { Component, inject  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  private readonly router = inject(ActivatedRoute);

  ngOnInit() {
    console.log(this.router.snapshot.data)
  }
}
