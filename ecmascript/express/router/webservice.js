import { Router } from 'express';
const router = Router();
export default router;

import useless from '#service/useless';
import cache from '#service/cache';

router.get('/useless', async (req, res) => {
    const cachekey = req.originalUrl.slice(1).replace('/', '-');

    if(cache.has(cachekey)) {
        res.send(cache.get(cachekey));
        return;
    }

    let message = await useless();

    const users = [
        { id: 1, firstname: "John", lastname: "Doe", email: "john.doe@gmail.com" },
        { id: 2, firstname: "Jane", lastname: "Doe", email: "jane.doe@gmail.com" },
        { id: 3, firstname: "Eduard", lastname: "Doe", email: "eduard.doe@gmail.com" }
    ];
    
    res.render('webservice/useless', { message, users }, (err, html) => { 
        cache.set(cachekey, html);
        res.send(html);
    });
});