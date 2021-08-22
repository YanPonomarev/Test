const Handlebars = require("handlebars");

const source = document.querySelector("#introduction-template").innerHTML;

const template = Handlebars.compile(source);

const context = {
    marker: false,
    variants: {
        variant_1: "variant 1",
        variant_2: "variant 2"
    },
    people: [
        'Vlada',
        'Yan',
        'sobachka',
        'koshka'
    ]
};

const html = template(context);

const destination = document.querySelector("#introduction");

destination.innerHTML = html;


// Handlebars.registerHelper('isdefined', function (value) {
//   return value !== false;
// });
