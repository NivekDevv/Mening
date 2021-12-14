import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { HeroDiv } from "../styles/StyledContent";
// import Navbar from "../components/Navbar";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
const { TextArea } = Input;

const IdeaCreation = (props) => {
  const [idea, setIdea] = useState(""); //enregistrement du titre de l'idée dans le store et BDD
  const [ideaDescription, setIdeaDescription] = useState(""); //enregistrement de la description de l'idée dans le store et BDD
  const [check, setCheck] = useState(false); //etat permettant de redirect vers /board/boardId à la création de l'idée
  const [boardId, setBoardId] = useState(""); //Recuperation de l'id du board sur lequel on souhaite créer l'idée
  var { id } = useParams();
  const [likes, setLikes] = useState(0);
  const [voteCount, setVoteCount] = useState(0);

  useEffect(() => {
    var findBoards = async () => {
      var boards = await fetch(`/myboard/${id}`); // utilisation du param pour retrouver l'id du board
      var body = await boards.json();
      console.log(body.board[0], "LE BODY.board");
      setBoardId(body.board[0]._id);
    };
    findBoards();
  }, []);

  //Creation de l'idée en DB
  var saveIdea = async (idea, ideaDescription) => {
    console.log(boardId, ideaDescription, props.token, idea);
    var save = await fetch("/idea-creation", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `idea=${idea}&ideaDesc=${ideaDescription}&token=${props.token}&boardId=${boardId}&likesFromFront=${likes}&voteCountFromFront=${voteCount}`,
    });

    var response = await save.json();

    props.onAddIdeaClick(
      idea,
      ideaDescription,
      response.saveIdea._id,
      response.saveIdea.likes,
      response.saveIdea.voteCount
    );
    setCheck(true);
  };

  if (check == true) {
    return <Navigate to={`/board/${boardId}`} />;
  }
  return (
    <HeroDiv
      style={{
        paddingLeft: "400px",
        paddingTop: "150px",
        paddingBottom: "150px",
        backgroundColor: "#F6F6F6",
        height: "100vh",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item name="ideaName">
          <h1 style={{ fontSize: "25px" }}>Name of the idea</h1>

          <Input
            style={{ width: "500px" }}
            onChange={(e) => {
              setIdea(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item name="descIdea">
          <h1 style={{ fontSize: "25px" }}>Idea Description</h1>

          <TextArea
            style={{ width: "750px" }}
            onChange={(e) => setIdeaDescription(e.target.value)}
          />
        </Form.Item>

        <Button onClick={() => saveIdea(idea, ideaDescription)}>
          Create
          {/* <BtnLink to="/board">Create</BtnLink> */}
        </Button>
      </Form>
    </HeroDiv>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    onAddIdeaClick: function (idea, ideaDescription, Id, likes, voteCount) {
      dispatch({
        type: "addIdea",
        idea: idea,
        ideaDescription: ideaDescription,
        likes: likes,
        voteCount: voteCount,
        Id: Id,
      });
    },
  };
}

function mapStateToProps(state) {
  return { token: state.token, infos: state.infos };
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaCreation);
