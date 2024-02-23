import React, { useState } from "react";
import axios from "axios";
import { Input, InputGroup, InputLeftElement, Button, Heading, Text } from '@chakra-ui/react';
import { BsPersonPlusFill } from "react-icons/bs";
import { MdOutlineRateReview } from "react-icons/md";
export default function AddReview(props) {
    const [comment, setComment] = useState("");
    const [name, setName] = useState("");
    const [comments, setComments] = useState([]);
    const { id, setPlace, place } = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = { user_name: name, comment };
        const updatedPlace = { ...place, comments: [...comments, newComment] };
        setPlace((previous) => ({ ...previous, comments: [...comments, newComment] }));
        axios.put(`https://project-json-server-diogo-matheus.onrender.com/data/${id}`, updatedPlace)
            .then(() => {
                setComment("");
                setName("");
                axios.get(`https://project-json-server-diogo-matheus.onrender.com/data/${id}`)
                    .then(response => {
                        setComments(response.data.comments);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            });
    };
    return (
        <section>
          <div className="comments-container">
            <Heading color="#319795" fontSize="35px">Reviews</Heading>
            {comments.map((comment, index) => {
              return (
                <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start",  border: "1px solid black", borderRadius: "5px", padding: "1px", marginBottom: "10px", margin:"20px"}}>
                  <h3 style={{ padding: "0px", margin: "0px", marginTop: "10px", color: "black", fontSize: "18px", fontWeight: "bold", padding: "2px"}}>{comment.user_name}</h3>
                  <p style={{ padding: "0px", margin: "0px", fontSize: "14px", fontWeight: "normal"}}>{comment.comment}</p>
                </div>
              );
            })}
          </div>
          <Text color="#319795" fontSize="20px" mr="350px" mt="5px">Add Review</Text>
          <form onSubmit={handleSubmit}>
            <div>
              <InputGroup size="md" mt={4}>
                <InputLeftElement pointerEvents="none">
                <BsPersonPlusFill  fontSize="25px"/>
                </InputLeftElement>
                <Input
                margin="auto"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  bg="green.100"
                  _placeholder={{ color: 'gray.500' }}
                  _focus={{ borderColor: 'blue.500', boxShadow: 'outline' }}
                />
              </InputGroup>
            </div>
            <div >
              <InputGroup size="md" mt="2">
                <InputLeftElement pointerEvents="none">
                <MdOutlineRateReview fontSize="28px" />
                </InputLeftElement >
                <Input
                    margin="auto"
                  type="text"
                  name="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Review"
                  bg="green.100"
                  _placeholder={{ color: 'gray.500' }}
                  _focus={{ borderColor: 'blue.500', boxShadow: 'outline' }}
                  cols={70}
                  rows={10}
                  as="textarea"
                />
              </InputGroup>
            </div>
            <Button type="submit" colorScheme='teal' size='sm' bottom="5px" right="5px" mt="20px">
              Submit Review
            </Button>
          </form>
        </section>
      );
}