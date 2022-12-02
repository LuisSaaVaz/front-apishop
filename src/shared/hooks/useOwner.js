import { useContext } from "react"
import { OwnerContext } from "../context/OwnerContext"

const useOwner = () => {
    const context = useContext(OwnerContext)
    return context
}

export default useOwner