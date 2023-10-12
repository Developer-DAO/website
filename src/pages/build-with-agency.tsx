import { SEO } from '@gordo-d/d-d-ui-components/dist/utils';
import React, {useState, useEffect} from 'react';

type IAgencyRedirectProps = {}

const IAgencyRedirectDefaultProps = {}

const AgencyRedirect: React.FC<IAgencyRedirectProps> = (props) => {
  const {} = props;

  useEffect(() => {
    window.location.href = "https://airtable.com/appNP5rk00cAmDLUm/shrmaoyXneVOkRvw3";
  }, []);


  return (
    <React.Fragment>
              <SEO
        title="AGΞNCY ΞXPERTS"
        description="We are a collective venture builder curated from the best talent within Developer DAO. We aim to collectively build products and services for our clients and the web3 space."
        image="/RRSSAgency.png"
        url="https://agency.developerdao.com"
        twitterHandle="@ddweb3experts"
      />
    </React.Fragment>
  )
}

AgencyRedirect.defaultProps = IAgencyRedirectDefaultProps;

export default AgencyRedirect;