import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import {Igrac} from '../../../models/igrac';
import {Tim} from '../../../models/tim';
import {Nacionalnost} from '../../../models/nacionalnost';
import {IgracService} from '../../../services/igrac.service';
import {TimService} from '../../../services/tim.service';
import {NacionalnostService} from '../../../services/nacionalnost.service';

@Component({
  selector: 'app-igrac-dialog',
  templateUrl: './igrac-dialog.component.html',
  styleUrls: ['./igrac-dialog.component.css']
})
export class IgracDialogComponent implements OnInit {

  public flag: Number;
  timovi: Tim[];
  nacionalnosti: Nacionalnost[];
  constructor(
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<IgracDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Igrac,
    public igracService: IgracService,
    public timService: TimService,
    public nacionalnostService: NacionalnostService
  ) { }

  ngOnInit() {
    this.timService.getAllTim().subscribe(timovi => {
      this.timovi = timovi;
    });
    this.nacionalnostService.getAllNacionalnost().subscribe(nac=> {
      this.nacionalnosti = nac;
    });
  }

  compareTo(a, b) {
    return a.id == b.id;
  }

  // onChange(tim, nacionalnost) {
  //   this.data.tim = tim;
  //   this.data.nacionalnost = nacionalnost;
  // }

  onChangeNacionalnost(nac) {
    this.data.nacionalnost = nac;
  }

  public add(): void {
    this.data.id = -1;
    this.igracService.addIgrac(this.data);
    this.snackBar.open("Dodat igrac: " + this.data.ime + ' ' + this.data.prezime, "U redu", {
      duration: 2500
    });
  }

  public update(): void {
    this.igracService.updateIgrac(this.data);
    this.snackBar.open("Modifikovan igrac: " + this.data.ime + ' ' + this.data.prezime, "U redu", {
      duration: 2500
    });
  }

  public delete(): void {
    this.igracService.deleteIgrac(this.data.id);
    this.snackBar.open("Obrisan igrac: " + this.data.ime + ' ' + this.data.prezime, "U redu", {
      duration: 2500
    });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Akcija otkazana", "U redu", {
      duration: 2500
    });
  }
}
