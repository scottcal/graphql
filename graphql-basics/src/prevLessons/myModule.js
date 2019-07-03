//Named Export - Has a name. Have as many as needed.
//Default Export - Has no name. You can only have one.
const message = 'Some message from my Module.js';

const name = 'Andrew';

const location = 'Philadeplphia';

const getGreeting = (name) => {
    return `Weclome to the course ${name}`
};

export { message, name, getGreeting, location as default };