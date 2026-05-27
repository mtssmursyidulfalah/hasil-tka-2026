function cekData(){

  const nisn =
  document.getElementById(
    "nisn"
  ).value.trim();

  const data = siswa.find(
    s => s.nisn === nisn
  );

  if(!data){

    alert(
      "Data tidak ditemukan"
    );

    return;
  }
hasil.style.opacity = "0";
hasil.style.transform = "translateY(20px)";
 document.body.innerHTML = `
 setTimeout(()=>{

    hasil.style.transition = "all 0.5s ease";
    hasil.style.opacity = "1";
    hasil.style.transform = "translateY(0)";

},100);

<div class="glow"></div>
<div class="glow"></div>

<div class="hasil-card">

  <div class="judul">

    <img
    src="logo.png"
    class="logo">

    <h2>
      HASIL TES KEMAMPUAN AKADEMIK
      TAHUN 2026
    </h2>

    <p>
      MTSS MURSYIDUL FALAH
    </p>

  </div>

  <div class="identitas">

    NAMA
    :
    ${data.nama}

    <br>

    KELAS
    :
    ${data.kelas}

    <br>

    NO PESERTA
    :
    ${data.peserta}

  </div>

  <table>

    <tr>

      <th colspan="2">
        MATEMATIKA
      </th>

      <th colspan="2">
        BAHASA INDONESIA
      </th>

    </tr>

    <tr>

      <th>NILAI</th>
      <th>KRITERIA</th>

      <th>NILAI</th>
      <th>KRITERIA</th>

    </tr>

    <tr>

      <td>
        ${data.matematika}
      </td>

      <td>
        ${data.kriteria_mtk}
      </td>

      <td>
        ${data.indonesia}
      </td>

      <td>
        ${data.kriteria_indo}
      </td>

    </tr>

  </table>

</div>

`;
}
