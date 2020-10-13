var user = {
  firstName: "Hitesh",
  lastNmae: "Choudary",
  role: "Admin",
  loginCount: 32,
  courseList: [],
  buyCourse: function (courseNmae) {
    this.courseList.push(courseNmae);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length}`;
  },
  getInfo: function () {
    return;
  },
};

console.table(user.getInfo());
