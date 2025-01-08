document.addEventListener("DOMContentLoaded", function () {
    const base_chords = ["Cb", "C", "C#", "Db", "D", "D#", "Eb", "E", "Fb", "E#", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B", "B#"];
    const chord_types = {
        "": ["1", "3", "5"],
        "m": ["1", "b3", "5"],
        "dim": ["1", "b3", "b5"],
        "aug":  ["1", "3", "#5"],
        "dim7": ["1", "b3", "b5", "bb7"],
        "maj7": ["1", "3", "5", "7"],
        "7": ["1", "3", "5", "b7"],
        "m7": ["1", "b3", "5", "b7"],
        "mMaj7": ["1", "b3", "5", "7"],
        "6": ["1", "3", "5", "6"],
        "m6": ["1", "b3", "5", "6"]
    }
    const major_scales = {
        "Cb": ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"],
        "C": ["C", "D", "E", "F", "G", "A", "B"],
        "C#": ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
        "Db": ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
        "D": ["D", "E", "F#", "G", "A", "B", "C#"],
        "D#": ["D#", "E#", "Fx", "G#", "A#", "B#", "Cx"],
        "Eb": ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
        "E": ["E", "F#", "G#", "A", "B", "C#", "D#"],
        "E#": ["E#", "Fx", "Gx", "A#", "B#", "Cx", "Dx"],
        "Fb": ["Fb", "Gb", "Ab", "Bbb", "Cb", "Db", "Eb"],
        "F": ["F", "G", "A", "Bb", "C", "D", "E"],
        "F#": ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
        "Gb": ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
        "G": ["G", "A", "B", "C", "D", "E", "F#"],
        "G#": ["G#", "A#", "B#", "C#", "D#", "E#", "Fx"],
        "Ab": ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
        "A": ["A", "B", "C#", "D", "E", "F#", "G#"],
        "A#": ["A#", "B#", "Cx", "D#", "E#", "Fx", "Gx"],
        "Bb": ["Bb", "C", "D", "Eb", "F", "G", "A"],
        "B": ["B", "C#", "D#", "E", "F#", "G#", "A#"],
        "B#": ["B#", "Cx", "Dx", "E#", "Fx", "Gx", "Ax"],
    };

    let currentChord = "";
    let score = 0;

    // Function to generate input boxes dynamically
    function createInputBoxes(num) {
        const noteInputsDiv = document.getElementById("noteInputs");
        noteInputsDiv.innerHTML = ""; // Clear existing inputs

        for (let i = 0; i < num; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.id = `note${i + 1}`;
            input.placeholder = `Note ${i + 1}`;
            input.maxLength = 3; // Accommodate longer names (e.g., "C#")
            noteInputsDiv.appendChild(input);
        }
    }

    function applyAccidental(note, accidental) {
        

        let letter = note.charAt(0);
        
        

    }


    // Generate a random chord
    document.getElementById("startButton").addEventListener("click", function () {
        const random_base = base_chords[Math.floor(Math.random() * base_chords.length)];
        const random_type = Object.keys(chord_types)[Math.floor(Math.random() * Object.keys(chord_types).length)];
        currentChord = random_base + random_type;

        

        document.getElementById("dynamicText").textContent = `Chord: ${currentChord}`;
        // Use only the base tones to dynamically create input fields
        createInputBoxes(chord_types[random_type].length);
    });

    // Validate user input
    document.getElementById("submitButton").addEventListener("click", function () {
        const random_base = currentChord.replace(/[^A-G#b]/g, ""); // Extract base chord
        const baseTones = chordTones[random_base] || [];
        const userInputs = [];

        // Collect user inputs
        for (let i = 0; i < baseTones.length; i++) {
            const userInput = document.getElementById(`note${i + 1}`).value.trim();
            userInputs.push(userInput);
        }

        // Compare user inputs with correct tones
        if (JSON.stringify(userInputs.sort()) === JSON.stringify(baseTones.sort())) {
            alert("Correct!");
            score++;
        } else {
            alert(`Incorrect! The correct tones are: ${baseTones.join(", ")}`);
        }

        // Update score and reset inputs
        document.getElementById("score").textContent = score;
    });
});
