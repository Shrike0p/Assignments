# Assignments


### RESTful API Design for Wysa Sleep App Onboarding

#### **Overview:**

The REST API is designed to support the onboarding flow of the Wysa Sleep app, allowing anonymous users to interact with the application. The API handles user sessions, sleep assessments, and subscription offers in a secure, efficient, and user-friendly manner.

### 1. API Endpoints

#### **1.1 Create User Session**

-   **URL:** `/api/v1/session`
-   **Method:** `POST`
-   **Description:** Creates a new user session when they provide their nickname and confirms they are over 13.
-   **Request Body:**
    
    ```bash
    {
      "nickname": "shrike",
      "isOver13": true
    } 
    ```
    
-   **Response:**
    
    ```bash
    {
      "sessionId": "unique-session-id",
      "nickname": "shrike",
      "message": "Welcome shrike! Your conversations are private and anonymous."
    }
    ``` 
    
-   **Error Response:**
    

    ```bash    
    {
      "status": "error",
      "message": "Nickname is required and must be a non-empty string."
    }
    ```
    

#### **1.2 Submit Sleep Goal Preferences**

-   **URL:** `/api/v1/session/:sessionId/sleep-goals`
-   **Method:** `POST`
-   **Description:** Submits user-selected sleep goals to calculate sleep efficiency.
-   **Request Body:**
    
     ```bash 
    {
      "desiredChanges": [
        "go_to_sleep_easily",
        "sleep_through_the_night",
        "wake_up_refreshed"
      ]
    }   
    ```
    
-   **Response:**
    
    ```bash
	{
      "message": "Your goals are recorded. How long have you been struggling with your sleep?"
    } 
    ```
    
-   **Error Response:**
    

    ```bash
	{
      "status": "error",
      "message": "Invalid session ID or empty desiredChanges array."
    }
    ```
    

#### **1.3 Submit Sleep Struggle Duration**

-   **URL:** `/api/v1/session/:sessionId/sleep-duration`
-   **Method:** `POST`
-   **Description:** Records how long the user has been struggling with their sleep.
-   **Request Body:**
    
    ```bash
    {
      "duration": "2-8 weeks"
    } 
    ```
    
-   **Response:**
    
    ```bash
    {
      "message": "Thank you for sharing. What time do you go to bed for 		 sleep?"
    }
     ``` 
    
-   **Error Response:**
    
     ```bash  
    {
      "status": "error",
      "message": "Invalid session ID or duration format."
    } 
    ```
    

#### **1.4 Submit Bedtime and Wake-up Time**

-   **URL:** `/api/v1/session/:sessionId/bedtime-waketime`
-   **Method:** `POST`
-   **Description:** Submits the user's bedtime and wake-up time.
-   **Request Body:**
    

    ```bash
    {
      "bedtime": "22:30",
      "waketime": "06:30"
    }
    ``` 
    
-   **Response:**
    
    ```bash
    {
      "message": "How many hours of sleep do you get in a typical night?"
    } 
     ```
    
-   **Error Response:**
    
    ```bash
    {
      "status": "error",
      "message": "Invalid time format for bedtime or wake time."
    } 
    ```
    

#### **1.5 Submit Sleep Duration**

-   **URL:** `/api/v1/session/:sessionId/sleep-hours`
-   **Method:** `POST`
-   **Description:** Submits the average sleep duration of the user.
-   **Request Body:**
    

    ```bash
    {
      "hoursOfSleep": 7
    }
    ```
-   **Response:**
    ```bash
      {
      "sleepEfficiency": 41,
      "message": "You seem to have a sleep efficiency of 41%. We'll get this up to 80%!"
     } 
      ```
    
-   **Error Response:**
    

    ```bash    
    {
      "status": "error",
      "message": "Invalid session ID or sleep hours format."
    } 
    ```
    

#### **1.6 Show Subscription Offer**

