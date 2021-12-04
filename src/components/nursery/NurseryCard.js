export const NurseryCard = ({ nursery, flowers, distributors }) => (
  <>
    <h2>{nursery.name}</h2>
    <h3>Flowers</h3>
    <ul>
    {
      flowers.map(nf => {
        const { flower } = nf;
        return (
          <li key={flower.id}>
            <div>Color: {flower.color}</div>
            <div>Species: {flower.species}</div>
          </li>
        )}
      )
    }
    </ul>
    <h3>Distributors</h3>
    <ul>
    {
      distributors.map(nd => {
        const { distributor } = nd;
        return (
          <li key={distributor.id}>
            <div>{distributor.name}</div>
          </li>
        )}
      )
    }
    </ul>
  </>
)