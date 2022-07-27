export class BizViewPage {

    logo = '.insightsoftware-logo';
    header = '.decorative-header';

    verifyLogoPresent() {
        cy.get(this.logo).should('exist');
        return this;
    }

    navigateToSection(name) {
        cy.get(this.header).contains(name).scrollIntoView()
        return this;
    }

    navigateToTab(name) {
        cy.get('.nav > li > a').contains(name).then((nav) => {
            cy.get(nav).click();
            cy.get(nav).should('have.attr', 'aria-expanded').and('include', true)
        })
        return this;
    }

    validateInforLawsonLink(name) {
        cy.get('#infor ul > li > a').should('have.attr', 'href').and('include', name)
        return this;
    }

    validateTabContent(name) {
        cy.get('#' + name + '.active').should('exist')
        return this;
    }
}