const Slider = ({ name, minval, maxval, setfunc, func, type }) => {
  const intlNum = new Intl.NumberFormat("en-US");
  return (
    <div className="text-xl w-72">
      <h2 className="mb-3">
        {name}: {intlNum.format(func)} {type === "currency" ? "USD" : null}
        {type === "time" ? (func > 1 ? "Years" : "Year") : null}
        {type === "rate" ? "%" : null}
      </h2>
      {/*      <div class="form-control flex flex-col">
        <label class="input-group input-group-sm">
          <span>{name}</span>
          <input
            type="number"
            min={minval}
            max={maxval}
            value={func}
            class="input input-bordered input-sm"
            placeholder={intlNum.format(func)}
            onChange={(e) => {
              setfunc(e.target.value);
            }}
          />
          <span>
            {type === "currency" ? "INR" : null}
            {type === "time" ? (func > 1 ? "Years" : "Year") : null}
            {type === "rate" ? "%" : null}
          </span>
        </label>
      </div>*/}

      <input
        type="range"
        min={minval}
        max={maxval}
        value={func}
        onChange={(e) => {
          setfunc(e.target.value);
        }}
        className="range range-white"
      />
    </div>
  );
};

export default Slider;
