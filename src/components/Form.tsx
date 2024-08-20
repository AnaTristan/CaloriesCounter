import { useState, ChangeEvent, FormEvent, Dispatch } from "react";
import { categories } from "../data/Categories";
import { Activity } from "../types";
import { ActivityActions } from "../reducers/activityReducer";

type FormProps = {
  dispatch: Dispatch<ActivityActions>;
};

const Form = ({ dispatch }: FormProps) => {
  const [activity, setActivity] = useState<Activity>({
    category: 1,
    name: "",
    calories: 0,
  });

  const isActivity = () => {
    const { name, calories } = activity;
    return name.trim() !== "" && calories > 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    // console.log(e.target.id);
    // console.log(e.target.value);

    const isNumber = ["category", "calories"].includes(e.target.id);

    setActivity({
      ...activity,
      [e.target.id]: isNumber ? +e.target.value : e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: "save-activity", payload: { newActivity: activity } });
  };

  return (
    <form
      className="space-y-5 bg-white p-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          Categoria:
        </label>
        <select
          className="border-slate-300 p-2 rounded-lg w-full"
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Actividad
        </label>
        <input
          id="name"
          type="text"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Comida, Jugo de naranja"
          value={activity.name}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          Actividad
        </label>
        <input
          id="calories"
          type="number"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Calorias. ej 500"
          value={activity.calories}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
        value={activity.category === 1 ? "guardar comida" : "Guardar ejercicio"}
        disabled={!isActivity()}
      />
    </form>
  );
};

export default Form;
