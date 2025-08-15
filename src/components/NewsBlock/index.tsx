import "./style.css";
import type { NewsDataType } from "../../types/news";

const NewsBlock = (props: NewsDataType) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const newsDate = new Date(props.time);

  const newsDateOnly = new Date(newsDate);
  newsDateOnly.setHours(0, 0, 0, 0);

  const isToday = newsDateOnly.getTime() === today.getTime();

  const displayTime = isToday
    ? newsDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    : `${newsDate.getDate().toString().padStart(2, "0")}.${(
        newsDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}.${newsDate.getFullYear()} ${newsDate
        .getHours()
        .toString()
        .padStart(2, "0")}:${newsDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;

  return (
    <div className={`news ${props.isImportant ? "important" : ""}`}>
      <p className="time">{displayTime}</p>
      <div>
        <a href={props.link} target="_blank">
          <p>{props.title}</p>
        </a>
      </div>
    </div>
  );
};

export default NewsBlock;
