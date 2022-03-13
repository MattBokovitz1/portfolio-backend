exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("potential")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("potential").insert([
        {
          id: 1,
          title: "Philosophy of Mathematics",
          author: "Hilary Putnam",
          date: "2022",
          rating: "10",
          topic: "Mathematics",
        },

        {
          id: 2,
          title: "The Bible",
          author: "-",
          date: "2022",
          rating: "10",
          topic: "Religion",
        },
        {
          id: 3,
          title: "Language Truth and Logic",
          author: "AJ Ayer",
          date: "2022",
          rating: "7",
          topic: "Philosophy",
        },
        {
          id: 4,
          title: "A History of the English-Speaking Peoples Vol 4",
          author: "Winston Churchill",
          date: "2022",
          rating: "10",
          topic: "History",
        },
        {
          id: 5,
          title: "Lifespan",
          author: "David Sinclair",
          date: "2022",
          rating: "7",
          topic: "Biology and Health",
        },

        {
          id: 7,
          title: "History of The World War",
          author: "Francis A. March",
          date: "2022",
          rating: "8",
          topic: "History",
        },
        {
          id: 8,
          title: "Confessions",
          author: "St. Augustine",
          date: "2022",
          rating: "9",
          topic: "Religion",
        },
        {
          id: 9,
          title: "The Everlasting Man",
          author: "GK Chesterton",
          date: "2022",
          rating: "9",
          topic: "History",
        },
        {
          id: 10,
          title: "Mere Christianity",
          author: "CS Lewis",
          date: "2022",
          rating: "9",
          topic: "Religion",
        },
        {
          id: 11,
          title: "The Four Loves",
          author: "CS Lewis",
          date: "2022",
          rating: "9",
          topic: "Religion",
        },
        {
          id: 12,
          title: "Surprised By Joy",
          author: "CS Lewis",
          date: "2022",
          rating: "9",
          topic: "Religion",
        },
        {
          id: 13,
          title: "The Abolition of Man",
          author: "CS Lewis",
          date: "2022",
          rating: "9",
          topic: "Religion",
        },
      ]);
    });
};
