document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.post').forEach(function(post) {
        post.addEventListener('click', function() {
            var title = this.getAttribute('data-title');
            var content = this.getAttribute('data-content');

            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-body').innerText = content;

            modal.style.display = "block";
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

// Search functionality
function search
