import people01 from "../../../assets/People/people01.jpeg";
import people02 from "../../../assets/People/people02.jpeg";
import people03 from "../../../assets/People/people03.jpeg";

const RightLayout = () => {
  return (
    <>
      <section>
        <div>
          <h6 className="font-poppins text-2xl text-black font-bold">
            Course Instractor
          </h6>
          <div className="flex mt-5 justify-between">
            <div className="h-30 w-30 rounded-full border-6 border-primary custom_shadow02">
              <img
                src={people01}
                alt="PeopleImages"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <div className="h-30 w-30 rounded-full border-6 border-primary custom_shadow02">
              <img
                src={people02}
                alt="PeopleImages"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <div className="h-30 w-30 rounded-full border-6 border-primary custom_shadow02">
              <img
                src={people03}
                alt="PeopleImages"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="font-poppins text-2xl text-black font-bold flex justify-between mt-5">
            <h6>Daily Notice</h6>
            <h6 className="text-primary cursor-pointer hover:text-shadow-2xs">
              See all
            </h6>
          </div>
          <div>
            <div className="mt-5 custom_shadow02  w-full rounded-4xl border-6 border-transparent hover:border-primary transition-all ease-linear duration-300">
              <div className="p-5">
                <h6 className="font-semibold text-xl">Prellm Payment due</h6>
                <p
                  className="cla
                my-4 text-l text-white02"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam id et fuga commodi quidem, quisquam sint ea ut laborum
                  itaque.
                </p>
                <span className="text-primary text-xl font-semibold">
                  See more
                </span>
              </div>
              <div className="p-5">
                <h6 className="font-semibold text-xl">Exam Schedule</h6>
                <p
                  className="cla
                my-4 text-l text-white02"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam id et fuga commodi quidem, quisquam sint ea ut laborum
                  itaque.
                </p>
                <span className="text-primary text-xl font-semibold">
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
