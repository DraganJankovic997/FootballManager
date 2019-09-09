import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { Tim } from '../../models/tim';
import { TimService } from '../../services/tim.service';
import { Liga } from '../../models/liga';

import {TimDialogComponent} from '../dialogs/tim-dialog/tim-dialog.component';

@Component({
  selector: 'app-tim',
  templateUrl: './tim.component.html',
  styleUrls: ['./tim.component.css']
})
export class TimComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'osnovan', 'sediste', 'liga', 'actions'];
  dataSource: MatTableDataSource<Tim>;
  izabranTim: Tim;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public timService: TimService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.loadData();
  }

  ngOnChanges() {
    this.loadData();
  }

  public loadData() {
    this.timService.getAllTim().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.filterPredicate = (data, filter: string)=>{
        const acc = (currentTerm, key) => {
          return key === 'liga' ? currentTerm + data.liga.naziv : currentTerm + data[key];
        };
        const dataStr = Object.keys(data).reduce(acc, '').toLowerCase();
        const transformedFilter = filter.trim().toLowerCase();
        return dataStr.indexOf(transformedFilter) !== -1;
      };

      this.dataSource.sortingDataAccessor = (data, property)=>{
        switch(property) {
          case 'liga' : return data.liga.naziv.toLocaleLowerCase();
          default: return data[property];
        }
      };
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }

  selectTim(sel){
    this.izabranTim = sel;
  }

  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

  public openDialog(flag: number, id: number, naziv: string, osnovan: Date,
    sediste: string, liga: Liga){
    const dialogRef = this.dialog.open(TimDialogComponent, {
      data: {
        id: id,
        naziv: naziv,
        osnovan: osnovan,
        sediste: sediste,
        liga: liga
      }
    });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(res => {
      if(res == 1) {
        this.loadData();
      }
    });
  }

}
