
// per session = [date, intensity , duration]
// parse to one day = [date, intesity]
const session_to_day = (sessions) => {
  let sum = 0;
  let total_duration = 0;
  for(let i=0; i<sessions.length; i++) {
    sum += (sessions[i].intesity)*(sessions[i].duration);
    total_duration += sessions[i].duration;
  }
  sum = sum/total_duration;
  obj = [];
  obj.date = sessions.date;
  obj.intensity = sum;
  return (obj);
}

module.exports = session_to_day;