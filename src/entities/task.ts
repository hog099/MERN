// const mongoose = require('../database/mongoconnect');
import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    // project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', require: true },
    completed: { type: Boolean, require: true, default: false },
    createdAt: { type: Date, default: Date.now }
});

const task = mongoose.model('task', TaskSchema);

// module.exports = task;
export {task};