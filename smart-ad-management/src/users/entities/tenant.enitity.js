"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tenant = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("./user.entity");
var typeorm_2 = require("typeorm");
var subscription_entity_1 = require("../../subscription/entities/subscription.entity");
var Tenant = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('Tenant')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _domain_decorators;
    var _domain_initializers = [];
    var _subscriptionPlan_decorators;
    var _subscriptionPlan_initializers = [];
    var _paymentDetails_decorators;
    var _paymentDetails_initializers = [];
    var _users_decorators;
    var _users_initializers = [];
    var _subscription_decorators;
    var _subscription_initializers = [];
    var Tenant = _classThis = /** @class */ (function () {
        function Tenant_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.domain = __runInitializers(this, _domain_initializers, void 0);
            this.subscriptionPlan = __runInitializers(this, _subscriptionPlan_initializers, void 0);
            this.paymentDetails = __runInitializers(this, _paymentDetails_initializers, void 0);
            this.users = __runInitializers(this, _users_initializers, void 0);
            this.subscription = __runInitializers(this, _subscription_initializers, void 0);
        }
        return Tenant_1;
    }());
    __setFunctionName(_classThis, "Tenant");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)({ nullable: false, unique: true })];
        _domain_decorators = [(0, typeorm_1.Column)({ nullable: false, unique: true })];
        _subscriptionPlan_decorators = [(0, typeorm_1.Column)({ nullable: false })];
        _paymentDetails_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _users_decorators = [(0, typeorm_1.OneToMany)(function () { return user_entity_1.User; }, function (user) { return user.tenant; })];
        _subscription_decorators = [(0, typeorm_2.OneToOne)(function () { return subscription_entity_1.Subscription; }, function (subscription) { return subscription.tenant; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _domain_decorators, { kind: "field", name: "domain", static: false, private: false, access: { has: function (obj) { return "domain" in obj; }, get: function (obj) { return obj.domain; }, set: function (obj, value) { obj.domain = value; } }, metadata: _metadata }, _domain_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _subscriptionPlan_decorators, { kind: "field", name: "subscriptionPlan", static: false, private: false, access: { has: function (obj) { return "subscriptionPlan" in obj; }, get: function (obj) { return obj.subscriptionPlan; }, set: function (obj, value) { obj.subscriptionPlan = value; } }, metadata: _metadata }, _subscriptionPlan_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _paymentDetails_decorators, { kind: "field", name: "paymentDetails", static: false, private: false, access: { has: function (obj) { return "paymentDetails" in obj; }, get: function (obj) { return obj.paymentDetails; }, set: function (obj, value) { obj.paymentDetails = value; } }, metadata: _metadata }, _paymentDetails_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _users_decorators, { kind: "field", name: "users", static: false, private: false, access: { has: function (obj) { return "users" in obj; }, get: function (obj) { return obj.users; }, set: function (obj, value) { obj.users = value; } }, metadata: _metadata }, _users_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _subscription_decorators, { kind: "field", name: "subscription", static: false, private: false, access: { has: function (obj) { return "subscription" in obj; }, get: function (obj) { return obj.subscription; }, set: function (obj, value) { obj.subscription = value; } }, metadata: _metadata }, _subscription_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Tenant = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Tenant = _classThis;
}();
exports.Tenant = Tenant;
