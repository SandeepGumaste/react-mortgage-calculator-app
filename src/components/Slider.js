const Slider = ({ name, minval, maxval, setfunc, func }) => {
  const intlNum = new Intl.NumberFormat("en-US");
  return (
    <div className="w-60">
      <h2>
        {name}: {intlNum.format(func)}
      </h2>

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
