import React from 'react';

const Exam = () => {
  return (
    <div className="container row col-md-8" style={{ margin: 'auto', textAlign:'justify' }}>
      <section>
        <h3>General information about the exam:</h3>
        <ul>
            <li>The exam is a mixture of 65 multiple choice and multiple response questions. 50/65 affect your score while 15/65 are unscored. But you won't know which ones are scored or unscored.🤷‍♀️</li>
            <li>The exam is 90 minutes. In my opinion, it is a plenty of time!😌</li>
            <li>You need to get 700/1000 at minimum in order to pass the exam. However, it is pass/fail meaning you won't see your score after completing the exam but you will immediately see whether you passed or not.✅ ❌</li>
            <li>There are 4 domains in the current version (CLF-C02) of the exam.☁️
                <ol>
                    <li>Cloud Concepts (24% of scored content)</li>
                    <li>Security and Compliance (30% of scored content)</li>
                    <li>Cloud Technology and Services (34% of scored content)</li>
                    <li>Billing, Pricing, and Support (12% of scored content)</li>
                </ol>
            </li>
            <li>The exam costs $100 USD. Retaking or taking a different AWS cert exam is available at half the original price.💵</li>
            <li>The certification is valid for 3 years. After that, you can renew it by taking the current exam or a different AWS cert exam at a higher level. (Associate, Professional, or Specialty)🌟</li>
        </ul>
      </section>

      <section>
        <h3>Key concepts to know:</h3>
        <ul>
            <li>Explain the advantages of the AWS Cloud.</li>
            <li>Understand and explain the AWS shared responsibility model.</li>
            <li>Understand security best practices.</li>
            <li>Understand AWS Cloud costs, economics, and billing practices.</li>
            <li>Describe and position the core AWS services, including compute, network, database, and storage services.</li>
            <li>Identify AWS services for common use cases.</li>
        </ul>
      </section>

      <section>
        <h3>What are the prerequisites?</h3>
        <p>
          There are no formal prerequisites for the AWS Cloud Practitioner exam! However, having a basic understanding of cloud computing concepts and some familiarity with IT terminology are surely beneficial. But don’t feel discouraged if this doesn’t sound like you! Just get started and you will get there with enough study and practice!🎯
        </p>
      </section>

    </div>
  );
};

export default Exam;
