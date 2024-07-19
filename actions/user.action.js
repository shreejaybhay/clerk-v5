"use server";
import { connect } from "@/db";
import User from "@/models/user.model";


export async function createUser(user) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}