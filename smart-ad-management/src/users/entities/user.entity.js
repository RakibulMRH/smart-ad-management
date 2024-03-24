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
exports.UserDecorator = exports.UserType = exports.User = void 0;
//user.entity.ts
var typeorm_1 = require("typeorm");
var userSession_entity_1 = require("./userSession.entity");
var typeorm_2 = require("typeorm");
var tenant_enitity_1 = require("./tenant.enitity");
var subscription_entity_1 = require("../../subscription/entities/subscription.entity");
var feedback_entity_1 = require("../../feedback/entities/feedback.entity");
var reply_entity_1 = require("../../feedback/entities/reply.entity");
var consultation_entity_1 = require("../../consultation/entities/consultation.entity");
var consultationSlot_entity_1 = require("../../consultation/entities/consultationSlot.entity");
var User = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('User')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _firstName_decorators;
    var _firstName_initializers = [];
    var _lastName_decorators;
    var _lastName_initializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _resetPasswordToken_decorators;
    var _resetPasswordToken_initializers = [];
    var _resetPasswordExpires_decorators;
    var _resetPasswordExpires_initializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _profilePicture_decorators;
    var _profilePicture_initializers = [];
    var _userSessions_decorators;
    var _userSessions_initializers = [];
    var _tenant_decorators;
    var _tenant_initializers = [];
    var _subscriptions_decorators;
    var _subscriptions_initializers = [];
    var _feedbackReceived_decorators;
    var _feedbackReceived_initializers = [];
    var _feedbackGiven_decorators;
    var _feedbackGiven_initializers = [];
    var _replies_decorators;
    var _replies_initializers = [];
    var _consultationsBooked_decorators;
    var _consultationsBooked_initializers = [];
    var _consultationsHosted_decorators;
    var _consultationsHosted_initializers = [];
    var _consultationSlots_decorators;
    var _consultationSlots_initializers = [];
    var User = _classThis = /** @class */ (function () {
        function User_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.firstName = __runInitializers(this, _firstName_initializers, void 0);
            this.lastName = __runInitializers(this, _lastName_initializers, void 0);
            this.email = __runInitializers(this, _email_initializers, void 0);
            this.password = __runInitializers(this, _password_initializers, void 0);
            this.resetPasswordToken = __runInitializers(this, _resetPasswordToken_initializers, void 0);
            this.resetPasswordExpires = __runInitializers(this, _resetPasswordExpires_initializers, void 0);
            this.type = __runInitializers(this, _type_initializers, void 0);
            this.profilePicture = __runInitializers(this, _profilePicture_initializers, void 0);
            this.userSessions = __runInitializers(this, _userSessions_initializers, void 0);
            this.tenant = __runInitializers(this, _tenant_initializers, void 0);
            this.subscriptions = __runInitializers(this, _subscriptions_initializers, void 0);
            this.feedbackReceived = __runInitializers(this, _feedbackReceived_initializers, void 0);
            this.feedbackGiven = __runInitializers(this, _feedbackGiven_initializers, void 0);
            this.replies = __runInitializers(this, _replies_initializers, void 0);
            this.consultationsBooked = __runInitializers(this, _consultationsBooked_initializers, void 0);
            this.consultationsHosted = __runInitializers(this, _consultationsHosted_initializers, void 0);
            this.consultationSlots = __runInitializers(this, _consultationSlots_initializers, void 0);
        }
        return User_1;
    }());
    __setFunctionName(_classThis, "User");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _firstName_decorators = [(0, typeorm_1.Column)({ nullable: false })];
        _lastName_decorators = [(0, typeorm_1.Column)({ nullable: false })];
        _email_decorators = [(0, typeorm_1.Column)()];
        _password_decorators = [(0, typeorm_1.Column)()];
        _resetPasswordToken_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _resetPasswordExpires_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _type_decorators = [(0, typeorm_1.Column)({ nullable: false })];
        _profilePicture_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _userSessions_decorators = [(0, typeorm_1.OneToMany)(function () { return userSession_entity_1.UserSession; }, function (userSession) { return userSession.user; })];
        _tenant_decorators = [(0, typeorm_2.ManyToOne)(function () { return tenant_enitity_1.Tenant; }, function (tenant) { return tenant.users; })];
        _subscriptions_decorators = [(0, typeorm_1.OneToMany)(function () { return subscription_entity_1.Subscription; }, function (subscription) { return subscription.user; })];
        _feedbackReceived_decorators = [(0, typeorm_1.OneToMany)(function () { return feedback_entity_1.Feedback; }, function (feedback) { return feedback.adExpert; })];
        _feedbackGiven_decorators = [(0, typeorm_1.OneToMany)(function () { return feedback_entity_1.Feedback; }, function (feedback) { return feedback.client; })];
        _replies_decorators = [(0, typeorm_1.OneToMany)(function () { return reply_entity_1.Reply; }, function (reply) { return reply.user; })];
        _consultationsBooked_decorators = [(0, typeorm_1.OneToMany)(function () { return consultation_entity_1.Consultation; }, function (consultation) { return consultation.client; })];
        _consultationsHosted_decorators = [(0, typeorm_1.OneToMany)(function () { return consultation_entity_1.Consultation; }, function (consultation) { return consultation.adExpert; })];
        _consultationSlots_decorators = [(0, typeorm_1.OneToMany)(function () { return consultationSlot_entity_1.ConsultationSlot; }, function (slot) { return slot.adExpert; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _firstName_decorators, { kind: "field", name: "firstName", static: false, private: false, access: { has: function (obj) { return "firstName" in obj; }, get: function (obj) { return obj.firstName; }, set: function (obj, value) { obj.firstName = value; } }, metadata: _metadata }, _firstName_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _lastName_decorators, { kind: "field", name: "lastName", static: false, private: false, access: { has: function (obj) { return "lastName" in obj; }, get: function (obj) { return obj.lastName; }, set: function (obj, value) { obj.lastName = value; } }, metadata: _metadata }, _lastName_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _resetPasswordToken_decorators, { kind: "field", name: "resetPasswordToken", static: false, private: false, access: { has: function (obj) { return "resetPasswordToken" in obj; }, get: function (obj) { return obj.resetPasswordToken; }, set: function (obj, value) { obj.resetPasswordToken = value; } }, metadata: _metadata }, _resetPasswordToken_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _resetPasswordExpires_decorators, { kind: "field", name: "resetPasswordExpires", static: false, private: false, access: { has: function (obj) { return "resetPasswordExpires" in obj; }, get: function (obj) { return obj.resetPasswordExpires; }, set: function (obj, value) { obj.resetPasswordExpires = value; } }, metadata: _metadata }, _resetPasswordExpires_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _profilePicture_decorators, { kind: "field", name: "profilePicture", static: false, private: false, access: { has: function (obj) { return "profilePicture" in obj; }, get: function (obj) { return obj.profilePicture; }, set: function (obj, value) { obj.profilePicture = value; } }, metadata: _metadata }, _profilePicture_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _userSessions_decorators, { kind: "field", name: "userSessions", static: false, private: false, access: { has: function (obj) { return "userSessions" in obj; }, get: function (obj) { return obj.userSessions; }, set: function (obj, value) { obj.userSessions = value; } }, metadata: _metadata }, _userSessions_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _tenant_decorators, { kind: "field", name: "tenant", static: false, private: false, access: { has: function (obj) { return "tenant" in obj; }, get: function (obj) { return obj.tenant; }, set: function (obj, value) { obj.tenant = value; } }, metadata: _metadata }, _tenant_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _subscriptions_decorators, { kind: "field", name: "subscriptions", static: false, private: false, access: { has: function (obj) { return "subscriptions" in obj; }, get: function (obj) { return obj.subscriptions; }, set: function (obj, value) { obj.subscriptions = value; } }, metadata: _metadata }, _subscriptions_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _feedbackReceived_decorators, { kind: "field", name: "feedbackReceived", static: false, private: false, access: { has: function (obj) { return "feedbackReceived" in obj; }, get: function (obj) { return obj.feedbackReceived; }, set: function (obj, value) { obj.feedbackReceived = value; } }, metadata: _metadata }, _feedbackReceived_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _feedbackGiven_decorators, { kind: "field", name: "feedbackGiven", static: false, private: false, access: { has: function (obj) { return "feedbackGiven" in obj; }, get: function (obj) { return obj.feedbackGiven; }, set: function (obj, value) { obj.feedbackGiven = value; } }, metadata: _metadata }, _feedbackGiven_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _replies_decorators, { kind: "field", name: "replies", static: false, private: false, access: { has: function (obj) { return "replies" in obj; }, get: function (obj) { return obj.replies; }, set: function (obj, value) { obj.replies = value; } }, metadata: _metadata }, _replies_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _consultationsBooked_decorators, { kind: "field", name: "consultationsBooked", static: false, private: false, access: { has: function (obj) { return "consultationsBooked" in obj; }, get: function (obj) { return obj.consultationsBooked; }, set: function (obj, value) { obj.consultationsBooked = value; } }, metadata: _metadata }, _consultationsBooked_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _consultationsHosted_decorators, { kind: "field", name: "consultationsHosted", static: false, private: false, access: { has: function (obj) { return "consultationsHosted" in obj; }, get: function (obj) { return obj.consultationsHosted; }, set: function (obj, value) { obj.consultationsHosted = value; } }, metadata: _metadata }, _consultationsHosted_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _consultationSlots_decorators, { kind: "field", name: "consultationSlots", static: false, private: false, access: { has: function (obj) { return "consultationSlots" in obj; }, get: function (obj) { return obj.consultationSlots; }, set: function (obj, value) { obj.consultationSlots = value; } }, metadata: _metadata }, _consultationSlots_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
exports.User = User;
var UserType;
(function (UserType) {
    UserType["Admin"] = "admin";
    UserType["Client"] = "client";
    UserType["AdExpert"] = "adExpert";
})(UserType || (exports.UserType = UserType = {}));
var common_1 = require("@nestjs/common");
exports.UserDecorator = (0, common_1.createParamDecorator)(function (data, ctx) {
    var request = ctx.switchToHttp().getRequest();
    return request.user;
});
