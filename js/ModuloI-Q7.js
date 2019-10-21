function modulo7Resposta () {
    try {
      if (Math.random() > 0.5) {
        throw new Error("Algum erro")
        return // esse return não vai ser executado porque logo após o throw ele vai ir pro catch
      }
    } catch (e) {
      console.log(e.message)
    } finally {
      console.log("Vai ser executado independente de tudo")
    }
  }