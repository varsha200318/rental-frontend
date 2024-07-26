import { Component,OnInit } from '@angular/core';
import{item};
import { Router } from '@angular/router';
import{ItemService};
@Component({
  selector: 'app-item-management',
  standalone: true,
  imports: [],
  templateUrl: './item-management.component.html',
  styleUrl: './item-management.component.css'
})
export class ItemManagementComponent implements OnInit {
  item:Item[];
  constructor(private ItemService :itemservice,
    private 
  )

}
