export const components = {


profile: [

{
id:"profile-card",

name:"Student Profile Card",

icon:"👤",

type:"profile",

allowedSections:[

"sidebar",
"main"

]

},



{
id:"profile-mini",

name:"Mini Profile",

icon:"🧑",

type:"profile-mini",

allowedSections:[

"navbar",
"sidebar"

]

},



{
id:"student-id",

name:"Student ID Profile",

icon:"🪪",

type:"profile-id",

allowedSections:[

"main"

]

}


],






academic:[



{

id:"schedule-card",

name:"Class Schedule",

icon:"📅",

type:"schedule",

allowedSections:[

"main"

]

},



{

id:"calendar",

name:"Calendar View",

icon:"🗓️",

type:"calendar",

allowedSections:[

"main"

]

},



{

id:"course-list",

name:"Course List",

icon:"📚",

type:"courses",

allowedSections:[

"main",
"sidebar"

]

},



{

id:"grades",

name:"Grades Overview",

icon:"📊",

type:"grades",

allowedSections:[

"main"

]

}


],






communication:[



{

id:"notifications",

name:"Notifications",

icon:"🔔",

type:"notifications",

allowedSections:[

"main",
"navbar"

]

},



{

id:"announcement",

name:"Announcement Board",

icon:"📢",

type:"announcement",

allowedSections:[

"main"

]

},



{

id:"messages",

name:"Message Center",

icon:"💬",

type:"messages",

allowedSections:[

"sidebar",
"main"

]

}


],






system:[



{

id:"search",

name:"Search Bar",

icon:"🔍",

type:"search",

allowedSections:[

"navbar",
"main"

]

},



{

id:"settings",

name:"Settings",

icon:"⚙️",

type:"settings",

allowedSections:[

"sidebar",
"footer"

]

},



{

id:"logout",

name:"Logout Button",

icon:"🚪",

type:"logout",

allowedSections:[

"sidebar",
"footer"

]

}


]



};