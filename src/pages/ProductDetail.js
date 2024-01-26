import { Link, useParams } from "react-router-dom";

function ProductDetailPage() {
const params = useParams();

    return <>
    <h1>Product Detail</h1>
    <p>{params.productId}</p>
    <p><Link to='..' relative="path">Back</Link></p>
    {/* to'..' => go back one level like (cd ..) in the terminal
      * relative='path' => will make to='..' go back one segment from the url (going from 'domain_name/root/products/p1' to 'domain_name/root/products'),
        but without it will go back one level like (going from 'domain_name/root/products/p1' to 'domain_name/root') because 'products/p1' is a one path not two */}
    </>
}

export default ProductDetailPage;