### For Resnpose Message

| intent | answer code |
| --- | --- |
| agen.search-produk-hukum | {{searching}} |
| agen.search-produk-hukum-terbaru | {{searching_produkHukumTerbaru}} |
| agen.pengalihan-message-tanya | {{admin}} |
| agen.pengalihan-message-meminta | {{admin}} |
| agen.pengalihan-message-tidak-bisa | {{admin}} |

agen message tanya, meminta, tidak bisa adalah pengalihan admin dibuat tabel hanya supaya tahu agen mana saja yang memiliki pengaligan kepada admin, berikut messagenya:

agen tanya untuk memproses pertanyaan yang mengandung kata 'tanya'
```
"answers": [
              "Mohon maaf format yang anda masukan terlalu rumit, Mohon untuk mempersingkat request ketik /format untuk mengetahui format penulisan atau kontak admin{{admin}}"
            ]
```

agen meminta untuk memproses pertanyaan yang mengandung kata 'meminta'
```
"answers": [
            "Mohon maaf format yang anda masukan terlalu rumit, Untuk format penulisan Anda dapat mengetik /format, Apabila request tidak berkaitan dengan produk hukum anda dapat menghubungi admin{{admin}}"
          ]
```

agen tidak bisa untuk memproses pertanyaan apabila user menemukan problem/masalah
```
"answers": [
          "Mohon maaf atas kendalanya, Sistem masih dalam tahap pengembangan, Apabila kendala masih berlanjut anda dapat menghubungi admin{{admin}}"
        ]
```
