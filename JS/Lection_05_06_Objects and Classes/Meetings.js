function scheduleMeetings(inputArr) {
  let meetingsPlan = {};

  for (const meeting of inputArr) {
    let [day, person] = meeting.split(" ");

    if (meetingsPlan.hasOwnProperty(day)) {
      console.log("Conflict on " + day + "!");
    } else{
        meetingsPlan[day] = person;
        console.log('Scheduled for ' + day);
    }
  }

  for (const meet in meetingsPlan) {
    console.log(meet + ' -> ' + meetingsPlan[meet]);
  }
}

scheduleMeetings(['Monday Peter', 
'Wednesday Bill', 
'Monday Tim', 
'Friday Tim']);

scheduleMeetings(['Friday Bob', 
'Saturday Ted', 
'Monday Bill', 
'Monday John', 
'Wednesday George']);
