import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"SOBRE"} text2={"NÓS"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            A Madi Moda Feminina surgiu de um sonho compartilhado por duas
            mulheres visionárias: Juliana e Dalva, sobrinha e tia. Juliana, uma
            jovem professora com uma profunda paixão pela moda, sempre desejou
            abrir seu próprio negócio. Para ela, a moda era mais do que um
            estilo – era uma forma de expressar a individualidade e a autoestima
            das mulheres.
          </p>
          <p>
            Dalva, sua tia, trazia consigo décadas de experiência como bancária.
            Embora não fosse especialista em moda, ela estava profundamente
            convencida do potencial do sonho de Juliana e decidiu se juntar a
            ela nessa emocionante jornada empreendedora.
          </p>
          <p>
            O nome "Madi Moda Feminina" tem uma história especial: é derivado da
            maneira carinhosa como o filho de Dalva, desde pequeno, chamava a
            mãe de Juliana, sua madrinha. Ele sempre se referia a ela como
            "Madi", uma forma afetuosa que se tornou um símbolo e um tributo ao
            início desta linda parceria no mundo da moda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
