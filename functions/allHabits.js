
// per date but multiple habits = [[date, intensity], [date, intensity], [date, intensity]]
// parse to one day all compiled= [date, intesity]

const multiple_to_one = (sessions) => {
  let sum = 0;
  for(let i=0; i<sessions.length; i++) {
    sum += (sessions[i].intesity)
  }
  sum = sum/sessions.length;
  arr = [];
  arr.date = sessions.date;
  arr.intensity = sum;
  return (arr);
}

module.exports = multiple_to_one;