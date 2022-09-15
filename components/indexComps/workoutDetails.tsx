import {
  ChatBubbleLeftEllipsisIcon,
  TagIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import LogTable from "./logTable";

const activity = [
  {
    id: 1,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
    date: "6d ago",
  },
  {
    id: 2,
    type: "assignment",
    person: { name: "Hilary Mahy", href: "#" },
    assigned: { name: "Kristin Watson", href: "#" },
    date: "2d ago",
  },
  {
    id: 3,
    type: "tags",
    person: { name: "Hilary Mahy", href: "#" },
    tags: [
      { name: "Bug", href: "#", color: "bg-rose-500" },
      { name: "Accessibility", href: "#", color: "bg-indigo-500" },
    ],
    date: "6h ago",
  },
  {
    id: 4,
    type: "comment",
    person: { name: "Jason Meyers", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.",
    date: "2h ago",
  },
];

const workouts = [
  {
    id: 1,
    name: "Leg day",
    exercises: [
      {
        id: 1,
        name: "Squats",
        imageSrc: "",
        description: "3 sets x 20 reps",
        video: "https://www.youtube.com/watch?v=aclHkVaku9U",
      },
      {
        id: 2,
        name: "Walking Lunge",
        imageSrc: "",
        description: "3 sets x 20 reps",
        video: "https://www.youtube.com/watch?v=L8fvypPrzzs",
      },
      {
        id: 3,
        name: "EATED LEG PRESS",
        imageSrc: "",
        description: "3 sets x 20 reps",
        video: "https://youtu.be/IZxyjW7MPJQ",
      },
      {
        id: 4,
        name: "DEADLIFT (BARBELL)",
        imageSrc: "",
        description: "3 sets x 20 reps",
        video: "https://youtu.be/r4MzxtBKyNE",
      },
    ],
    imageSrc:
      "/images/61a7e2b2c2f2b433de456203_thomas-yohei-BAlBUJb-SXQ-unsplash-p-800.jpeg",
    imageAlt: "Leg day",
  },
  {
    id: 2,
    name: "Abs day",
    exercises: [
      {
        id: 1,
        name: "Dumbbell crunch",
        imageSrc: "",
        description: "3 sets x 20 reps",
        video: "https://www.youtube.com/watch?v=inJYaEbtrkI",
      },
      {
        id: 2,
        name: "Tuck and crunch",
        imageSrc: "",
        description: "3 sets x 20 reps",
        video: "https://www.youtube.com/watch?v=Xbi6dVlys1w",
      },
      {
        id: 3,
        name: "Hanging leg raise",
        imageSrc: "",
        description: "3 sets x 20 reps",
        video: "https://youtu.be/IZxyjW7MPJQ",
      },
      {
        id: 4,
        name: "Modified V-sit",
        imageSrc: "",
        description: "3 sets x 20 reps",
        video: "https://www.youtube.com/watch?v=5xuscT7w7d8",
      },
    ],
    href: "#",
    imageSrc: "images/colin-lloyd-rdgGNjj69zI-unsplash.jpg",
    imageAlt: "Abs day",
  },
  {
    id: 3,
    name: "Pull day",
    href: "#",
    exercises: [
      {
        id: 1,
        name: "Barbell Deadlift",
        imageSrc: "",
        description: "3 sets x 20 reps",
        video: "https://www.youtube.com/watch?v=3UwO0fKukRw",
      },
      {
        id: 2,
        name: "Pull-up",
        imageSrc: "",
        description: "3 sets x 20 reps",
        video: "https://www.youtube.com/watch?v=eGo4IYlbE5g",
      },
      {
        id: 3,
        name: "Chin-up",
        imageSrc: "",
        description: "3 sets x 20 reps",
        video: "https://www.youtube.com/watch?v=mRy9m2Q9_1I",
      },
      {
        id: 4,
        name: "Barbell Row",
        imageSrc: "",
        description: "3 sets x 20 reps",
        video: "https://www.youtube.com/watch?v=T3N-TO4reLQ",
      },
    ],
    description: "5 sets x 15 reps",
    imageSrc: "/images/karolis-milisauskas-eoVdk1z4ihI-unsplash.jpg",
    imageAlt: "Pull day",
  },
  {
    id: 4,
    name: "Push day",
    href: "#",
    exercises: [
      {
        id: 1,
        name: "Dumbbell incline chest press",
        imageSrc: "",
        description: "3 sets x 20 reps",
        video: "https://www.youtube.com/watch?v=8iPEnn-ltC8",
      },
      {
        id: 2,
        name: "Bodyweight triceps dips",
        imageSrc: "",
        description: "3 sets x 20 reps",
        video: "https://www.youtube.com/watch?v=VsE1PIF_59w",
      },
      {
        id: 3,
        name: "Cable rope triceps pushdown",
        imageSrc: "",
        description: "3 sets x 20 reps",
        video: "https://www.youtube.com/watch?v=REWv05om0ho",
      },
      {
        id: 4,
        name: "Incline dumbbell chest fly",
        imageSrc: "",
        description: "3 sets x 20 reps",
        video: "https://www.youtube.com/watch?v=bDaIL_zKbGs",
      },
    ],
    imageSrc: "/images/meagan-stone-kC5KL_iUpL4-unsplash.jpg",
    imageAlt: "Push day",
  },

  // More products...
];
const workout = {
  name: "Leg day",
  exercises: [
    {
      id: 1,
      name: "Squats",
      imageSrc: "",
      sets: 4,
      recReps: 20,
      video: "https://www.youtube.com/watch?v=aclHkVaku9U",
    },
    {
      id: 2,
      name: "Walking Lunge",
      imageSrc: "",
      sets: 3,
      recReps: 15,
      video: "https://www.youtube.com/watch?v=L8fvypPrzzs",
    },
    {
      id: 3,
      name: "EATED LEG PRESS",
      imageSrc: "",
      sets: 5,
      recReps: 10,
      video: "https://youtu.be/IZxyjW7MPJQ",
    },
    {
      id: 4,
      name: "DEADLIFT (BARBELL)",
      imageSrc: "",
      sets: 3,
      recReps: 20,
      video: "https://youtu.be/r4MzxtBKyNE",
    },
  ],
  imageSrc: "./images/legday.jpeg",
  imageAlt: "Leg day",
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const WorkoutDetails = () => {
  return (
    <>
      <div>
        <p className="mt-6 mb-6">Today's Workout (Leg Day)</p>
      </div>

      {/* workout details  */}

      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {workout.exercises.map((exercise) => (
            <li key={exercise.id}>
              <div className="relative pb-8">
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />

                <div className="relative flex items-start space-x-3">
                  <>
                    <div className="relative">
                      <img
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                        src={exercise.imageSrc}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm">
                        <p className="font-medium text-gray-900">
                          {exercise.name}
                        </p>
                      </div>
                      <div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          {exercise.sets} Sets x {exercise.recReps} Reps
                        </p>
                      </div>
                      <div className="mt-2 text-sm text-gray-700">
                        <LogTable exercise={exercise} />
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default WorkoutDetails;
