function ListaLivros() {
    $.ajax({
        url: "http://localhost:2840/ListaLivros",
        type: "GET",
        dataType: "json",
        success: function (resposta) {
            $("#txt_books").text(resposta.txt_books)
            console.log(resposta)
        },
        error: function (request, message, error) {
            alert(message);
        }
    });
}
