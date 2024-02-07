// Evaluacion.tsx
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

  return (
    <View style={styles.contenedor}>
      {[...Array(5).keys()].map((posicion) => (
        <React.Fragment key={posicion}>
          {props.calificacion >= posicion + 1 && <StarFilled onClick={handleOnClick} posicion={posicion} />}
          {props.calificacion === posicion + 0.5 && <StarHalf onClick={handleOnClick} posicion={posicion} />}
          {props.calificacion < posicion + 0.5 && <StarEmpty onClick={handleOnClick} posicion={posicion} />}
        </React.Fragment>
      ))}
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















