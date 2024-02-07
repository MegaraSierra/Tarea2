import React from "react";
import { StyleSheet, View } from "react-native";
import StarEmpty, { StarEmptyProps } from "./StarEmpty";
import StarFilled, { StarFilledProps } from "./StarFilled";
import StarHalf, { StarHalfProps } from "./StarHalf";

export type EvalProps = {
  calificacion: number;
  onCalificacionChange: (valor: number) => void;
};

const Evaluacion = (props: EvalProps) => {
  const handleOnClick = (posicion: number) => {
    const nuevaCalificacion = calcularNuevaCalificacion(props.calificacion, posicion);
    props.onCalificacionChange(nuevaCalificacion);
  };

  const calcularNuevaCalificacion = (calificacionActual: number, posicion: number) => {
    if (calificacionActual === posicion) {
      return posicion + 0.5;
    } else if (calificacionActual === posicion + 0.5) {
      return posicion + 1;
    } else {
      return posicion;
    }
  };

  const totalEstrellas = 5;

  return (
    <View style={styles.contenedor}>
      {Array.from({ length: totalEstrellas }, (_, index) => {
        const posicion = index + 1;
        return (
          <React.Fragment key={index}>
            {props.calificacion >= posicion && <StarFilled onClick={handleOnClick} posicion={index} />}
            {props.calificacion === index + 0.5 && <StarHalf onClick={handleOnClick} posicion={index} />}
            {props.calificacion < index + 0.5 && <StarEmpty onClick={handleOnClick} posicion={index} />}
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Evaluacion;















