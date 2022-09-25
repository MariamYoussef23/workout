import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import axios from "axios";
import router, { NextRouter } from "next/router";
import { NewUser, userLog } from "../types";

const API = axios.create({ baseURL: "http://localhost:3000" });

export const signupApi = async (values: NewUser, router: NextRouter) => {
  try {
    const res = await supabaseClient.auth.signUp(
      {
        email: values.email,
        password: values.password,
      },
      {
        data: {
          firstName: values.firstName,
          lastName: values.lastName,
        },
      }
    );
    console.log(res);
    await supabaseClient.auth.signIn({
      email: values.email,
      password: values.password,
    });

    const res2 = await API.post("/api/user/signup", {
      ...values,
      id: res.user?.id,
    });
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

export const logExercise = async (data: userLog) => {
  try {
    const res = await API.post('/api/workout/log', data)
  } catch (error) {
    console.log(error);
  }
};
