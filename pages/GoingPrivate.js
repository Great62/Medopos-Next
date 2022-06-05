import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import styles from "../styles/usAndYou.module.css";
import Head from "next/head";

function GoingPrivate() {
  return (
    <div className={styles["UsAndYou-container"]}>
      <Head>
        <title>Medopos - Health treatement overseas | Going private</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Learn more about going private with Medopos, the health service that provides you with treatment overseas allowing you to skip local waiting lists and get treated quickly"
        />
      </Head>
      <NavBar />
      <div className={styles["UsAndYou-text-container-going-private"]}>
        <div className={styles["UsAndYou-title"]}>
          Why go private? A short introduction to the International Medical
          Industry
        </div>
        <div className={styles["UsAndYou-paragraph"]}>
          Most people in the UK are treated by the NHS. The pathway is
          understood by all: referral by GP or arrival at A&E, followed by a
          waiting list. Private care is regarded in the same way as private
          education, there are no tax breaks for the money you save the state.
          The UK is unique in this regard. All other countries in Europe use a
          mix of state funded emergency medicine and private insurance. At
          present medical treatment abroad for Britons is restricted to the EHIC
          card, which only covers emergency treatment. While it is theoretically
          possible via what is known as the S2 route to get the cost of your
          treatment refunded by the NHS the hurdles are daunting. Only state
          hospitals are eligible, while the best clinics are excluded. We can
          try to help (it&aposs part of our agreement with you) but you need to
          be realistic and know that you will always be required to pay up front
          and that out of pocket expenses are never reimbursed. Fortunately
          there are options that don&apost cost an arm and a leg.
          <br />
          <br />
          In 2018, despite the &quotfree at the point of use&quot NHS model, 11%
          of elective surgeries were privately funded. If it was possible, the
          proportion today would be greater. This is despite the fact that
          private treatment in the UK is more expensive than in most European
          countries. The international medical market is growing fast. For some
          countries it makes an economic contribution comparable to tourism.
          Examples include countries as diverse as Mexico, Malaysia, Estonia,
          Hungary and Turkey. We also see countries beginning to specialise in
          particular medical tourism areas. State run healthcare systems are
          poorly designed to capture the benefits of specialisation, but private
          clinics can provide far more efficient, and safer, medical
          interventions. Specialisation allows for a higher throughput of
          patients and thereby lower costs.
          <br />
          <br />
          There are over 600,000 qualified nurses in the UK, but only 300,000 in
          the NHS. Staff turnover is high: about a third (100,000) leave each
          year. True, some return, after maternity leave for example. Vacancies
          run at about 40,000 so paradoxically the demand outstrips the
          (theoretically) large supply. While 300,000 nurses in Britain prefer
          not to work as nurses, this is not the case in Europe where staff
          retention is much better.
          <br />
          <br />
          It is not clear when the logjam of NHS patients can be cleared, or
          even if this is possible. New disinfection protocols, staff shortages
          and vaccine mandates may severely constrict the throughput of
          operating theatres. The government has allotted £5.4 billion for
          additional operations, but with five million on the waiting list that
          is a little over a thousand pounds per operation. There are few
          operations that don&apost cost significantly more. For example the
          commonest procedure, cataract removal, costs about £3,500 in the NHS
          internal market, about £4,000 privately in the UK. A gallstone
          operation runs to over £5,000 and another common operation, abdominal
          hernia repair, is a little under £2,000. Procedures requiring general
          anaesthetic cost upwards of £10,000. Inevitably there will be some
          hard choices. Some patients may find themselves perpetually behind the
          trauma or emergency cases. For chronic conditions private self-pay may
          be the only option to improve your quality of life. The good news is
          that the price can be less than half the figures quoted above.
          <br />
          <br />
          The physicians on our panels all speak good English, necessary to keep
          abreast of international developments in their field. They enjoy the
          advantage of setting their own prices in a market, and have resources
          tailored to demand, not a national budget. This leads to a faster and
          more efficient service. You may wonder why top class surgeons stay at
          home when they could earn a fortune in the US (or half a fortune in
          the NHS). Perhaps it&aposs because they enjoy their family and
          friends, their lower cost of living, their status in their community
          and the pleasure of following their vocation. Prices can vary wildly
          from clinic to clinic and from country to country. For example an
          operation in Poland might cost a tenth of the price in the USA and
          less than a fifth than in Switzerland. It is true that not all
          hospitals achieve even the minimum UK standards, but many exceed them.
          Finding the best care, the right combination of price, quality and
          timeliness is our job, and we thank you for choosing Compass Elective.
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GoingPrivate;
