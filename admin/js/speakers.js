window.onload = () => {
    const urlBase = "https://fcawebbook.herokuapp.com"
    // References to HTML objects
    const frmSpeaker = document.getElementById("frmSpeaker")
    const txtName = document.getElementById("txtName").value
    const txtJob = document.getElementById("txtJob").value
    const txtPhoto = document.getElementById("txtPhoto").value
    const txtFacebook = document.getElementById("txtFacebook").value
    const txtTwitter = document.getElementById("txtTwitter").value
    const txtLinkedin = document.getElementById("txtLinkedin").value
    const txtBio = document.getElementById("txtBio").value
    frmSpeaker.addEventListener("submit", async (event) => {
        event.preventDefault()
        // Pedido HTTP para inserção dos dados do orador
        const response = await fetch(`${urlBase}/speakers`, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            body: `nome=${txtName}&cargo=${txtJob}&foto=${txtPhoto}&facebook=${txtFacebook}&twitter=${txtTwitter}&linkedin=${txtLinkedin}&bio=${txtBio}`
        })
        const newSpeakerId = response.headers.get("Location")
        const newSpeaker = await response.json()
        // Associa orador à conferência WebConfernce
        const newUrl = `${urlBase}/conferences/1/speakers/${newSpeakerId}`
        const response2 = await fetch(newUrl, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
        })
        const newSpeaker2 = await response2.json()
        // Analisar resposta JSON e exibir mensagem ao utilizados




    })






}