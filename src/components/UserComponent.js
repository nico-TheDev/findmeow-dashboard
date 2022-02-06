import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    UrlField,
    DateField,
} from "react-admin";
import CustomUrlField from "./CustomUrlField";

export const UserList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="location" />
            <TextField source="contact" />
            <DateField source="createdAt" label="Date Created" />
        </Datagrid>
    </List>
);
