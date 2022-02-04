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
} from "react-admin";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

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
                    <TextField source="id" />
                    <ReferenceField source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <EditButton />{" "}
                </Datagrid>
            )}
        </List>
    );
};

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput source="body" multiline />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput source="body" multiline />
        </SimpleForm>
    </Create>
);
