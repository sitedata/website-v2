import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import MembersGrid from "../components/MembersGrid"
import { shuffle } from '../util/shuffle';

import Members from '../json/members.json';

let sponsors = [];

for (let member of Members) {
	switch(member.tier) {
		case 'sponsor':
			sponsors.push(member);
			break;
		default:
			break;
	}
}

  // Randomly mix up members logos
  shuffle(sponsors);

const SponsorsPage = () => (
  <Layout>
    <Seo title="Sponsors" />
	<section className="py-5 text-center container">
		<div className="row py-lg-5">
			<div className="col-lg-8 col-md-8 mx-auto">
				<h1 className="fw-light">Sponsors</h1>
				<p>Additionally to our Working Group Members Adoptium is proud to receive financial donations (both one-off and regularly) from the following companies.</p>
				<MembersGrid
					members={sponsors}
				/>
				<a target="_blank" href="https://www.eclipse.org/org/workinggroups/sponsorship/working-group-sponsorship-agreement.pdf" className="btn btn-lg btn-primary mt-5">Want to become a Sponsor?</a>
			</div>
		</div>
    </section>
  </Layout>
)

export default SponsorsPage