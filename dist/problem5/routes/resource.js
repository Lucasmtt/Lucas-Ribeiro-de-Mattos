"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resourceController_1 = require("../controllers/resourceController");
// Create a new router instance
const router = (0, express_1.Router)();
// Define routes and their corresponding controller functions
router.post('/', resourceController_1.createResource); // Create a new resource
router.get('/', resourceController_1.getResources); // Get a list of resources
router.get('/:id', resourceController_1.getResource); // Get details of a single resource
router.put('/:id', resourceController_1.updateResource); // Update an existing resource
router.delete('/:id', resourceController_1.deleteResource); // Delete a resource
exports.default = router;
