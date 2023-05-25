/** @odoo-module **/
import { mount } from "@odoo/owl";
import { Main } from "./main";
import { templates } from "@web/core/assets";
owl.whenReady(() => { mount(Main, document.body, { templates, dev: true });
});
/**  
* @param {Event} ev 
*/