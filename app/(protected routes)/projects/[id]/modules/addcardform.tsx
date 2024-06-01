import React, { useState, ChangeEvent, FormEvent } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImCancelCircle } from "react-icons/im";
const Addcardform = () => {
  const [onPress, setOnPress] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    event.preventDefault();
    setOnPress(true);
    setText("");
    console.log("Submitted Email:", text);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      {onPress ? (
        <>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Set title"
              value={text}
              onChange={handleChange}
            />
            <div className="flex items-center gap-x-2">
              <Button type="submit">Add card</Button>
              <Button
                onClick={() => setOnPress(false)}
                className="rounded-full"
                variant="ghost"
              >
                <ImCancelCircle className="text-xl" />
              </Button>
            </div>
          </form>
        </>
      ) : (
        <>
          <Button
            variant="ghost"
            onClick={() => setOnPress(true)}
            className="flex text-md gap-x-2"
          >
            <IoMdAddCircleOutline />
            Add a card
          </Button>
        </>
      )}
    </>
  );
};

export default Addcardform;
