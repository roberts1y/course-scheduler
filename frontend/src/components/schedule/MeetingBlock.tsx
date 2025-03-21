import { MeetingBlockComponent } from "./schedule.types";
import styles from "./schedule.module.css";
import { Day } from "../../types/api";
import { timeToPercent } from "./utils/schedulePlacement";

const PADDING = 0.5; // em

let MeetingBlock: MeetingBlockComponent = ({block, groupSize, groupIndex, range}) => {

    let days: Day[] = ["M", "Tu", "W", "Th", "F"];

    let getDayLeft : (day: Day) => number = day => days.indexOf(day)*20;

    if(block.day == "Other") {
        return <></>;
    }

    return (
        <div 
            className={styles.meetingRoot}
            style={{
                width: `calc((20% / ${groupSize}) - ${PADDING}em)`,
                left: `calc(${getDayLeft(block.day)}% + ${PADDING/2}em + (${groupIndex} * (20% / ${groupSize})))`,
                top: `${timeToPercent(block.start, range)}%`,
                bottom: `${100-timeToPercent(block.end, range)}%`
            }}
        >
            <span>{block.course._id}</span>
        </div>
    )
}

export default MeetingBlock;