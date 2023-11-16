import { Router } from 'express';
const router = Router();

export default router
.get('/', function (req, res) {       
    res.status(200).send("<h1>Bienvenue sur notre app express</h1>");
})
.get('/about', (req, res) => {
    res.status(200).send("<h1>A propos de Dawan Foundation</h1>");
})
.post('/about', (req, res) => {
    const data = req.body;
    // manipule data
    // utilise les messages flash

    res.redirect('/about');
});