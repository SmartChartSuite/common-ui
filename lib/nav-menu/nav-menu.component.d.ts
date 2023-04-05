import { OnInit } from '@angular/core';
import { OptionConfig } from "./option.config";
import * as i0 from "@angular/core";
export declare class NavMenuComponent implements OnInit {
    backgroundColor: string;
    contrastColor: string;
    options: OptionConfig;
    expanded: boolean;
    selectedOption: number;
    constructor();
    ngOnInit(): void;
    toggleSize(): void;
    select(i: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavMenuComponent, "common-nav-menu", never, { "backgroundColor": "backgroundColor"; "contrastColor": "contrastColor"; "options": "options"; }, {}, never, never, true, never>;
}
