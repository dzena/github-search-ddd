import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoadingProgressService } from './loading-progress.service';

@Component({
  selector: 'github-search-ddd-loading-progress',
  templateUrl: './loading-progress.component.html',
  styleUrls: ['./loading-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingProgressComponent {
  public isLoading$ = this._loadingProgressService.loading$;

  constructor(private _loadingProgressService: LoadingProgressService) {}
}
