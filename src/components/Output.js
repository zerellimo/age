function Output(props) {

  const format = () => {
    const age = {
      years: props.years,
      months: props.months,
      days: props.days
    }

    return Object.entries(age).map(([key, value]) => {
       return <p key={key} className="age"><span className="age-value">{value}</span> {value!==1?key:`${key.substring(0, key.length-1)}`}</p>
    });
  }



  return (
    <div className="Output">
      {format()}
    </div>
  );
}

export default Output;
