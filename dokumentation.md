### Berikut merupakan code yang di *check*
Pertama pada:
```
"intent": "agen.perkenalan",
"utterances": ["{{check:FIRST_TIME}}"],
```
pada intent agen.perkenalan terdapat utterances untuk menampilkan answer pertama kali user membuka *chatbot*

Kedua pada:
```
"intent": "agen.produk-hukum-daerah"
"answer": "{{check:QUERY_PERDA}}"
```
pada intent agen.produk-hukum-daerah terdapat code untuk menampilkan dokumen **Peraturan Daerah** pada *chatbot*

Ketiga pada:
```
"intent": "agen.produk-hukum-perwal"
"answer": "{{check:QUERY_PERWAL}}"
```
pada intent agen.produk-hukum-perwal terdapat code untuk menampilkan dokumen **Peraturan Wali Kota** pada *chatbot*

dan seterusnya yaitu:
```
"intent": "agen.produk-hukum-kepwal"
"answer": "{{check:QUERY_KEPWAL}}"
```
Untuk **Keputusan Wali Kota**
```
"intent": "agen.produk-hukum-inwal"
"answer": "{{check:QUERY_INWAL}}"
```
Untuk **Intruksi Wali Kota** setelah di cek dari web official jdih bdg, fitur memang sudah ada tapi datanya belum ada masih 0
```
"intent": "agen.produk-hukum-sewal"
"answer": "{{check:QUERY_SEWAL}}"
```
Untuk **Surat Edaran Wali Kota**
```
"intent": "agen.produk-hukum-perpu"
"answer": "{{check:QUERY_PERPU}}"
```
Untuk **Peraturan Pemerintah Pengganti Undang Undang**
```
"intent": "agen.produk-hukum-uu"
"answer": "{{check:QUERY_UU}}"
```
Untuk **Undang Undang**
```
"intent": "agen.produk-hukum-kepres"
"answer": "{{check:QUERY_KEPRES}}"
```
Untuk **Keputusan Presiden**
```
"intent": "agen.produk-hukum-staatsblad"
"answer": "{{check:QUERY_STAATSBLAD}}"
```
Untuk **Staatsblad Van Nederlandsch-indie**
```
"intent": "agen.produk-hukum-UUD1945"
"answer": "{{check:QUERY_UUD1945}}"
```
Untuk **Undang Undang Dasar 1945**
```
"intent": "agen.produk-hukum-ma"
"answer": "{{check:QUERY_MA}}"
```
Untuk **Mahkamah Agung**
```
"intent": "agen.produk-hukum-mk"
"answer": "{{check:QUERY_MK}}"
```
Untuk **Mahkamah Konstitusi**
```
"intent": "agen.produk-hukum-perpres"
"answer": "{{check:QUERY_PERPRES}}"
```
Untuk **Peraturan Presiden**
```
"intent": "agen.produk-hukum-inpres"
"answer": "{{check:QUERY_INPRES}}"
```
Untuk **Intruksi Presiden**
```
"intent": "agen.produk-hukum-perpem"
"answer": "{{check:QUERY_PERPEM}}"
```
Untuk **Peraturan Pemerintah**
```
"intent": "agen.produk-hukum-kepmen"
"answer": "{{check:QUERY_KEPMEN}}"
```
Untuk **Keputusan Menteri**
```
"intent": "agen.produk-hukum-permen"
"answer": "{{check:QUERY_PERMEN}}"
```
Untuk **Peraturan Menteri**
```
"intent": "agen.produk-hukum-semen"
"answer": "{{check:QUERY_SEMEN}}"
```
Untuk **Surat Edaran Menteri**
```
"intent": "agen.produk-hukum-inmen"
"answer": "{{check:QUERY_INMEN}}"
```
Untuk **Intruksi Menteri**
```
"intent": "agen.informasi-hukum-propemperda"
"answer": "{{check:QUERY_PROPEMPERDA}}"
```
Untuk **Program Pembentukan Peraturan Daerah**
```
"intent": "agen.informasi-hukum-raperda"
"answer": "{{check:QUERY_RAPERDA}}"
```
Untuk **Rancangan Peraturan Daerah**
```
"intent": "agen.informasi-hukum-naskah-akademik"
"answer": "{{check:QUERY_NASKAH_AKADEMIK}}"
```
Untuk **Naskah Akademik**

```
"intent": "agen.tidak-ada"
"answers_1": "{{check:FORM_USER}}"
```
untuk mengecek data user
```
"intent": "agen.user",
"utterances": ["{{check:VALIDATION_USER_DATA}}"],
```
untuk mengembalikan data user kepada chat agar dapat dilihat kembali oleh user sebagai validasi apakah data sudah sesuai atau belum
```
"intent": "agen.user",
{"answer": "{{check:FORM_NAME}}"}
```
untuk mengembalikan data nama lengkap user
```
"intent": "agen.user",
{"answer": "{{check:FORM_NO_TLP}}"}
```
untuk mengembalikan data no telephone user
```
"intent": "agen.user",
{"answer": "{{check:FORM_EMAIL}}"}
```
untuk mengembalikan data email user
```
"intent": "agen.user",
{"answer": "{{check:FORM_USER_QUESTION}}"}
```
untuk mengembalikan data pertanyaan user
