// Define a class called Rover to represent a Mars rover
class Rover {
    // Constructor method is called when a new Rover object is created
    constructor(x, y, direction) {
      this.x = x; // Rover's x-coordinate
      this.y = y; // Rover's y-coordinate
      this.direction = direction; // Rover's direction (N, S, E, W)
    }
  
    // Method to move the rover one grid point based on its direction
    move() {
      if (this.direction === 'N') {
        this.y += 1; // Move north by increasing y-coordinate
      } else if (this.direction === 'S') {
        this.y -= 1; // Move south by decreasing y-coordinate
      } else if (this.direction === 'E') {
        this.x += 1; // Move east by increasing x-coordinate
      } else if (this.direction === 'W') {
        this.x -= 1; // Move west by decreasing x-coordinate
      }
    }
  
    // Method to turn the rover 90 degrees to the left
    turnLeft() {
      const directions = ['N', 'W', 'S', 'E']; // Array representing cardinal directions
      const currentIdx = directions.indexOf(this.direction); // Get the current direction index
      this.direction = directions[(currentIdx + 1) % 4]; // Set the new direction
    }
  
    // Method to turn the rover 90 degrees to the right
    turnRight() {
      const directions = ['N', 'E', 'S', 'W']; // Array representing cardinal directions
      const currentIdx = directions.indexOf(this.direction); // Get the current direction index
      this.direction = directions[(currentIdx + 1) % 4]; // Set the new direction
    }
  }
  
  // Function to process input and create Rover objects
  function processInput(plateauSize, roverData) {
    const [plateauX, plateauY] = plateauSize.split(' ').map(Number); // Destructure plateau size
    const rovers = []; // Array to store Rover objects
  
    // Loop through rover data in steps of 2 to get position and instructions for each rover
    for (let i = 0; i < roverData.length; i += 2) {
      const [x, y, direction] = roverData[i].split(' ').map(Number); // Destructure rover position
      const instructions = roverData[i + 1]; // Get rover instructions
  
      // Create a new Rover object with the given position
      const rover = new Rover(x, y, direction);
  
      // Loop through each instruction and perform corresponding rover actions
      for (const instruction of instructions) {
        if (instruction === 'L') {
          rover.turnLeft(); // Turn the rover left
        } else if (instruction === 'R') {
          rover.turnRight(); // Turn the rover right
        } else if (instruction === 'M') {
          rover.move(); // Move the rover forward
        }
      }
  
      rovers.push(rover); // Add the rover to the array
    }
  
    return rovers; // Return the array of Rover objects
  }
  
  // Main function to demonstrate the Mars Rover simulation
  function main() {
    const plateauSize = '5 5'; // Hard-coded plateau size (you can modify this)
    const roverData = [
      '1 2 N',
      'LMLMLMLMM',
      '3 3 E',
      'MMRMMRMRRM',
    ]; // Hard-coded rover data (you can modify this)
  
    const rovers = processInput(plateauSize, roverData); // Process input and get array of Rover objects
  
    // Loop through each Rover object and print its final position and direction
    for (const rover of rovers) {
      console.log(`${rover.x} ${rover.y} ${rover.direction}`);
    }
  }
  
  main(); // Call the main function to run the simulation
  