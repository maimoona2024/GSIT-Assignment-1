var current_users = ["kainat", "maha", "laila", "urooj", "umm e ayesha"];
var new_users = ["Noman", "Farhan", "Farah", "imran", "kamal"];
var _loop_1 = function (new_user) {
    var is_existing = current_users.some(function (user) { return user.toLowerCase() === new_user.toLowerCase(); });
    if (is_existing) {
        console.log("Sorry, ".concat(new_user, " is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations, ".concat(new_user, " is available!"));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
