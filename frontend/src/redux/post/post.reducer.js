const INITIAL_STATE = {
  wrist_shots: [
    {
      id: 1,
      user: "Faiz",
      date: Date(),
      watch: "Rolex Explorer 2 Polar",
      votes: 20,
      imgURL:
        "https://ablogtowatch.com/wp-content/uploads/2018/12/Rolex-Explorer-II-Polar-Watch-01.jpg",
    },
    {
      id: 2,
      user: "Bob",
      date: Date(),
      watch: "SKX013 Black",
      votes: 10,
      imgURL: "https://www.watchshopping.com/media/tm_blog/p/o/post_1_5387.jpg",
    },
    {
      id: 3,
      user: "James",
      date: Date(),
      watch: "Rolex Submariner",
      votes: 5,
      imgURL: "https://i.redd.it/b8anqtrivik11.jpg",
    },
    {
      id: 4,
      user: "Ahmad",
      date: Date(),
      watch: "GS Snowflake",
      votes: 4,
      imgURL: "https://i.ytimg.com/vi/lUdJselbUVc/maxresdefault.jpg",
    },
    {
      id: 5,
      user: "Bilal",
      date: Date(),
      watch: "Rolex Explorer 1",
      votes: 1,
      imgURL:
        "https://hodinkee.imgix.net/uploads/images/1556028736751-zemdcenll7a-00a5730e971e099ab90038731136c905/L1010026-Edit.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&ch=Width%2CDPR%2CSave-Data&fit=crop&w=820",
    },
  ],
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_NEW_POST":
      return {
        ...state,
        wrist_shots: state.wrist_shots.concat(action.payload),
      };
    default:
      return state;
  }
};
