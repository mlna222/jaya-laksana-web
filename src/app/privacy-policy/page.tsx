// src/app/privacy-policy/page.tsx
const PrivacyPolicyPage = () => {
    return (
      <main className="container mx-auto px-4 py-24 min-h-screen">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>
            This is a placeholder for your Privacy Policy.
          </p>
          <p>
            Please replace this content with your company's official privacy policy. A privacy policy is a legal document that discloses some or all of the ways a party gathers, uses, discloses, and manages a customer or client's data. It fulfills a legal requirement to protect a customer or client's privacy.
          </p>
          <p>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </main>
    );
  };
  
  export default PrivacyPolicyPage;
  