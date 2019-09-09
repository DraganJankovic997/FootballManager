import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Tim } from '../../../models/tim';
import { TimService } from '../../../services/tim.service';
import { Liga } from '../../../models/liga';
import { LigaService } from '../../../services/liga.service';

@Component({
  selector: 'app-tim-dialog',
  templateUrl: './tim-dialog.component.html',
  styleUrls: ['./tim-dialog.component.css']
})
export class TimDialogComponent implements OnInit {

  public flag: number;
  lige: Liga[];
  constructor(
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<TimDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tim,
    public timService: TimService,
    public ligaService: LigaService
  ) { }

  ngOnInit() {
    this.ligaService.getAllLiga().subscribe(lige => {
      this.lige = lige;
    });
  }

  compareTo(a, b) {
    return a.id == b.id;
  }

  onChange(liga) {
    this.data.liga = liga;
  }

  public add(): void {
    this.data.id = -1;
    this.timService.addTim(this.data);
    this.snackBar.open("Dodat tim: " + this.data.naziv, "U redu", {
      duration: 2500
    });
  }

  public update(): void {
    this.timService.updateTim(this.data);
    this.snackBar.open("Modifikovan tim: " + this.data.naziv, "U redu", {
      duration: 2500
    });
  }

  public delete(): void {
    this.timService.deleteTim(this.data.id);
    this.snackBar.open("Obrisan tim: " + this.data.naziv, "U redu", {
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
