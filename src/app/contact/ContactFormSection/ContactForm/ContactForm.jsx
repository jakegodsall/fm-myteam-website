"use client";

import { useState } from "react";

import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    "email address": "",
    company: "",
    title: "",
    message: "",
  });

  const handleFormSubmit = (event) => {
    // Prevent default behaviour of the form submission
    event.preventDefault();

    // Get the data submitted with the form
    const fd = new FormData(event.target);
    const obj = Object.fromEntries(fd.entries());

    console.log(obj);
  };

  const onChangeHandler = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-[1.8rem] px-[2.6rem] py-[4rem]"
    >
      <TextInput
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={onChangeHandler}
      />
      <TextInput
        name="email"
        placeholder="email address"
        value={formData.email}
        onChange={onChangeHandler}
      />
      <TextInput
        name="company"
        placeholder="company name"
        value={formData.company}
        onChange={onChangeHandler}
      />
      <TextInput
        name="title"
        placeholder="title"
        value={formData.title}
        onChange={onChangeHandler}
      />
      <TextAreaInput
        name="message"
        placeholder="message"
        value={formData.message}
        onChange={onChangeHandler}
      />
    </form>
  );
}
