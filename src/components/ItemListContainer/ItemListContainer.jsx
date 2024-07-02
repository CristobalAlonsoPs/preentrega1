
const categories = [
    {
      id: 1,
      name: "Chiller's",
      img: "https://www.johnsoncontrols.com/-/media/project/jci-global/johnson-controls/us-region/united-states-johnson-controls/hvac-equipment/water-cooled-chillers/product-images/york-yz-magnetic-bearing-centrifugal-chiller.png?h=564&w=752&la=en&hash=97A470C7278536FBB076F2216F5D6DBE",
    },
    {
      id: 2,
      name: "Compresores",
      img: "https://compresorescarlyle.com/wp-content/uploads/2018/08/9.png",
    },
    {
      id: 3,
      name: "Tarjetas Electronicas de Chiller's",
      img: "https://www.inganvf.com/wp-content/uploads/2020/06/carrier-mbb-para-30rb.png",
    },
    {
      id: 4,
      name: "Aceites",
      img: "https://texaslubricant.com/wp-content/uploads/2023/03/PhotoRoom_20221020_171633-600x600.png",
    },

  ];
  function ItemListContainer({greetings}) {
    
    return (
      <>
        <h2>{greetings}</h2>
  
          {categories.map( item => (
              <div key={item.id} className="card" style={{width: '18rem'}}>
                  <img src={item.img} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <a href="#" className="btn btn-primary">Ver mas</a>
                  </div>
              </div>
          ))}
  
      </>
    );
  }
  
  export default ItemListContainer