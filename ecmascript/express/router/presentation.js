import { Router } from 'express';
const router = Router();
export default router;

import useless from '#service/useless';

// paramètre de requête (?page=1)
router.get('/queryparams', (req, res) => {
    const name = req.query.name || "John";

    res.send(`<h1>Query Params</h1><p>Bonjour ${name}</p>`);
});

// exemple asynchrone
router.get('/async', async (req, res) => {
    const result = await useless();

    res.send(`<h1>Exemple Asynchrone</h1><p>${result}</p>`);
});

router.get('/fetch', (req, res) => {
    const name = "Awa";
    const trainer = "Stéphane";

    res.render('presentation/fetch', { 
        name, 
        trainer, 
        anonymous: "John Doe"
    }); // { name: name } => { name }
});

router.get('/webservice', (req, res) => {

    res.render('presentation/webservice');
});

// paramètre d'url
router.get('/:name', (req, res) => {
    const name = req.params.name;

    res.send(`<h1>Url Params</h1><p>Bonjour ${name}</p>`);
});