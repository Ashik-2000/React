class Context {
    constructor(value) {
        this.value = value;
    }
    // Provider Method
    Provider = ({ children, value }) => {
        this.value = value;
        return children;
    };
    // Consumer Method
    Consumer = ({ children }) => {
        return children(this.value);
    };
}

function createContext(value = null) {
    const context = new Context(value);
    return {
        Provider: context.Provider,
        Consumer: context.Consumer,
    };
}

export default createContext;
