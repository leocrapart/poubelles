import Nav from '../components/nav'

export default function IndexPage() {
  return (
    <div>
      <div className="">
        <h1 className="m-8 text-3xl text-center text-accent-1 ">
          Collecte des déchêts
        </h1>
        <div className="">
          <div className="p-4 bg-yellow-500">
            <div>Jaune</div>
            <div>Mardi 6 Octobre</div> 
            <div>Mardi 13 Octobre</div>
            <div>Mardi 20 Octobre</div> 
            <div>Mardi 27 Octobre</div> 
          </div>

          <div className="p-4 bg-green-500">
            <div>Verte</div>
            <div>Mercredi 7 Octobre</div> 
            <div>Mercredi 14 Octobre</div> 
            <div>Mercredi 21 Octobre</div> 
            <div>Mercredi 28 Octobre</div> 
          </div>

          
          <div className="p-4 bg-gray-500">
            <div>Ménager</div>
            <div>Mercredi 7 Octobre</div> 
            <div>Mercredi 14 Octobre</div> 
            <div>Mercredi 21 Octobre</div> 
            <div>Mercredi 28 Octobre</div> 
          </div>
          
        </div>
      </div>
    </div>
  )
}
