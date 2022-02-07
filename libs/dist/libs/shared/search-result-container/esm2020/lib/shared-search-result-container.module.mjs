import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@github-search-ddd/material';
import { UiKitToolbarModule } from '@github-search-ddd/ui-kit/toolbar';
import { UiKitSearchFormModule } from '@github-search-ddd/ui-kit/search-form';
import { SearchResultContainerComponent } from './search-result-container.component';
import * as i0 from "@angular/core";
export class SharedSearchResultContainerModule {
}
SharedSearchResultContainerModule.ɵfac = function SharedSearchResultContainerModule_Factory(t) { return new (t || SharedSearchResultContainerModule)(); };
SharedSearchResultContainerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SharedSearchResultContainerModule });
SharedSearchResultContainerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            RouterModule,
            MaterialModule,
            UiKitToolbarModule,
            UiKitSearchFormModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedSearchResultContainerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    MaterialModule,
                    UiKitToolbarModule,
                    UiKitSearchFormModule,
                ],
                declarations: [SearchResultContainerComponent],
                exports: [SearchResultContainerComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedSearchResultContainerModule, { declarations: [SearchResultContainerComponent], imports: [CommonModule,
        RouterModule,
        MaterialModule,
        UiKitToolbarModule,
        UiKitSearchFormModule], exports: [SearchResultContainerComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLXNlYXJjaC1yZXN1bHQtY29udGFpbmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9mZWF0dXJlL3NlYXJjaC1yZXN1bHQtY29udGFpbmVyL3NyYy9saWIvc2hhcmVkLXNlYXJjaC1yZXN1bHQtY29udGFpbmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztBQWFyRixNQUFNLE9BQU8saUNBQWlDOztrSEFBakMsaUNBQWlDO21GQUFqQyxpQ0FBaUM7dUZBVm5DO1lBQ1AsWUFBWTtZQUNaLFlBQVk7WUFDWixjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLHFCQUFxQjtTQUN0Qjt1RkFJVSxpQ0FBaUM7Y0FYN0MsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLHFCQUFxQjtpQkFDdEI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzlDLE9BQU8sRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzFDOzt3RkFDWSxpQ0FBaUMsbUJBSDdCLDhCQUE4QixhQU4zQyxZQUFZO1FBQ1osWUFBWTtRQUNaLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIscUJBQXFCLGFBR2IsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAZ2l0aHViLXNlYXJjaC1kZGQvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgVWlLaXRUb29sYmFyTW9kdWxlIH0gZnJvbSAnQGdpdGh1Yi1zZWFyY2gtZGRkL3VpLWtpdC90b29sYmFyJztcbmltcG9ydCB7IFVpS2l0U2VhcmNoRm9ybU1vZHVsZSB9IGZyb20gJ0BnaXRodWItc2VhcmNoLWRkZC91aS1raXQvc2VhcmNoLWZvcm0nO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtcmVzdWx0LWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBNYXRlcmlhbE1vZHVsZSxcbiAgICBVaUtpdFRvb2xiYXJNb2R1bGUsXG4gICAgVWlLaXRTZWFyY2hGb3JtTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTZWFyY2hSZXN1bHRDb250YWluZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU2VhcmNoUmVzdWx0Q29udGFpbmVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkU2VhcmNoUmVzdWx0Q29udGFpbmVyTW9kdWxlIHt9XG4iXX0=