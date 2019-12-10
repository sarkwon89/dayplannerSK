// global variables




var timeArr = ["9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"]

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
    // description.attr("class", "description");

    row.attr("data-test", timeArr[i])
}

//when user clicks button pull the text in that row
$(".saveBtn").on("click", function (event) {
        console.log("button!");
        console.log(event);
        
        //get the parent element of the event target
        var parent = $(this).parent()
        console.log("parent",parent);

        //find the textarea element in the parent eleent
        var textarea = parent.find("textarea")
        console.log("textarea",textarea);

        //grab the value in var textarea
        var input = textarea.val();
        console.log(input);

        //get the value in the hour element
        var timeEl = parent.find('.hour');
        console.log(timeEl)

        var time = timeEl.text()
        console.log(time)

        //store input into local storage
        
});





//when user click save button pull textarea and time data and store in local storage

//Near the top of the calendar, the application should display the current day. 
console.log(moment().format())

$("#currentDay").text(moment().calendar());

//Additionally, each hour should be color coded to reflect whether the time slot is in the past, the present, or the future. This will change depending on the time of day.
//if current time = one of the strings in timeArr then set that specific timeblock color to "the present"




//when the page loads pull available text in local storage.  If nothing exists leave text area blank.


//make it a full width