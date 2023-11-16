import { Router } from 'express';
const router = Router();
export default router;

import cache from '#service/cache';

router.get('/stats', (req, res) => {
    const stats = cache.getStats();
    const keys = cache.keys();

    res.render('cache/stats', { stats, keys });
});

router.get('/remove/:key', (req, res) => {
    const key = req.params.key || null;

    if(key != null) {
        cache.del(key);
    }

    res.redirect('/cache/stats');
});