import express, { Router } from "express";
const router = express.Router();

const pupuk = [
    {
      id: 1,
      nama: "kotoran hewan",
      jenis: "organik",
      stock: 2000,
    },
    {
      id: 2,
      nama: "pupuk kompos",
      jenis: "organik",
      stock: 1500
    },
    {
      id: 3,
      nama: "pupuk NPK",
      jenis: "anorganik",
      stock: 3000
    },
    {
      id: 4,
      nama: "pupuk urea",
      jenis: "anorganik",
      stock: 5000
    },
];

router.get("/", (req, res) => {
    res.send(pupuk);
});

router.post('/', (req, res) => { 
    const pupukBaru = { 
        id: pupuk.length + 1, 
        nama: req.body.nama, 
        jenis: req.body.jenis,
        stock: req.body.stock
    }; 
    pupuk.push(pupukBaru); 
    res.status(201).json(pupukBaru); 
});
