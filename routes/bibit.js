import express, {Router} from "express";
const router = express.Router();

const bibit = [
    {
        id: 1,
        nama: "Jambu",
        kategori: "buah-buahan",
        jumlah: 1000,
    },
    {
        id: 2,
        nama: "Mangga",
        kategori: "buah-buahan",
        jumlah: 1500
      },
      {
        id: 3,
        nama: "Jeruk",
        kategori: "buah-buahan",
        jumlah: 1200
      },
      {
        id: 4,
        nama: "Pisang",
        kategori: "buah-buahan",
        jumlah: 800
      },
]