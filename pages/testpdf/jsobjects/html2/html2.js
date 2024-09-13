export default {
generateHTML(data) {
let html = Name Age ;
data.forEach(row => {
html += ${row.name} ${row.age} 
;
});
html += 
;
return html;
}
};

