import React, {Component} from 'react';
import Button from '../atoms/Button';
import Link from '../atoms/Link';

export default class VerifyEmail extends Component {
	constructor(props) {
		super();
		document.getElementById('body').classList = 'theme--light';
	}
	render() {
		return (
			<div className='col-12 d-flex align-items-center justify-content-center'>
				<div className='uxt-panel uxt-form--verify'>
					<h2 className='heading-secondary'>Almost there?</h2>
					<p className='mb-5 txt-secondary'>Enter the ACTIVATION CODE we just sent on your email.</p>
					<form className='uxt-form' method='POST' action='/login'>
						<div className='form-group'>
							<label className='uxt-form--label' htmlFor='verification-code'>
								Activation Code
							</label>
							<input
								type='number'
								className='form-control uxt-form--input'
								id='verification-code'
								aria-describedby='verificationCode'
								placeholder='e.g.4ckjsd5ad63getg75s'
							/>
						</div>
						{/* TODO: Button Loading state with three animated dots */}
						<div className='form-group text-center mb-5'>
							<Button type='submit' value='Verify and Start Learning' primary block />
						</div>
						<div className='form-group text-center'>
							<p className='txt-secondary d-inline-block m-0'>
								Didn't receive your code?
								<Link text='Resend' cssClass='ml-1 txt-secondary' href='/#' />
							</p>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
