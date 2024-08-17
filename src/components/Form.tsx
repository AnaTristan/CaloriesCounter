import { categories } from "../data/Categories";

const Form = () => {
  return (
    <form className="space-y-5 bg-white p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="categories" className="font-bold">
          Categoria:
        </label>
        <select
          className="border-slate-300 p-2 rounded-lg w-full"
          id="categories"
        >
          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="activity" className="font-bold">
          Actividad
        </label>
        <input
          id="activity"
          type="text"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Comida, Jugo de naranja"
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
        />
      </div>

      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
        value="Guardar"
      />
    </form>
  );
};

export default Form;
