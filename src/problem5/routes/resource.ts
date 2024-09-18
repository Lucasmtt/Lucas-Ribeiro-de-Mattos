import { Router } from 'express';
import { createResource, getResources, getResource, updateResource, deleteResource } from '../controllers/resourceController';

// Create a new router instance
const router = Router();

// Define routes and their corresponding controller functions
router.post('/', createResource);       // Create a new resource
router.get('/', getResources);          // Get a list of resources
router.get('/:id', getResource);        // Get details of a single resource
router.put('/:id', updateResource);     // Update an existing resource
router.delete('/:id', deleteResource);  // Delete a resource

export default router;
