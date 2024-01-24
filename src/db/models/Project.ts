import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    link: String,
    private: Boolean,
    comments: [{ user_id: String, body: String, date: Date }],
    meta: {
        votes: Number,
        favs: Number
    }
});

const Project = mongoose.models.Project ?? mongoose.model('Project', projectSchema);

export {projectSchema, Project};