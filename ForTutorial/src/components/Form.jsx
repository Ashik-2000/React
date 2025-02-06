import React from "react";

export default class Form extends React.Component {
    state = {
        title: "javaScript",
    };
    handleChange = (event) => {
        this.setState({
            title: event.target.value,
        });
    }
    render() {
        const { title } = this.state;
        return (
            <>
                <form>
                    <input
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </form>
            </>
        );
    }
}
