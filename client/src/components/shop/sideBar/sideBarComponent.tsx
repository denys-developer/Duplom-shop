import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import http from '../HttpProduct';
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import CircularProgress from '@material-ui/core/CircularProgress';
import Store from '../store';

import Card from '@material-ui/core/Card';
import './style.css'
interface Props {
    store: Store;
}
@observer
export default class SideBarComponent extends React.Component<Props>{
    @observable categories: [JSX.Element] | undefined;
    constructor(props: Props) {
        super(props);
    }
    componentDidMount() {
        http.categories().then((response: any) => {
            this.setCategories(response);
        })
    }
    @action
    selectCategory(id: number) {
        this.props.store.categoryId = id;
    }
    @action
    setCategories(date: any) {
        this.categories = date.map((category: any, index: number) => {
            return (
                <MenuItem key={index} onClick={() => {
                    this.selectCategory(category._id)
                }}>{category.name}</MenuItem>
            )
        })

    }
    render() {
        if (this.categories) {
            return (
                <Card className="sideBar">
                    {this.categories}
                </Card>

            )
        }
        else {
            return (
                <CircularProgress color="secondary" />
            )
        }
    }
}