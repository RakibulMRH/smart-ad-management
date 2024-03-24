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
exports.ConsultationSlot = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("../../users/entities/user.entity");
var consultation_entity_1 = require("./consultation.entity");
var ConsultationSlot = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('ConsultationSlot')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _startTime_decorators;
    var _startTime_initializers = [];
    var _endTime_decorators;
    var _endTime_initializers = [];
    var _adExpert_decorators;
    var _adExpert_initializers = [];
    var _consultations_decorators;
    var _consultations_initializers = [];
    var ConsultationSlot = _classThis = /** @class */ (function () {
        function ConsultationSlot_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.startTime = __runInitializers(this, _startTime_initializers, void 0);
            this.endTime = __runInitializers(this, _endTime_initializers, void 0);
            this.adExpert = __runInitializers(this, _adExpert_initializers, void 0);
            this.consultations = __runInitializers(this, _consultations_initializers, void 0);
        }
        return ConsultationSlot_1;
    }());
    __setFunctionName(_classThis, "ConsultationSlot");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _startTime_decorators = [(0, typeorm_1.Column)()];
        _endTime_decorators = [(0, typeorm_1.Column)()];
        _adExpert_decorators = [(0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.consultationSlots; }, { onDelete: 'CASCADE' }), (0, typeorm_1.JoinColumn)()];
        _consultations_decorators = [(0, typeorm_1.OneToMany)(function () { return consultation_entity_1.Consultation; }, function (consultation) { return consultation.slot; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _startTime_decorators, { kind: "field", name: "startTime", static: false, private: false, access: { has: function (obj) { return "startTime" in obj; }, get: function (obj) { return obj.startTime; }, set: function (obj, value) { obj.startTime = value; } }, metadata: _metadata }, _startTime_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _endTime_decorators, { kind: "field", name: "endTime", static: false, private: false, access: { has: function (obj) { return "endTime" in obj; }, get: function (obj) { return obj.endTime; }, set: function (obj, value) { obj.endTime = value; } }, metadata: _metadata }, _endTime_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _adExpert_decorators, { kind: "field", name: "adExpert", static: false, private: false, access: { has: function (obj) { return "adExpert" in obj; }, get: function (obj) { return obj.adExpert; }, set: function (obj, value) { obj.adExpert = value; } }, metadata: _metadata }, _adExpert_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _consultations_decorators, { kind: "field", name: "consultations", static: false, private: false, access: { has: function (obj) { return "consultations" in obj; }, get: function (obj) { return obj.consultations; }, set: function (obj, value) { obj.consultations = value; } }, metadata: _metadata }, _consultations_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ConsultationSlot = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ConsultationSlot = _classThis;
}();
exports.ConsultationSlot = ConsultationSlot;