import CategoryItem from "../directory-item/directory-item.component"
import { CategoriesContainer } from './directory.styles'

const categories = [
  {
    id: 1,
    title: 'Desenvolvimento Web',
    subtitle: 'Webdesign, Aplicações Web e Landing Pages',
    imageUrl: 'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    route: 'servicos/desenvolvimento web'
  },
  {
    id: 2,
    title: 'Produção Musical',
    subtitle: 'Mistura e Masterização de Temas',
    imageUrl: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    route: 'servicos/produção musical'
  },
  {
    id: 3,
    title: 'Life Coach',
    subtitle: 'Terapias Holísticas, Constelações Familiares e Consultoria Pessoal',
    imageUrl: 'https://images.pexels.com/photos/4672438/pexels-photo-4672438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    route: 'servicos/life coach'
  }
]

const Directory = () => {
    return (
      <CategoriesContainer>
        {categories.map((category) => 
          (<CategoryItem key={category.id} category={category} />))}  
      </CategoriesContainer>
    )
}

export default Directory