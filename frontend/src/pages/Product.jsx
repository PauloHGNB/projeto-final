import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {" "}
        {/* -------- Product Row ---------- */}
        {/* -------- Product Images ---------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                src={item}
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* -------- Product Info ---------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Tamanhos Disponíveis</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <div key={index} className="border py-2 px-4 bg-gray-100">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() =>
              window.open("https://www.instagram.com/madifeminina/", "_blank")
            }
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            IR PARA O INSTAGRAM
          </button>

          <hr className="mt-8 sm:w-4/5" />
        </div>
      </div>

      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Disclaimer</b>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            O site da Madi Moda Feminina é uma vitrine online que permite que os
            produtos da loja sejam exibidos de forma organizada e acessível. No
            entanto, as compras não são realizadas diretamente no site. Em vez
            disso, ele serve como um espaço para que as clientes conheçam os
            itens disponíveis e, ao se interessarem por algum produto, possam
            finalizar a compra através do perfil da loja no Instagram
            (@madifeminina). Assim, o site facilita a visualização das coleções,
            mas as transações e interações com a equipe de vendas ocorrem
            exclusivamente via Instagram.
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
