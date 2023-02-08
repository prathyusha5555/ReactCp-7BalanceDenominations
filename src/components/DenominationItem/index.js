import './index.css'

const DenominationItem = props => {
  const {denomination, updateBalance} = props
  const {value} = denomination

  const update = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-container">
      <button className="button" type="button" onClick={update}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
