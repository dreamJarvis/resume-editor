/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersonalInfo } from "./components/resumeInfo/PersonalInfo";
import { EducationalInfo } from "./components/resumeInfo/EducationalInfo";
import { EmploymentInfo } from "./components/resumeInfo/employment/EmploymentInfo";
import { ProjectsInfo } from "./components/resumeInfo/ProjectsInfo";
import { SkillsInfo } from "./components/resumeInfo/SkillsInfo";
import { ViewResume } from "./components/resumeInfo/ViewResume";
import { PageNotFound } from "./Errors/PageNotFound";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <PageNotFound />,
		children: [
			{
				path: "/personal",
				element: <PersonalInfo />,
			},
			{
				path: "/educational",
				element: <EducationalInfo />,
			},
			{
				path: "/employment",
				element: <EmploymentInfo />,
			},
			{
				path: "/projects",
				element: <ProjectsInfo />,
			},
			{
				path: "/skills",
				element: <SkillsInfo />,
			},
			{
				path: "/view_resume",
				element: <ViewResume />,
			},
		],
	},
]);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={appRouter} />
		</Provider>
	</React.StrictMode>
);
