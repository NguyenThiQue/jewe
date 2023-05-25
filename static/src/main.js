/** @odoo-module **/
import { Card } from "./components/card/card";
import { Component, useState } from "@odoo/owl";
export class Main extends Component {
    setup() 
    { 
        this.state = useState({});
    }
    static template = "test.main";
    static components = { Card }; 
}