var images = [
    'family2.jpg',
    'grandfather.png',
    'father.jpg',
    'sister.png',
    'mother.jpg',
    'grandmother.jpg',
    'son.jpg',
    'buddy.jpg',
    'cat.jpg',
]

var names = [
    'Family Book',
    'Subramanyam Joshi',
    'Adithya Joshi',
    'Gayathri Joshi',
    'Soumya Joshi',
    'Bhoomika Joshi',
    'Vinayak Joshi',
    'Buddy',
    'Mintu'
]

var role = [
    'Family',
    'Grandfather',
    'Father',
    'Sister',
    'Mother',
    'Grandmother',
    'Son',
    'Dog',
    'Cat',
]

var i = 0;

function update() {
    i++;
    var numbers_of_family_in_array = 8;
    if(i > numbers_of_family_in_array) {
        i = 0;
    }

    var update_image = images[i];
    var update_name = names[i];
    var update_role = role[i];

    document.getElementById('family_image_name').src = update_image;
    document.getElementById('family_member_name').innerHTML = update_name;
    document.getElementById('family_member_role').innerHTML = update_role;
}