import React, { useEffect, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./JoinForm.css";
const JoinForm = () => {
  const [options, setOptions] = useState([
    { name: "CSR Funding", id: 1 },
    { name: "Awareness and Promotion", id: 2 },
    { name: "Bulk buying of Products", id: 3 },
    { name: "Export Orders", id: 4 },
    { name: "Education and Training", id: 5 },
    { name: "Platform Onboarding", id: 6 },
  ]);
  const [selectedValue, setSelectedValue] = useState([]);
  const [isMore, setMore] = useState(false);

  const onSelect = (selectedList, selectedItem) => {
    setSelectedValue(selectedList);
  };

  const onRemove = (selectedList, removedItem) => {
    setSelectedValue(selectedList);
  };

  useEffect(() => {
    if (selectedValue.length > 0) {
      console.log(selectedValue);
      setMore(true);
    } else {
      setMore(false);
    }
  }, [selectedValue]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const mobile = from.mobile.value;
    const email = from.email.value;
    const contribute = selectedValue;
    const description = from.description.value;
    const newInquiry = {
      name,
      mobile,
      email,
      contribute,
      description,
    };
    console.log(newInquiry);
  };

  return (
    <div className="mt-10">
      <SectionTitle
        noanimation={true}
        title="Join the movement:"
        className=" !mb-4"
      ></SectionTitle>

      <div className="card shrink-0 w-full p-16 shadow-xl bg-base-100">
        <form onSubmit={handleSubmitForm} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="name"
              placeholder="Enter Your Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mobile*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter Your Mobile Number"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Want to contribute with</span>
            </label>
            <Multiselect
              options={options}
              selectedValues={selectedValue}
              onSelect={onSelect}
              onRemove={onRemove}
              displayValue="name"
              placeholder={isMore ? "Select More" : "Select"}
              className={isMore && "bg-[#E8F0FE] rounded-lg"}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">For any details to share</span>
            </label>
            <div>
              <textarea
                className="textarea textarea-bordered w-full h-40"
                placeholder="Description"
                name="description"
              ></textarea>
            </div>
          </div>

          <div className="form-control mt-3">
            <SubmitButton
              title="Submit"
              className="flex items-center justify-center"
            ></SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;
