import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'github-search-ddd-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent implements AfterViewInit {
  @Input() showSearchIcon = true;

  @Output() submitted = new EventEmitter<string>();

  public value = '';

  constructor(private _route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    const { q } = this._route.snapshot.queryParams;
    this.value = q ?? '';
  }
}
