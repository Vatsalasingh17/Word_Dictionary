**Word_Dictionary**

A sleek and user-friendly English dictionary web tool that fetches definitions, synonyms, and antonyms using an API.

**🚀 Demo**

Enter any English word and get:

The definition of the word.

A list of synonyms (words with similar meaning).

A list of antonyms (words with opposite meaning).

**🧰 Features**

Simple HTML/CSS/JavaScript front-end.

Fetches data from an external dictionary API (you’ll need to insert your API key or endpoint).

Responsive UI for quick lookup.

Clean design aimed at ease of use.

UI
<img width="1030" height="784" alt="image" src="https://github.com/user-attachments/assets/89a2a7bd-0403-4c72-a891-d72dda699598" />


📂 Project Structure
/Word_Dictionary
|– index.html        ← main page  
|– styles.css        ← custom styles  
|– script.js         ← logic for fetching & displaying word data  

🔧 Installation & Usage

**Clone the repository:**

git clone https://github.com/Vatsalasingh17/Word_Dictionary.git
cd Word_Dictionary


(Optional) If your API requires a key, create a file (e.g., config.js) or set environment variables to store your API credentials.

Open index.html in your browser (double-click or serve via local server).

Type a word into the input field and press “Enter” or click “Search”.

View the definition, synonyms and antonyms displayed.

✅ Technologies Used

HTML5

CSS3

JavaScript (ES6+)

Fetch API or other HTTP library

External Dictionary API (please insert/mention in your own README the specific service you used)

**📋 API Information**

API endpoint: (insert the dictionary API’s base URL)

Example request: GET https://api.example.com/word/{word}

Example response fields: definition, synonyms, antonyms

Important: Check the API’s terms of service, rate limits and whether an API key is required.

**🛠️ Future Enhancements**

Add support for multiple languages (e.g., Hindi, Spanish).

Cache results to improve performance & reduce API calls.

Add a history or recently searched words section.

Improve UI/UX (animations, dark mode, mobile improvements).

Add voice input or pronunciation audio.

