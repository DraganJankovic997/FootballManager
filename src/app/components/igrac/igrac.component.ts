import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

import { Igrac } from '../../models/igrac';
import {IgracService} from '../../services/igrac.service';
import { Tim } from '../../models/tim';

import {IgracDialogComponent} from '../dialogs/igrac-dialog/igrac-dialog.component';
import { Nacionalnost } from 'src/app/models/nacionalnost';

@Component({
  selector: 'app-igrac',
  templateUrl: './igrac.component.html',
  styleUrls: ['./igrac.component.css']
})
export class IgracComponent implements OnInit {

  displayedColumns = ['id', 'ime', 'prezime', 'brojReg', 
    'datumRodjenja', 'nacionalnost', 'tim', 'actions'];
  dataSource: MatTableDataSource<Igrac>;

  @Input() izabranTim: Tim;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public igracService: IgracService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.izabranTim.id) {
      this.loadData();
    }
  }

  public loadData(){
    this.igracService.getIgracTim(this.izabranTim.id).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.filterPredicate =(data, filter: string)=>{
        const acc = (currentTerm, key)=>{
          return key==='nacionalnost' ? currentTerm + data.nacionalnost.skracenica : currentTerm + data[key];
        };
        const dataStr = Object.keys(data).reduce(acc, '').toLowerCase();
        const transformedFilter = filter.trim().toLowerCase();
        return dataStr.indexOf(transformedFilter) !== -1;
      };

      this.dataSource.sortingDataAccessor =(data, property)=>{
        switch(property) {
          case 'nacionalnost': return data.nacionalnost.skracenica.toLocaleLowerCase();
          default: return data[property];
        }
      };

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }
  
  public openDialog(flag: number, id: number, ime: string, prezime: string,
    brojReg: string, datumRodjenja: Date, nacionalnost: Nacionalnost, tim: Tim){
    const dialogRef = this.dialog.open(IgracDialogComponent, {
      data: {
        id: id,
        ime: ime,
        prezime: prezime,
        brojReg: brojReg,
        datumRodjenja: datumRodjenja,
        nacionalnost: nacionalnost,
        tim: tim
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
