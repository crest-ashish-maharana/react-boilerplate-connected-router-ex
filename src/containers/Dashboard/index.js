/*
 * Dashboard
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { name, reducer, actions } from "./slice";
import makeUsers from "./selectors";
import {useInjectReducer, useInjectSaga} from "redux-injectors";
import saga from './saga';
import Layout from "../Layout";

export default function Dashboard() {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga });
  const dispatch = useDispatch();

  const onClick = () => {
    console.log("Action Dispatched")
    dispatch(
        actions.saveUsers({
          first_name: "Ashish",
          last_name: "Maharana",
        })
      );
  };

  return (
      <Layout>
          <div className="container">
            <div className="row">
              <span className="flex flex-col text-center items-center justify-between p-4 bg-white rounded-lg shadow-lg">
                Welcome to the Dashboard!
                <br/>
                Start making this dashboard compatible
                <br/>
                <button className="btn btn-primary" onClick={onClick}>Click Me</button>
              </span>
            </div>
          </div>
      </Layout>
  );
}
