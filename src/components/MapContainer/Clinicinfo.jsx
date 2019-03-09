import React, { PureComponent } from "react";

export default class ClinicInfo extends PureComponent {
  render() {
    // const { info } = this.props;
    const { name } = this.props;
    return (
      <div>
        <div>
          {name}
          <a
            target="_new"
            href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${name}`}
          >
            Wikipedia
          </a>
        </div>
        {/* <img width={240} src={info.image} /> */}
      </div>
    );
  }
}
