import { createContext, useState } from "react"

// Criando o contexto
export const ContextOfModal = createContext()

// Provider do contexto
export default function ProviderOfModal({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [card, setCard] = useState()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <ContextOfModal.Provider value={{ isModalOpen, openModal, closeModal , card  , setCard}}>
      {children}
    </ContextOfModal.Provider>
  )
}
