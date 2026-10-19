
const form = document.getElementById("membershipForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    showMemberCard();
});

function showMemberCard() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const membership = document.querySelector(
        'input[name="membership"]:checked'
    ).value;
    const librarySections = [
        "Science",
        "Technology",
        "Literature",
        "History",
        "Computer Science"
    ];
    console.log("Library Sections:");
    console.log(librarySections);

    const card = document.getElementById("memberCard");

    card.replaceChildren();

    const heading = document.createElement("h2");
    heading.textContent = "Library Member Card";

    const details = document.createElement("p");
    details.textContent =
        "Name: " + name +
        "\nAge: " + age +
        "\nEmail: " + email +
        "\nPhone: " + phone +
        "\nMembership: " + membership;

    details.style.whiteSpace = "pre-line";

    card.append(heading, details);

    console.log("Member Card Created Successfully!");
}
