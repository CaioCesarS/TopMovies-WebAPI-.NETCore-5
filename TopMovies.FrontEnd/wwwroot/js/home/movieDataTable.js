$(document).ready(async () => {
  await movieDataTable()
})

async function movieDataTable() {
  let datatable = await $('#movieDataTable').DataTable({
    language: {
      "lengthMenu": "Exibe _MENU_ Registros por página",
      "search": "Procurar",
      "paginate": { "previous": "Retorna", "next": "Avança" },
      "zeroRecords": "Nada foi encontrado",
      "info": "Exibindo página _PAGE_ de _PAGES_",
      "infoEmpty": "Sem registros",
      "infoFiltered": "(filtrado de _MAX_ regitros totais)"
    },
    lengthMenu: [8,16,32],
    pageLength: 8,
    select: {
      style: 'multi'
    },
    dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-12 col-md-7'p>>",
    ajax: {
      url: `${Api.base_url}movie`,
      type: "GET",
      dataType: "json",
      async: true,
      headers: Api.headers,
      dataSrc: ''
    },
    columns: [
      { data: 'id' },
      { data: 'titulo' },
      { data: 'ano' },
      { data: 'nota' }
    ]
  });
}