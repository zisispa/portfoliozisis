import { MdWork, MdSchool } from "react-icons/md";

const experience = [
  {
    title: "BACHELOR OF INFORMATION TECHNOLOGY DEPARTMENT",
    subtitle: "2016 - Present",
    description:
      "Direction in Software Engineering (IT Project Management, Data Organization and Information Mining, ...)",
    svg: <MdSchool size={35} color='#0a192f' />,
    details: [{ name: "IT Project Management" }, { name: "Data Organization" }],
  },
  {
    title: "BENEFIT MS",
    subtitle: "2018 - 2019",
    description:
      "Responsible for controlling product promotion programs of known companies.",
    svg: <MdWork size={35} color='#0a192f' />,
    details: [
      { name: "Team-working" },
      { name: "Upgrade communication skills" },
      { name: "Time-organization" },
    ],
  },
];

export default experience;
