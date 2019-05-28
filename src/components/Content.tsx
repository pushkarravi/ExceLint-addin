import * as React from 'react';
import { Button, ButtonType } from 'office-ui-fabric-react';
// Checkbox

export interface ContentProps {
	message1: string;
	buttonLabel1: string;
	click1: any;
	message2: string;
	buttonLabel2: string;
	click2: any;
	message3: string;
	buttonLabel3: string;
	click3: any;
	message4: string;
	buttonLabel4: string;
	click4: any;
//	message5: string;
//	buttonLabel5: string;
//	click5: any;
}

export class Content extends React.Component<ContentProps, any> {
	constructor(props, context) {
		super(props, context);
	}
	// <p>{this.props.message}</p>

	render() {
		return (
			<div id='content-main'>
				<div className='padding'>
					<Button className='normal-button' buttonType={ButtonType.hero} onClick={this.props.click1}>{this.props.buttonLabel1}</Button>
					<Button className='ms-button' buttonType={ButtonType.hero} onClick={this.props.click2}>{this.props.buttonLabel2}</Button>
				</div>
				<div className='padding'>
					<Button className='normal-button' buttonType={ButtonType.hero} onClick={this.props.click3}>{this.props.buttonLabel3}</Button>
					<Button className='ms-button' buttonType={ButtonType.hero} onClick={this.props.click4}>{this.props.buttonLabel4}</Button>
				</div>
				<br />
				Click on <a onClick={this.props.click1}><b>Reveal Structure</b></a> to reveal the underlying structure of the spreadsheet.
				Different formulas are assigned different colors, making it easy to spot inconsistencies or to audit a spreadsheet for correctness.
		<br />
				<br />

				<svg width="300" height="20">
					<rect x="0" y="0" width="50" height="20" fill="lightblue" />
					<text x="55" y="13">formulas (pastel colors)</text>
			</svg>
				<svg width="300" height="20">
					<rect x="0" y="0" width="50" height="20" fill="#d3d3d3" />
			<text x="55" y="13">data used by some formula (gray)</text>
				</svg>
				<br />
				<svg width="300" height="20">
					<rect x="0" y="0" width="50" height="20" fill="#eed202" />
			<text x="55" y="13">data not used by ANY formula (yellow)</text>
				</svg>
				<br />
			<br />
			<div className='ExceLint-scrollbar'>
			</div>

				<br />
				<small>For more information, see <a href="https://excelint.org">excelint.org</a>.
                </small>
				<br />
			</div>
		);
	}
}
