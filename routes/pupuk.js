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