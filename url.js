const URL_SERVER = "http://54.243.191.196:3000/";
export default URL_SERVER;

/* fetch(URL_SERVER + "usuarios")
.then(response => {
    if (response.ok)
    return response.json();

    throw new Error(response.status);
})
.then(data => {
    console.log("Datos: " + data);
})
.catch(err => {
    console.error("ERROR: ", err.message)
})

{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        username: username,
        password: password
    })
  }

  fetch(URL_SERVER + "cesta/" + data[0].id, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        unidades: data[0].unidades + 1, // Incrementa las unidades en 1
    }),
  })

  fetch(URL_SERVER + "cesta/" + articulo.id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
}) */