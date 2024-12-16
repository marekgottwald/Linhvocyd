// Project Name: Linhvocyd
// Author: Marek Gottwald

// Words set 1 - representing Ukrainian words with original spelling (1928 version)
let originalWords = [
  "ориґінал", "делеґат", "колеґа", "леґенда", "булдоґ", "ґолкіпер", "ґалянтерія", "ляґуна", "льозунґ", "металюрґія",
  "альґебра", "ґвельфи", "ґольф", "реґулятор", "аґент", "аґроном", "бравнінґ", "гідальґо", "гуґеноти", "ґарантія",
  "ґвардія", "ґібелін", "ґіляндра", "ґлядіятор", "ґнайс", "ґрандіозний", "дириґент", "елеґантний", "інтеліґент", "лінґвіст",
  "міґрація", "аґітація", "зфалшувати", "зфотографувати", "зформувати", "західній", "східній", "трикутній", "випроваджати",
  "голодівка", "манастир", "мариво", "салітра", "соняшний", "шаравари", "гієроґліф", "гістерія", "гураґан", "амнестія",
  "хемія", "метода", "роля", "спіраля", "евнух", "епархія", "мусулманин", "носталгія", "шелф", "евфорія", "невтральний",
  "невтралітет", "авул", "богдохан", "вермічелі", "маштаб", "моххамеданин", "претенсія", "бурмістер", "маґістер", "міністер",
  "циліндер", "матеріял", "соціялізм", "спеціяльний", "мініятюрний", "паліятив", "амоніяк", "діялект", "тріюмф",
  "тріюмвірат", "радіюс", "консиліюм", "медіюм", "ортографія", "деклямація", "проклямація", "флякон", "флямінґо","аероплян",
  "баляда", "балянс", "лямпа", "доляр", "плян", "діялог", "новеля", "бльокада", "сольо", "фльота", "блюза", "кольорит",
  "пльомба", "льомбард", "лябораторія", "парлямент", "діяспора", "ганчар", "народній", "танґо", "прогноза", "бензина",
  "ґардероба", "заля", "оркестра", "парада", "пляжа", "салата", "варіянт", "ініціятива", "соціяльний", "балькон",
  "льокальний", "мармеляда", "рідній", "кольоквіюм", "целюльоза", "целульоїд", "альфабет", "бухгальтер", "альхемія",
  "п'єдесталь", "алькоголь", "комедіянт", "пляц", "ар'єрґард", "невронаука", "капсуля", "лява", "гіперболя", "клявіш",
  "девіза", "синтакса", "діагноза", "кооператива", "візита", "етикета", "европейський", "атлантійський", "меморіял", "кльовн"
];

// Words set 2 - representing modern standardized Ukrainian words (1933/contemporary version)
let modernWords = [
  "оригінал", "делегат", "колега", "легенда", "бульдог", "голкіпер", "галантерея", "лагуна", "лозунг", "металургія",
  "алгебра", "гвельфи", "гольф", "регулятор", "агент", "агроном", "браунінг", "гідальго", "гугеноти", "гарантія",
  "гвардія", "гібелін", "гіляндра", "гладіатор", "гнайс", "грандіозний", "диригент", "елегантний", "інтелігент", "лінгвіст",
  "міграція", "агітація", "сфальшувати", "сфотографувати", "сформувати", "західний", "східний", "трикутний", "випроводжати",
  "голодовка", "монастир", "марево", "селітра", "сонячний", "шаровари", "ієрогліф", "істерія", "ураган", "амністія",
  "хімія", "метод", "роль", "спіраль", "євнух", "єпархія", "мусульманин", "ностальгія", "шельф", "ейфорія", "нейтральний",
  "нейтралітет", "аул", "богдихан", "вермішель", "масштаб", "магометанин", "претензія", "бурмістр", "магістр", "міністр",
  "циліндр", "матеріал", "соціалізм", "спеціальний", "мініатюрний", "паліатив", "амоніак", "діалект", "тріумф",
  "тріумвірат", "радіус", "консиліум", "медіум", "орфографія", "декламація", "прокламація", "флакон", "фламінго", "аероплан",
  "балада", "баланс", "лампа", "долар", "план", "діалог", "новела", "блокада", "соло", "флот", "блуза", "колорит",
  "пломба", "ломбард", "лабораторія", "парламент", "діаспора", "гончар", "народний", "танго", "прогноз", "бензин",
  "гардероба", "зал", "оркестр", "парад", "пляж", "салат", "варіант", "ініціатива", "соціальний", "балкон",
  "локальний", "мармелад", "рідний", "колоквіум", "целюлоза", "целулоїд", "алфавіт", "бухгалтер", "алхімія",
  "п'єдестал", "алкоголь", "комедіант", "плац", "ар'єргард", "нейронаука", "капсула", "лава", "гіпербола", "клавіш",
  "девіз", "синтаксис", "діагноз", "кооператив", "візит", "етикет", "європейський", "атлантичний", "меморіал", "клоун"
];

