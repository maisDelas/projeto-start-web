import { useContext } from "react";

import { ContextOfModal } from "../context/ContextOfModal";

export default function useModal (){
  return useContext(ContextOfModal)
}