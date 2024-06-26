/** @format */

import { Box } from "@mui/material";
import { IProjectInfo } from "../../../services/types";
import { ProjectInfoModal } from "./ProjectInfoModal";
import { useState } from "react";
import { ACTION_TYPE, EDIT_MODAL_ACTION_TYPE } from "../../utils/constants";
import { EditModal } from "../../common/EditModal";

export const ProjectInfoView = ({
	projectInfo,
	showEdit,
}: {
	projectInfo: IProjectInfo;
	showEdit: string;
}) => {
	const {
		projectTitle,
		projectAssociation,
		client,
		projectStatus,
		started,
		completed,
		projectDetails,
		skillsUsed,
		liveLink,
		repositoryLink,
	} = projectInfo;

	const [openProjectModal, setOpenProjectModal] = useState(false);

	return (
		<div className='employment-info'>
			<Box className='flex flex-col items-start bg-slate-200 p-2 mt-2 mb-3 shadow-md'>
				<div className='employment-info-job-title mt-2 flex flex-row w-[100%]'>
					<div className='text-center text-gray-600 text-pretty text-lg basis-5/6 w-[100%] flex flex-col items-start'>
						<h1>
							{projectTitle} ({projectStatus})
						</h1>
					</div>
					{showEdit === EDIT_MODAL_ACTION_TYPE.visible && (
						<EditModal
							openModal={openProjectModal}
							setOpenModal={setOpenProjectModal}>
							<ProjectInfoModal
								actionType={ACTION_TYPE.edit}
								closeModal={setOpenProjectModal}
								projectInfo={projectInfo}
							/>
						</EditModal>
					)}
				</div>
				<div className='employment-info-company-name mt-1'>
					<b>{client}</b>
				</div>
				<div className='employment-info-duration mt-1'>
					<small>
						{new Date(started).getFullYear()} to{" "}
						{new Date(completed).getFullYear()}
					</small>{" "}
					| <small>{projectAssociation}</small>
				</div>
				<div className='employment-info-job-profile flex text-start mt-2'>
					<p className='font-sans text-gray-600 text-pretty text-sm'>
						<a href={liveLink}>live</a> | <a href={repositoryLink}>repo</a>
					</p>
				</div>
				<div className='employment-info-job-profile flex text-start mt-2'>
					<p className='font-sans text-gray-600 text-pretty text-sm'>
						{projectDetails}
					</p>
				</div>
				<div className='employment-info-job-profile flex text-start mt-2'>
					<small className='font-sans text-gray-800 text-pretty text-sm'>
						skills : {skillsUsed.join()}
					</small>
				</div>
			</Box>
		</div>
	);
};
