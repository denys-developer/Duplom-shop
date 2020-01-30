import React from 'react';
import Store from '../store';
import { computed, observable, action } from 'mobx';
import { observer } from 'mobx-react';
import http from '../HttpProduct';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './style.css';
import { Redirect } from 'react-router-dom';
interface Props {
    store: Store;
}
interface Product {
    name: string;
    coast: string;
    img: string;
    _id: string;
}
@observer
export default class Catalog extends React.Component<Props>{
    @observable products?: Array<JSX.Element>;
    @observable selectedProductId: string | undefined;
    constructor(props: Props) {
        super(props);
    }
    @action
    selectProduct(id: string) {
        this.selectedProductId = id;
    }
    componentWillMount() {
        http.products().then((data: any) => {
            this.products = data.map((product: Product, index: number) => {
                return (
                    <Card className='card' onClick={() => {
                        this.selectProduct(product._id);
                    }}>
                        <CardActionArea className="action_area">
                            <img src={product.img} alt="" className="media" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" className="name">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className="coast">
                                    <h1>{product.coast}</h1>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                  </Button>
                            <Button size="small" color="primary">
                                Learn More
                  </Button>
                        </CardActions>
                    </Card>
                );

            });
        })
    }
    componentWillUpdate() {

    }
    render() {

        let categoryId = this.props.store.activeCategoryId;
        if (this.selectedProductId) {
            return (
                <Redirect  to={{pathname:`/shop/product-card/:${this.selectedProductId}`}} />
            )
        }
        if (this.products) {
            return (
                <div className="container">
                    {this.products}
                </div>
            )
        }
        else {
            return (
                <CircularProgress color="secondary" />
            )
        }
    }
}