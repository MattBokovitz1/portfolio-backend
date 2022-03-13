exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      return knex("projects").insert([
        {
          id: 1,
          title: "Human Rights First: Asylum",
          description: `Human Rights First (HRF) works to link immigration attorneys with asylum seekers and provide those attorneys with resources to best represent their clients. The hope is that advocates for asylum seekers can use our tools to tailor their arguments before a particular judge and maximize their client's chances of receiving asylum.`,
          project_link: "https://a.humanrightsfirstasylum.dev/login",
          github_link:
            "https://github.com/Lambda-School-Labs/human-rights-first-asylum-fe-a",
          project_photo:
            "https://photos.google.com/photo/AF1QipMj7TDMPFke5KdHYOrLc528ycIg8qm-VJEIRTEq",
        },
        {
          id: 2,
          title: "Fitness Club",
          description: `React Web application for fitness coach to use to market classes and for athletes to find out about upcoming fitness events in their area. Users can register as admins or clients and then sign in. Admins can create, edit, and delete workout classes, and clients can view the classes. Front end deployed to vercel and node backend to heroku.`,
          project_link: "https://fitness-club.vercel.app/",
          github_link: "https://github.com/MattBokovitz1/FitnessClub",
          project_photo:
            "https://photos.google.com/photo/AF1QipP0M8umWUzldF9YgPNHz_7GG-gDiY9KsJbONLV0",
        },
        {
          id: 3,
          title: "NASA Photo Of Day",
          description: `React Web application that allows user to select a date and view the NASA photo of the day. A description of the photo of the day is included on the page to provide context to what the user is viewing.`,
          project_link: "https://nasa-photo-of-the-day-chi-one.vercel.app/",
          github_link: "https://github.com/MattBokovitz1/nasa-photo-of-the-day",
          project_photo:
            "https://photos.google.com/photo/AF1QipMEVLtm8QzzmLIfppAZudAfD4K_iEDmuli-DrAA",
        },
        {
          id: 4,
          title: "Water My Plants",
          description: `React Web application that catalogues a user's plants. Allows user to add, edit, and delete plant information when logged into profile. Connected to quotes API which displays pleasant quote on login page.`,
          project_link: "https://water-my-plants-tau.vercel.app/",
          github_link: "https://github.com/Build-Wk-Water-My-Plants/front-end",
          project_photo:
            "https://photos.google.com/photo/AF1QipP3EEmeKxzTrfnIf_YXzY6CB3p_QPc6htzT9Na5",
        },
      ]);
    });
};
