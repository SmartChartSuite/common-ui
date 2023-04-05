import { OnInit } from '@angular/core';
import { HeaderConfig } from "./header.config";
import * as i0 from "@angular/core";
export declare class HeaderComponent implements OnInit {
    configuration: HeaderConfig | undefined;
    title: string;
    version: string;
    subtitle: string;
    splitSubtitleEvenly: boolean;
    showUserManagement: boolean;
    backgroundColor: string;
    subtitleInsert: any;
    constructor();
    ngOnInit(): void;
    private splitSubtitle;
    openLink(link: string | undefined): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "common-header", never, { "configuration": "configuration"; "title": "title"; "version": "version"; "subtitle": "subtitle"; "splitSubtitleEvenly": "splitSubtitleEvenly"; "showUserManagement": "showUserManagement"; "backgroundColor": "backgroundColor"; }, {}, never, never, true, never>;
}
