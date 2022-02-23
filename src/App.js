import React from "react";
import { Admin, Resource } from "react-admin";

import { UserList, UserShow } from "./components/UserComponent";
import { PostList, PostEdit } from "./components/PostComponent";

import BookIcon from "@mui/icons-material/Book";

import dataProvider from "./provider/DataProvider";
import authProvider from "./provider/AuthProvider";
import theme from "./provider/ThemeProvider";

export default function App() {
    return (
        <Admin
            theme={theme}
            dataProvider={dataProvider}
            authProvider={authProvider}
        >
            <Resource name="users" list={UserList} show={UserShow} />
            <Resource
                name="posts"
                list={PostList}
                edit={PostEdit}
                icon={BookIcon}
            />
        </Admin>
    );
}
