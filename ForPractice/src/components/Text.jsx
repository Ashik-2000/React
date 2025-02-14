// import Emoji from "./Emoji";

function Text({ addEmoji, addBracket }) {
    let text = "I am Text component";
    if (addEmoji) {
        text = addEmoji(text, "😎");
    }
    if (addBracket) {
        text = addBracket(text);
    }
    return <>{text}</>;
}

export default Text;
