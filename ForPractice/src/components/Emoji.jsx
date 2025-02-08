import React from "react";

export default class Emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
    render(override) {
        let text = this.addEmoji("I am emoji component.", "😁");
        if (override) text = override;
        return <>{text}</>;
    }
}
