import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import Item from '../../interfaces/Item';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

  items: Item[] = null;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemService.getItemByCategoryId(params['id'])
        .subscribe(
          (data: Item[]) => this.items = data,
          err => console.log(err.message || err)
        );
    });
  }

}
