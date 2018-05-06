import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ShirtService} from "../services/shirt.service";
import {Shirt} from "../models/Shirt";
import THREELib from "three-js";

@Component({
  selector: 'create-shirt',
  templateUrl: './list.shirts.component.html',

})
export class ListShirtsComponent implements OnInit, OnChanges {
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
