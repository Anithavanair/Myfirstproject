import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  premium: number;
  selected: boolean;
}

interface RateOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css'
})
export class NewComponentComponent implements OnInit {
  rateOptions: RateOption[] = [];
  products: Product[] = [];
  selectedRate: string = '';

  ngOnInit(): void {
    // Mock Initialization
    this.rateOptions = [
      { value: 'basic', label: 'Basic Plan' },
      { value: 'standard', label: 'Standard Plan' },
      { value: 'premium', label: 'Premium Plan' }
    ];

    this.products = [
      { name: 'Product A', premium: 100, selected: false },
      { name: 'Product B', premium: 150, selected: false },
      { name: 'Product C', premium: 200, selected: false }
    ];
  }

  onRateChange(event: any): void {
    // Handle dropdown change
    console.log('Rate changed:', this.selectedRate);
  }

  selectProduct(product: Product): void {
    // Deselect all products
    this.products.forEach(p => p.selected = false);
    // Select the clicked product
    product.selected = true;
    console.log('Product selected:', product);
  }
}
 