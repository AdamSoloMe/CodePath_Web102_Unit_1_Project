# Web Development Project 1 - *Berserk Character Compendium*

Submitted by: **Adam Solomon**

This web app: **A character compendium for the manga/anime series Berserk. It displays 12 characters from the series, each with their own themed card showing their portrait, faction, archetype, status, abilities, and a brief description. Cards are color-themed per character and can be selected to highlight them. Each card links to the character's Berserk Wiki page.**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app has a cohesive, unique theme for events or resources relevant to a specific community**
  - [x] Header/title describing the theme is displayed
- [x] **At least 10 unique events or resources are displayed in a responsive card format**
  - [x] There are at least 10 cards displayed for 10 different characters
  - [x] The cards are displayed in an organized grid format
  - [x] Each card includes the character's name, faction, archetype, status, abilities, and description

The following **optional** features are implemented:

- [x] Buttons or links to a related resources are on each card component
  - [x] All cards have a "View Profile" link that opens the character's Berserk Wiki page in a new tab
- [x] The site is responsive for both desktop and mobile formats
  - [x] Web app is shown in a Desktop format (but I also tested mobile responsiveness)
  - [x] Video Walkthrough
  
The following **additional** features are implemented:

* [x] Each character card is individually color-themed to match the character's identity (e.g. Guts = black/red, Griffith = white/blue, Puck = green)
* [x] Cards are clickable — selecting a card highlights it with a glowing border and changes the character name to their theme color
* [x] Character portrait images sourced from the Berserk Wiki are displayed in each card's banner
* [x] Archetype and status badges are displayed over each character portrait with clear contrast
* [x] A cinematic header image with a fade-to-white transition sits beneath the title
* [x] The Brand of Sacrifice wiki icon is used as a decorative divider element
* [x] Overall white and blue color scheme (as opposed to Black and Red which series is known for UI/UX Improvements)

## Video Walkthrough

Here's a walkthrough of implemented required features:



https://github.com/user-attachments/assets/8d99af81-db04-4018-92da-9de3186769bd





## Notes

Challenges encountered while building the app:

- The Berserk Wiki CDN blocks hotlinking, so all character images had to be downloaded locally and served from the project's `public/characters/` directory
- Per-character color theming was achieved using CSS custom properties (`--sym-color`, `--faction-color`, etc.) injected via React inline styles, driving all card colors from the data file without duplicating CSS
- `transition: all` caused hover animations to break on elements using `color-mix()` background values — switching to explicit property transitions (`transform`, `border-color`, `box-shadow`) fixed it

## Disclaimer 
All Images were taken from the offical berserk wiki I do not own any of them 
https://berserk.fandom.com/wiki/Berserk_Wiki

## License

    Copyright 2026 Adam Solomon

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0


    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
