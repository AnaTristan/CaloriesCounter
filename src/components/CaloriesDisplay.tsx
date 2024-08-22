type CaloriesDisplayProps = {
  calories: number;
  color: string;
  type: string
};

const CaloriesDisplay = ({ calories, color, type }: CaloriesDisplayProps) => {
  return (
    <>
      <p className=" text-white text-center text-xl font-bold rounded-full grid grid-cols-1 gap-3 ">
        <span className={`font-black text-6xl ${color}`}>{calories}</span>
        {type}
      </p>
    </>
  );
};

export default CaloriesDisplay;
