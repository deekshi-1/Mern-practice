import Card from "../components/card"
import { useGetProductsQuery } from "../redux/appSlice"
import "../App.css"
export default function Home() {
  const{data:products,isLoading}=useGetProductsQuery()
  return (
    <div className="cardWrapper">
      {isLoading ? <h2>Loading.....</h2>:products && products.map(item=><Card key={item.id} {...item}/>)}
    </div>
  )
}
