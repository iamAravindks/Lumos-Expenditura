import React, { useContext } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff, Edit } from "@material-ui/icons";

import useStyles from "./styles";
import { MoneyManagerContext } from "../../../context/transactionContext/context";
import formatDate from "../../../utils/formatDate";

const List = ({ setFormData, setEditMode, editMode }) => {
  const classes = useStyles();
  const { transactionsState, deleteTransaction } =
    useContext(MoneyManagerContext);

  const setEditForm = (id) => {
      setEditMode(true)
          const requiredState = transactionsState.transactions.filter(
            (t) => t._id === id
          );
          const { amount, category, type, date } = requiredState[0];

    setFormData({ amount, category, type, date: formatDate(date) ,id});

  };
  return (
    <MUIList dense={false} className={classes.list}>
      {transactionsState.transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction._id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit">
                <Edit
                  onClick={() => setEditForm(transaction._id)}
                />
              </IconButton>
              <IconButton onClick={() => deleteTransaction(transaction._id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
