import React from "react";
import Plot from "react-plotly.js";



class Graph extends React.Component {

  render() {

    return (

      <Plot
        data={[

          {

            domain: { x: [0, 1], y: [0, 1] },
            value: this.props.pressure,
            title: this.props.pressure > 940 && this.props.pressure < 965 ? "Stormy" : this.props.pressure > 965 && this.props.pressure < 990 ? "Rain" : this.props.pressure > 990 && this.props.pressure < 1015 ? "Change" : this.props.pressure > 1015 && this.props.pressure < 1035 ? "Fair" : "Very Dry" ,
            type: "indicator",
            mode: "gauge+number",
            delta: { reference: 1100 },
            gauge: {
              axis: { range: [940, 1060] },
              bar: { color: "black", thickness: 0.15},
              steps: [
                { range: [940, 965], color: "#571B7E" },
                { range: [965, 990], color: "#6960EC" },
                { range: [990, 1015], color: "#46C7C7" },
                { range: [1015, 1035], color: "#B0BF1A" },
                { range: [1035, 1060], color: "#F6BE00" }
              ],
              
              threshold: {
                line: { color: "black", width: 4 },
                thickness: 0.75,
                value: this.props.pressure,
                showlegend: false
            }
            
        }
    }
        ]}

        layout = { {width: 220, height: 150, margin: { t: 20, b: 0 , l: 40, r: 40}, displaylogo: false, paper_bgcolor: "#60a5fa", font: { color: "white", family: "Arial" }}}
        config= {{"displaylogo": false, "modeBarButtonsToRemove": ['pan2d','lasso2d'], displayModeBar: false}}

      />

    );

  }

}


export default Graph;