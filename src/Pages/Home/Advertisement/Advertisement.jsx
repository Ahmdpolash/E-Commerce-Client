import React from "react";
import Container from "../../../Components/Container/Container";

const Advertisement = () => {
  return (
    <div className="bg-[#F1F1F1] pb-4">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <img
            className="rounded-md"
            src="https://i.ibb.co/FKfxWHF/Screenshot-14.png"
            alt="advertisement"
          />
          <img
            className="rounded-md"
            src="https://i.ibb.co/GchhLzx/Screenshot-15.png"
            alt="advertisement"
          />
          <img
            className="rounded-md"
            src="https://i.ibb.co/hHvSjxQ/Screenshot-16.png"
            alt="advertisement"
          />
        </div>
      </Container>
    </div>
  );
};

export default Advertisement;
