module.exports = {
    mode: "jit",
    prefix: "dope-",
    purge: ["./**/*.hbs"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                Gilroy: ["'Gilroy'", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
