 export var dayToSchedule = {                
      "Sunday": "No School",
      "Monday": "Normal",
      "Tuesday": "Normal",
      "Wednesday": "Normal",
      "Thursday": "Normal",
      "Friday": "Normal",
      "Saturday": "No School"
    }

export var ignoredPeriods = [
                      "No School",
                      "Before School",
                      "Warning Bell",
                      "Passing Time",
                      "Teacher Time"
                     ];

export var splitPeriods = {
      "Period 5": [
              "Period 5, 1st Wave",
              "Period 5, 2nd Wave",
              "Period 5, 3rd Wave"
       ]
    }

export var schedule = {
    "No School" : [
          {name: "No School", start: "12:00a", end: "12:00a"}
         ], 
    "Normal": [
           {name: "Before School", start: "6:35a", end: "7:35a"},
           {name: "Warning Bell", start: "7:35a", end: "7:40a"},
           {name: "Period 1", start: "7:40a", end: "8:25a"},
           {name: "Passing Time", start: "8:25a", end: "8:29a"},
           {name: "Period 2", start: "8:29a", end: "9:17a"}, 
           {name: "Passing Time", start: "9:17a", end: "9:21a"},
           {name: "Period 3", start: "9:21a", end: "10:06a"},
           {name: "Passing Time", start: "10:06a", end: "10:10a"},
           {name: "Period 4", start: "10:10a", end: "10:55a"}, 
           {name: "Passing Time", start: "10:55a", end: "10:59a"},
           {name: "Period 5, 1st Wave", start: "10:59a", end: "11:21a"},
           {name: "Period 5, 2nd Wave", start: "11:21a", end: "11:47a"},
           {name: "Period 5, 3rd Wave", start: "11:47a", end: "12:13p"},
           {name: "Passing Time", start: "12:13p", end: "12:17pa"},
           {name: "Period 6", start: "12:17p", end: "1:02p"},
           {name: "Passing Time", start: "1:02p", end: "1:06p"},
           {name: "Period 7", start: "1:06p", end: "1:51p"},
           {name: "Passing Time", start: "1:51p", end: "1:55p"},
           {name: "Period 8", start: "1:55p", end: "2:35p"},
           {name: "Teacher Time", start: "2:35p", end: "3:15p"}
          ],
    "2 Hour Delay": [
           {name: "Before School", start: "8:35a", end: "9:35a"}, 
           {name: "Warning Bell", start: "9:35a", end: "9:40a"},
           {name: "Period 1", start: "9:40a", end: "10:12a"},
           {name: "Passing Time", start: "10:12a", end: "10:16a"},
           {name: "Period 2", start: "10:16a", end: "10:50a"}, 
           {name: "Passing Time", start: "10:50a", end: "10:54a"},
           {name: "Period 3", start: "10:54a", end: "11:26a"},
           {name: "Passing Time", start: "11:26a", end: "11:30a"},
           {name: "Period 4", start: "11:30a", end: "12:02p"}, 
           {name: "Passing Time", start: "12:02p", end: "12:06p"},
           {name: "Period 5, 1st Wave", start: "12:06p", end: "12:28p"},
           {name: "Period 5, 2nd Wave", start: "12:28p", end: "12:54p"},
           {name: "Period 5, 3rd Wave", start: "12:54p", end: "1:20p"},
           {name: "Passing Time", start: "1:20p", end: "1:24p"},
           {name: "Period 6", start: "1:24p", end: "1:56p"},
           {name: "Passing Time", start: "1:56p", end: "2:00p"},
           {name: "Period 7", start: "2:00p", end: "2:35p"},
           {name: "Teacher Time", start: "2:35p", end: "3:15p"}
          ],
    "PM Activity": [
           {name: "Before School", start: "6:35a", end: "7:35a"}, 
           {name: "Warning Bell", start: "7:35a", end: "7:40a"},
           {name: "Period 1", start: "7:40a", end: "8:20a"},
           {name: "Passing Time", start: "8:20a", end: "8:24a"},
           {name: "Period 2", start: "8:24a", end: "9:07a"}, 
           {name: "Passing Time", start: "9:07a", end: "9:11a"},
           {name: "Period 3", start: "9:11a", end: "9:51a"},
           {name: "Passing Time", start: "9:51a", end: "9:55a"},
           {name: "Period 4", start: "9:55a", end: "10:35a"}, 
           {name: "Passing Time", start: "10:35a", end: "10:39a"},
           {name: "Period 5, 1st Wave", start: "10:39a", end: "11:01a"},
           {name: "Period 5, 2nd Wave", start: "11:01a", end: "11:27a"},
           {name: "Period 5, 3rd Wave", start: "11:27a", end: "11:53a"},
           {name: "Passing Time", start: "11:53a", end: "11:57a"},
           {name: "Period 6", start: "11:57a", end: "12:37p"},
           {name: "Passing Time", start: "12:37p", end: "12:41p"},
           {name: "Period 7", start: "12:41p", end: "1:21p"},
           {name: "Passing Time", start: "1:21p", end: "1:25p"},
           {name: "PM Activity", start: "1:25p", end: "2:35p"},
           {name: "Teacher Time", start: "2:35p", end: "3:15p"}
          ],
    "Assembly": [
           {name: "Before School", start: "6:35a", end: "7:35a"},
           {name: "Warning Bell", start: "7:35a", end: "7:40a"},
           {name: "Period 1", start: "7:40a", end: "8:25a"},
           {name: "Passing Time", start: "8:25a", end: "8:29a"},
           {name: "Period 2", start: "8:29a", end: "9:17a"}, 
           {name: "Passing Time", start: "9:17a", end: "9:21a"},
           {name: "Period 3", start: "9:21a", end: "10:06a"},
           {name: "Passing Time", start: "10:06a", end: "10:10a"},
           {name: "Assembly", start: "10:10a", end: "10:50a"},
           {name: "Passing Time", start: "10:50a", end: "10:54a"},
           {name: "Period 5, 1st Wave", start: "10:54a", end: "11:16a"},
           {name: "Period 5, 2nd Wave", start: "11:16a", end: "11:42a"},
           {name: "Period 5, 3rd Wave", start: "11:42a", end: "12:08p"},
           {name: "Passing Time", start: "12:08p", end: "12:12p"},
           {name: "Period 4", start: "12:12p", end: "12:57p"},
           {name: "Passing Time", start: "12:57p", end: "1:01p"},
           {name: "Period 6", start: "1:01p", end: "1:46p"},
           {name: "Passing Time", start: "1:46p", end: "1:50p"},
           {name: "Period 7", start: "1:50p", end: "2:35p"},
           {name: "Teacher Time", start: "2:35p", end: "3:15p"}
          ],
    "7 Period": [
           {name: "Before School", start: "6:35a", end: "7:35a"},
           {name: "Warning Bell", start: "7:35a", end: "7:40a"},
           {name: "Period 1", start: "7:40a", end: "8:32a"},
           {name: "Passing Time", start: "8:32a", end: "8:36a"},
           {name: "Period 2", start: "8:36a", end: "9:31a"}, 
           {name: "Passing Time", start: "9:31a", end: "9:35a"},
           {name: "Period 3", start: "9:35a", end: "10:27a"},
           {name: "Passing Time", start: "10:27a", end: "10:31a"},
           {name: "Period 4", start: "10:31a", end: "11:23a"},
           {name: "Passing Time", start: "11:23a", end: "11:27a"},
           {name: "Period 5, 1st Wave", start: "11:27a", end: "11:52a"},
           {name: "Period 5, 2nd Wave", start: "11:52a", end: "12:18p"},
           {name: "Period 5, 3rd Wave", start: "12:18p", end: "12:44p"},
           {name: "Passing Time", start: "12:44p", end: "12:48p"},
           {name: "Period 6", start: "12:48p", end: "1:40p"},
           {name: "Passing Time", start: "1:40p", end: "1:44p"},
           {name: "Period 7", start: "1:44p", end: "2:35p"},
           {name: "Teacher Time", start: "2:35p", end: "3:15p"}
          ],
    "Exam": [
           {name: "Before School", start: "6:35a", end: "7:30a"},
           {name: "Before Exam 1", start: "7:30a", end: "8:00a"},
           {name: "Exam 1", start: "8:00a", end: "9:30a"},
           {name: "Passing Time", start: "9:30a", end: "10:00a"},
           {name: "Exam 2", start: "10:00a", end: "11:30a"}, 
           {name: "Lunch", start: "11:30a", end: "12:45p"},
           {name: "Make-Up", start: "12:45p", end: "2:15p"},
           {name: "Teacher Time", start: "2:15p", end: "3:15p"}
          ]
};

