/** @format */

import { Button, Paper, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { addPersonalData } from "../../../services/resumeData";
import { useReducer } from "react";
import { IPersonalInfo } from "../../../services/types";
import { getInitializedPersonalData } from "../../utils/common";

export const ACTIONS = {
	ADD_PERSONAL: "add-personal-info",
	ADD_ADDRESS: "add-address-info",
	ADD_CONTACT: "add-contact-details",
	ADD_ADDITONAL: "add-additional-info",
	UPDATE: "add-personal-info",
};

const reducer = (state: IPersonalInfo, action: { type: any; payload: {} }) => {
	switch (action.type) {
		case ACTIONS.ADD_PERSONAL:
			return { ...state, ...action.payload };
		case ACTIONS.ADD_ADDRESS:
			return { ...state, address: { ...state.address, ...action.payload } };
		case ACTIONS.ADD_CONTACT:
			return {
				...state,
				contactNumbers: { ...state.contactNumbers, ...action.payload },
			};
		case ACTIONS.ADD_ADDITONAL:
			return {
				...state,
				additionalInfo: { ...state.additionalInfo, ...action.payload },
			};
		default:
			return state;
	}
};

export const PersonalInfoModal = ({
	setOpenPersonalInfoModal,
}: {
	setOpenPersonalInfoModal: Function;
}) => {
	const personalInfo = useSelector((state: RootState) => state.personalDetails);
	const dispatch = useDispatch();
	const [personalData, dispatchPersonalData] = useReducer(
		reducer,
		getInitializedPersonalData(personalInfo)
	);

	const addPersonalInfo = () => {
		const updatedPersonalData = {
			about: personalData.about,
			firstName: personalData.firstName,
			lastName: personalData.lastName,
			dob: personalData.dob,
			email: personalData.email,
			availableToJoin: personalData.availableToJoin,
			address: personalData.address,
			contactNumbers: personalData.contactNumbers,
			additionalInfo: personalData.additionalInfo,
		};
		dispatch(addPersonalData(updatedPersonalData));
		setOpenPersonalInfoModal(false);
	};

	return (
		<div className='personal-info'>
			<form className='flex flex-row justify-center mt-32'>
				<Paper
					elevation={2}
					className='w-5/6 justify-center text-center items-center'>
					<div className='personal-info flex flex-col justify-center mt-5 mb-4 items-center'>
						<div className='personal-info flex justify-center mt-12 mb-4 w-[70%]'>
							<div className='first-name m-2'>
								<TextField
									id='first-name'
									label='First Name'
									variant='outlined'
									value={personalData.firstName}
									onChange={(e) => {
										dispatchPersonalData({
											type: ACTIONS.ADD_PERSONAL,
											payload: { firstName: e.target.value },
										});
									}}
									required
								/>
							</div>
							<div className='last-name m-2'>
								<TextField
									id='last-name'
									label='Last Name'
									value={personalData.lastName}
									onChange={(e) => {
										dispatchPersonalData({
											type: ACTIONS.ADD_PERSONAL,
											payload: { lastName: e.target.value },
										});
									}}
									required
									variant='outlined'
								/>
							</div>
							<div className='dob m-2'>
								<TextField
									id='dob'
									required
									onChange={(e) => {
										dispatchPersonalData({
											type: ACTIONS.ADD_PERSONAL,
											payload: { dob: new Date(e.target.value) },
										});
									}}
									type='date'
									variant='outlined'
									value={personalData.dob}
								/>
							</div>
						</div>
						<div className='personal-address flex flex-wrap justify-center mb-4 w-[70%]'>
							<div className='address-1 m-2'>
								<TextField
									id='address-1'
									label='address'
									onChange={(e) => {
										dispatchPersonalData({
											type: ACTIONS.ADD_ADDRESS,
											payload: { street: e.target.value },
										});
									}}
									required
									variant='outlined'
									value={personalData.address.street}
								/>
							</div>
							<div className='city m-2'>
								<TextField
									id='city'
									label='city'
									onChange={(e) => {
										dispatchPersonalData({
											type: ACTIONS.ADD_ADDRESS,
											payload: { city: e.target.value },
										});
									}}
									required
									variant='outlined'
									value={personalData.address.city}
								/>
							</div>
							<div className='state m-2'>
								<TextField
									id='state'
									label='state'
									required
									onChange={(e) => {
										dispatchPersonalData({
											type: ACTIONS.ADD_ADDRESS,
											payload: { state: e.target.value },
										});
									}}
									variant='outlined'
									value={personalData.address.state}
								/>
							</div>
							<div className='pincode m-2'>
								<TextField
									id='pincode'
									label='pincode'
									type='number'
									required
									variant='outlined'
									onChange={(e) => {
										dispatchPersonalData({
											type: ACTIONS.ADD_ADDRESS,
											payload: { pincode: e.target.value },
										});
									}}
									value={personalData.address.pincode}
								/>
							</div>
							<div className='pincode m-2'>
								<TextField
									id='email'
									label='email'
									type='email'
									onChange={(e) => {
										dispatchPersonalData({
											type: ACTIONS.ADD_PERSONAL,
											payload: { email: e.target.value },
										});
									}}
									required
									variant='outlined'
									value={personalData.email}
								/>
							</div>
							<div className='pincode m-2'>
								<TextField
									id='availabel to join'
									label='availability'
									type='text'
									onChange={(e) => {
										dispatchPersonalData({
											type: ACTIONS.ADD_PERSONAL,
											payload: { availableToJoin: e.target.value },
										});
									}}
									required
									variant='outlined'
									value={personalData.availableToJoin}
								/>
							</div>
						</div>
						<div className='personal-number flex flex-wrap justify-center mb-4 w-[70%]'>
							<div className='contact-number m-2'>
								<TextField
									id='phone-number'
									label='Contact Number'
									type='tel'
									onChange={(e) => {
										dispatchPersonalData({
											type: ACTIONS.ADD_CONTACT,
											payload: { contactPhoneNumber: e.target.value },
										});
									}}
									required
									variant='outlined'
									value={personalData.contactNumbers.contactPhoneNumber}
								/>
							</div>
							<div className='work-number m-2'>
								<TextField
									id='work-number'
									label='Work Number'
									type='tel'
									onChange={(e) => {
										dispatchPersonalData({
											type: ACTIONS.ADD_CONTACT,
											payload: { workPhoneNumber: e.target.value },
										});
									}}
									variant='outlined'
									value={personalData.contactNumbers.workPhoneNumber}
								/>
							</div>
							<div className='home-number m-2'>
								<TextField
									id='home-number'
									label='Home Number'
									type='tel'
									variant='outlined'
									value={personalData.contactNumbers.homeNumber}
									onChange={(e) => {
										dispatchPersonalData({
											type: ACTIONS.ADD_CONTACT,
											payload: { homeNumber: e.target.value },
										});
									}}
								/>
							</div>
						</div>
						<div className='socials flex flex-wrap justify-center mb-4 w-[70%]'>
							<div className='linkedIn m-2'>
								<TextField
									id='linkedin'
									label='LinkedIn'
									type='text'
									variant='outlined'
									value={personalData.additionalInfo.linkedIn}
									onChange={(e) => {
										dispatchPersonalData({
											type: ACTIONS.ADD_ADDITONAL,
											payload: { linkedIn: e.target.value },
										});
									}}
									required
								/>
							</div>
							<div className='github m-2'>
								<TextField
									id='github'
									label='github'
									type='text'
									variant='outlined'
									value={personalData.additionalInfo.portfolio}
									onChange={(e) => {
										dispatchPersonalData({
											type: ACTIONS.ADD_ADDITONAL,
											payload: { portfolio: e.target.value },
										});
									}}
									required
								/>
							</div>
							<div className='portfolio m-2'>
								<TextField
									id='portfolio'
									label='portfolio'
									type='text'
									value={personalData.additionalInfo.github}
									onChange={(e) => {
										dispatchPersonalData({
											type: ACTIONS.ADD_ADDITONAL,
											payload: { github: e.target.value },
										});
									}}
									variant='outlined'
								/>
							</div>
						</div>
						<div className='personal-info flex justify-center mb-4 w-[70%]'>
							<div className='first-name m-2 w-[88%]'>
								<TextField
									id='about-yourselg'
									multiline
									label='about yourself'
									variant='outlined'
									value={personalData.about}
									onChange={(e) => {
										dispatchPersonalData({
											type: ACTIONS.ADD_PERSONAL,
											payload: { about: e.target.value },
										});
									}}
									fullWidth
									placeholder='tell us about yourself...'
									required
								/>
							</div>
						</div>
						<div className='employment-type w-full flex flex-row justify-center mb-6 mt-7'>
							<Button
								variant='contained'
								color='primary'
								onClick={addPersonalInfo}
								sx={{ marginRight: "2rem" }}>
								Add
							</Button>
							<Button
								variant='contained'
								color='error'
								onClick={() => setOpenPersonalInfoModal(false)}>
								Close
							</Button>
						</div>
					</div>
				</Paper>
			</form>
		</div>
	);
};
