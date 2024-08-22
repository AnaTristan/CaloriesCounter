import { useMemo } from "react";
import type { Activity } from "../types";
import CaloriesDisplay from "./CaloriesDisplay";

type CalorieTrackerProps = {
  activities: Activity[];
};

const CalorieTracker = ({ activities }: CalorieTrackerProps) => {
  // contadores

  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const caloriesBurnt = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const totalCalories = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1
            ? total + activity.calories
            : total - activity.calories,
        0
      ),
    [activities]
  );

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de Calorias
      </h2>

      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CaloriesDisplay
          calories={caloriesConsumed}
          color="text-lime-500"
          type="Calorias consumidas"
        />
        <CaloriesDisplay
          calories={caloriesBurnt}
          color="text-orange-500"
          type=" Ejercicio"
        />
        <CaloriesDisplay
          calories={totalCalories}
          color="text-orange-500"
          type="Total calorias"
        />
      </div>
    </>
  );
};

export default CalorieTracker;
