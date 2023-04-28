const ghpages = require("gh-pages");

console.log("Pushing....");
ghpages.publish(
    "public",
    {
        branch: "main",
        repo: "https://github.com/thai-phan/thai-phan.github.io.git",
        add: true,
    },
    (error) => {
        if (error) {
            console.log("Error: " + error);
        }
        console.log("Deploy completed to GIT.");
    }
);