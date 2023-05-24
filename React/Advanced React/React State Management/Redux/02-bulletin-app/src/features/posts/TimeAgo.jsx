import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({timestamp}) => {
    let timeAgo = ''
    if(timestamp){
        const date = parseISO(timestamp)
        const timerPeriod = formatDistanceToNow(date)
        timeAgo = `${timerPeriod} ago`
    }
  return (
    <span title={timestamp}>
        &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo