
### Test Coverage
The following test types are covered:
- Positive test cases (valid page parameter)
- Negative test cases (invalid, missing, and out-of-range parameters)
- Response structure validation
- User object schema validation
- Basic performance check (response time)

### Tools Used
- **Postman** – API testing and automation
- **Reqres** – Public mock REST API

---

## How to Run API Tests

1. Import the Postman collection from:

2. Import the environment file 

3. Open any request and set:
- Authorization Type: **Basic Auth**
- Username: any value
- Password: any value

4. Run the collection using **Postman Runner**.

---

## Notes & Known Limitations

- Although the Reqres API does not require authentication, requests from Postman without an Authorization header may be blocked by Cloudflare protection.
- This issue was resolved by enabling **Basic Authentication with dummy credentials**, which allows the request to pass Cloudflare checks without affecting the API response.
- Reqres is a mock API and does not strictly validate invalid query parameters. Negative test cases focus on verifying system behavior rather than expecting error responses.

---

## Test Execution Evidence

API tests were successfully executed using Postman Runner.

[API Test Run Result](evidence/)

---

## Author
**Dandy Purwanto**


