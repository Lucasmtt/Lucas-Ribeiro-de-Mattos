import { Request, Response } from 'express';
import { Resource } from '../models/resource';

// Controller to handle creating a new resource
export const createResource = async (req: Request, res: Response) => {
    const { name, description } = req.body;
    const resource = new Resource({ name, description });
    await resource.save();
    res.status(201).json(resource);
};

// Controller to handle fetching all resources
export const getResources = async (req: Request, res: Response) => {
    const resources = await Resource.find();
    res.json(resources);
};

// Controller to handle fetching a single resource by ID
export const getResource = async (req: Request, res: Response) => {
    const resource = await Resource.findById(req.params.id);
    if (!resource) return res.status(404).json({ message: 'Resource not found' });
    res.json(resource);
};

// Controller to handle updating a resource
export const updateResource = async (req: Request, res: Response) => {
    const { name, description } = req.body;
    const resource = await Resource.findByIdAndUpdate(req.params.id, { name, description }, { new: true });
    if (!resource) return res.status(404).json({ message: 'Resource not found' });
    res.json(resource);
};

// Controller to handle deleting a resource
export const deleteResource = async (req: Request, res: Response) => {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) return res.status(404).json({ message: 'Resource not found' });
    res.json({ message: 'Resource deleted' });
};
