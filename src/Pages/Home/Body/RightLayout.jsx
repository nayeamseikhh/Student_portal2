import people01 from "../../../assets/People/people01.jpeg";
import people02 from "../../../assets/People/people02.jpeg";
import people03 from "../../../assets/People/people03.jpeg";

const RightLayout = () => {
  return (
    <>
      <section>
        <div>
          <h6 className="font-poppins text-[18px] text-black font-bold">
            Course Instractor
          </h6>
          <div className="flex mt-4 justify-between">
            <div className="h-22 w-22 rounded-full border-5 border-primary custom_shadow02 cursor-pointer hover:custom_shadow03 text-center transition-all ease-linear duration-300">
              <img
                src={people01}
                alt="PeopleImages"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <div className="h-22 w-22 rounded-full border-5 border-primary custom_shadow02 cursor-pointer hover:custom_shadow03 text-center transition-all ease-linear duration-300">
              <img
                src={people02}
                alt="PeopleImages"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <div className="h-22 w-22 rounded-full border-5 border-primary custom_shadow02 cursor-pointer hover:custom_shadow03 text-center transition-all ease-linear duration-300">
              <img
                src={people03}
                alt="PeopleImages"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="font-poppins text-[18px] text-black font-bold flex justify-between mt-4">
            <h6>Daily Notice</h6>
            <h6 className="text-primary cursor-pointer hover:text-shadow-2xs ">
              See all
            </h6>
          </div>
          <div>
            <div className="mt-4 custom_shadow02  w-full rounded-4xl border-6 border-transparent hover:border-primary transition-all ease-linear duration-300">
              <div className="p-5">
                <h6 className="font-semibold text-[16px]">
                  Prellm Payment due
                </h6>
                <p
                  className="cla
                my-4 text-l text-white02"
                >
                  Lorem ipsum dolor sit amet, dolor sit amet quisquam sint ea ut
                  laborum lorem.
                </p>
                <span className="text-primary text-[16px] font-semibold cursor-pointer">
                  See more
                </span>
              </div>
              <div className="p-5">
                <h6 className="font-semibold text-[16px]">Exam Schedule</h6>
                <p
                  className="cla
                my-4 text-l text-white02"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam id et fuga.
                </p>
                <span className="text-primary text-[16px] font-semibold cursor-pointer">
                  See more
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RightLayout;
