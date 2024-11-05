<section>
    <h2>Contact Information</h2>
    <button id="toggleContact">Toggle Contact Info</button>
    <div id="contactInfo" style="display: none;">
        <p><strong>Email:</strong> uthappadevaiah16@gmail.com</p>
        <p><strong>Phone:</strong>7349062660</p>
    </div>
    <script>
        document.getElementById("toggleContact").onclick = function() {
            const contact = document.getElementById("contactInfo");
            contact.style.display = contact.style.display === "none" ? "block" : "none";
        };
    </script>
</section>
