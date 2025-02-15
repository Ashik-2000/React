class Context {
    constructor(value) {
        this.value = value;
    }
    provider = ({ children, value }) => {
        this.value = value;
        return children;
    };
    consumer = ({ children }) => {
        return children(this.value);
    };
}

function createContext(value = null) {
    const context = new Context(value);
    return {
        Provider: context.provider,
        Consumer: context.consumer
    }
}

export default createContext;

