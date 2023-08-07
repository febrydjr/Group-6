import { Flex, Text, useToast } from "@chakra-ui/react";
import customColors from "../../../themes/customColors";
import { addTransaction } from "../../../api/transaction";
import { v4 as uuidv4 } from "uuid";

const orderOptions = {
    bgColor: customColors.textSecondary,
    color: customColors.primary,
    h: "3.2em",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
};

const textOptions = {
    fontSize: "1.2em",
};

function CheckoutButton({ setUpdateCarts }) {
    const toast = useToast();

    async function onCheckout() {
        await addTransaction(toast);        
        setUpdateCarts(uuidv4());
    }

    return (
        <Flex {...orderOptions} onClick={() => onCheckout()}>
            <Text {...textOptions}>Order</Text>
        </Flex>
    );
}

export default CheckoutButton;