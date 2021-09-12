/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const person = {
  gender: "Male",
  state: "California",
  country: "United States",
  region: "San Francisco Bay Area",
  social: {
    facebook: "facebook-link",
    twitter: "twitter link",
    instagram: "instagram-link",
    statistics: {
      followers: 500,
      following: 800,
    },
  },
};

console.log("person object:", person);
console.log("region value:", person.region); // dot notation
console.log("social followers:", person.social.statistics.followers);

console.log("region value:", person["region"]); // bracket notation

const lunchBox = {
  brand: "nike",
  color: "blue",
  size: "small",
  velcroOpen: false,
  pullVelcro: function (velcroStatus) {
    this.velcroOpen = velcroStatus;
  },
};

console.log("lunchBox object:", lunchBox);
console.log("brand value:", lunchBox.brand); // dot notation

console.log("brand value:", lunchBox["brand"]); // bracket notation
