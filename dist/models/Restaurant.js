"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const RestaurantSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    ownername: { type: String, required: true },
    password: { type: String, required: true },
    foodType: { type: [String] },
    pincode: { type: String, required: true },
    address: { type: String },
    foods: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Food'
        }],
    salt: { type: String, required: true },
    serviceAvailable: { type: Boolean, required: true },
    coverImages: { type: [String] },
    rating: { type: Number },
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.salt;
            delete ret.password;
            delete ret.createdAt;
            delete ret.updatedAt;
            delete ret.__v;
        }
    },
    timestamps: true
});
/* Creating a model for the schema. */
/* A type guard. It is telling the compiler that the type of the model is `RestaurantDoc`. */
const Restaurant = mongoose_1.default.model('Restaurant', RestaurantSchema);
exports.Restaurant = Restaurant;
//# sourceMappingURL=Restaurant.js.map