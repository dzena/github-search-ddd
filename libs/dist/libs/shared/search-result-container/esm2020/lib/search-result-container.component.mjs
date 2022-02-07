import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@github-search-ddd/ui-kit/toolbar";
import * as i3 from "@angular/material/sidenav";
import * as i4 from "@github-search-ddd/ui-kit/search-form";
import * as i5 from "@angular/material/list";
const _c0 = function (a0, a2) { return { q: a0, page: "1", per_page: a2 }; };
export class SearchResultContainerComponent {
    constructor(_router, route) {
        this._router = _router;
        this.route = route;
    }
    search(q) {
        if (!q) {
            this._router.navigate(['/']);
            return;
        }
        const queryParams = { q, page: '1' };
        this._router.navigate([], {
            relativeTo: this.route,
            queryParams,
            queryParamsHandling: 'merge',
        });
    }
}
SearchResultContainerComponent.ɵfac = function SearchResultContainerComponent_Factory(t) { return new (t || SearchResultContainerComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
SearchResultContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchResultContainerComponent, selectors: [["github-search-ddd-search-result-container"]], decls: 11, vars: 10, consts: [[1, "search-res-sidenav-container"], ["mode", "side", "opened", "", 1, "search-res-sidenav"], [3, "submitted"], ["mat-list-item", "", "routerLinkActive", "active-menu-item", 3, "routerLink", "queryParams"]], template: function SearchResultContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "github-search-ddd-toolbar");
        i0.ɵɵelementStart(1, "mat-sidenav-container", 0);
        i0.ɵɵelementStart(2, "mat-sidenav", 1);
        i0.ɵɵelementStart(3, "github-search-ddd-search-form", 2);
        i0.ɵɵlistener("submitted", function SearchResultContainerComponent_Template_github_search_ddd_search_form_submitted_3_listener($event) { return ctx.search($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-nav-list");
        i0.ɵɵelementStart(5, "a", 3);
        i0.ɵɵtext(6, "Users");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "a", 3);
        i0.ɵɵtext(8, "Repositories");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-sidenav-content");
        i0.ɵɵelement(10, "router-outlet");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("routerLink", "/search/users")("queryParams", i0.ɵɵpureFunction2(4, _c0, ctx.route.snapshot.queryParams["q"], ctx.route.snapshot.queryParams["per_page"]));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("routerLink", "/search/repositories")("queryParams", i0.ɵɵpureFunction2(7, _c0, ctx.route.snapshot.queryParams["q"], ctx.route.snapshot.queryParams["per_page"]));
    } }, directives: [i2.ToolbarComponent, i3.MatSidenavContainer, i3.MatSidenav, i4.SearchFormComponent, i5.MatNavList, i5.MatListItem, i1.RouterLinkWithHref, i1.RouterLinkActive, i3.MatSidenavContent, i1.RouterOutlet], styles: [".search-res-sidenav-container[_ngcontent-%COMP%]{height:calc(100% - 56px)}.search-res-sidenav-container[_ngcontent-%COMP%]   .search-res-sidenav[_ngcontent-%COMP%]{width:230px}.search-res-sidenav-container[_ngcontent-%COMP%]   .active-menu-item[_ngcontent-%COMP%]{background:rgba(63,81,181,.15);color:#3f51b5}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchResultContainerComponent, [{
        type: Component,
        args: [{ selector: 'github-search-ddd-search-result-container', changeDetection: ChangeDetectionStrategy.OnPush, template: "<github-search-ddd-toolbar></github-search-ddd-toolbar>\n<mat-sidenav-container class=\"search-res-sidenav-container\">\n  <mat-sidenav mode=\"side\" opened class=\"search-res-sidenav\">\n    <github-search-ddd-search-form\n      (submitted)=\"search($event)\"\n    ></github-search-ddd-search-form>\n    <mat-nav-list>\n      <a\n        mat-list-item\n        [routerLink]=\"'/search/users'\"\n        [queryParams]=\"{\n          q: route.snapshot.queryParams['q'],\n          page: '1',\n          per_page: route.snapshot.queryParams['per_page']\n        }\"\n        routerLinkActive=\"active-menu-item\"\n        >Users</a\n      >\n      <a\n        mat-list-item\n        [routerLink]=\"'/search/repositories'\"\n        [queryParams]=\"{\n          q: route.snapshot.queryParams['q'],\n          page: '1',\n          per_page: route.snapshot.queryParams['per_page']\n        }\"\n        routerLinkActive=\"active-menu-item\"\n        >Repositories</a\n      >\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n", styles: [".search-res-sidenav-container{height:calc(100% - 56px)}.search-res-sidenav-container .search-res-sidenav{width:230px}.search-res-sidenav-container .active-menu-item{background:rgba(63,81,181,.15);color:#3f51b5}\n"] }]
    }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2ZlYXR1cmUvc2VhcmNoLXJlc3VsdC1jb250YWluZXIvc3JjL2xpYi9zZWFyY2gtcmVzdWx0LWNvbnRhaW5lci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zaGFyZWQvZmVhdHVyZS9zZWFyY2gtcmVzdWx0LWNvbnRhaW5lci9zcmMvbGliL3NlYXJjaC1yZXN1bHQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7QUFRekQsTUFBTSxPQUFPLDhCQUE4QjtJQUN6QyxZQUFvQixPQUFlLEVBQVMsS0FBcUI7UUFBN0MsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQUcsQ0FBQztJQUU5RCxNQUFNLENBQUMsQ0FBUztRQUNyQixJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE9BQU87U0FDUjtRQUVELE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3RCLFdBQVc7WUFDWCxtQkFBbUIsRUFBRSxPQUFPO1NBQzdCLENBQUMsQ0FBQztJQUNMLENBQUM7OzRHQWZVLDhCQUE4QjtpRkFBOUIsOEJBQThCO1FDVDNDLDRDQUF1RDtRQUN2RCxnREFBNEQ7UUFDMUQsc0NBQTJEO1FBQ3pELHdEQUVDO1FBREMsZ0pBQWEsa0JBQWMsSUFBQztRQUM3QixpQkFBZ0M7UUFDakMsb0NBQWM7UUFDWiw0QkFTRztRQUFBLHFCQUFLO1FBQUEsaUJBQ1A7UUFDRCw0QkFTRztRQUFBLDRCQUFZO1FBQUEsaUJBQ2Q7UUFDSCxpQkFBZTtRQUNqQixpQkFBYztRQUNkLDJDQUFxQjtRQUNuQixpQ0FBK0I7UUFDakMsaUJBQXNCO1FBQ3hCLGlCQUF3Qjs7UUF6QmhCLGVBQThCO1FBQTlCLDRDQUE4Qiw0SEFBQTtRQVc5QixlQUFxQztRQUFyQyxtREFBcUMsNEhBQUE7O3VGRFhoQyw4QkFBOEI7Y0FOMUMsU0FBUzsyQkFDRSwyQ0FBMkMsbUJBR3BDLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2l0aHViLXNlYXJjaC1kZGQtc2VhcmNoLXJlc3VsdC1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLXJlc3VsdC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtcmVzdWx0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVzdWx0Q29udGFpbmVyQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHt9XG5cbiAgcHVibGljIHNlYXJjaChxOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXEpIHtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7IHEsIHBhZ2U6ICcxJyB9O1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXSwge1xuICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJyxcbiAgICB9KTtcbiAgfVxufVxuIiwiPGdpdGh1Yi1zZWFyY2gtZGRkLXRvb2xiYXI+PC9naXRodWItc2VhcmNoLWRkZC10b29sYmFyPlxuPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cInNlYXJjaC1yZXMtc2lkZW5hdi1jb250YWluZXJcIj5cbiAgPG1hdC1zaWRlbmF2IG1vZGU9XCJzaWRlXCIgb3BlbmVkIGNsYXNzPVwic2VhcmNoLXJlcy1zaWRlbmF2XCI+XG4gICAgPGdpdGh1Yi1zZWFyY2gtZGRkLXNlYXJjaC1mb3JtXG4gICAgICAoc3VibWl0dGVkKT1cInNlYXJjaCgkZXZlbnQpXCJcbiAgICA+PC9naXRodWItc2VhcmNoLWRkZC1zZWFyY2gtZm9ybT5cbiAgICA8bWF0LW5hdi1saXN0PlxuICAgICAgPGFcbiAgICAgICAgbWF0LWxpc3QtaXRlbVxuICAgICAgICBbcm91dGVyTGlua109XCInL3NlYXJjaC91c2VycydcIlxuICAgICAgICBbcXVlcnlQYXJhbXNdPVwie1xuICAgICAgICAgIHE6IHJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWydxJ10sXG4gICAgICAgICAgcGFnZTogJzEnLFxuICAgICAgICAgIHBlcl9wYWdlOiByb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1sncGVyX3BhZ2UnXVxuICAgICAgICB9XCJcbiAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZS1tZW51LWl0ZW1cIlxuICAgICAgICA+VXNlcnM8L2FcbiAgICAgID5cbiAgICAgIDxhXG4gICAgICAgIG1hdC1saXN0LWl0ZW1cbiAgICAgICAgW3JvdXRlckxpbmtdPVwiJy9zZWFyY2gvcmVwb3NpdG9yaWVzJ1wiXG4gICAgICAgIFtxdWVyeVBhcmFtc109XCJ7XG4gICAgICAgICAgcTogcm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbJ3EnXSxcbiAgICAgICAgICBwYWdlOiAnMScsXG4gICAgICAgICAgcGVyX3BhZ2U6IHJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWydwZXJfcGFnZSddXG4gICAgICAgIH1cIlxuICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlLW1lbnUtaXRlbVwiXG4gICAgICAgID5SZXBvc2l0b3JpZXM8L2FcbiAgICAgID5cbiAgICA8L21hdC1uYXYtbGlzdD5cbiAgPC9tYXQtc2lkZW5hdj5cbiAgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+XG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICA8L21hdC1zaWRlbmF2LWNvbnRlbnQ+XG48L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cbiJdfQ==