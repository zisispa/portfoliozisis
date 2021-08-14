import movielibraryproject from "./images/movie-library.png";
import blogsystemlaravelproject from "./images/blogsystem-font.png";
import coronovirusproject from "./images/coronavirus-photo.png";
import languageschoolproject from "./images/language-school.png";
import contactkeeperdashboardproject from "./images/contact-keeper-dashboard.png";
import searchaidproject from "./images/searchaid.png";

const projects = [
  {
    title: "Movie Library",
    description: "This is a Movie Library System, implemented with Laravel.",
    tech: "Laravel - TailwindCSS - Alpine.js",
    git_link: "https://github.com/zisispa/movie-library",
    source_link: "https://movie-lab.herokuapp.com/",
    image: movielibraryproject,
  },
  {
    title: "Blog System",
    description: "This is a Blog System implemented with Laravel.",
    tech: "Bootstrap - Laravel - MySQL",
    git_link: "https://github.com/zisispa/blogsystem",
    source_link: "http://sassblog.herokuapp.com/",
    image: blogsystemlaravelproject,
  },
  {
    title: "Coronavirus Searcher",
    description: "This is a Coronavirus Searcher implemented with Vue.",
    tech: "Vue - Tailwind - Vuetify",
    git_link: "https://github.com/zisispa/coronavirus-search-vue",
    source_link: "https://coronavirusearcher.netlify.app/",
    image: coronovirusproject,
  },
  {
    title: "School and Classroom Management System",
    description:
      "This is a School and Classroom Management System, implemented with Laravel.",
    tech: "Laravel - Bootstrap - MySQL",
    git_link: "https://github.com/zisispa/languageschooltest",
    source_link: "http://languageschoolsystem.herokuapp.com/login",
    image: languageschoolproject,
  },
  {
    title: "Contact Keeper",
    description: "This is a Contact Keeper implemented with React and Express.",
    tech: "React - Material UI - Express - MongoDB",
    git_link: "https://github.com/zisispa/contact-keeper",
    source_link: "https://github.com/zisispa/contact-keeper/blob/master",
    image: contactkeeperdashboardproject,
  },
  {
    title: "Food Shop Searcher",
    description:
      "This is a Food Shop Searcher implemented with Vue and Firebase.",
    tech: "Vue - Tailwind - Firebase",
    git_link: "https://github.com/zisispa/searchapp",
    source_link: "https://searchaid.netlify.app/",
    image: searchaidproject,
  },
];

export default projects;
