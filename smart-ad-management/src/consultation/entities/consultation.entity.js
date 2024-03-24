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
exports.Consultation = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("../../users/entities/user.entity");
var consultationSlot_entity_1 = require("./consultationSlot.entity");
var Consultation = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('Consultation')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _scheduledAt_decorators;
    var _scheduledAt_initializers = [];
    var _client_decorators;
    var _client_initializers = [];
    var _adExpert_decorators;
    var _adExpert_initializers = [];
    var _slot_decorators;
    var _slot_initializers = [];
    var _waitingListPosition_decorators;
    var _waitingListPosition_initializers = [];
    var Consultation = _classThis = /** @class */ (function () {
        function Consultation_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.status = __runInitializers(this, _status_initializers, void 0);
            this.scheduledAt = __runInitializers(this, _scheduledAt_initializers, void 0);
            this.client = __runInitializers(this, _client_initializers, void 0);
            this.adExpert = __runInitializers(this, _adExpert_initializers, void 0);
            this.slot = __runInitializers(this, _slot_initializers, void 0);
            this.waitingListPosition = __runInitializers(this, _waitingListPosition_initializers, void 0);
        }
        return Consultation_1;
    }());
    __setFunctionName(_classThis, "Consultation");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _status_decorators = [(0, typeorm_1.Column)()];
        _scheduledAt_decorators = [(0, typeorm_1.Column)({ type: 'timestamp', nullable: true })];
        _client_decorators = [(0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.consultationsBooked; }, { onDelete: 'CASCADE' }), (0, typeorm_1.JoinColumn)()];
        _adExpert_decorators = [(0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.consultationsHosted; }, { onDelete: 'CASCADE' }), (0, typeorm_1.JoinColumn)()];
        _slot_decorators = [(0, typeorm_1.ManyToOne)(function () { return consultationSlot_entity_1.ConsultationSlot; }, function (slot) { return slot.consultations; }, { onDelete: 'CASCADE' }), (0, typeorm_1.JoinColumn)()];
        _waitingListPosition_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _scheduledAt_decorators, { kind: "field", name: "scheduledAt", static: false, private: false, access: { has: function (obj) { return "scheduledAt" in obj; }, get: function (obj) { return obj.scheduledAt; }, set: function (obj, value) { obj.scheduledAt = value; } }, metadata: _metadata }, _scheduledAt_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _client_decorators, { kind: "field", name: "client", static: false, private: false, access: { has: function (obj) { return "client" in obj; }, get: function (obj) { return obj.client; }, set: function (obj, value) { obj.client = value; } }, metadata: _metadata }, _client_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _adExpert_decorators, { kind: "field", name: "adExpert", static: false, private: false, access: { has: function (obj) { return "adExpert" in obj; }, get: function (obj) { return obj.adExpert; }, set: function (obj, value) { obj.adExpert = value; } }, metadata: _metadata }, _adExpert_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _slot_decorators, { kind: "field", name: "slot", static: false, private: false, access: { has: function (obj) { return "slot" in obj; }, get: function (obj) { return obj.slot; }, set: function (obj, value) { obj.slot = value; } }, metadata: _metadata }, _slot_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _waitingListPosition_decorators, { kind: "field", name: "waitingListPosition", static: false, private: false, access: { has: function (obj) { return "waitingListPosition" in obj; }, get: function (obj) { return obj.waitingListPosition; }, set: function (obj, value) { obj.waitingListPosition = value; } }, metadata: _metadata }, _waitingListPosition_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Consultation = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Consultation = _classThis;
}();
exports.Consultation = Consultation;
