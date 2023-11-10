import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { addToOrders, infoAppUserByJwtToken } from "../service/Account";
import axios from "axios";

export default function Paypal(props) {
  const paypal = useRef();
  const [carts, setCarts] = useState({});
  const navigate = useNavigate();

  return (
    <div>
      <PayPalButtons
        createOrder={(data, actions, err) => {
          const price = parseFloat(props.propData1);
          const priceUsd = parseInt(price / 23000);
          console.log(priceUsd);
          return actions.order.create({

            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: priceUsd,
                },
              },
            ],
          });

        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          setCarts({
            cartDetailDtoList: props.propData2
          });
          const res = infoAppUserByJwtToken();
          console.log(carts);
          if (res != null) {
            await addToOrders({
              cartDetailDtoList: props.propData2
            }, res.sub);
 
            console.log(props.propData2);
          }
          swal.fire("Mua hàng thành công !");
          window.location.reload()
        }
        }
        // onError={(err) => {
        //   console.log(err);
        //   swal.fire("Thanh toán không thành công!", "", "error");
        // }}
      />
    </div>
  );
}
