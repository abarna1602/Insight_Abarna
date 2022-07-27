import { BizViewPage } from "../Pages/BizViewPage";


describe('insightsoftware bizview flow', () => {

  const bizviewPage = new BizViewPage();

    it('validate the bizview flow', () => {
      cy.visit('https://insightsoftware.com/bizview/')
      bizviewPage.verifyLogoPresent()
      .navigateToSection("Integrates with")
      .navigateToTab("Infor")
      .validateInforLawsonLink("https://insightsoftware.com/lawson/")
      .navigateToTab("Oracle")
      .validateTabContent("oracle")
      .navigateToTab("Microsoft")
      .validateTabContent("microsoft")
      .navigateToTab("SAP")
      .validateTabContent("sap")
      .navigateToTab("Deltek")
      .validateTabContent("deltek")
    })

})