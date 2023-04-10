function Compute(props) {
  const compute = () => {
    if (!props.year || !props.month || !props.day) {
      props.setError("Missing info");
      return;
    }

    if (
      !Date.parse(`${props.year}-${props.month}-${props.day}`) ||
      props.year.length < 4
    ) {
      props.setError("Wrong format");
      return;
    }

    let yearN = Number(props.year);
    let monthIndex = Number(props.month) - 1;
    let dayN = Number(props.day);

    let userDate = new Date();
    userDate.setFullYear(yearN);
    userDate.setMonth(monthIndex);
    userDate.setDate(dayN);

    if (
      userDate.getFullYear() !== yearN ||
      userDate.getMonth() !== monthIndex ||
      userDate.getDate() !== dayN
    ) {
      props.setError("Does not exist");
      return;
    }

    let currentDate = new Date(Date.now());

    currentDate.setHours(userDate.getHours());
    currentDate.setMinutes(userDate.getMinutes());
    currentDate.setSeconds(userDate.getSeconds());
    currentDate.setMilliseconds(userDate.getMilliseconds());

    if (userDate > currentDate) {
      props.setError("Must be in the past");
      return;
    }

    let years = currentDate.getFullYear() - userDate.getFullYear();
    let months = currentDate.getMonth() - userDate.getMonth();
    let days = currentDate.getDate() - userDate.getDate();

    if (months < 0) {
      years = years - 1;
      months = 12 - Math.abs(months);
    }

    if (days < 0) {
      months = months - 1;
      days = 30 - Math.abs(days);
      if (months < 0) {
        years = years - 1;
        months = 12 - Math.abs(months);
      }
    }
    props.setYears(years);
    props.setMonths(months);
    props.setDays(days);
    props.setError("");
  };

  const handleClick = (e) => {
    e.preventDefault();
    compute();
  };

  return (
    <div className="Compute">
      <div className="button-wrapper">
        <button onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="44"
            viewBox="0 0 46 44"
          >
            <g fill="none" stroke="#FFF" strokeWidth="2">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Compute;
