import { HiBadgeCheck } from "react-icons/hi";
function Why() {
  return (
    <div className="why">
      <div className="why-inner">
        <div>
          <p className="why-title">Why Choose us</p>
          <p className="why-text">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde
            hic accusantium inventore molestias consequuntur exercitationem
            similique, praesentium pariatur ab commodi odio ratione. Optio
            perferendis eligendi exercitationem odit aliquam tempore!{" "}
          </p>
          <div className="points">
            <div>
              <HiBadgeCheck color="#fcfeff" size={22} />
              <p>lorem lorem lorem lorem lorem lorem</p>
            </div>
            <div>
              <HiBadgeCheck color="#fcfeff" size={22} />
              <p>lorem lorem lorem lorem lorem lorem</p>
            </div>
            <div>
              <HiBadgeCheck color="#fcfeff" size={22} />
              <p>lorem lorem lorem lorem lorem lorem</p>
            </div>
          </div>
        </div>
        <img src="/images/confused.jpg" alt="" />
      </div>
    </div>
  );
}

export default Why;
