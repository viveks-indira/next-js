 
export async function GET(request) {
    // ...
    return new Response(JSON.stringify({ message: "Hello World" }), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  
  // Handles POST requests to /api
  export async function POST(request) {
    // ...
    return new Response(JSON.stringify({ message: "Hello World" }), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  