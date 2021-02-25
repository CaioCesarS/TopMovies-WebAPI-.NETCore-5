$(document).ready(() => {
  getResult()
})

function getResult() {
  $.ajax({
    url: `${Api.base_url}movie/getResult`,
    type: "GET",
    dataType: 'json',
    headers: Api.headers,
    success: (res) => {
      console.log(res)
      if (res == null) {
        $('#resultCards').append(`<div class="card mb-4 shadow">
        <div class="card-body text-center my-4">
          <h3 class="h5 mt-4 mb-0">Sem resultados, volte ao início para gerar um novo campeonato</h3>
        </div>
      </div>`)
      }
      else {
        for (let i = 0; i < res.length; i++) {
          $('#resultCards').append(`<div class="card mb-4 shadow">
            <div class="card-body text-center my-4">
              <h3 class="h5 mt-4 mb-0">${i + 1}º Lugar</h3>
              <span class="h1 mb-0">${res[i].titulo}</span>
              <p>ID: ${res[i].id}</p>
              <p>Ano: ${res[i].ano}</p>
              <p>Nota: ${res[i].nota}</p>
            </div>
          </div>`)
        }
      }
    },
    error: err => {
      Swal.fire({
        title: '<h4>Erro!</h4>',
        text: `${err}`,
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      })
    }
  })
}