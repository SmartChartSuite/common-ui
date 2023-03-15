import { OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogData } from "../domain/dialog-data";
import * as i0 from "@angular/core";
export declare class ConformationDialogComponent implements OnInit {
    private dialogRef;
    private dialogData;
    data: DialogData;
    constructor(dialogRef: MatDialogRef<any>, dialogData: DialogData);
    onSecondaryClick(): void;
    onDefaultClick(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConformationDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConformationDialogComponent, "lib-confirmation-dialog", never, {}, {}, never, never, true, never>;
}
export declare function openConfirmationDialog(dialog: MatDialog, dialogData?: DialogData): import("rxjs").Observable<any>;
