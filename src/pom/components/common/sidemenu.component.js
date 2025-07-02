class SideMenuComponent {

    get rootEl() {
        return $('#plannerSiderBar');

    }

    get name() {
        return this.rootEl.$('#plannerSiderBar .name');
    }

    item(param) {
        const selectors = {
            dashboard: '[routerlink="/dashboard"]',
            schedule: '[routerlink="/calendar"]',
            doctors: '[routerlink="/doctors"]'

        };
        return this.rootEl.$(selectors[param.toLowerCase()]);
    }
}

module.exports = SideMenuComponent;