function tabuada() {
    let num = document.getElementById('txtn')
  //var num = document.getElementById('txtn')  OU PODE USAR O var
    let tab = document.getElementById('seltab')
  //var tab = document.getElementById('seltab') OU PODE USAR O var
  if(num.value.length == 0) {
      window.alert('Por favor, digite um numero')
    } else {
        let n = Number(num.value) //PODE USAR O var
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

}