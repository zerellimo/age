function Input(props) {
  return (
    <div className="Input">
      <form>
        <div className="form-element">
          <label htmlFor="day">Day</label>
          <input
            type="number"
            name="day"
            id="day"
            value={props.day}
            placeholder="DD"
            maxLength = {2}
            required
            onChange={(e) => props.setDay((Number(e.target.value) || !e.target.value) && e.target.value)}
          />
          <span></span>
        </div>
        <div className="form-element">
          <label htmlFor="month">Month</label>
          <input
            type="number"
            name="month"
            id="month"
            value={props.month}
            placeholder="MM"
            maxLength = {2}
            required
            onChange={(e) => props.setMonth((Number(e.target.value) || !e.target.value) && e.target.value)}
          />
          <span></span>
        </div>
        <div className="form-element">
          <label htmlFor="year">Year</label>
          <input
            type="number"
            name="year"
            id="year"
            value={props.year}
            placeholder="YYYY"
            maxLength = {4}
            required
            onChange={(e) => props.setYear((Number(e.target.value) || !e.target.value) && e.target.value)}
          />
          <span></span>
        </div>
      </form>
      <p className="error">{props.error}</p>
    </div>
  );
}

export default Input;
