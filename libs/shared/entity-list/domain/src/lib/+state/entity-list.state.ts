import { Observable } from 'rxjs';
import { StateService } from '@github-search-ddd/shared/utils/base-state';

export interface IEntityListState<T> {
  entities: T[];
  totalCount: number;
}

const initialState = {
  entities: [],
  totalCount: 0,
};

export class EntityListState<T> extends StateService<IEntityListState<T>> {
  public entities$: Observable<T[]> = this.select(({ entities }) => entities);
  public totalCount$: Observable<number> = this.select(
    ({ totalCount }) => totalCount
  );

  constructor() {
    super(initialState);
  }

  public setEntities(entities: T[], totalCount: number): void {
    this.setState({ entities: [...entities], totalCount });
  }
}
