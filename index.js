const myEmojis = ["🏁", "🎸", "👨‍💻", "🐶"]
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const emojiInput = document.getElementById("emoji-input")
const emojiContainer = document.getElementById("emoji-container")

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

function modifyEmojis(method) {
    
    if (method === "push" || method === "unshift") {
        if (!emojiInput.value) { return }    
    } 
        
    myEmojis[method](emojiInput.value)
    emojiInput.value = ""
    renderEmojis()
}

pushBtn.addEventListener("click", () => modifyEmojis("push"))

unshiftBtn.addEventListener("click", () => modifyEmojis("unshift"))

popBtn.addEventListener("click", () => modifyEmojis("pop"))

shiftBtn.addEventListener("click", () => modifyEmojis("shift"))


renderEmojis()