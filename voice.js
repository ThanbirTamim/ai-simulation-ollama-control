const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.lang = "en-US";

recognition.start();

recognition.onresult = async (event) => {
    const text =
        event.results[event.results.length - 1][0].transcript.toLowerCase();

    document.getElementById("status").innerText = "Heard: " + text;

    const raw = await askAI(text);
    const plan = parsePlan(raw);

    actionQueue.push(...plan); // 🔥 add to queue
};

recognition.onend = () => recognition.start();