describe('SEO Metadata', () => {
    describe('Verify SEO Metadata exists', () => {
        it('should render SEO metadata on Index page', () => {
            cy.visit('/');

            cy.title().should('not.be.empty');

            cy.get('head meta[name="description"]')
                .invoke('attr', 'content')
                .should('not.be.empty');
        });
    });
});
