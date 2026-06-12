let menuOpen = false;

function toggleMenu() {

    const sidebar = document.getElementById("sidebar");

    if (menuOpen) {
        sidebar.style.left = "-220px";
    } else {
        sidebar.style.left = "0";
    }

    menuOpen = !menuOpen;
}

// Close menu on outside click
document.addEventListener("click", function(event) {

    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.querySelector(".menu-btn");

    if (
        menuOpen &&
        !sidebar.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {
        sidebar.style.left = "-220px";
        menuOpen = false;
    }
});

function addItem() {

    let item = document.getElementById("item").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;

    if(item === "" || quantity === "" || price === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("groceryTable");

    let row = `
    <tr>

        <td style="text-align:center;">
            ${item}
        </td>

        <td style="text-align:center;">
            ${quantity}
        </td>

        <td style="text-align:center;">
            ₹${price}
        </td>

    </tr>
    `;

    table.innerHTML += row;

    document.getElementById("item").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
}

/* LANGUAGE CHANGE */

window.onload = function() {

    let language = localStorage.getItem("language");

    if(language === "hi"){

        document.getElementById("menuTitle").innerText = "मेन्यू";
        document.getElementById("dashboardText").innerText = "डैशबोर्ड";
        document.getElementById("addGroceryText").innerText = "किराना जोड़ें";
        document.getElementById("budgetText").innerText = "बजट";
        document.getElementById("settingsText").innerText = "सेटिंग्स";

        document.getElementById("titleText").innerText =
        "स्मार्ट ग्रोसरी बजट प्लानर";

        document.getElementById("listHead").innerText = "सूची";
        document.getElementById("quantityHead").innerText = "मात्रा";
        document.getElementById("priceHead").innerText = "कीमत";

        document.getElementById("addButton").innerText = "आइटम जोड़ें";

    }

    else if(language === "mr"){

        document.getElementById("menuTitle").innerText = "मेनू";
        document.getElementById("dashboardText").innerText = "डॅशबोर्ड";
        document.getElementById("addGroceryText").innerText = "किराणा जोडा";
        document.getElementById("budgetText").innerText = "बजेट";
        document.getElementById("settingsText").innerText = "सेटिंग्ज";

        document.getElementById("titleText").innerText =
        "स्मार्ट किराणा बजेट प्लॅनर";

        document.getElementById("listHead").innerText = "यादी";
        document.getElementById("quantityHead").innerText = "प्रमाण";
        document.getElementById("priceHead").innerText = "किंमत";

        document.getElementById("addButton").innerText = "आयटम जोडा";
    }
}