const DashboardPage = require('../pom/pages/dashboard.page.js');
const DoctorPage = require('../pom/pages/doctors.page.js');

describe("Doctor's page", () => {

    let dashboardPage;
    let doctorPage;

    beforeEach(async () => {
        dashboardPage = new DashboardPage();
        doctorPage = new DoctorPage();
        await dashboardPage.open();
    })

    it('Check page title', async () => {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App')
    })

    it('Open modal windows for adding a new doctor', async () => {
        //Click on doctor item in the side menu
        await dashboardPage.sideMenu.item('doctors').click();
        //Click on add new doctor btn
        await doctorPage.doctorListHeader.addNewDoctorBtn.click();
        //Check that the model windows is displayed ´
        await expect(doctorPage.addDoctorModal.rootEl).toBeDisplayed();
    })

    it('Add new doctor on the page', async () => {
        //Click on doctor item in the side menu
        await dashboardPage.sideMenu.item('doctors').click();
        //Click on add new doctor btn
        await doctorPage.doctorListHeader.addNewDoctorBtn.click();
        //Wait for visibility of modal menu
        await doctorPage.addDoctorModal.rootEl.waitForDisplayed();

        //Set value in the required fields
        await $('[name=Name]').setValue('John Doe');
        await $('#DoctorMobile').setValue('3156892457');
        await $('[name=Email]').setValue('youremail@gmail.com');
        await $('[name=Education]').setValue('Doctor');
        await $('[name=Designation]').setValue('Dr.');

        await $('.e-footer-content button.e-primary').click();

        //Validations
        await expect(doctorPage.addDoctorModal.rootEl).not.toBeDisplayed();

        await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Doe');
        await expect($('#Specialist_8').$('.education')).toHaveText('Doctor', { ignoreCase: true });
    })

    it('Close modal windows', async () => {
        await dashboardPage.sideMenu.item('doctors').click();
        await doctorPage.doctorListHeader.addNewDoctorBtn.click();
        await doctorPage.addDoctorModal.rootEl.waitForDisplayed();

        await $('.e-dlg-header-content button.e-control').click();
        await expect(doctorPage.addDoctorModal.rootEl).not.toBeDisplayed();


    })
})