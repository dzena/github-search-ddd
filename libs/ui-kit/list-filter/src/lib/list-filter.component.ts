import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IListFilterModel } from './entity/list-filter';

@Component({
  selector: 'github-search-ddd-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListFilterComponent implements AfterViewInit {
  @Input() options: IListFilterModel[] = [];
  public value: IListFilterModel | null = null;

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngAfterViewInit() {
    this._setInitFilterValue();
  }

  public filterChanged(filter: IListFilterModel): void {
    const { sort, order } = filter;
    const queryParams = { sort, order };

    this._router.navigate([], {
      relativeTo: this._route,
      queryParams,
      queryParamsHandling: 'merge',
    });
  }

  private _setInitFilterValue(): void {
    const { sort, order } = this._route.snapshot.queryParams;
    let filter = this.options[0];

    if (sort && order) {
      const found = this.options.find(
        (fo) => fo.sort === sort && fo.order === order
      );
      if (found) {
        filter = found;
      }
    }

    this.value = filter;
  }
}