// Configuration variables
let typingSpeed = 100; // Typing speed in milliseconds
let deletingSpeed = 75; // Deleting speed in milliseconds
let cursorBlinkRate = 500; // Cursor blink rate in milliseconds
let marginX = 20; // Horizontal margin
let marginY = 20; // Vertical margin
let lineHeight = 24; // Line height for text display

// State variables
let subsetsSet1 = [];
let subsetsSet2 = [];
let currentSubsetIndex = 0;
let currentSet = [];
let currentCharacter = 0;
let currentWordIndex = 0;
let typedText = "";
let isDeleting = false;
let isReplacing = false;
let lastActionTime = 0;
let cursorVisible = true;
let lastCursorBlink = 0;
let redUnderlines = [];
let lastSet2EndIndex = 0;
let pauseBeforeNextOperation = 1000;
let isPaused = false;
let myFont; // Custom font
let lineOffset = 0; // Current scroll offset for lines
let isScrolling = false; 
let needsScrolling = false; 
let scrollTargetOffset = null; // Target offset for scrolling
let keySounds = []; // Array of typing sound effects
let spaceSounds = []; // Array of spacebar sound effects

// Preload function - loads assets before the program starts
function preload() {
  // Load custom font for text rendering
  myFont = loadFont('assets/fonts/RobotoMono-Thin.ttf');

  // Initialize key sounds
  for (let i = 1; i <= 15; i++) {
    keySounds.push(new Howl({
      src: [`assets/sounds/keyboard_tactile_${i}.ogg`],
      volume: 0.8 // Default volume for key sounds
    }));
  }

  // Initialize spacebar sounds
  for (let i = 2; i <= 19; i++) { 
    spaceSounds.push(new Howl({
      src: [`assets/sounds/keyboard_clicky_${i}.ogg`],
      volume: 0.6 // Default volume for spacebar sounds
    }));
  }
}

// Setup function - initializes the canvas and key settings
function setup() {
  // Create a canvas that fits the entire browser window
  createCanvas(windowWidth, windowHeight);

  // Set text size and font for rendering text
  textSize(20);
  textFont(myFont);
  
  // Generate random disjoint subsets from the word sets
  generateSubsets();

  // Set the first subset as the current set to start typing
  currentSet = subsetsSet1[currentSubsetIndex];
}

/**
 * Restarts the program to reset all variables and regenerate subsets.
 */
function restartProgram() {
  currentSubsetIndex = 0;          // Reset the subset index.
  currentWordIndex = 0;            // Reset the word index within the subset.
  currentCharacter = 0;            // Reset the character index within the word.
  redUnderlines = [];              // Clear all red underlines.
  isDeleting = false;              // Reset deleting state.
  isReplacing = false;             // Reset replacing state.
  lastSet2EndIndex = typedText.length; // Save the final index of Set2 words.

  // Regenerate the subsets for the next cycle.
  generateSubsets();

  // Set the current working subset to the first subset of Set1.
  currentSet = subsetsSet1[currentSubsetIndex];
}

