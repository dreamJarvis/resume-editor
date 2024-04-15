/** @format */

import { IPersonalInfo } from "../../services/types";

export const getTotalExperienceInMonths = (
	leavingDate: Date,
	joiningDate: Date
) => {
	const totalDurationOfMonths =
		(leavingDate ? leavingDate.getMonth() : 0) + (12 - joiningDate?.getMonth());
	const totalDurationYears = Math.floor(totalDurationOfMonths / 12);

	let totalEmploymentDurationMonths = Math.floor(totalDurationOfMonths % 12);
	const totalEmploymentDurationYears =
		(leavingDate ? leavingDate.getFullYear() : 0) -
		joiningDate?.getFullYear() -
		1 +
		totalDurationYears;

	totalEmploymentDurationMonths += 12 * totalEmploymentDurationYears;

	return totalEmploymentDurationMonths;
};

export const getInitializedPersonalData = (
	personalInfo: IPersonalInfo
): IPersonalInfo => {
	return {
		about: personalInfo.about ?? "",
		firstName: personalInfo.firstName ?? "",
		lastName: personalInfo.lastName ?? "",
		image: "",
		dob: personalInfo.dob ?? new Date(),
		availableToJoin: personalInfo.availableToJoin ?? "",
		address: {
			street: personalInfo.address.street ?? "",
			city: personalInfo.address.city ?? "",
			state: personalInfo.address.state ?? "",
			pincode: personalInfo.address.pincode ?? "",
		},
		email: personalInfo.email ?? "",
		contactNumbers: {
			contactPhoneNumber: personalInfo.contactNumbers.contactPhoneNumber ?? "",
			workPhoneNumber: personalInfo.contactNumbers.workPhoneNumber ?? "",
			homeNumber: personalInfo.contactNumbers.homeNumber ?? "",
		},
		additionalInfo: {
			linkedIn: personalInfo.additionalInfo.linkedIn ?? "",
			portfolio: personalInfo.additionalInfo.portfolio ?? "",
			github: personalInfo.additionalInfo.github ?? "",
		},
	};
};
