import express, { json } from "express";

const app = express()
app.use(json())

app.get("/pets", (req,res) => {
    res.send("All the pets")
})

const PORT = 3030
app.listen(PORT, ()=> {console.log(`http://localhost:${PORT}`)})

export default app;