/**
 * Generates subsets for both sets of words (Set1 and Set2).
 */
function generateSubsets() {
  // Generate random disjoint subsets from Set1.
  subsetsSet1 = generateDisjointSubsets(originalWords);

  // Generate corresponding subsets for Set2 by mapping words from Set1 to Set2.
  subsetsSet2 = subsetsSet1.map(subset => 
    subset.map(word => modernWords[originalWords.indexOf(word)])
  );
}

/**
 * Generates disjoint subsets from a given set of words.
 * 
 * @param {Array} wordSet - The input array of words to be divided into subsets.
 * @returns {Array} An array of disjoint subsets.
 */
function generateDisjointSubsets(wordSet) {
  // Create a shuffled copy of the input array to randomize order.
  let shuffled = shuffle([...wordSet]);
  let subsets = []; // Array to store the generated subsets.

  // Continue creating subsets until the shuffled array is empty.
  while (shuffled.length > 0) {
    // Determine the maximum possible subset size (at most 5 words).
    let maxSubsetSize = min(5, shuffled.length);

    // Randomly decide the actual subset size between 1 and maxSubsetSize.
    let subsetSize = floor(random(1, maxSubsetSize + 1));

    // Remove the selected number of words from the shuffled array and add to subsets.
    subsets.push(shuffled.splice(0, subsetSize));
  }

  return subsets;
}

// Main draw loop - continuously updates the canvas
function draw() {
  // Clear the canvas with a white background
  background(255);

  // Set text fill color to black
  fill(0);
  textAlign(LEFT, TOP);

  // Convert the typed text into an array of lines based on the maximum width
  let lines = textToLines(typedText, width - 2 * marginX);

  // Calculate the maximum number of lines that can fit in the visible area
  let maxLines = floor((height - 2 * marginY) / lineHeight);

  // Render visible lines of text
  for (let i = lineOffset; i < lines.length && i - lineOffset < maxLines; i++) {
    text(lines[i], marginX, marginY + (i - lineOffset) * lineHeight);
  }

  // Draw red underlines under specific words (error simulation)
  drawRedUnderlines(lines, maxLines);

  // Handle paused state (e.g., during scrolling or timed pauses)
  if (isPaused) {
    if (isScrolling) {
      // Handle scrolling logic
      if (millis() > lastActionTime + pauseBeforeNextOperation) {
        // Increment line offset to simulate scrolling
        lineOffset++;
        lastActionTime = millis();
        pauseBeforeNextOperation = getRandomPause(50, 200);

        // Check if the next group fits after scrolling
        if (doesGroupFit(subsetsSet1[currentSubsetIndex]) && scrollTargetOffset === null && lines.length >= 2) {
          // Set the target line offset to maintain visible context
          scrollTargetOffset = lines.length - 3;
        }

        // Stop scrolling if the target offset is reached
        if (scrollTargetOffset !== null && lineOffset >= scrollTargetOffset) {
          isScrolling = false;
          needsScrolling = false;
          scrollTargetOffset = null;
          pauseBeforeNextOperation = getRandomPause(500, 1500);
          lastActionTime = millis();
        }
      }
    } else {
      // Handle normal pause (not scrolling)
      if (millis() > lastActionTime + pauseBeforeNextOperation) {
        isPaused = false;
        lastActionTime = millis();
      }
    }
  } else {
    // Handle typing or deleting logic
    if (millis() > lastActionTime + (isDeleting ? deletingSpeed : typingSpeed)) {
      // Call function to handle typing, deleting, or replacing
      handleTypingOrDeletingOrReplacing(lines, maxLines);
      lastActionTime = millis();

      // Randomize typing or deleting speed for variability
      if (isDeleting) {
        deletingSpeed = getRandomSpeed(50, 150);
      } else {
        typingSpeed = getRandomSpeed(70, 200);
      }
    }
  }

  // Handle cursor blinking logic
  if (millis() - lastCursorBlink > cursorBlinkRate) {
    cursorVisible = !cursorVisible;
    lastCursorBlink = millis();
  }

  // Draw the cursor at the current position
  drawCursor(lines, maxLines);
}

