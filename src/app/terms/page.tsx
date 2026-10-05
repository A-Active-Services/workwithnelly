export default function Terms() {
  return (
    <>
      <style>{`:root{
    --navy-950:#131D38; --navy-900:#1E2F5A; --gold:#C9A227; --gold-dark:#9D7E1E;
    --cream:#F7F3EB; --ink:#22304D; --ink-soft:#4A4A4A; --line:#E7E7E7;
  }
  *{box-sizing:border-box;}
  body{margin:0;font-family:'Inter',sans-serif;color:var(--ink);background:var(--cream);line-height:1.7;}
  h1,h2{font-family:'Sora',sans-serif;letter-spacing:-0.02em;color:var(--navy-950);margin:0;}
  .wrap{max-width:760px;margin:0 auto;padding:64px 24px 100px;}
  a{color:var(--gold-dark);}
  .back{display:inline-block;margin-bottom:28px;font-family:'Sora',sans-serif;font-weight:600;font-size:14px;color:var(--navy-900);text-decoration:none;}
  .back:hover{color:var(--gold-dark);}
  h1{font-size:32px;margin-bottom:8px;}
  .updated{font-size:13.5px;color:var(--ink-soft);margin-bottom:40px;}
  h2{font-size:18px;margin-top:40px;margin-bottom:12px;}
  p,li{font-size:15.5px;color:var(--ink-soft);}
  ul{padding-left:20px;}
  .legal-block{margin-top:56px;padding-top:24px;border-top:1px solid var(--line);font-size:12.5px;color:var(--ink-soft);line-height:1.7;}`}</style>
      <div dangerouslySetInnerHTML={{ __html: `<div className="wrap">
  <a className="back" href="/">&larr; Back to workwithnelly.com</a>
  <h1>Terms of Use</h1>
  <p className="updated">Last updated September 2026</p>

  <p>By using this website, operated by Nelly Santiesteban, Mortgage Loan Officer (NMLS #1808120), affiliated with ACE Florida Mortgage (Company NMLS #2384013), you agree to the following terms.</p>

  <h2>Informational Purposes Only</h2>
  <p>The content on this site, including the payment estimator, loan program descriptions, and process overview, is provided for general informational purposes only. It is not a loan quote, pre-approval, or commitment to lend, and does not constitute financial, legal, or tax advice.</p>

  <h2>Payment Estimator</h2>
  <p>The payment estimator calculates an approximate principal-and-interest payment only. It does not include property taxes, homeowners insurance, mortgage insurance, HOA fees, or other applicable costs, and actual payments, rates, and terms will vary based on individual qualification.</p>

  <h2>Third-Party Links</h2>
  <p>This site links to third-party services, including a secure loan application portal (my1003app.com) and social media platforms. We are not responsible for the content, accuracy, or privacy practices of those third-party sites.</p>

  <h2>Licensing</h2>
  <p>Nelly Santiesteban is a licensed Mortgage Loan Officer in the state of Florida, NMLS #1808120, operating through ACE Florida Mortgage, Company NMLS #2384013. Equal Housing Opportunity.</p>

  <h2>Changes to These Terms</h2>
  <p>These terms may be updated from time to time. Continued use of this site after changes are posted constitutes acceptance of the updated terms.</p>

  <h2>Contact</h2>
  <p>Nelly Santiesteban, Mortgage Loan Officer<br>
  NMLS #1808120<br>
  Phone: <a href="tel:+17862865906">786.286.5906</a><br>
  Email: <a href="mailto:workwithnelly1@gmail.com">workwithnelly1@gmail.com</a></p>

  <div className="legal-block">
    Nelly C. Santiesteban, Mortgage Loan Officer, NMLS #1808120. ACE Florida Mortgage, Company NMLS #2384013. Equal Housing Opportunity. This site is for informational purposes only and is not a commitment to lend. Rates, terms, and loan programs are subject to change and individual qualification. Licensed in Florida.
  </div>
</div>` }} />
    </>
  );
}