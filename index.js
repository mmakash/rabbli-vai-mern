const app = require("./app");
const port = 5000;
console.log("Hello from ram")
app.listen(port, () => console.log(`Server running on port ${port}`))