-   **URL:** `/api/v1/session/:sessionId/subscription-offer`
-   **Method:** `GET`
-   **Description:** Displays the subscription offer after the onboarding.
-   **Response:**
    
     ```bash
    {
      "offer": {
        "trialDays": 3,
        "yearlyPrice": 22499,
        "features": [
          "CBTi exercises to beat insomnia, stress, and anxiety",
          "Sleep routine, stories, and sounds for deep sleep",
          "Exercises and meditations for fresh mornings"
        ],
        "cancellationPolicy": "Cancel anytime within the first 3 days"
      }
    }
    ``` 
    
-   **Error Response:**
    
    ```bash
    {
      "status": "error",
      "message": "Invalid session ID."
    }
    ``` 
    

### 2. Data Validation

-   **Validation Library**: Use **Zod** for schema validation to ensure that all incoming data matches the required format.
    -   Example validation for `Create User Session`:
        ```bash        
          const createUserSchema = z.object({
          nickname: z.string().nonempty(),
          isOver13: z.boolean()
        });
        ```
        

### 3. Database Schema

The database schema will use a **NoSQL database (MongoDB)** to store session data, user responses, and subscription offers.

#### **Collections:**

##### **1. Sessions Collection:**

-   **Purpose:** Stores user session details.
-   **Schema:**
    
    ```bash
    {
      "_id": "ObjectId",
      "sessionId": "unique-session-id",
      "nickname": "shrike",
      "isOver13": true,
      "createdAt": "2024-09-17T12:00:00Z"
    }
    ``` 
    

##### **2. Sleep Assessments Collection:**

-   **Purpose:** Stores the user's sleep assessment responses.
-   **Schema:**
    
     ``` bash
    {
      "_id": "ObjectId",
      "sessionId": "unique-session-id",
      "desiredChanges": [
        "go_to_sleep_easily",
        "sleep_through_the_night",
        "wake_up_refreshed"
      ],
      "sleepDuration": "2-8 weeks",
      "bedtime": "22:30",
      "waketime": "06:30",
      "hoursOfSleep": 7,
      "sleepEfficiency": 41,
      "createdAt": "2024-09-17T12:10:00Z"
    } 
    ```
    

##### **3. Subscription Offers Collection:**

-   **Purpose:** Stores the subscription offers shown to users.
-   **Schema:**
    
    ```bash
    {
      "_id": "ObjectId",
      "sessionId": "unique-session-id",
      "offer": {
        "trialDays": 3,
        "yearlyPrice": 22499,
        "features": [
          "CBTi exercises to beat insomnia, stress and anxiety",
          "Sleep routine, stories, and sounds for deep sleep",
          "Exercises and meditations for fresh mornings"
        ],
        "cancellationPolicy": "Cancel anytime within the first 3 days"
      },
      "createdAt": "2024-09-17T12:15:00Z"
    } 
    ```
    

### 4. Error Handling

-   Implement centralized error handling middleware in Express.js to capture all errors and return consistent error messages.
-   Example:
    
    ```bash
    `app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ status: 'error', message: err.message });
    });` 
    ```
    

### 5. Security Measures

-   **Data Validation:** Use `Zod` for validating all incoming requests to prevent malformed or malicious data.
-   **CORS:** Enable Cross-Origin Resource Sharing (CORS) to control which domains can access the API.
-   **Rate Limiting:** Implement rate limiting using middleware to prevent abuse of the API.

### 6. Deployment Considerations

-   **Environment Configuration:** Use environment variables to manage sensitive information (e.g., database connection strings).
-   **Logging:** Implement logging for API requests and errors for monitoring and debugging purposes.
-   **Scalability:** Use a load balancer to distribute traffic and ensure the backend can handle high traffic efficiently.

### Conclusion

This structured REST API design and MongoDB schema are tailored to the Wysa Sleep app's needs, ensuring that the app remains simple and anonymous while providing a robust and scalable backend solution. This design is comprehensive and should be ready for submission.
