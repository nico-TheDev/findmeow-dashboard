import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    DateField,
    Show,
    SimpleShowLayout,
} from "react-admin";
import CustomImageField from "./CustomImageField";

export const UserList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="location" />
            <TextField source="contact" />
            <DateField source="createdAt" label="Date Created" />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>{record.name || null}</span>;
};

export const UserShow = (props) => (
    <Show title={<UserTitle />} {...props}>
        <SimpleShowLayout>
            <CustomImageField source="profileImg" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="username" />
            <TextField source="location" />
            <TextField source="contact" />
        </SimpleShowLayout>
    </Show>
);