/**
 * Handles the typing, deleting, and replacing of text.
 * 
 * @param {Array} lines - Current lines of text displayed on the screen.
 * @param {number} maxLines - Maximum number of visible lines.
 */
function handleTypingOrDeletingOrReplacing(lines, maxLines) {
  if (!isDeleting && !isReplacing) {
    // Typing phase: Add characters from the current word in the set.
    if (currentWordIndex < currentSet.length) {
      let word = currentSet[currentWordIndex];
      
      if (currentCharacter < word.length) {
        // Type one character at a time and play a key sound.
        typedText += word[currentCharacter];
        currentCharacter++;
        playKeySound();
      } else {
        // Finish typing the word, add a space, and underline it if from the first set.
        if (!typedText.endsWith(" ")) {
          typedText += " ";
          playKeySound(true); // Play space sound.
        }
        if (currentSet === subsetsSet1[currentSubsetIndex]) {
          // Store the underline metadata for words in the first subset.
          redUnderlines.push({ word: word, startIndex: typedText.length - word.length - 1 });
        } else {
          lastSet2EndIndex = typedText.length; // Mark end of the second subset.
        }
        // Move to the next word.
        currentCharacter = 0;
        currentWordIndex++;
      }
    } else {
      // All words in the subset typed, transition to deleting phase.
      isDeleting = true;
      currentCharacter = typedText.length;
      isPaused = true;
      pauseBeforeNextOperation = getRandomPause(500, 1500);
    }

  } else if (isDeleting) {
    // Deleting phase: Remove characters one by one.
    if (currentCharacter > lastSet2EndIndex) {
      currentCharacter--;
      typedText = typedText.substring(0, currentCharacter); // Remove the last character.
      playKeySound(true); // Play space sound for delete.

      // Update underlines as characters are deleted.
      if (redUnderlines.length > 0) {
        let lastUnderline = redUnderlines[redUnderlines.length - 1];
        if (currentCharacter < lastUnderline.startIndex + lastUnderline.word.length) {
          lastUnderline.word = lastUnderline.word.slice(0, -1); // Shorten underline.
          if (lastUnderline.word.length === 0) {
            redUnderlines.pop(); // Remove the underline if no characters remain.
          }
        }
      }
    } else {
      // Deleting complete, transition to replacing phase.
      isDeleting = false;
      isReplacing = true;
      currentWordIndex = 0;
      currentCharacter = 0;
      isPaused = true;
      pauseBeforeNextOperation = getRandomPause(800, 2000);
    }

  } else if (isReplacing) {
    // Replacing phase: Replace words from set 1 with corresponding words from set 2.
    if (currentWordIndex < subsetsSet1[currentSubsetIndex].length) {
      let wordIndex = originalWords.indexOf(subsetsSet1[currentSubsetIndex][currentWordIndex]);
      let replacementWord = modernWords[wordIndex];
      
      if (currentCharacter < replacementWord.length) {
        // Type replacement characters one by one and play a key sound.
        typedText += replacementWord[currentCharacter];
        currentCharacter++;
        playKeySound();
      } else {
        // Finish typing the replacement word, add a space.
        if (!typedText.endsWith(" ")) {
          typedText += " ";
          playKeySound(true);
        }
        lastSet2EndIndex = typedText.length; // Update end index for replaced text.
        currentCharacter = 0;
        currentWordIndex++;
      }
    } else {
      // All words replaced, move to the next subset or restart.
      isReplacing = false;
      currentSubsetIndex++;
      if (currentSubsetIndex >= subsetsSet1.length) {
        restartProgram(); // Restart when all subsets are processed.
      } else {
        // Set up for the next subset.
        currentSet = subsetsSet1[currentSubsetIndex];
        currentWordIndex = 0;
        currentCharacter = 0;
      }

      isPaused = true;
      pauseBeforeNextOperation = getRandomPause(1000, 3000);

      // If the next group doesn't fit on the screen, mark for scrolling.
      if (!doesGroupFit(subsetsSet1[currentSubsetIndex])) {
        needsScrolling = true;
      }
    }
  }

  // Handle pauses between phases.
  if (!isDeleting && !isReplacing && currentWordIndex >= currentSet.length && !isPaused) {
    isPaused = true;
    pauseBeforeNextOperation = getRandomPause(500, 1500);
  } else if (isDeleting && currentCharacter <= lastSet2EndIndex && !isPaused) {
    isPaused = true;
    pauseBeforeNextOperation = getRandomPause(800, 2000);
  } else if (isReplacing && currentWordIndex >= subsetsSet1[currentSubsetIndex].length && !isPaused) {
    isPaused = true;
    pauseBeforeNextOperation = getRandomPause(1000, 3000);
  }

  // Initiate scrolling if needed.
  if (isPaused && needsScrolling && !isScrolling) {
    isScrolling = true;
    lastActionTime = millis(); 
    pauseBeforeNextOperation = getRandomPause(500, 1500);
  }
}

