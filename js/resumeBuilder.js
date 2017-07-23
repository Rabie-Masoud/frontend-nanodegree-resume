/*//add the name to the header element 
//var name = "Rabie Masoud"
//var role = "Full Stack Web Developer"

var skills = ["Funny","Programming","Teaching","JS"];
var contact = {
"mobile" : "+201111550396" ,
"eMail" : "eng.rabiemasoud@gmail.com",
"gitHup" : "https://github.com/rabie-masoud",
"location" : "Egypt , Fyoum , sennoures"
};
var bio = {
	"name" : "Rabie Masoud",
	"role" : "Full Stack Web Developer",
	"contact" : contact, 
	"pictureUrl" : "images/personal.JPG",
	"welcomeMessage" : "i am Rabie Masoud i am ready to work as web developer ",
	"skills" : skills
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedcontact = HTMLcontactGeneric.replace("%contact%","Contact info");
var formattedMobile = HTMLmobile.replace("%data%",bio.contact["mobile"]);
var formattedEmail = HTMLemail.replace("%data%",bio.contact.eMail);
var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
var formattedGitHup = HTMLgithub.replace("%data%",bio.contact.gitHup);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureUrl);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append("</br>"+formattedcontact);
$("#main").append(formattedMobile);
$("#main").append(formattedEmail);
$("#main").append(formattedLocation);
$("#main").append(formattedGitHup);
$("#main").append(formattedBioPic);
$("#main").append(formattedWelcomeMessage);
$("#main").append(formattedSkills);
var work = {};
var education = {
	"schools" : [
	{
		"name":"Faculty of computers and information",
		"university":"cairo university",
		"city":"cairo",
		"degree":"Bachelor of comuter science"
	},

	{
		"name":"Faculty of education",
		"university":"Fayoum university",
		"city":"Fayoum",
		"degree":"General Diploma of education"
	}

	]
};
work.position = "Lecturer";
work.employer = "Ministry Of Heigher Education - Technical College ";
work.years = 10 ;
work.city = "beni suef";

$("#main").append(work.position);
$("#main").append(education["name"]); */

var bio = {
	"name" : "Rabie Masoud",
	"role" : "Full Stack Web Developer",
	"pictureUrl" : "images/personal.JPG",
	"welcomeMessage" : "i am Rabie Masoud i am ready to work as web developer ",
	"contacts" :{
					"mobile" : "+201111550396" ,
					"eMail" : "eng.rabiemasoud@gmail.com",
					"gitHup" : "https://github.com/rabie-masoud",
					"location" : "Faiyum"
				},
	"skills" : ["Programming","Teaching","JS","SQL","CSS3","HTML5","Python","Flask Environment"],
	"display": function() 
				{
					var formattedName = "";
					var formattedRole = "";
					var formattedMobile="";
					var formattedEmail="";
					var formattedGitHub="";
					var formattedLocation="";
					var formattedskills = "";
					var fromattedPic="";
					var formattedWelMessage="";
					formattedName = HTMLheaderName.replace("%data%",bio.name);
					formattedRole = HTMLheaderRole.replace("%data%",bio.role);
					$("#header").prepend(formattedRole);
					$("#header").prepend(formattedName);

					
					formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
					$("#topContacts").append(formattedMobile);
					$("#footerContacts").append(formattedMobile);
					formattedEmail = HTMLemail.replace("%data%",bio.contacts.eMail);
					$("#topContacts").append(formattedEmail);
					$("#footerContacts").append(formattedEmail);
					formattedGitHub = HTMLgithub.replace("%data%",bio.contacts.gitHup);
					$("#topContacts").append(formattedGitHub);
					$("#footerContacts").append(formattedGitHub);
					formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
					$("#topContacts").append(formattedLocation);
					$("#footerContacts").append(formattedLocation);
					fromattedPic = HTMLbioPic.replace("%data%",bio.pictureUrl);
					$("#header").append(fromattedPic);
					formattedWelMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
					$("#header").append(formattedWelMessage);

		
					if(bio.skills.length > 0)
					{

					$("#header").append(HTMLskillsStart);
					
					for(skill in bio.skills)
					{
						formattedskills = HTMLskills.replace("%data%" ,bio.skills[skill]);
						$("#header").append(formattedskills);
					}
					}

				}
};

bio.display();

