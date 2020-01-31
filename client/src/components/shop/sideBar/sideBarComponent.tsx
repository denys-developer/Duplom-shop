import React, { useEffect, useState } from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import http from '../HttpProduct';
import CircularProgress from '@material-ui/core/CircularProgress';
import Store from '../store';
import Card from '@material-ui/core/Card';
import './style.css'
interface Props {
    store: Store;
}

export default function SideBarComponent(props: Props) {
    let [categories, setCategories] = useState(0);
    useEffect(() => {
        http.categories().then((response: any) => {
            getResponse(response);
        })
    })
    let selectCategory = (id: number) => {
        props.store.categoryId = id;
    }
    let getResponse = (date: any) => {
        let mas = date.map((category: any, index: number) => {
            return (
                <MenuItem key={index} onClick={() => {
                    selectCategory(category._id)
                }}>{category.name}</MenuItem>
            )
        })
        setCategories(mas);
    }
    if (categories) {
        return (
            <Card className="sideBar">
                {categories}
            </Card>

        )
    }
    else {
        return (
            <CircularProgress color="secondary" />
        )
    }
}