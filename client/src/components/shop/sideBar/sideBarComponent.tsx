import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import http from '../HttpProduct';
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import CircularProgress from '@material-ui/core/CircularProgress';
import Store from '../store';
import SlideBar from './slideBar';

interface Props {
    store: Store;
}

@observer
export default class SideBarComponent extends React.Component<Props>{
    slideeBar: SlideBar;
    @observable categories: [JSX.Element] | undefined;
    constructor(props: Props) {
        super(props);
        this.slideeBar = this.props.store.slideeBar;
    }
    componentDidMount() {
        http.categories().then((response: any) => {
            this.setCategories(response);
        })
    }
    @action
    setCategories(date: any) {
        this.categories = date.map((category: any, index: number) => {
            return (
                <MenuItem key={index} >{category.name}</MenuItem>
            )
        })

    }
    render() {
        if (this.categories) {
            return (
                <>
                    {this.categories}
                </>
            )
        }
        else {
            return (
                <CircularProgress color="secondary" />
            )
        }
    }
}