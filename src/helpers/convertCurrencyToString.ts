const convertCurrencyToString = (number: string) => {

  const cut = number.split('.')

  let liczba = parseInt(cut[0])

  let jednosci = ['', ' jeden', ' dwa', ' trzy', ' cztery', ' pięć', ' sześć', ' siedem', ' osiem', ' dziewięć']
  let nascie = ['', ' jedenaście', ' dwanaście', ' trzynaście', ' czternaście', ' piętnaście', ' szesnaście', ' siedemnaście', ' osiemnaście', ' dziewietnaście']
  let dziesiatki = ['', ' dziesięć', ' dwadzieścia', ' trzydzieści', ' czterdzieści', ' pięćdziesiąt', ' sześćdziesiąt', ' siedemdziesiąt', ' osiemdziesiąt', ' dziewięćdziesiąt']
  let setki = ['', ' sto', ' dwieście', ' trzysta', ' czterysta', ' pięćset', ' sześćset', ' siedemset', ' osiemset', ' dziewięćset']
  let grupy = [
    ['', '', ''],
    [' tysiąc', ' tysiące', ' tysięcy'],
    [' milion', ' miliony', ' milionów'],
    [' miliard', ' miliardy', ' miliardów'],
    [' bilion', ' biliony', ' bilionów'],
    [' biliard', ' biliardy', ' biliardów'],
    [' trylion', ' tryliony', ' trylionów']]

  // jezeli pole zawiera poprawna wartosc calkowita
  if (typeof liczba === 'number') {

    let wynik = ''
    let znak = ''
    if (liczba == 0)
      wynik = 'zero'
    if (liczba < 0) {
      znak = 'minus'
      liczba = -liczba
    }

    let g = 0
    while (liczba > 0) {
      let s = Math.floor((liczba % 1000) / 100)
      let n = 0
      let d = Math.floor((liczba % 100) / 10)
      let j = Math.floor(liczba % 10)

      if (d == 1 && j > 0) {
        n = j
        d = 0
        j = 0
      }

      let k = 2
      if (j == 1 && s + d + n == 0)
        k = 0
      if (j == 2 || j == 3 || j == 4)
        k = 1
      if (s + d + n + j > 0)
        wynik = setki[s] + dziesiatki[d] + nascie[n] + jednosci[j] + grupy[g][k] + wynik

      g++
      liczba = Math.floor(liczba / 1000)
    }

    let grosze = ''
    if (cut.length > 1) {
      grosze = ` ${cut[1]}/100`
    }


    switch (cut[0].charAt(cut[0].length - 2)) {
      case '1':
        return wynik += ' złotych'
      default: {
        switch (cut[0].charAt(cut[0].length - 1)) {
          case '2':
            return wynik += ' złote' + grosze
          case '3':
            return wynik += ' złote' + grosze
          case '4':
            return wynik += ' złote' + grosze
          default:
            return wynik += ' złotych' + grosze
        }
      }
    }
  }
  return 'Błąd!'

}

export default convertCurrencyToString