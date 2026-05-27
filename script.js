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

  document.body.innerHTML = `

  <div class="glow"></div>
  <div class="glow"></div>

  <div class="card">

    <img
    src="logo.png"
    class="logo">

    <h1>
      HASIL TKA
    </h1>

    <div class="hasil">

      <p>
      <b>Nama:</b><br>
      ${data.nama}
      </p>

      <p>
      <b>Kelas:</b><br>
      ${data.kelas}
      </p>

      <p>
      <b>No Peserta:</b><br>
      ${data.peserta}
      </p>

      <hr>

      <p>
      <b>Matematika</b><br>
      Nilai: ${data.matematika}<br>
      Kriteria:
      ${data.kriteria_mtk}
      </p>

      <p>
      <b>Bahasa Indonesia</b><br>
      Nilai: ${data.indonesia}<br>
      Kriteria:
      ${data.kriteria_indo}
      </p>

    </div>

  </div>

  `;
}
