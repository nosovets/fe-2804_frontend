let month = "June";
let year = "2021";

const month_list = [
  { name: "January", days: 31 },
  { name: "February", days: 28 },
  { name: "March", days: 31 },
  { name: "April", days: 30 },
  { name: "May", days: 31 },
  { name: "June", days: 30 },
  { name: "July", days: 31 },
  { name: "August", days: 31 },
  { name: "September", days: 30 },
  { name: "October", days: 31 },
  { name: "November", days: 30 },
  { name: "December", days: 31 },
];

function Calendar(month, year) {
  const month_list = [
    { name: "January", days: 31 },
    { name: "February", days: 28 },
    { name: "March", days: 31 },
    { name: "April", days: 30 },
    { name: "May", days: 31 },
    { name: "June", days: 30 },
    { name: "July", days: 31 },
    { name: "August", days: 31 },
    { name: "September", days: 30 },
    { name: "October", days: 31 },
    { name: "November", days: 30 },
    { name: "December", days: 31 },
  ];

  var selected_month = monthNumber(month_list, month);

  let calendar = document.createElement("div");
  let month_slider = document.createElement("div");
  let calendar__body = document.createElement("div");

  calendar.className = "calendar";
  month_slider.className = "calendar__month_slider";
  calendar__body.className = "calendar__body";

  calendar.appendChild(month_slider);

  //Prev button
  let prev = document.createElement("button");
  prev.className = "cal_prev";
  prev.onclick = updatePrevMonth;
  prev.ariaLabel = "Previous month";

  //Current month
  let current_month = document.createElement("span");
  current_month.textContent = month + " " + year;

  //Next button
  let next = document.createElement("button");
  next.className = "cal_next";
  next.onclick = updateNextMonth;
  next.ariaLabel = "Next month";

  month_slider.appendChild(prev);
  month_slider.appendChild(current_month);
  month_slider.appendChild(next);

  calendar.appendChild(calendar__body);

  document.body.append(calendar);

  let days__names = document.createElement("div");
  days__names.className = "days__names";

  calendar__body.appendChild(days__names);

  days_name = ["M", "T", "W", "T", "F", "Sat", "Sun"];

  for (i = 0; i < days_name.length; i++) {
    let week_day = document.createElement("span");
    week_day.textContent = days_name[i];
    days__names.appendChild(week_day);
  }

  let days__counter = document.createElement("div");
  days__counter.className = "days__counter";

  calendar__body.appendChild(days__counter);

  let date = new Date(year, selected_month);

  let start_day = 0;

  if (date.getDay() === 0) {
    start_day = 6;
  } else {
    start_day = date.getDay() - 1;
  }

  let num_days = monthDays(month_list, month);

  //Prev month
  let prev_date_list = [];

  for (i = start_day; i >= 0; i--) {
    prev_date_list.push(num_days - i);
  }

  for (i = 0; i < prev_date_list.length; i++) {
    let day = document.createElement("a");
    day.className = "next_months_date";
    day.textContent = prev_date_list[i];
    days__counter.appendChild(day);
  }

  //Current month
  let date_list = [];

  while (date.getMonth() == selected_month) {
    date_list.push(date.getDate());
    date.setDate(date.getDate() + 1);
  }

  for (i = 0; i < date_list.length; i++) {
    let day = document.createElement("a");
    day.textContent = date_list[i];
    day.onclick = selectedDate;
    days__counter.appendChild(day);
  }

  //Next month
  let next_date_list = 35 - date_list.length - prev_date_list.length;

  for (i = 0; i < next_date_list; i++) {
    let day = document.createElement("a");
    day.textContent = i + 1;
    day.className = "next_months_date";
    days__counter.appendChild(day);
  }
}

function monthNumber(month_list, month) {
  for (i = 0; i < month_list.length; i++) {
    if (month_list[i].name === month) {
      return i;
    }
  }
}

function monthDays(month_list, month) {
  if (month === "January") {
    return month_list[11].days;
  }

  for (i = 0; i < month_list.length; i++) {
    if (month_list[i].name === month) {
      return month_list[i - 1].days;
    }
  }
}

let change_month = document.getElementsByClassName("cal_prev");

function updatePrevMonth() {
  let selected_month = monthNumber(month_list, month);

  if (selected_month === 0) {
    month = "December";
    year = year - 1
  } else {
    month = month_list[selected_month - 1].name;
  }

  clearCalendar();
  //document.body
  Calendar(month, year);
}

function updateNextMonth() {
  let selected_month = monthNumber(month_list, month);
  console.log(selected_month);
  if (selected_month === 11) {
    month = "January";
    year = year + 1
  } else {
    month = month_list[selected_month + 1].name;
  }

  clearCalendar();
  //document.body
  Calendar(month, year);
}

function clearCalendar() {
  let calendar = document.querySelectorAll(".calendar");
  calendar.forEach((e) => e.remove());
}

function selectedDate(elem) {
    console.log(elem.target);
    console.log(this);
    elem.target.classList.add("selected_date")
  }

Calendar(month, year);
