import { NextRequest, NextResponse } from 'next/server';
import React from 'react';
import mongoose from 'mongoose';
import {Project} from '../../../../db/models/Project';

export async function POST(req: NextRequest, res: NextResponse) {
    const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.qdot19o.mongodb.net/`;

    let client;

    try {
        client = await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Could not connect to MongoDB', error);
    }

    const data = await req.json();

    const { title, description, link } = data;

    if (!title || !description || !link) {
        NextResponse.json({ error: 'Please fill out all required fields' }, { status: 422 });
    }

    console.log(data);

    try {
        await Project.create(data);
        console.log('Project created successfully');
        return NextResponse.json({ message: 'Project created successfully' }, { status: 201 });
    } catch (error) {
        console.log("Project could not be created", error)
        return NextResponse.json({ error: "Error sending the message" }, { status: 500 });
    }
}