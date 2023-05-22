import { GoSearch } from 'react-icons/go'
import { GiSpectacleLenses } from 'react-icons/gi'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
// SiAwesomelists
function Header() {
  return (
        <div className="text-white flex flex-row justify-between items-center py-5 ">
        <div className="logo flex flex-row items-center gap-1">
          <GiSpectacleLenses size="25px"/> GADA
        </div>
        <div className="search flex flex-row items-center gap-5">
          <input className="px-3 py-2 rounded-md w-96 align-top " type="search" name="search" id="search" placeholder='Search' /> <GoSearch />
        </div>
        <div className="checkout flex flex-row items-center gap-5">
          < AiOutlineUser size="30px"/>
          < AiOutlineShoppingCart size="30px"/>
          </div>
    </div>
  )
}

export default Header