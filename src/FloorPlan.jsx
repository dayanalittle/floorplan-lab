import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

function FloorPlan (props) {
  return (
    <div>
      <Bedroom bedNum={1}/>
      <Bath size={'Half'}/>
      <Kitchen/>
      <LivingRoom/>
      <Bedroom bedNum={3}/>
      <Bath size={'Full'}/>
      <Bedroom bedNum={2}/>

    </div>
  )
}

export default FloorPlan