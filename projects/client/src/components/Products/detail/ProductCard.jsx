import {
    Flex,
    GridItem,
    Text,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import customColors from "../../../themes/customColors";
import getImage from "../../../api/getImage";
import { addCartItem } from "../../../api/cart";
import EditProductModal from "./EditProductModal";
import ProductStock from "./ProductStock";

const gridOptions = {
    w: "180px",
    h: "180px",
    pos: "relative",
    borderRadius: "4px",
    bgPos: "center",
    bgSize: "cover",
    overflow: "hidden",
    cursor: "pointer",
};

const titleOptions = {
    color: customColors.textPrimary,
    textAlign: "center",
    noOfLines: 2,
};

const backdrop = {
    w: "100%",
    h: "32%",
    px: "4px",
    pos: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bgColor: "#00000066",
    backdropFilter: "blur(2px)",
};

function ProductCard({ product, setUpdateCarts, setUpdateProduct, isEdit }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    async function addCart(id_product) {
        await addCartItem(toast, id_product);
        setUpdateCarts(uuidv4());
    }

    function handleClick(id) {
        if (isEdit) return onOpen();
        return addCart(id);
    }

    return (
        <GridItem
            {...gridOptions}
            id={product["id"]}
            bgImage={getImage(product["image"])}
            onClick={() => handleClick(product["id"])}
        >
            <ProductStock stock={product["stock"]}/>
            <Flex bottom={0} {...backdrop}>
                <Text {...titleOptions}>{product["name"]}</Text>
            </Flex>
            <EditProductModal
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                product={product}
                setUpdateProduct={setUpdateProduct}
            />
        </GridItem>
    );
}

export default ProductCard;
