import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormGroup, ValidationErrors } from "@angular/forms";
import { MatDialogRef, MatDialog } from "@angular/material/dialog";
import { TextInputDialogData } from "../domain/text-input-dialog-data";
import * as i0 from "@angular/core";
export declare class TextInputDialogComponent implements OnInit, AfterViewInit {
    private dialogRef;
    private dialogData;
    textareaElement: ElementRef | undefined;
    minNumberOfRows: number;
    ngAfterViewInit(): void;
    data: TextInputDialogData;
    dialogForm: UntypedFormGroup;
    numRows: number;
    constructor(dialogRef: MatDialogRef<any>, dialogData: any);
    onCancel(): void;
    onSave(): void;
    ngOnInit(): void;
    onSubmit(): void;
    getValidationErrors(errors: ValidationErrors | null, errorTypes: any[] | undefined): string;
    autoResizeTextarea(textarea: HTMLTextAreaElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextInputDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextInputDialogComponent, "lib-text-input-dialog", never, {}, {}, never, never, true, never>;
}
export declare function openTextInputDialog(dialog: MatDialog, dialogData?: TextInputDialogData): import("rxjs").Observable<any>;
export declare function JsonValidator(control: AbstractControl): {
    jsonValidator: boolean;
} | null;
export declare function ResourceTypeValidator(control: AbstractControl): {
    resourceTypeValidator: boolean;
} | null;
