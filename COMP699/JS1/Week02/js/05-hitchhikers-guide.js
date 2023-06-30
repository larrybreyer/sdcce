// vim: ai ts=2 et

alert(" You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty.  You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.");


let direction = prompt("Which direction would you like to head (please enter forward, left, or right).");

switch (direction) {

  case "forward":
    alert("You walk 100 yards and safely make your way out of the cave.");
    break;
  case "left":
    alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
    break;
  case "right":
    alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
    break;
  default:
    alert("I don't understand.  Bye!")

}
