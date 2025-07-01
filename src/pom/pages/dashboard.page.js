class DashboardPage {
    async open() {
        await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
    }
    
}

module.exports = DashboardPage;