
function modulo6Resposta () {
    try {
      if (Math.random() > 0.5) {
        throw new Error("Algum erro")
      }
    } catch (e) {
      console.log(e.message)
    }
  }