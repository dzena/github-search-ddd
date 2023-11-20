import { getGreeting } from '../support/app.po';

describe('github-search-ddd', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Search more');
  });
});
