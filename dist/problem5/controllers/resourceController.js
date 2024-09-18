"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteResource = exports.updateResource = exports.getResource = exports.getResources = exports.createResource = void 0;
const resource_1 = require("../models/resource");
// Controller to handle creating a new resource
const createResource = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    const resource = new resource_1.Resource({ name, description });
    yield resource.save();
    res.status(201).json(resource);
});
exports.createResource = createResource;
// Controller to handle fetching all resources
const getResources = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resources = yield resource_1.Resource.find();
    res.json(resources);
});
exports.getResources = getResources;
// Controller to handle fetching a single resource by ID
const getResource = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resource = yield resource_1.Resource.findById(req.params.id);
    if (!resource)
        return res.status(404).json({ message: 'Resource not found' });
    res.json(resource);
});
exports.getResource = getResource;
// Controller to handle updating a resource
const updateResource = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    const resource = yield resource_1.Resource.findByIdAndUpdate(req.params.id, { name, description }, { new: true });
    if (!resource)
        return res.status(404).json({ message: 'Resource not found' });
    res.json(resource);
});
exports.updateResource = updateResource;
// Controller to handle deleting a resource
const deleteResource = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resource = yield resource_1.Resource.findByIdAndDelete(req.params.id);
    if (!resource)
        return res.status(404).json({ message: 'Resource not found' });
    res.json({ message: 'Resource deleted' });
});
exports.deleteResource = deleteResource;
