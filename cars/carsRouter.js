const express = require('express');
const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(car => {
            res.status(200).json(car);
            console.log('request GET ALL');
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to get cars'
            });
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db('cars').where({ id }).first()
        .then(car => {
            if (car) {
                res.status(200).json(car);
            } else {
                res.status(404).json({
                    message: 'invalid car id'
                });
            }
        });
});

router.post('/', (req, res) => {
    const carData = req.body;
    db('cars').insert(carData)
        .then(car => {
            db('cars').where({ id: car[0] })
                .then(newCar => {
                    res.status(201).json(newCar);
                })
                .catch(err => {
                    res.status(500).json({ message: 'Failed to add new car'})
                });
        });
});

module.exports = router;