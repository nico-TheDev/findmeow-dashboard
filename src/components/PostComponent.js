import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    SimpleList,
    BooleanField,
    DateField,
    BooleanInput,
} from "react-admin";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import CustomImageField from "./CustomImageField";

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

export const PostList = (props) => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <List {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.title}
                    secondaryText={(record) => `${record.views} views`}
                    tertiaryText={(record) =>
                        new Date(record.published_at).toLocaleDateString()
                    }
                />
            ) : (
                <Datagrid rowClick="edit">
                    <ReferenceField source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="name" label="Pet Name" />
                    <TextField source="breed" />
                    <TextField source="location" />
                    <TextField source="type" />
                    <BooleanField source="isCompleted" label="Completion" />
                    <DateField source="createdAt" label="Post Created" />
                    <DateField
                        source="updatedAt"
                        label="Last Updated by Owner"
                    />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
};

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.name}"` : ""}</span>;
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <CustomImageField source="image" />
            <TextInput source="name" />
            <TextInput source="breed" />
            <TextInput source="description" multiline />
            <TextInput source="location" />
            <TextInput source="type" disabled />
            <BooleanInput source="isCompleted" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="name" />
            <TextInput source="breed" />
            <TextInput source="description" multiline />
            <TextInput source="location" />
            <TextInput source="image" />
            <TextInput source="type" />
            <BooleanInput source="isCompleted" />
        </SimpleForm>
    </Create>
);