var education = {
"schools" : [
	{
		"name":"Faculty of computers and information",
		"university":"cairo university",
		"location":"Cairo",
		"degree":"Bachelor of comuter science",
		"url":"http://fci.cu.edu.eg/",
		"majors":[]
	},

	{
		"name":"Faculty of education",
		"university":"Fayoum university",
		"location":"Faiyum",
		"degree":"General Diploma of education",
		"url":"http://www.fayoum.edu.eg/Education/",
		"majors":[]
	}

	],
	"online courses":[
	{
		"title":"Full stack web developer nano degree",
		"school":"Udacity",
		"dates":"from 14/2/2017 to 13/8/2017",
		"url":"www.udacity.com"
	},
	{
		"title":"HTML , CSS , Java script , PHP ",
		"school":"Elzero Web School",
		"dates":"from 13/7/2017 to 24/9/2017",
		"url":"https://www.youtube.com/user/OsamaElzero/featured"
	}


	],
"display": function() 
				{
				var formattedSchoolName = "";
				var formattedSchoolDegree = "";
				var formattedSchoolDates = "";
				var formattedSchoolLocation = "";
				var formattedSchoolMajor = "";

				for(school in education.schools)
				{
				$("#education").append(HTMLschoolStart);
				formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
				$(".education-entry:last").append(formattedSchoolName);
				formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
				$(".education-entry:last").append(formattedSchoolDegree);
				formattedSchoolDates = HTMLschoolName.replace("%data%",education.schools[school].dates);
				$(".education-entry:last").append(formattedSchoolDates);

				formattedSchoolLocation = HTMLschoolName.replace("%data%",education.schools[school].location);
				$(".education-entry:last").append(formattedSchoolLocation);
				formattedSchoolMajor = HTMLschoolName.replace("%data%",education.schools[school].majors);
				$(".education-entry:last").append(formattedSchoolMajor);
				
				}
				var formattedOnLineTitle = "";
				var formattedOnLineSchool = "";
				var formattedOnLineDates = "";
				var formattedOnLineURL = "";
				
				for(course in education["online courses"])
				{
				$(".education-entry:last").append(HTMLonlineClasses);
				formattedOnLineTitle = HTMLonlineTitle.replace("%data%",education["online courses"][course].title);
				formattedOnLineSchool = HTMLonlineSchool.replace("%data%",education["online courses"][course].school);
				formattedOnLineDates = HTMLonlineDates.replace("%data%",education["online courses"][course].dates);
				formattedOnLineURL = HTMLonlineURL.replace("%data%",education["online courses"][course].url);
				$(".education-entry:last").append(formattedOnLineTitle);
				$(".education-entry:last").append(formattedOnLineSchool);
				$(".education-entry:last").append(formattedOnLineDates);
				$(".education-entry:last").append(formattedOnLineURL);

				}
				}

};
education.display();
var work =   {
	"jobs":[
				{
				"employer" : "Ministry of higher education - Middle Valley Technical college" ,
				"title": "Computer science Lecturer",
				"dates":"from 7/10/2008 till Now ",
				"location":"Beni Suef",
				"description":"teaching Data structure in c++ , database principles and system analysis "
				}
				 , 

				{
				"employer" : "Main Telecom Company" ,
				"title": "PHP Web Developer",
				"dates":"from 1/10/2013 - 1/10/2014 ",
				"location":"6th of October City",
				"description":"developing and maintaining web sites  "
				}  
		   ] ,
	"display": function() {
					var formattedEmployer = "";
					var formattedJobTitle = "";
					var formattedEmployerTitle = "";
					var formattedWorkDates = "";
					var formattedWorkDescription = "";
					var formattedWorkLocation = "";

					for(job in work.jobs)
					{
					$("#workExperience").append(HTMLworkStart);
					formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
					formattedJobTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
					formattedEmployerTitle = formattedEmployer + formattedJobTitle ;
					$(".work-entry:last").append(formattedEmployerTitle);
					formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
					$(".work-entry:last").append(formattedWorkLocation);
					formattedWorkDates =HTMLworkDates.replace("%data%",work.jobs[job].dates);
					$(".work-entry:last").append(formattedWorkDates);
					formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
					$(".work-entry:last").append(formattedWorkDescription);

					}

	}
};
work.display();

var projects = {

	"projects" :[
					{
						"title" : "log analysis report",
						"role":"Developer",
						"dates" : "1/6/2017",
						"description":"it is a reproting tool which uses SQL queries to get information and make statistical analysis on data from the database",
						"images":[]
					}
					,
					{
					"title" : "Movie Maker",
					"role":"Developer",
					"dates" : "1/4/2017",
					"description":"web site display set of movies with its description and trailer",
					"images":[]
					}
					,
					{
					"title" : "Item Catalog Project",
					"role":"Developer",
					"dates" : "it is a web site to display set of restaurants and their menus",
					"description":"",
					"images":[]
					}

				] ,
		"display" :  function()
							{
							var formattedProjectTitle = "";
							var formattedProjectDates = "";
							var formattedProjectDescription = "";
							var formattedProjectImage = "";

							for(project in projects.projects)
							{
							$("#projects").append(HTMLprojectStart);
							formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
							$(".project-entry:last").append(formattedProjectTitle);
							formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
							$(".project-entry:last").append(formattedProjectDates);
							formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
							$(".project-entry:last").append(formattedProjectDescription);
							formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
							$(".project-entry:last").append(formattedProjectImage);

							}

				}

};
projects.display();

function inName(_full_name)
{
	var flagArr = _full_name.trim().split(" ");
	var firstName = flagArr[0].slice(0,1).toUpperCase() + flagArr[0].slice(1).toLowerCase();
	var lastName = flagArr[1].toUpperCase();
	//var fullName = flagArr.join(" ");
	return firstName + " " + lastName; 
}

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);

//displayWork();

$(document).click(function(loc){
	var x = loc.pageX ; 
	var y = loc.pageY; 
	logclicks(x,y);
}
);

function logclicks(_x,_y){
console.log('X Location is :' +_x +' Y Location is : '+_y);

};