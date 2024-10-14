interface CheckboxProps {
  checked: boolean;
  handleChange: () => void;
}

export const Checkbox = ({
  checked,
  handleChange,
}: CheckboxProps): JSX.Element => {
  return (
    <div className="inline-flex items-center">
      <label className="flex items-center cursor-pointer relative mr-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="peer h-custom-18 w-custom-18 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primary checked:border-primary"
          id="check1"
        />
        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/assets/checked.svg" alt="Checked icon" />
        </span>
      </label>
    </div>
  );
};
