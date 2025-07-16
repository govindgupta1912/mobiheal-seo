import React from "react";
import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  return (
    <>

     <Helmet>
            <title>MobiHeal - Terms of Service</title>
            <meta name="description" content="Secure and scalable MDM solution for enterprises." />
            <meta property="og:title" content="MobiHeal - Terms of Service" />
            <meta property="og:description" content="Protect and manage your mobile workforcte:- terms of services." />
          </Helmet>
     <div className="bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 font-sans min-h-screen py-16 px-4 sm:px-8 md:px-12 lg:px-20 max-w-6xl mx-auto shadow-lg rounded-xl my-8">
      <style>{`
        .text-primary {
          color: #03a9fc; /* Your primary color */
        }
        .text-secondary {
          color: #0285c7; /* Your secondary color */
        }
        .border-primary-light {
          border-color: rgba(3, 169, 252, 0.3); /* Lighter primary for borders */
        }
        .text-blue-600 {
          color: #03a9fc; /* Overriding Tailwind's default blue for links to your primary */
        }
        .hover\:text-blue-800:hover {
          color: #0285c7; /* Overriding Tailwind's default blue hover for links to your secondary */
        }
      `}</style>
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-primary mb-4 tracking-tight">Terms of Service</h1>
        <p className="text-md text-gray-600">Last updated: <span className="font-semibold">November 14, 2023</span></p>
      </header>

      <article className="space-y-10 leading-relaxed text-lg text-gray-700">
        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Agreement to Our Legal Terms</h2>
          <p className="mb-4">
            We are **Mobisec Technologies Pvt. Ltd** ("Company," "we," "us," "our"), a company registered in India at F-200, FF, Phase-1, New Palam Vihar, Sec-110, Gurugram, Haryana 122017.
          </p>
          <p className="mb-4">
            We operate the website <a href="https://mobiheal.in" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">https://mobiheal.in</a> (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
          </p>
          <p className="mb-4">
            You can contact us by phone at +91-11-6926-8029, email at <a href="mailto:contact@mobisec.in" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">contact@mobisec.in</a>, or by mail to F-200, FF, Phase-1, New Palam Vihar, Sec-110, Gurugram, Haryana 122017, India.
          </p>
          <p className="mb-4">
            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and **Mobisec Technologies Pvt. Ltd**, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. **If you do not agree with all of these legal terms, then you are expressly prohibited from using the services and you must discontinue use immediately.** Users will be notified of any changes to our Legal Terms through our website.
          </p>
          <p className="mb-4">
            The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
          </p>
          <p>
            We recommend that you print a copy of these Legal Terms for your records.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Table of Contents</h2>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Our Services</li>
            <li>Intellectual Property Rights</li>
            <li>User Representations</li>
            <li>User Registration</li>
            <li>Purchases and Payment</li>
            <li>Free Trial</li>
            <li>Cancellation</li>
            <li>Prohibited Activities</li>
            <li>User Generated Contributions</li>
            <li>Contribution License</li>
            <li>Services Management</li>
            <li>Privacy Policy</li>
            <li>Term and Termination</li>
            <li>Modifications and Interruptions</li>
            <li>Governing Law</li>
            <li>Dispute Resolution</li>
            <li>Corrections</li>
            <li>Disclaimer</li>
            <li>Limitations of Liability</li>
            <li>Indemnification</li>
            <li>User Data</li>
            <li>Electronic Communications, Transactions, and Signatures</li>
            <li>Miscellaneous</li>
            <li>Contact Us</li>
          </ul>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Our Services</h2>
          <p>
            The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Intellectual Property Rights</h2>

          <h3 className="text-2xl font-semibold text-secondary mb-3">Our intellectual property</h3>
          <p className="mb-4">
            We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
          </p>
          <p className="mb-4">
            Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
          </p>
          <p>
            The Content and Marks are provided in or through the Services "AS IS" for your internal business purpose only.
          </p>

          <h3 className="text-2xl font-semibold text-secondary mt-6 mb-3">Your use of our Services</h3>
          <p className="mb-4">
            Subject to your compliance with these Legal Terms, including the **"PROHIBITED ACTIVITIES"** section below, we grant you a non-exclusive, non-transferable, revocable license to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 mb-4">
            <li>Access the Services; and</li>
            <li>Download or print a copy of any portion of the content to which you have properly gained access solely for your internal business purpose.</li>
          </ul>
          <p className="mb-4">
            Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
          </p>
          <p className="mb-4">
            If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: <a href="mailto:contact@mobisec.in" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">contact@mobisec.in</a>. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
          </p>
          <p className="mb-4">
            We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
          </p>
          <p>
            Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
          </p>

          <h3 className="text-2xl font-semibold text-secondary mt-6 mb-3">Your submissions</h3>
          <p className="mb-4">
            Please review this section and the **"PROHIBITED ACTIVITIES"** section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.
          </p>
          <p className="mb-4">
            **Submissions:** By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
          </p>
          <p className="mb-4">
            **You are responsible for what you post or upload:** By sending us submissions through any part of the Services you:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 mb-4">
            <li>confirm that you have read and agree with our **"PROHIBITED ACTIVITIES"** and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</li>
            <li>to the extent permissible by applicable law, waive any and all moral rights to any such Submission;</li>
            <li>warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and</li>
            <li>warrant and represent that your Submissions do not constitute confidential information.</li>
          </ul>
          <p className="mb-4">
            You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party's intellectual property rights, or (c) applicable law.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">User Representations</h2>
          <p className="mb-4">By using the Services, you represent and warrant that:</p>
          <ul className="list-disc list-inside space-y-2 pl-4 mb-4">
            <li>all registration information you submit will be true, accurate, current, and complete;</li>
            <li>you will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
            <li>you have the legal capacity and you agree to comply with these Legal Terms;</li>
            <li>you are not a minor in the jurisdiction in which you reside;</li>
            <li>you will not access the Services through automated or non-human means, whether through a bot, script or otherwise;</li>
            <li>you will not use the Services for any illegal or unauthorized purpose; and</li>
            <li>your use of the Services will not violate any applicable law or regulation.</li>
          </ul>
          <p>
            If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">User Registration</h2>
          <p>
            You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Purchases and Payment</h2>
          <p className="mb-4">We accept the following forms of payment:</p>
          <ul className="list-disc list-inside space-y-1 pl-4 mb-4">
            <li>Visa</li>
            <li>Mastercard</li>
          </ul>
          <p className="mb-4">
            You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in INR.
          </p>
          <p className="mb-4">
            You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
          </p>
          <p>
            We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Free Trial</h2>
          <p>
            We offer a 14-day free trial to new users who register with the Services. The account will not be charged and the subscription will be suspended until upgraded to a paid version at the end of the free trial.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Cancellation</h2>
          <p className="mb-4">
            All purchases are non-refundable. You can cancel your subscription at any time by contacting us using the contact information provided below. Your cancellation will take effect at the end of the current paid term.
          </p>
          <p>
            If you are unsatisfied with our Services, please email us at <a href="mailto:contact@mobisec.in" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">contact@mobisec.in</a> or call us at <a href="tel:+91-11-6926-8029" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">+91-11-6926-8029</a>.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Prohibited Activities</h2>
          <p className="mb-4">
            You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </p>
          <p className="mb-4">As a user of the Services, you agree not to:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
            <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
            <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
            <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
            <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
            <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
            <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
            <li>Engage in unauthorized framing of or linking to the Services.</li>
            <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
            <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
            <li>Delete the copyright or other proprietary rights notice from any Content.</li>
            <li>Attempt to impersonate another user or person or use the username of another user.</li>
            <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1x1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").</li>
            <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
            <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
            <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
            <li>Copy or adapt the Services software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
            <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
            <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</li>
            <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
            <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
            <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
            <li>Use the Services to advertise or offer to sell goods and services.</li>
            <li>Sell or otherwise transfer your profile.</li>
          </ul>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">User Generated Contributions</h2>
          <p className="mb-4">
            The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Services' Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
            <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
            <li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
            <li>Your Contributions are not false, inaccurate, or misleading.</li>
            <li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
            <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li>
            <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
            <li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li>
            <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
            <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
            <li>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</li>
            <li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
            <li>Your Contributions do not violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.</li>
          </ul>
          <p className="mt-4">
            Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Contribution License</h2>
          <p className="mb-4">
            You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings). By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
          </p>
          <p>
            We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Services Management</h2>
          <p className="mb-4">We reserve the right, but not the obligation, to:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>monitor the Services for violations of these Legal Terms;</li>
            <li>take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities;</li>
            <li>in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof;</li>
            <li>in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and</li>
            <li>otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.</li>
          </ul>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Privacy Policy</h2>
          <p className="mb-4">
            We care about data privacy and security. Please review our Privacy Policy: <a href="https://mobiheal.in/privacy_policy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">https://mobiheal.in/privacy_policy/</a> By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in India.
          </p>
          <p>
            If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in India, then through your continued use of the Services, you are transferring your data to India, and you expressly consent to have your data transferred to and processed in India.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Term and Termination</h2>
          <p className="mb-4">
            These Legal Terms shall remain in full force and effect while you use the Services. Without limiting any other provision of these legal terms, we reserve the right to, in our sole discretion and without notice or liability, deny access to and use of the services (including blocking certain IP addresses), to any person for any reason or for no reason, including without limitation for breach of any representation, warranty, or covenant contained in these legal terms or of any applicable law or regulation. We may terminate your use or participation in the services or delete your account and any content or information that you posted at any time, without warning, at our sole discretion.
          </p>
          <p>
            If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Modifications and Interruptions</h2>
          <p className="mb-4">
            We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
          </p>
          <p>
            We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Governing Law</h2>
          <p>
            These Legal Terms shall be governed by and defined following the laws of India. **Mobisec Technologies Pvt. Ltd** and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Dispute Resolution</h2>
          <p>
            You agree to irrevocably submit all disputes related to these Legal Terms or the legal relationship established by these Legal Terms to the jurisdiction of the India courts. **Mobisec Technologies Pvt. Ltd** shall also maintain the right to bring proceedings as to the substance of the matter in the courts of the country where you reside or, if these Legal Terms are entered into in the course of your trade or profession, the state of your principal place of business.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Corrections</h2>
          <p>
            There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Disclaimer</h2>
          <p className="mb-4">
            The services are provided on an as-is and as-available basis. You agree that your use of the services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the services and your use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We make no warranties or representations about the accuracy or completeness of the services' content or the content of any websites or mobile applications linked to the services and we will assume no liability or responsibility for any:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 mb-4">
            <li>errors, mistakes, or inaccuracies of content and materials,</li>
            <li>personal injury or property damage, of any nature whatsoever, resulting from your access to and use of the services,</li>
            <li>any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information stored therein,</li>
            <li>any interruption or cessation of transmission to or from the services,</li>
            <li>any bugs, viruses, trojan horses, or the like which may be transmitted to or through the services by any third party, and/or</li>
            <li>any errors or omissions in any content and materials or for any loss or damage of any kind incurred as a result of the use of any content posted, transmitted, or otherwise made available via the services.</li>
          </ul>
          <p>
            We do not warrant, endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party through the services, any hyperlinked website, or any website or mobile application featured in any banner or other advertising, and we will not be a party to or in any way be responsible for monitoring any transaction between you and any third-party providers of products or services. As with the purchase of a product or service through any medium or in any environment, you should use your best judgment and exercise caution where appropriate.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Limitations of Liability</h2>
          <p>
            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the services, even if we have been advised of the possibility of such damages. Notwithstanding anything to the contrary contained herein, our liability to you for any cause whatsoever and regardless of the form of the action, will at all times be limited to the amount paid, if any, by you to us during the six (6) month period prior to any cause of action arising. Certain state laws and international laws do not allow limitations on implied warranties or the exclusion or limitation of certain damages. if these laws apply to you, some or all of the above disclaimers or limitations may not apply to you, and you may have additional rights.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Indemnification</h2>
          <p className="mb-4">
            You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 mb-4">
            <li>use of the Services;</li>
            <li>breach of these Legal Terms;</li>
            <li>any breach of your representations and warranties set forth in these Legal Terms;</li>
            <li>your violation of the rights of a third party, including but not limited to intellectual property rights; or</li>
            <li>any overt harmful act toward any other user of the Services with whom you connected via the Services.</li>
          </ul>
          <p>
            Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">User Data</h2>
          <p>
            We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Electronic Communications, Transactions, And Signatures</h2>
          <p className="mb-4">
            Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. **You hereby agree to the use of electronic signatures, contracts, orders, and other records, and to electronic delivery of notices, policies, and records of transactions initiated or completed by us or via the services.** You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Miscellaneous</h2>
          <p>
            These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary-light pb-2">Contact Us</h2>
          <p className="mb-4">In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
          <address className="not-italic mb-4 pl-4">
            <p>Mobisec Technologies Pvt. Ltd</p>
            <p>F-200, FF, Phase-1, New Palam Vihar, Sec-110</p>
            <p>Gurugram, Haryana 122017 India</p>
          </address>
          <ul className="list-disc list-inside pl-4">
            <li>Phone: <a href="tel:+91-11-6926-8029" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">+91-11-6926-8029</a></li>
            <li>By Email: <a href="mailto:contact@mobisec.in" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">contact@mobisec.in</a></li>
          </ul>
        </section>
      </article>
    </div>
    </>
   
  );
};

export default TermsOfService;