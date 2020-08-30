import User from '../models/User.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {   
    const { fullName, username, email, password } = req.body;
    
    const createdUser = new User({ fullName, username, email, password });

    try {
        await createdUser.save();

        res.status(201).json({ message: 'User successfully created.' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => { 
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        res.status(204).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateUser = async (req, res) => {
    const user = req.body;

    try {
        const newUser = await User.findByIdAndUpdate(req.params.id, user);
        
        res.status(204).json(newUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};