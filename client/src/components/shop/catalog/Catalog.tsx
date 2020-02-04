import React, { useEffect, useState } from 'react';
import Store from '../store';
import { observer, } from 'mobx-react';
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
export const Catalog = observer((props: Props) => {
    const [selectId, selectProduct] = useState('');
    const [products, setProducts] = useState([]);
    useEffect(() => {
       
        // props.store.getProducts().then((data: any) => {
        //     for (const category in data) {
        //         let productObj = data[category];
        //         let mas = productObj.map((product: any, index: number) => {
        //             return (
        //                 <Card key={index} className='card' onClick={() => {
        //                     selectProduct(product._id);
        //                 }}>
        //                     <CardActionArea className="action_area">
        //                         <img src={product.img} alt="" className="media" />
        //                         <CardContent>
        //                             <Typography gutterBottom variant="h5" component="h2" className="name">
        //                                 {product.name}
        //                             </Typography>
        //                             <Typography variant="body2" color="textSecondary" component="p" className="coast">
        //                                 <h1>{product.coast}</h1>
        //                             </Typography>
        //                         </CardContent>
        //                     </CardActionArea>
        //                     <CardActions>
        //                         <Button size="small" color="primary">
        //                             Share
        //               </Button>
        //                         <Button size="small" color="primary">
        //                             Learn More
        //               </Button>
        //                     </CardActions>
        //                 </Card>
        //             );

        //         });
        //         setProducts(mas);
        //     }
        // })
    })
    let categoryId = props.store.activeCategoryId;
   
    if (selectId) {
        return (
            <Redirect from='shop' to={{ pathname: `/shop/${selectId}` }} />
        )
    };
    if (products) {
        return (
            <div className="container">
                {products}
            </div>
        )
    }
    else {
        return (
            <CircularProgress color="secondary" />
        )
    }

});
