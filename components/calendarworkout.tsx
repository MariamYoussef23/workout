import { Menu, Transition } from '@headlessui/react';
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from 'date-fns';
import { Fragment, useState } from 'react';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const CalendarWorkout = () => {
  let today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

  const nextMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  };

  const previousMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  };

  let newDays = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });


  return (
    <div className=" w-[100%] content-center ">
      <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
        <div className="flex items-center text-gray-900">
          <button
            onClick={() => previousMonth()}
            type="button"
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex-auto font-semibold">
            {format(firstDayCurrentMonth, 'MMMM yyyy')}
          </div>
          <button
            onClick={() => nextMonth()}
            type="button"
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-black-900"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
        <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
          {newDays.map((day, dayIdx) => (
            <button
              key={day.toString()}
              type="button"
              onClick={() => setSelectedDay(day)}
              className={classNames(
                'py-1.5 hover:bg-gray-200 focus:z-10',
                isSameMonth(day, firstDayCurrentMonth)
                  ? 'bg-white'
                  : 'bg-gray-900',
                (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold',
                isEqual(day, selectedDay) && 'text-white',
                !isEqual(day, selectedDay) &&
                  isSameMonth(day, firstDayCurrentMonth) &&
                  !isToday(day) &&
                  'text-gray-900',
                !isEqual(day, selectedDay) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  !isToday(day) &&
                  'text-gray-400',
                isToday(day) && !isEqual(day, selectedDay) && 'text-black-900',
                dayIdx == 0 && `rounded-tl-lg ${colStartClasses[getDay(day)]}`,
                dayIdx == 6 && 'rounded-tr-lg',
                dayIdx == newDays.length - 7 && 'rounded-bl-lg',
                dayIdx == newDays.length - 1 && 'rounded-br-lg',
              )}
            >
              <time
                dateTime={format(day, 'yyyy-MM-dd')}
                className={classNames(
                  'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                  isEqual(day, selectedDay) && isToday(day) && 'bg-indigo-600',
                  isEqual(day, selectedDay) && !isToday(day) && 'bg-gray-900',
                )}
              >
                {format(day, 'd')}
              </time>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
];
export default CalendarWorkout;
