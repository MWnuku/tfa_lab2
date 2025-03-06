describe('Check if gallery is displayed correctly', function () {
    it('Check if all slides contain title and describtion"', function () {
      cy.visit('http://localhost:3000');
      cy.get('.card-description').should('contain', 'Rome');
      cy.get('.card-description').should('contain', 'Italy');
      cy.get('.swiper-button-next').click();
      cy.wait(1000);
      cy.get('.card-description').should('contain', 'London');
      cy.get('.card-description').should('contain', 'United Kingdom');
      cy.get('.swiper-button-next').click();
      cy.wait(1000);
      cy.get('.card-description').should('contain', 'Paris');
      cy.get('.card-description').should('contain', 'France');
    });
  });
  
  