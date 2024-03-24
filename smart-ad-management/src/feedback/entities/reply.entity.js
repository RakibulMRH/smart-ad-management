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
exports.Reply = void 0;
var typeorm_1 = require("typeorm");
var feedback_entity_1 = require("./feedback.entity");
var user_entity_1 = require("../../users/entities/user.entity");
var typeorm_2 = require("typeorm");
var Reply = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('Reply')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _comment_decorators;
    var _comment_initializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _feedback_decorators;
    var _feedback_initializers = [];
    var _user_decorators;
    var _user_initializers = [];
    var _parentReply_decorators;
    var _parentReply_initializers = [];
    var _replies_decorators;
    var _replies_initializers = [];
    var Reply = _classThis = /** @class */ (function () {
        function Reply_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.comment = __runInitializers(this, _comment_initializers, void 0);
            this.createdAt = __runInitializers(this, _createdAt_initializers, void 0);
            this.feedback = __runInitializers(this, _feedback_initializers, void 0);
            this.user = __runInitializers(this, _user_initializers, void 0);
            this.parentReply = __runInitializers(this, _parentReply_initializers, void 0);
            this.replies = __runInitializers(this, _replies_initializers, void 0);
        }
        return Reply_1;
    }());
    __setFunctionName(_classThis, "Reply");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _comment_decorators = [(0, typeorm_1.Column)({ nullable: false })];
        _createdAt_decorators = [(0, typeorm_1.Column)({ nullable: false, default: function () { return 'CURRENT_TIMESTAMP'; } })];
        _feedback_decorators = [(0, typeorm_1.ManyToOne)(function () { return feedback_entity_1.Feedback; }, function (feedback) { return feedback.replies; }), (0, typeorm_1.JoinColumn)({ name: 'feedbackId' })];
        _user_decorators = [(0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.replies; }), (0, typeorm_1.JoinColumn)({ name: 'userId' })];
        _parentReply_decorators = [(0, typeorm_1.ManyToOne)(function () { return Reply; }, function (reply) { return reply.replies; }, { nullable: true }), (0, typeorm_1.JoinColumn)({ name: 'parentReplyId' })];
        _replies_decorators = [(0, typeorm_2.OneToMany)(function () { return Reply; }, function (reply) { return reply.parentReply; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _comment_decorators, { kind: "field", name: "comment", static: false, private: false, access: { has: function (obj) { return "comment" in obj; }, get: function (obj) { return obj.comment; }, set: function (obj, value) { obj.comment = value; } }, metadata: _metadata }, _comment_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _feedback_decorators, { kind: "field", name: "feedback", static: false, private: false, access: { has: function (obj) { return "feedback" in obj; }, get: function (obj) { return obj.feedback; }, set: function (obj, value) { obj.feedback = value; } }, metadata: _metadata }, _feedback_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: function (obj) { return "user" in obj; }, get: function (obj) { return obj.user; }, set: function (obj, value) { obj.user = value; } }, metadata: _metadata }, _user_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _parentReply_decorators, { kind: "field", name: "parentReply", static: false, private: false, access: { has: function (obj) { return "parentReply" in obj; }, get: function (obj) { return obj.parentReply; }, set: function (obj, value) { obj.parentReply = value; } }, metadata: _metadata }, _parentReply_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _replies_decorators, { kind: "field", name: "replies", static: false, private: false, access: { has: function (obj) { return "replies" in obj; }, get: function (obj) { return obj.replies; }, set: function (obj, value) { obj.replies = value; } }, metadata: _metadata }, _replies_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Reply = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Reply = _classThis;
}();
exports.Reply = Reply;
