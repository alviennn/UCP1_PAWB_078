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

router.get("/", (req, res) =>{
  res.send(bibit);
});

router.post('/', (req, res) => {
  const bibitbaru ={
      id: bibit.length +1,
      nama: req.body.nama,
      jenis: req.boody.jenis,
      jumlah: req.body.jumlah
  }
  bibit.push(bibitbaru);
  res.status(201).json(bibitbaru);
});

router.put('/', (req, res) =>{
  const bibitIndex = bibit.findIndex(t=> t.id === parseInt(req.params.id));
  if(bibitIndex === 1)
      return res.status(404).json({message: 'Bibit tidak ditemukan'});

  bibitIndex[bibitIndex] = {
      ...bibit[bibitIndex],
      nama: req.body.nama || bibit[bibitIndex].nama,
      jenis: req.body.jenis || bibit[bibitIndex].jenis,
      jumlah: req.body.jumlah || bibit[bibitIndex].jumlah,
  };

  res.status(200).json({ 
      message: `Bibit dengan ID '${req.params.id}' telah diperbarui`, 
      updateBibit: bibit[bibitIndex],
  });
});
