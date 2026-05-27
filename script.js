function cekData(){

    const nisnInput =
    document.getElementById("nisn").value;

    const hasil =
    document.getElementById("hasil");

    const data =
    siswa.find(s => s.nisn === nisnInput);

    if(!data){

        hasil.innerHTML = `
        <p style="color:red; margin-top:20px;">
        NISN tidak ditemukan
        </p>
        `;

        return;
    }

    hasil.innerHTML = `

    <div class="hasil-card">

        <h2>${data.nama}</h2>

        <p>
        Kelas : ${data.kelas}
        </p>

        <p>
        No Peserta : ${data.peserta}
        </p>

        <div class="table-wrapper">

        <table class="result-table">

            <tr>
                <th>Mata Pelajaran</th>
                <th>Nilai</th>
                <th>Kriteria</th>
            </tr>

            <tr>
                <td>Matematika</td>
                <td>${data.matematika}</td>
                <td>${data.kriteria_mtk}</td>
            </tr>

            <tr>
                <td>Bahasa Indonesia</td>
                <td>${data.indonesia}</td>
                <td>${data.kriteria_indo}</td>
            </tr>

        </table>

        </div>

    </div>

    `;
}
