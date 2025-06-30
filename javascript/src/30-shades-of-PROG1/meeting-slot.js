export function meetingSlot(N, slots) {
  let workStart = 8 * 60;
  let workEnd = 17 * 60 + 59;
  let days = {};
  for (let i = 1; i <= 5; i++) {
    days[i] = [];
  }

  for (let i = 0; i < N; i++) {
    let parts = slots[i].split(' ');
    let day = parseInt(parts[0]);
    let times = parts[1].split('-');
    let start = timeToMinutes(times[0]);
    let end = timeToMinutes(times[1]);
    days[day].push([start, end]);
  }

  for (let day = 1; day <= 5; day++) {
    let busy = days[day];
    busy.sort((a,b) => a[0] - b[0]);
    let freeStart = workStart;

    for (let i = 0; i <= busy.length; i++) {
      let busyStart = i < busy.length ? busy[i][0] : workEnd + 1;
      if (busyStart - freeStart >= 60) {
        return day + ' ' + minutesToTime(freeStart) + '-' + minutesToTime(freeStart + 59);
      }
      freeStart = i < busy.length ? Math.max(freeStart, busy[i][1] + 1) : freeStart;
    }
  }
  return null;

  function timeToMinutes(t) {
    let parts = t.split(':');
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
  }

  function minutesToTime(m) {
    let h = Math.floor(m / 60);
    let min = m % 60;
    return (h < 10 ? '0' : '') + h + ':' + (min < 10 ? '0' : '') + min;
  }
}

