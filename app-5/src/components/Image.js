import React, { Component } from "react";

// class Image extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <img src={ this.props.myImage } alt="2 cats that are best buds" />
//       </div>
//     );
//   }
// }

function Image(props) {
  return (
    <div>
      <img src={ props.myImage } alt="2 cats that are best buds" />
    </div>
  );
}

export default Image;