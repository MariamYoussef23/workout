
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import axios from "axios";
import router, { NextRouter } from "next/router";
import { NewUser } from "../types";


const API = axios.create({ baseURL: "http://localhost:3000" });

export const signupApi = async (values: NewUser, router: NextRouter) => {
  console.log("done");
  try {
    const res = await supabaseClient.auth.signUp({
      email: values.email,
      password: values.password,
    });
    await supabaseClient.auth.signIn({
      email: values.email,
      password: values.password,
    });
    const res2 = await API.post("/api/user/signup", values);
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const getWorkouts = async () => {
  try {
    const res = await API.get("/api/workout");
    return res.data.workouts;
  } catch (error) {
    console.log(error);
  }
};
