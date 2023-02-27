# Extreme Programing / Pair Programing
- one person shares their screen and the other provide coding guidance
- like having a backseat driver/copilot
- It's ok the person sharing screen does not know what they are doing.

## Tools

- What do we have for example code?
  - Backend Challenge
  - Example Capstone

- How it should work... What's the algorithm for sign-up?
  - App.ts is where the route starts. 
  - apis directory
    - sign-up.route 
      - Validator validates the json
    - Controller
  - utils/models directory
    - interface
    - Database table to match json submitted by insomnia
    - javascript function to run sql command to insert new profile