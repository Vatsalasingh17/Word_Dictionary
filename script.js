const inputE1 = document.getElementById("input");
const infoTextE1 = document.getElementById("info-text");
const meaningcontainer = document.getElementById("meaning-container");

const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const syno = document.getElementById("syn");
const ano = document.getElementById("ayn");

const audioEl = document.getElementById("audio");

async function fetchAPI(word) {
    infoTextE1.style.display = "block";
    meaningcontainer.style.display = "none";
    infoTextE1.innerText = `Searching the meaning of the word "${word}"`;

    try {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res) => res.json());
        console.log(result);

        if (result.title) {
            // Word not found case
            infoTextE1.style.display = "none";
            meaningcontainer.style.display = "block";
            titleEl.innerText = word;
            meaningEl.innerText = "Not Available";
            syno.innerText = "Not Available";
            ano.innerText = "Not Available";
            audioEl.style.display = "none";
        } else {
            // Word found case
            infoTextE1.style.display = "none";
            meaningcontainer.style.display = "block";

            titleEl.innerText = result[0].word;
            meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
            syno.innerText = result[0].meanings[0]?.synonyms?.[0] || "Not Available";
            ano.innerText = result[0].meanings[0]?.antonyms?.[0] || "Not Available";

            const audioUrl = result[0].phonetics?.find((phonetic) => phonetic.audio)?.audio;
            if (audioUrl) {
                audioEl.style.display = "inline-flex";
                audioEl.src = audioUrl;
                audioEl.load();
                audioEl.play().catch((error) => {
                    console.log("Audio playback failed:", error);
                });
            } else {
                audioEl.style.display = "inline-flex";
                audioEl.src = "";
                audioEl.innerText = "Audio Not Found";
            }
        }
    } catch (error) {
        console.log(error);
        infoTextE1.innerText = "Error Occurred. Please try again later.";
    }
}

inputE1.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value);
    }
});
