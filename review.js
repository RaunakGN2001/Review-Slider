const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam distinctio, obcaecati dolore quis quibusdam veritatis aliquid assumenda tenetur exercitationem ad.",
    },

    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus at quasi illum fugit eum atque eveniet hic excepturi rerum adipisci.",
    },

    {
        id: 3,
        name: "Bill Anderson",
        job: "Boss",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore aperiam incidunt fugiat deleniti dicta ex, delectus mollitia eum autem? Maxime.",
    },

    {
        id: 4,
        name: "Peter Jones",
        job: "Intern",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis culpa iste quidem consectetur et aperiam animi ratione! Quo, sunt.",
    }

];

const author = document.getElementById("review_section_name");
const job = document.getElementById("review_section_occp");
const text = document.getElementById("review_section_info");

const prevBtn = document.querySelector(".prev_button");
const nextBtn = document.querySelector(".next_button");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
});

function showPerson(currentItem) {
    const item = reviews[currentItem];
    author.innerHTML = item["name"];
    job.innerHTML = item["job"];
    text.innerHTML = item["text"];
}

nextBtn.addEventListener("click",function () {
    if(currentItem == reviews.length - 1)
        currentItem = 0;
    else
        currentItem++;
    showPerson(currentItem);
})
prevBtn.addEventListener("click",function () {
    if(currentItem == 0)
        currentItem = reviews.length - 1;
    else
        currentItem--;
    showPerson(currentItem);
})