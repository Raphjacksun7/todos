import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import TodoTextInput from "./TodoTextInput";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import {
  Badge,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  FormControl,
  Textarea,
} from "@chakra-ui/react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
  };

  state = {
    editing: false,
    comment: "",
    openCommentModal: false,
    openDeadlineModal: false,
  };

  handleCommentModal = (e) => {
    e.preventDefault();
    this.setState({ comment: this.props.todo.comment, openCommentModal: true });
  };

  onCloseCommentModal = () => {
    this.setState({ openCommentModal: false });
  };

  handleDeadlineModal = (e) => {
    e.preventDefault();
    this.setState({ openDeadlineModal: true });
  };

  onCloseDeadlineModal = () => {
    this.setState({ openDeadlineModal: false });
  };

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSave = (updatedTodo) => {
    if (updatedTodo.text.length === 0) {
      this.props.deleteTodo(updatedTodo.id);
    } else {
      this.props.editTodo(updatedTodo);
    }
    this.setState({ editing: false });
  };

  render() {
    const { todo, completeTodo, deleteTodo } = this.props;
    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={(updatedtext) =>
            this.handleSave({ ...todo, text: updatedtext })
          }
        />
      );
    } else {
      element = (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          />
          <label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>

          <Menu>
            <MenuButton>
              <DotsVerticalIcon className="h-5 w-5 text-gray-800" />
            </MenuButton>
            <MenuList>
              <MenuItem>Set a deadline</MenuItem>
              <MenuItem onClick={this.handleCommentModal}>Comment</MenuItem>
              <MenuItem>
                Add a file{" "}
                <Badge
                  variant="subtle"
                  colorScheme="blue"
                  style={{ marginLeft: "10px" }}
                >
                  Coming soon
                </Badge>
              </MenuItem>
              <MenuDivider />
              <MenuItem
                style={{ color: "#fd6060" }}
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
          <Modal
            isOpen={this.state.openCommentModal}
            onRequestClose={this.onCloseCommentModal}
          >
            <FormControl>
              <Textarea
                style={{ minHeight: "130px" }}
                placeholder="Type your comment here"
                defaultValue={this.state.comment}
                onChange={(e) => this.setState({ comment: e.target.value })}
              />
            </FormControl>
            <Button
              onClick={() =>
                this.props.editTodo({ ...todo, comment: this.state.comment })
              }
              mt={4}
              colorScheme="gray"
            >
              Comment
            </Button>
          </Modal>
        </div>
      );
    }

    return (
      <li
        className={classnames({
          completed: todo.completed,
          editing: this.state.editing,
        })}
      >
        {element}
      </li>
    );
  }
}
