// ---------------------------------------------------------
// 1. CONFIGURATION
// ---------------------------------------------------------
const VISUAL_SIZE = 560;
const HIDDEN_SIZE = 560; // 1:1 for accuracy

// --- VISUAL AESTHETICS (MS Paint Style) ---
// Changed from Cyan/Glowing to Black/Sharp for Windows XP feel
const VISUAL_COLOR = '#000000'; 
const VISUAL_GLOW_COLOR = 'rgba(0,0,0,0)'; // No glow
const VISUAL_GLOW_SIZE = 0;
const VISUAL_STROKE_WIDTH = 25; // Slightly thicker for pencil feel

// --- DATA PHYSICS (The Brain) ---
// Thick stroke (45px) is mandatory for the AI to see the digit
// after downscaling to 28x28.
// *IMPORTANT*: The model was trained on White-on-Black (MNIST style).
// We keep the hidden canvas inverted relative to the visual canvas.
const HIDDEN_STROKE_WIDTH = 45;
const BG_COLOR = '#ffffff';     // Visual canvas background (White paper)
const DATA_BG_COLOR = 'black';  // Hidden tensor background (Void)

// ---------------------------------------------------------
// 2. DOM ELEMENTS
// ... (Rest of the file remains exactly the same)
