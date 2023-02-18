import { Component, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

/**
 * @title Basic menu
 */
@Component({
  selector: 'menu-overview-example',
  templateUrl: 'menu-overview-example.html',
  styleUrls: ['menu-overview-example.css'],
})
export class MenuOverviewExample {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: 'this.name', animal: 'this.animal' },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  ngOnInit() {}

  resetFocus(matMenuComp) {
    // console.log(this.childMenu);
    // console.log(matMenuComp);
    // this.childMenu._keyManager_activeItemIndex = -1;
  }

  debugTop() {
    console.log(this.menuObj);
    console.log(this.menuObj.structure[1]);
  }

  openTab(moduleId) {
    alert(moduleId);
  }

  menuObj = {
    structure: [
      {
        parent: 1,
        show: false,
        template: '',
        id: 65,
        childs: [
          {
            parent: 65,
            show: false,
            template: 'temp1',
            id: 286,
            childs: [],
            label: 'labChild1',
          },
        ],
        label: 'parent1',
      },
      {
        parent: 1,
        show: false,
        template: '',
        id: 42,
        childs: [
          {
            parent: 42,
            show: false,
            template: 'child1',
            id: 44,
            childs: [],
            label: 'lab1',
          },
          {
            parent: 42,
            show: false,
            template: 'child2',
            id: 46,
            childs: [],
            label: 'lab2',
          },
          {
            parent: 42,
            show: false,
            template: 'child3',
            id: 45,
            childs: [],
            label: 'lab3',
          },
          {
            parent: 42,
            show: false,
            template: 'child4',
            id: 218,
            childs: [],
            label: 'child4',
          },
        ],
        label: 'parent2',
      },
    ],
  };
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
<h1 mat-dialog-title>Hi {{data.name}}</h1>
<div mat-dialog-content>
  <p>What's your favorite animal?</p>
  <mat-form-field>
    <input matInput [(ngModel)]="data.animal">
  </mat-form-field>
</div>
<div mat-dialog-actions>
  <button mat-button (click)="onNoClick()">No Thanks</button>
  <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>
</div>
`,
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