// Generate a random speed for typing or deleting
function getRandomSpeed(minSpeed, maxSpeed) {
  return random(minSpeed, maxSpeed);
}

// Helper function to generate a random pause duration
function getRandomPause(minPause, maxPause) {
  return random(minPause, maxPause);
}

/**
 * Plays a keyboard sound effect using Howler.js.
 * 
 * @param {boolean} isSpace - Indicates whether the sound is for a spacebar press (default: false).
 */
function playKeySound(isSpace = false) {
  let randomSound;

  if (isSpace) {
    // Select a random sound from the spacebar sound pool
    randomSound = spaceSounds[Math.floor(Math.random() * spaceSounds.length)];
  } else {
    // Select a random sound from the key press sound pool
    randomSound = keySounds[Math.floor(Math.random() * keySounds.length)];
  }

  // Stop the sound if it's already playing (to prevent overlap)
  randomSound.stop();

  // Set the volume and play the sound
  randomSound.volume(isSpace ? 0.6 : 0.8); // Fixed volume for realism
  randomSound.play();
}

/**
 * Draws the cursor at the end of the last visible line of text.
 * 
 * @param {Array} lines - The current lines of text displayed on the screen.
 * @param {number} maxLines - Maximum number of lines visible on the screen.
 */
function drawCursor(lines, maxLines) {
  if (cursorVisible) {
    let cursorX = marginX; // Start x-coordinate of the cursor.
    let cursorY = marginY; // Start y-coordinate of the cursor.

    if (lines.length > 0) {
      // Determine the last visible line's index within the bounds.
      let lastVisibleLineIndex = lines.length - 1;
      if (lastVisibleLineIndex - lineOffset >= maxLines) {
        lastVisibleLineIndex = lineOffset + maxLines - 1;
      }

      // Calculate the cursor's position at the end of the last visible line.
      let lastLine = lines[lastVisibleLineIndex];
      cursorX += textWidth(lastLine); // Offset cursor based on text width of the line.
      cursorY += (lastVisibleLineIndex - lineOffset) * lineHeight; // Adjust y-coordinate for the line's position.
    }

    cursorY += 6; // Fine-tune cursor position slightly below the text.

    // Draw the cursor as a vertical line.
    stroke(0); // Black color for the cursor.
    strokeWeight(1); // Thin line weight.
    line(cursorX, cursorY, cursorX, cursorY + 16); // Draw vertical cursor line.
  }
}

