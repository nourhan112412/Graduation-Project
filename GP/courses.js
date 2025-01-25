// Get references to the form and table
const courseForm = document.getElementById('Course');
const coursesTable = document.getElementById('roomsTable');

// Array to hold course data
let courses = [];
let editingCourseCode = null; // Variable to track the course being edited

// Add course to the courses array and update the table
function addCourse(course) {
  courses.push(course);
  updateTable();
}

// Update the courses table with the current list of courses
function updateTable() {
  // Clear the current rows
  coursesTable.innerHTML = '';
  
  // Loop through the courses array and create a new row for each course
  courses.forEach(course => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td>${course.courseCode}</td>
      <td>${course.courseName}</td>
      <td>${course.duration} Hours</td>
        <td>${course.courseinst}</td>
      <td>
        <button id="edit" onclick="editCourse(${course.courseCode})">Edit</button>
        <button id="delete" onclick="deleteCourse(${course.courseCode})">Delete</button>
      </td>
    `;
    
    coursesTable.appendChild(row);
  });
}

// Handle form submission
courseForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const courseCode = document.getElementById('coursecode').value;
  const courseName = document.getElementById('CourseName').value;
  const duration = document.getElementById('Duration').value;
  const courseinst = document.getElementById('courseinst').value;courseinst

  const newCourse = {
    courseCode: courseCode,
    courseName: courseName,
    duration: duration,
    courseinst: courseinst
  };

  // If we're editing, update the course
  if (editingCourseCode) {
    courses = courses.map(course => course.courseCode === editingCourseCode ? newCourse : course);
    editingCourseCode = null; // Reset editing state
  } else {
    // Add new course to the array if not editing
    addCourse(newCourse);
  }

  // Update table and reset form
  updateTable();
  courseForm.reset();
});

// Edit course and populate form with its data
function editCourse(courseCode) {
  // Find the course to edit
  const courseToEdit = courses.find(course => course.courseCode === courseCode);

  // Populate the form fields with the course data
  document.getElementById('coursecode').value = courseToEdit.courseCode;
  document.getElementById('CourseName').value = courseToEdit.courseName;
  document.getElementById('Duration').value = courseToEdit.duration;
  const courseinst = document.getElementById('courseinst').value;

  // Set editing state
  editingCourseCode = courseCode;
}

// Delete a course by code
function deleteCourse(courseCode) {
  courses = courses.filter(course => course.courseCode !== courseCode);
  updateTable();
}
