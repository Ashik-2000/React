import React from "react";

export default class Form extends React.Component {
    state = {
        title: "javaScript",
        text: "JavaScript is awesome.",
        library: "react",
        isAwesome: true,
    };
    handleChange = (event) => {
        if (event.target.type === "text") {
            this.setState({
                title: event.target.value,
            });
        } else if (event.target.type === "textarea") {
            this.setState({
                text: event.target.value,
            });
        } else if (event.target.type === "select-one") {
            this.setState({
                library: event.target.value,
            });
        } else if (event.target.type === "checkbox") {
            this.setState({
                isAwesome: event.target.checked,
            });
        }
    };
    submitHandler = (event) => {
        event.preventDefault();
    }
    render() {
        const { title, text, library, isAwesome } = this.state;
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <textarea
                        name="text"
                        value={text}
                        onChange={this.handleChange}
                    ></textarea>
                    <br />
                    <br />
                    <select value={library} onChange={this.handleChange}>
                        <option value="react">react</option>
                        <option value="angular">angular</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" checked={isAwesome} onChange={this.handleChange} />
                    <br /><br />
                    <input type="submit" value="submit" />
                </form>
            </>
        );
    }
}
