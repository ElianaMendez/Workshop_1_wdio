describe("Doctor's page", () => {
    beforeEach(async () => {
        await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
    })

    it('Check page title', async () => {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App')
    })

    it('Open modal windows for adding a new doctor', async () => {
        //Click on doctor item in the side menu
        await $('[routerlink="/doctors"]').click();
        //Click on add new doctor btn
        await $('.specialization-types button.e-control').click();
        //Check that the model windows is displayed ´
        await expect($('.e-dlg-header')).toBeDisplayed();
    })

    it('Add new doctor on the page', async () => {
        //Click on doctor item in the side menu
        await $('[routerlink="/doctors"]').click();
        //Click on add new doctor btn
        await $('.specialization-types button.e-control').click();
        //Wait for visibility of modal menu
        await $('.e-dlg-header').waitForDisplayed();

        //Set value in the required fields
        await $('[name=Name]').setValue('John Doe');
        await $('#DoctorMobile').setValue('3156892457');
        await $('[name=Email]').setValue('youremail@gmail.com');
        await $('[name=Education]').setValue('Doctor');
        await $('[name=Designation]').setValue('Dr.');

        await $('.e-footer-content button.e-primary').click();

        //Validations
        await expect($('.e-dlg-header')).not.toBeDisplayed();

        await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Doe');
        await expect($('#Specialist_8').$('.education')).toHaveText('Doctor', { ignoreCase: true });
    })

    it('Close modal windows', async () => {
        await $('[routerlink="/doctors"]').click();
        await $('.specialization-types button.e-control').click();
        await $('.e-dlg-header').waitForDisplayed();

        await $('.e-dlg-header-content button.e-control').click();
        await expect($('.e-dlg-header')).not.toBeDisplayed();


    })
})