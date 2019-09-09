import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Liga } from '../../../models/liga';
import { LigaService } from '../../../services/liga.service';


@Component({
  selector: 'app-liga-dialog',
  templateUrl: './liga-dialog.component.html',
  styleUrls: ['./liga-dialog.component.css']
})
export class LigaDialogComponent implements OnInit {

  public flag: number;

  constructor(
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<LigaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Liga,
    public ligaService: LigaService
  ) { }

  ngOnInit() {
  }

  public add(): void {
    this.data.id = -1;
    this.ligaService.addLiga(this.data);
    this.snackBar.open("Dodata liga: " + this.data.naziv, "U redu", {
      duration: 2500
    });
  }

  public update(): void {
    this.ligaService.updateLiga(this.data);
    this.snackBar.open("Modifikovana liga: " + this.data.naziv, "U redu", {
      duration: 2500
    });
  }

  public delete(): void {
    this.ligaService.deleteLiga(this.data.id);
    this.snackBar.open("Obrisana liga: " + this.data.naziv, "U redu", {
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
