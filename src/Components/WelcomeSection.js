import React from "react";

function WelcomeSection() {
  return (
    <div className="bg-yellow-500 py-16 md:py-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:px-32 items-center">
        <div className="md:text-left px-12">
          <h2 className="text-7xl text-center font-extrabold">
            Welcome To The Family!👋{" "}
          </h2>
          <h3 className="pt-6 text-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </h3>
        </div>
        <div className="px-6 ">
          <img
            src="
          https://ik.imagekit.io/jsklle928/Two_Grandmas_Soul_Food/family.jpeg?updatedAt=1688417833498"
            alt="family"
          />
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
