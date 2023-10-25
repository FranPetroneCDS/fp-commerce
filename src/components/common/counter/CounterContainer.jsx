import { useState } from 'react'
import CounterPresentacional from './CounterPresentacional'

const CounterContainer = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1)

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1)
    } else {
      alert('No hay más stock disponible.')
    }
  }

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1)
    }
  }

  return <CounterPresentacional sumar={sumar} restar={restar} contador={contador} onAdd={onAdd} />
}

export default CounterContainer