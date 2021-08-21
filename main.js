const Handlebars = require("handlebars");

const source = document.querySelector("#introduction-template").innerHTML;

const template = Handlebars.compile(source);

const context = {
    name: "Vlada"
};

const html = template(context);

const destination = document.querySelector("#introduction");

destination.innerHTML = html;