/**
 * Draws red wavy underlines beneath specified words in the text.
 * 
 * @param {Array} lines - The current lines of text displayed on the screen.
 * @param {number} maxLines - Maximum number of lines visible on the screen.
 */
function drawRedUnderlines(lines, maxLines) {
  push(); // Save the current drawing style and transformation state.
  stroke(255, 0, 0); // Set stroke color to red.
  strokeWeight(1); // Thin line weight for the underline.
  noFill(); // Ensure no fill is applied.

  // Iterate through each red underline entry.
  redUnderlines.forEach(entry => {
    let charCount = 0; // Tracks the cumulative character count across lines.

    // Iterate through visible lines.
    for (let i = 0; i < lines.length && i < (lineOffset + maxLines); i++) {
      let line = lines[i];
      
      // Check if the underline starts within the current line.
      if (entry.startIndex >= charCount && entry.startIndex < charCount + line.length) {
        let visibleIndex = i - lineOffset;

        // Skip lines outside the visible range.
        if (visibleIndex < 0 || visibleIndex >= maxLines) break;

        // Calculate the x and y positions of the underline.
        let x = marginX + textWidth(line.substring(0, entry.startIndex - charCount));
        let y = marginY + visibleIndex * lineHeight + 20;

        // Calculate the width of the word to underline.
        let wordWidth = textWidth(entry.word);

        // Draw a wavy underline using a sine wave.
        beginShape();
        for (let j = 0; j < wordWidth; j++) {
          let underlineY = y + 4 + sin(j - PI / 2) * 2; // Adjust wave amplitude and phase.
          vertex(x + j, underlineY);
        }
        endShape();

        break; // Stop once the underline for the word is drawn.
      }
      
      charCount += line.length + 1; // Update character count to include the current line.
    }
  });

  pop(); // Restore the previous drawing style and transformation state.
}

/**
 * Splits a given text into lines that fit within the specified maximum width.
 * 
 * @param {string} txt - The text to split into lines.
 * @param {number} maxWidth - The maximum width allowed for a single line.
 * @returns {Array} An array of strings, each representing a line of text.
 */
function textToLines(txt, maxWidth) {
  let words = txt.split(" "); // Split the text into words by spaces.
  let lines = [];            // Array to store the resulting lines.
  let currentLine = "";       // The line currently being constructed.

  // Iterate through each word in the text.
  for (let word of words) {
    // Attempt to add the current word to the existing line.
    let testLine = (currentLine ? currentLine + " " : "") + word;

    // Check if the test line fits within the maximum width.
    if (textWidth(testLine) <= maxWidth) {
      currentLine = testLine; // Update the current line if it fits.
    } else {
      // If the line exceeds the width, save the current line and start a new one.
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }

  // Add any remaining text in the current line to the lines array.
  if (currentLine) lines.push(currentLine);

  return lines;
}

/**
 * Determines whether the last line of text is visible within the maximum number of lines allowed on the screen.
 * 
 * @param {Array} lines - The array of lines of text.
 * @param {number} maxLines - The maximum number of lines visible on the screen.
 * @returns {boolean} True if the last line is visible, false otherwise.
 */
function isLastLine(lines, maxLines) {
  return (lines.length - lineOffset) >= maxLines;
}

/**
 * Checks if a group of words can fit within the remaining screen space without requiring scrolling.
 * 
 * @param {Array} words - The array of words to test for fit.
 * @returns {boolean} True if the group of words fits within the remaining screen space, false otherwise.
 */
function doesGroupFit(words) {
  // Combine the current typed text with the new group of words.
  let testText = typedText + words.join(" ") + " ";

  // Split the combined text into lines based on the screen width.
  let lines = textToLines(testText, width - 2 * marginX);

  // Calculate the maximum number of lines that can fit on the screen.
  let maxLines = floor((height - 2 * marginY) / lineHeight);

  // Check if the total lines after adding the group fit within the screen space.
  return (lines.length - lineOffset) <= maxLines;
}
