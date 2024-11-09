function addNote() {
    const noteInput = document.getElementById("todoInput");
    const noteText = noteInput.value;

    if (document.getElementById("empty")) {
        document.getElementById("empty").remove()
    }

    if (noteText.trim() !== "") {
        const noteDiv = document.createElement("div");
        noteDiv.className = "toDo";

        // Custom HTML structure for each note
        noteDiv.innerHTML = `
                <input type="checkbox" name="option1" value="value1">
                <p>${noteText}</p>
                <div onclick="deleteThis(this)">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM400-280q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280ZM280-720v520-520Z"/></svg>
                </div>
        `;

        // Append the new note to the container
        document.getElementById("notesContainer").appendChild(noteDiv);

        // Clear the input field
        noteInput.value = "";
    }
}

function deleteThis(element) {
    element.parentElement.remove()
}