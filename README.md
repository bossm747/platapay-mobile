# pin-verify-mobile-ui

The UI is a mobile phone screen displaying a PIN verification screen.

Status Bar [status bar (54, 45, 80, 955)]: Black or dark gray bar at the top, displaying the time (9:41), a left-pointing back arrow (white), cellular signal strength (full bars, white), and battery life (full, white).
Screen Divider: A thin green line runs below the status bar.
Title [title (14, 380, 53, 575)]: "(MPIN)" centered at the top, in black.
Illustration: A light green stylized phone icon with a white speech bubble containing four gray dots, representing a PIN code. This element has no specific name.
Prompt [prompt (251, 130, 281, 870)]: "Nominate a 4-digit Mobile Personal Identification Number (MPIN)." in black, below the illustration.
Instruction 1 [instruction 1 (325, 335, 345, 665)]: "Enter 4 Digit MPIN code" in light gray, above the first set of entry fields.
Entry Field Set 1: Four empty white squares [entry field (357, 255, 481, 745)] outlined in light green, for entering the 4-digit PIN.
Instruction 2 [instruction 2 (415, 320, 435, 680)]: "Confirm 4 Digit MPIN code" in light gray, above the second set of entry fields.
Entry Field Set 2: Four empty white squares [entry field (357, 255, 481, 745)] outlined in light green, for confirming the 4-digit PIN.
Verify Button [verify button (505, 115, 580, 900)]: An orange button with rounded corners, located beneath the PIN entry fields, with the word "Verify" in white text.
Keypad [keypad (655, 70, 955, 940)]: A numeric keypad with white keys on a white background. Each key features a number (black) and corresponding letters (gray). A plus sign (+), asterisk (*), and hashtag (#) key are present, along with a blank key and a backspace key (right-pointing arrow).

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React with shadcn-ui and Tailwind CSS.

- Vite
- React
- shadcn/ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/pin-verify-mobile-ui.git
cd pin-verify-mobile-ui
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
