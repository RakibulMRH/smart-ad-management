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
exports.UserSession = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("./user.entity");
var UserSession = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('UserSession')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _session_id_decorators;
    var _session_id_initializers = [];
    var _session_token_decorators;
    var _session_token_initializers = [];
    var _created_at_decorators;
    var _created_at_initializers = [];
    var _expires_at_decorators;
    var _expires_at_initializers = [];
    var _user_decorators;
    var _user_initializers = [];
    var UserSession = _classThis = /** @class */ (function () {
        function UserSession_1() {
            this.session_id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _session_id_initializers, void 0));
            this.session_token = __runInitializers(this, _session_token_initializers, void 0);
            this.created_at = __runInitializers(this, _created_at_initializers, void 0);
            this.expires_at = __runInitializers(this, _expires_at_initializers, void 0);
            this.user = __runInitializers(this, _user_initializers, void 0);
        }
        return UserSession_1;
    }());
    __setFunctionName(_classThis, "UserSession");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _session_id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _session_token_decorators = [(0, typeorm_1.Column)()];
        _created_at_decorators = [(0, typeorm_1.Column)({ default: function () { return 'CURRENT_TIMESTAMP'; } })];
        _expires_at_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _user_decorators = [(0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.userSessions; }, { onDelete: 'CASCADE' }), (0, typeorm_1.JoinColumn)({ name: 'user_id' })];
        __esDecorate(null, null, _session_id_decorators, { kind: "field", name: "session_id", static: false, private: false, access: { has: function (obj) { return "session_id" in obj; }, get: function (obj) { return obj.session_id; }, set: function (obj, value) { obj.session_id = value; } }, metadata: _metadata }, _session_id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _session_token_decorators, { kind: "field", name: "session_token", static: false, private: false, access: { has: function (obj) { return "session_token" in obj; }, get: function (obj) { return obj.session_token; }, set: function (obj, value) { obj.session_token = value; } }, metadata: _metadata }, _session_token_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _created_at_decorators, { kind: "field", name: "created_at", static: false, private: false, access: { has: function (obj) { return "created_at" in obj; }, get: function (obj) { return obj.created_at; }, set: function (obj, value) { obj.created_at = value; } }, metadata: _metadata }, _created_at_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _expires_at_decorators, { kind: "field", name: "expires_at", static: false, private: false, access: { has: function (obj) { return "expires_at" in obj; }, get: function (obj) { return obj.expires_at; }, set: function (obj, value) { obj.expires_at = value; } }, metadata: _metadata }, _expires_at_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: function (obj) { return "user" in obj; }, get: function (obj) { return obj.user; }, set: function (obj, value) { obj.user = value; } }, metadata: _metadata }, _user_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserSession = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserSession = _classThis;
}();
exports.UserSession = UserSession;
