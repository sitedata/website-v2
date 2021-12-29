import * as React from "react"
import { Link } from 'gatsby';

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import MembersGrid from "../components/MembersGrid"
import { shuffle } from '../util/shuffle';

import Members from '../json/members.json';

let strategicMembers = [];
let enterpriseMembers = [];
let participantMembers = [];

for (let member of Members) {
	switch(member.tier) {
		case 'strategic':
			strategicMembers.push(member);
			break;
		case 'enterprise':
			enterpriseMembers.push(member);
			break;
		case 'participant':
			participantMembers.push(member);
			break;
		default:
			break;
	}
}

// Randomly mix up members logos
shuffle(strategicMembers);
shuffle(enterpriseMembers);
shuffle(participantMembers);

const MembersPage = () => (
  <Layout>
    <Seo title="Working Group Members" />
	<section className="py-5 text-center container">
		<div className="row py-lg-5">
			<div className="col-lg-8 col-md-8 mx-auto">
				<h1 className="fw-light">Working Group Members</h1>
				<h2 className="pt-5">Strategic Members</h2>
				<p>Strategic Members are organizations that view Adoptium working group managed technology as critical to their organization’s future, and are investing significant resources to sustain and define the core activities that are the responsibility of the working group.</p>
				<MembersGrid
					members={strategicMembers}
				/>
				<h2 className="pt-5">Enterprise Members</h2>
				<p>Enterprise Members are typically organizations that view the Adoptium working group managed technology as a critical part of their organization's business operations. These organizations want to influence the direction and support the development of a runtime technology ecosystem through Eclipse Adoptium.</p>
				<MembersGrid
					members={enterpriseMembers}
				/>
				<h2 className="pt-5">Participant Members</h2>
				<p>Participant Members are typically organizations that deliver products or services based on Adoptium technology. These organizations want to participate in the evolution of the Eclipse Adoptium ecosystem to ensure it continues to meet their needs.</p>
				<MembersGrid
					members={participantMembers}
				/>
				<Link to="/join" className="btn btn-lg btn-primary mt-5">Want to Join?</Link>
			</div>
		</div>
    </section>
  </Layout>
)

export default MembersPage