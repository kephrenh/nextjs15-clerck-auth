"use server";

import User from "@/models/user.model";
import { connect } from "@/db";
import { parseStringify } from "@/lib/utils";

export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await User.create(user);
    return parseStringify(newUser);
  } catch (error) {
    console.error(error);
  }
}
