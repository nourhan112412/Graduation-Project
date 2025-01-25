// Get references to the form and table
const roomForm = document.getElementById('RoomForm');
const roomsTable = document.getElementById('roomsTable');
const activationIcon = document.getElementById('activation-icon');

// Array to hold room data
let rooms = [];
let editingRoomID = null; // Variable to track the room being edited

// Toggle the activation icon (active/inactive)
function toggleActivation() {
  if (activationIcon.classList.contains('fa-toggle-on')) {
    activationIcon.classList.remove('fa-toggle-on');
    activationIcon.classList.add('fa-toggle-off');
  } else {
    activationIcon.classList.remove('fa-toggle-off');
    activationIcon.classList.add('fa-toggle-on');
  }
}

// Add room to the rooms array and update the table
function addRoom(room) {
  rooms.push(room);
  updateTable();
}

// Update the rooms table with the current list of rooms
function updateTable() {
  // Clear the current rows
  roomsTable.innerHTML = '';
  
  // Loop through the rooms array and create a new row for each room
  rooms.forEach(room => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td>${room.roomID}</td>
      <td>${room.roomName}</td>
      <td>${room.roomType}</td>
      <td>${room.roomCapa}</td>
      <td>${room.roomBuilding}</td>
      <td>${room.isActive ? 'Active' : 'Inactive'}</td>
      <td>
        <button id="edit" onclick="editRoom(${room.roomID})">Edit</button>
        <button id="delete" onclick="deleteRoom(${room.roomID})">Delete</button>
      </td>
    `;
    
    roomsTable.appendChild(row);
  });
}

// Handle form submission
roomForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const roomID = document.getElementById('roomID').value;
  const roomName = document.getElementById('roomName').value;
  const roomType = document.getElementById('roomType').value;
  const roomCapa = document.getElementById('roomCapa').value;
  const roomBuilding = document.getElementById('roomBuilding').value;

  // Default room status is active when added
  const isActive = activationIcon.classList.contains('fa-toggle-on');

  const newRoom = {
    roomID: roomID,
    roomName: roomName,
    roomType: roomType,
    roomCapa: roomCapa,
    roomBuilding: roomBuilding,
    isActive: isActive
  };

  // If we're editing, update the room
  if (editingRoomID) {
    rooms = rooms.map(room => room.roomID === editingRoomID ? newRoom : room);
    editingRoomID = null; // Reset editing state
  } else {
    // Add new room to the array if not editing
    addRoom(newRoom);
  }

  // Update table and reset form
  updateTable();
  roomForm.reset();
  activationIcon.classList.add('fa-toggle-on');
  activationIcon.classList.remove('fa-toggle-off');
});

// Edit room and populate form with its data
function editRoom(roomID) {
  // Find the room to edit
  const roomToEdit = rooms.find(room => room.roomID === roomID);

  // Populate the form fields with the room data
  document.getElementById('roomID').value = roomToEdit.roomID;
  document.getElementById('roomName').value = roomToEdit.roomName;
  document.getElementById('roomType').value = roomToEdit.roomType;
  document.getElementById('roomCapa').value = roomToEdit.roomCapa;
  document.getElementById('roomBuilding').value = roomToEdit.roomBuilding;

  // Set the activation status
  if (roomToEdit.isActive) {
    activationIcon.classList.add('fa-toggle-on');
    activationIcon.classList.remove('fa-toggle-off');
  } else {
    activationIcon.classList.add('fa-toggle-off');
    activationIcon.classList.remove('fa-toggle-on');
  }

  // Set editing state
  editingRoomID = roomID;
}

// Delete a room by ID
function deleteRoom(roomID) {
  rooms = rooms.filter(room => room.roomID !== roomID);
  updateTable();
}
