module.exports = [
  {
    input: "saya ingin mencari peraturan daerah tentang pajak",
    expected: "agen.search-produk-hukum",
    expectedValue: {
      perihal: "pajak",
      nomor: "",
      tahun: "",
      tipe: "",
      bentuk: "peraturan daerah",
      terbaru: false,
      kategori: "TP",
    },
  },
  {
    input: "tolong tampilkan peraturan daerah mengenai perdagangan",
    expected: "agen.search-produk-hukum",
    expectedValue: {
      perihal: "perdagangan",
      nomor: "",
      tahun: "",
      tipe: "",
      bentuk: "peraturan daerah",
      terbaru: false,
      kategori: "FP",
    },
  },
  {
    input: "apakah ada peraturan tentang visa?",
    expected: "agen.search-produk-hukum",
    expectedValue: {
      perihal: "visa",
      nomor: "",
      tahun: "",
      tipe: "",
      bentuk: "",
      terbaru: false,
      kategori: "TP",
    },
  },
  {
    input: "saya mau bertanya mengenai peraturan tentang tanah apakah ada?",
    expected: "agen.search-produk-hukum",
    expectedValue: {
      perihal: "tanah",
      nomor: "",
      tahun: "",
      tipe: "",
      bentuk: "",
      terbaru: false,
      kategori: "FN",
    },
  },
  {
    input: "Tampilkan peraturan nomor 60 tahun 2022",
    expected: "agen.search-produk-hukum",
    expectedValue: {
      perihal: "perdagangan",
      nomor: "",
      tahun: "",
      tipe: "",
      bentuk: "",
      terbaru: false,
      kategori: "TP",
    },
  },
  {
    input: "peraturan wali kota tentang pembangunan jalan",
    expected: "agen.search-produk-hukum",
    expectedValue: {
      perihal: "jalan",
      nomor: "",
      tahun: "",
      tipe: "",
      bentuk: "peraturan wali kota",
      terbaru: false,
      kategori: "TP",
    },
  },
  {
    input: "tampilkan peraturan daerah terbaru",
    expected: "agen.search-produk-hukum",
    expectedValue: {
      perihal: "",
      nomor: "",
      tahun: "",
      tipe: "",
      bentuk: "peraturan daerah",
      terbaru: true,
      kategori: "TP",
    },
  },
  {
    input: "Ingin mencari terkait peraturan pusat",
    expected: "agen.search-produk-hukum",
    expectedValue: {
      perihal: "",
      nomor: "",
      tahun: "",
      tipe: "",
      bentuk: "peraturan pusat",
      terbaru: false,
      kategori: "TP",
    },
  },
  {
    input: "carikan peraturan menteri mengenai kehutanan",
    expected: "agen.search-produk-hukum",
    expectedValue: {
      perihal: "kehutanan",
      nomor: "",
      tahun: "",
      tipe: "",
      bentuk: "peraturan menteri",
      terbaru: false,
      kategori: "TP",
    },
  },
  {
    input: "peraturan tentang tunjangan kinerja pegawai",
    expected: "agen.search-produk-hukum",
    expectedValue: {
      perihal: "tunjangan kinerja pegawai",
      nomor: "",
      tahun: "",
      tipe: "",
      bentuk: "",
      terbaru: false,
      kategori: "TP",
    },
  },
];
