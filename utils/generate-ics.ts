import parseISO from "date-fns/parseISO";
import addMinutes from "date-fns/addMinutes";
import ical from "ical-generator";
import fs from "fs/promises";

export function uid(value: string | number) {
  return `calendars@benfo:${value}`;
}

export async function generateIcs(fixtureData: any) {
  const calendar = ical({ name: "Fifa World Cup 2022 Calendar" });
  calendar.prodId({ company: "benfo", product: "World Cup Calendar" });
  fixtureData.response.forEach((data: any) => {
    calendar.createEvent({
      id: uid(data.fixture.id),
      start: parseISO(data.fixture.date),
      end: addMinutes(parseISO(data.fixture.date), 120),
      summary: `${data.teams.home.name}${
        data.goals.home !== null ? ` ${data.goals.home}` : ""
      } v ${data.teams.away.name}${
        data.goals.away !== null ? ` ${data.goals.away}` : ""
      }`,
      location: data.fixture.venue.name,
    });
  });

  await fs.writeFile("./public/fwc2022.ics", calendar.toString(), {
    encoding: "utf-8",
  });
}
