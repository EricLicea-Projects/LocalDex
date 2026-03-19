export type FormattedEventDate = {
  day: string;
  date: string;
  time: string;
};

const pacificDayFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  timeZone: "America/Los_Angeles",
});

const pacificDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "America/Los_Angeles",
});

const pacificTimeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: "America/Los_Angeles",
});

const formatEventDate = (isoDateString: string): FormattedEventDate => {
  const parsedDate = new Date(isoDateString);

  if (Number.isNaN(parsedDate.getTime())) {
    return {
      day: "",
      date: "",
      time: "",
    };
  }

  return {
    day: pacificDayFormatter.format(parsedDate),
    date: pacificDateFormatter.format(parsedDate),
    time: pacificTimeFormatter.format(parsedDate),
  };
};

export default formatEventDate;
