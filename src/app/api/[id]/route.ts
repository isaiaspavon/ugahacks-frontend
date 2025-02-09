import connectMongoDB from "../../../libs/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse, NextRequest } from "next/server";
import mongoose from "mongoose";
import User from "../../../models/UserSchema";

// Define route params interface
interface RouteParams {
    params: { id: string };
}

// GET a user by ID
export async function GET(request: NextRequest, { params }: RouteParams) {
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
    }

    await connectMongoDB();
    const user = await User.findById(id);

    if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
}

// UPDATE a user by ID
export async function PUT(request: NextRequest, { params }: RouteParams) {
    const { id } = params;
    const { fName, lName, email, password } = await request.json();

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
    }

    await connectMongoDB();
    const updatedUser = await User.findByIdAndUpdate(
        id,
        { fName, lName, email, password },
        { new: true } // Return the updated user
    );

    if (!updatedUser) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User updated", user: updatedUser }, { status: 200 });
}

// DELETE a user by ID
export async function DELETE(request: NextRequest, { params }: RouteParams) {
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
    }

    await connectMongoDB();
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User deleted" }, { status: 200 });
}


/*
import connectMongoDB from "../../../libs/mongodb";
import { ObjectId } from 'mongodb';
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";
import User from "../../../models/UserSchema";

// user id
interface RouteParams {
    params: { id: string };
}

// GET an item
export async function GET(request:NextRequest, { params }: RouteParams) {
    const { id } = await params;

    let userId = id;
    if (typeof id === 'string') {
        userId = new ObjectId(id).toString();
    }
    await connectMongoDB();
    const item = await User.findOne({ _id: userId});    
    return NextResponse.json({ item }, { status: 200});
}

// PUT an item
export async function PUT(request:NextRequest, { params }: RouteParams) {
    const { id } = await params;
    const { title: title, description: description, image: image } = await request.json();
    await connectMongoDB();
    await Item.findByIdAndUpdate(id, { title, description, image});
    return NextResponse.json({ message: "Item updated" }, { status: 200});
}


// DELETE an item
export async function DELETE(request:NextRequest, { params }: RouteParams) {
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ message: "Invalid ID format"}, { status: 400});
    }

    await connectMongoDB();
    const deletedItem = await Item.findByIdAndDelete(id);

    if (!deletedItem) {
        return NextResponse.json({ message: "Item not found"}, { status: 404});
    }

    return NextResponse.json({ message: "Item deleted"}, { status: 200});
}
*/    