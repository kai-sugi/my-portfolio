export type Project = {
    title: string;
    status: "In progress" | "Finished";
    description: string;
    stack: string[];
    href?: string; // link to repo or live demo, optional
  };
   
  // To add a project, add another object to this list.
  export const projects: Project[] = [
    {
      title: "ESP32 Lyrics Display",
      status: "In progress",
      description:
        "A small OLED screen driven by an ESP32 that shows the lyrics of whatever song is playing on Spotify.",
      stack: ["C++", "ESP-IDF", "ESP32", "OLED"],
    },
  ];
   