import React from "react";
import {
    Admin,
    Resource,
    ListGuesser,
    EditGuesser,
    ShowGuesser,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { UserList, UserShow } from "./components/UserComponent";
import { PostList, PostEdit, PostCreate } from "./components/PostComponent";

import BookIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

import Dashboard from "./components/Dashboard";

import dataProvider from "./provider/DataProvider";
import authProvider from "./provider/AuthProvider";
import theme from "./provider/ThemeProvider";
// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

export default function App() {
    return (
        <Admin
            theme={theme}
            dataProvider={dataProvider}
            dashboard={Dashboard}
            authProvider={authProvider}
        >
            {/* <Resource name="users" list={UserList} icon={UserIcon} /> */}
            <Resource name="users" list={UserList} show={UserShow} />
            <Resource
                name="posts"
                list={PostList}
                edit={PostEdit}
                create={PostCreate}
                icon={BookIcon}
            />
            {/* <Resource
                name="posts"
                list={PostList}
                edit={PostEdit}
               
            /> */}
        </Admin>
    );
}
