"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubscriptionModel {
    static getInstance() {
        SubscriptionModel._instance = SubscriptionModel._instance || new SubscriptionModel();
        return SubscriptionModel._instance;
    }
    constructor() { }
    // do some update stuff
    update() { }
    add(p_vo) {
        this.getAll().push(p_vo);
    }
    remove(p_id) {
        let users = this.getAll();
        users.splice(users.indexOf(this.get(p_id)), 1);
    }
    get(p_id) {
        let users = this.getAll();
        let i = users.length;
        while (--i > -1) {
            if (users[i].id === p_id)
                return users[i];
        }
    }
    getAll() {
        return [];
    }
}
exports.SubscriptionModel = SubscriptionModel;
//# sourceMappingURL=SubscriptionModel.js.map