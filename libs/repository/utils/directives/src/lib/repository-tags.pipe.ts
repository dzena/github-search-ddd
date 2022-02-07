import { Pipe, PipeTransform } from '@angular/core';
import { IRepositoryListEntity } from '@github-search-ddd/repository/domain';

interface IRepoTag {
  title: 'Language' | 'Stargazers' | 'Last updated';
  description: number | string;
}

@Pipe({
  name: 'repositoryTags',
})
export class RepositoryTagsPipe implements PipeTransform {
  transform(value: IRepositoryListEntity): IRepoTag[] {
    const { stargazers_count, language, updated_at } = value;
    return [
      { title: 'Language', description: language },
      { title: 'Stargazers', description: stargazers_count },
      {
        title: 'Last updated',
        description: new Date(updated_at).toLocaleDateString(),
      },
    ];
  }
}
