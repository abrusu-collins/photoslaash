import { HiBadgeCheck } from "react-icons/hi";
function Why() {
  return (
    <div className="why">
      <div className="why-inner">
        <div>
          <p className="why-title">Why choose us</p>
          <p className="why-text">
            When it comes to image compression, our app stands out as the
            ultimate choice, offering a winning combination of exceptional
            compression ratios and uncompromised image quality. The following
            are reasons why you should start using photoslaash today.
          </p>
          <div className="points">
            <div>
              <HiBadgeCheck color="#fcfeff" size={22} />
              <p>Fast processing time</p>
            </div>
            <div>
              <HiBadgeCheck color="#fcfeff" size={22} />
              <p>User friendly app</p>
            </div>
            <div>
              <HiBadgeCheck color="#fcfeff" size={22} />
              <p>Simultaneously compress multiple images</p>
            </div>
            <div>
              <HiBadgeCheck color="#fcfeff" size={22} />
              <p>Compressed images retain aesthetic quality</p>
            </div>
            <div>
              <HiBadgeCheck color="#fcfeff" size={22} />
              <p>It&apos;s FREE OF CHARGE!!!!!!</p>
            </div>
          </div>
        </div>
        <img src="/images/confused.jpg" alt="" />
      </div>
    </div>
  );
}

export default Why;
