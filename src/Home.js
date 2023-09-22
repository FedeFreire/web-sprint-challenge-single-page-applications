import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate = useNavigate()
  const routeToShop = () => {
    navigate('/pizza')
  }

  return (
    <div className='home-wrapper'>
      <button onClick={routeToShop} className='order' id="order-pizza">
        Order Pizza
      </button>
    </div>
  )
}
