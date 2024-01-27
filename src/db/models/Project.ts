import mongoose from "mongoose";

interface IProject {
    title: string;
    description: string;
    time: string;
    imgPath: string;
    // link: string | string[];
    // private: boolean;
    // comments: { user_id: string; body: string; date: Date }[];
    // meta: {
    //     votes: number;
    //     favs: number;
    // };
}

const projectSchema = new mongoose.Schema<IProject>({
    title: String,
    description: String,
    imgPath: String,
    time: String,
    // link: {type: mongoose.Schema.Types.Mixed},
    // // private: Boolean,
    // comments: [{ user_id: String, body: String, date: Date }],
    // meta: {
    //     votes: Number,
    //     favs: Number
    // }
});

const Project = mongoose.models.Project ?? mongoose.model('Project', projectSchema);

export type {IProject}; 
export {projectSchema, Project};