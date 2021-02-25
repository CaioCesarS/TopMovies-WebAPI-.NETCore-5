$(document).ready(() => {
  let table = $('#movieDataTable').DataTable();
  $('#getMoviesButton').click(() => {
    let selectedMovies = []
    let data = table.rows('.selected').data()
    for (let i = 0; i < data.length; i++) {
      selectedMovies.push(data[i].id)
    }

    getMovies(selectedMovies)
  });
})

function getMovies(selectedMovies) {
  if (selectedMovies.length != 8) {
    Swal.fire({
      title: '<h4>Apenas 8 filmes devem ser selecionados!</h4>',
      text: `Você selecionou ${selectedMovies.length} filme(s) até o momento`,
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ok'
    })
    return
  }

  $.ajax({
    url: `${Api.base_url}movie/${selectedMovies}`,
    type: "GET",
    dataType: 'json',
    headers: Api.headers,
    error: err => {
      Swal.fire({
        title: '<h4>Erro!</h4>',
        text: `${err}`,
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      })
    }
  }).done(() => {
    window.location.href = `${window.location.origin}/Result`
  })
}