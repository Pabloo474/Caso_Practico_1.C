import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/service-api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [];
  selectedItem: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.apiService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  createItem(item: any): void {
    this.apiService.createItem(item).subscribe(data => {
      this.items.push(data);
    });
  }

  updateItem(id: number, item: any): void {
    this.apiService.updateItem(id, item).subscribe(data => {
      const index = this.items.findIndex(i => i.id === id);
      if (index !== -1) {
        this.items[index] = data;
      }
    });
  }

  deleteItem(id: number): void {
    this.apiService.deleteItem(id).subscribe(() => {
      this.items = this.items.filter(i => i.id !== id);
    });
  }
}
