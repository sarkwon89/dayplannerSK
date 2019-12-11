// global variables

//time variable in timeblock element
var time;
console.log("time" + time)

//my array of all the timeblocks
var timeArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
console.log("array" + timeArr);

//create a counter where to add from
var startTime = 9;

//add format HH in the data set and convert it into an integer
var HH = parseInt(moment().format("HH"))

//Near the top of the calendar, the application should display the current day. 
//my currentDay value in hours and AM/PM
var currentDay = moment().format("hA");
console.log("current" + currentDay)

//use moment method to place current time into the "currentDay" element
$("#currentDay").text(moment().calendar());

//create a for loop that will generate the rows, text area and buttons
for (var i = 0; i < timeArr.length; i++) {
    //create elements    
    var row = $("<div>");
    var textarea = $("<textarea>");
    var timeblock = $("<div>");
    var saveBtn = $("<button>");
    var hour = $("<div>");
    // var description = $("<div>");

    //append element from parent element
    $(".container").append(row);
    row.append(timeblock);
    timeblock.append(hour)
    row.append(textarea);
    // description.append(textarea);
    row.append(saveBtn);

    //add text to button
    saveBtn.text("Save Button");

    //set class attributes
    saveBtn.attr("class", "saveBtn");
    row.attr("class", "row");
    hour.attr("class", "hour");
    hour.text(timeArr[i]);
    timeblock.attr("class", "time-block");

    //apply data set to all the rows with startTime
    textarea.attr("data-hour", startTime);
    //The next time the code loops it adds startTime with 1
    startTime++

    //when the page loads the if statment checks what the value of the key is. If the value does not equal to null then put the 
    if(localStorage.getItem(timeArr[i]) !== null) {
        textarea.text(localStorage.getItem(timeArr[i]))
    }
}

//when user clicks button pull the text in that row
$(".saveBtn").on("click", function (event) {
    console.log("button!");
    console.log(event);

    //get the parent element of the event target
    var parent = $(this).parent();
    console.log("parent", parent);

    //find the textarea element in the parent eleent
    var textarea = parent.find("textarea");
    console.log("textarea", textarea);

    //grab the value in var textarea
    input = textarea.val();
    console.log(input);

    //get the value in the hour element
    var timeEl = parent.find(".hour");
    // console.log("timeEl" + )

    //grab text from the hour element
    time = timeEl.text();
    console.log("time" + time);

    //store input and time value into local storage
    localStorage.setItem(time, input)



});

var input;

//Additionally, each hour should be color coded to reflect whether the time slot is in the past, the present, or the future. This will change depending on the time of day.
//if current time = one of the strings in timeArr then set that specific timeblock color to "the present"

$.each($("textarea"), function () {
    console.log($(this).data("hour"));
    console.log("foreach " + HH);
    if (HH === $(this).data("hour")) {
        $(this).attr("class", "present")
    }

    if (HH > $(this).data("hour")) {
        $(this).attr("class", "past")
    }

    if (HH < $(this).data("hour")) {
        $(this).attr("class", "future")
    }
})