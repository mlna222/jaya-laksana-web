// src/app/terms-of-service/page.tsx
const TermsOfServicePage = () => {
    return (
      <main className="container mx-auto px-4 py-24 min-h-screen">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>
            This is a placeholder for your Terms of Service.
          </p>
          <p>
            Please replace this content with your company's official terms of service. Terms of service (also known as terms of use and terms and conditions, commonly abbreviated as ToS or T&C) are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service.
          </p>
          <p>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </main>
    );
  };
  
  export default TermsOfServicePage;
  