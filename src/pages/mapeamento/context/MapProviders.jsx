import ProviderOfModal from 'pages/mapeamento/context/ContextOfModal'


export default function MapProviders({children}){
  return(
    <ProviderOfModal>
      {children}
    </ProviderOfModal>
  )
}


