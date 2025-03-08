
    document.addEventListener("DOMContentLoaded", function () {
        const badges = document.querySelectorAll(".badge");
        const colors = [
            "#f44336", "#e91e63", "#9c27b0", "#673ab7", 
            "#3E3A31", "#2B2A26", "#151515", "#5F5D3C",
            "#E1B382", "#C99E60", "#A67B5B", "#FFD792"
        ];

        badges.forEach((badge, index) => {
            badge.style.backgroundColor = colors[index % colors.length]; 
        });
    });
