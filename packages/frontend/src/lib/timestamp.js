import moment from 'moment';

export function relativeTime(timestamp) {
  return moment(timestamp, 'x').fromNow();
}

export default {
  relativeTime
};
