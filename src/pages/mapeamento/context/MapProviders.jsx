import ProviderOfModal from './ContextOfModal'


export default function MapProviders({children}){
  return(
    <ProviderOfModal>
      {children}
    </ProviderOfModal>
  )
}


