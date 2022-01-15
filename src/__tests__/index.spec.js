import { humanizeList } from "../index";

describe("humanizeList", () => {
  it("deve ser retornado o elemento da lista quando for conjuncao", () => {
    const resultado = humanizeList([1], 'conjunction')
    expect(resultado).toBe("1")
  });

  it("deve ser retornado o elemento da lista quando for disjunção", () => {
    const resultado = humanizeList([1], 'disjunction')
    expect(resultado).toBe("1")
  });

  it("deve retornar os elementos da lista com o conectivo AND quando for conjunção", () => {
    let resultado = humanizeList([1, 2, 3], 'conjunction')
    expect(resultado).toBe("1, 2 and 3")

    resultado = humanizeList([2, 2, 4], 'conjunction')
    expect(resultado).toBe("2, 2 and 4")
  })
  it("deve retornar os elementos da lista com o conectivo OR quando for disjunção", () => {
    let resultado = humanizeList([1, 2, 3], 'disjunction')
    expect(resultado).toBe("1, 2 or 3")

    resultado = humanizeList([2, 2, 4], 'disjunction')
    expect(resultado).toBe("2, 2 or 4")
  })

  it("deve retornar os elementos da lista com o conectivo AND quando for conjunção", () => {
    let resultado = humanizeList([1, 2], 'conjunction')
    expect(resultado).toBe("1 and 2")
  })

  it("deve retornar os elementos da lista com o conectivo OR quando for disjunção", () => {
    let resultado = humanizeList([1, 2], 'disjunction')
    expect(resultado).toBe("1 or 2")

    resultado = humanizeList([2, 4], 'disjunction')
    expect(resultado).toBe("2 or 4")
  })

  it("deve retornar os elementos da lista com conectivo AND quando for conjunction e tiver limite", () => {
    let resultado = humanizeList([1, 2, 3, 4, 6, 7, 8, 15], 'conjunction', 5)
    expect(resultado).toBe("1, 2 ... and 15")
  })

});
