// function Logger(constructor: Function) {
//   console.log("...Loading", "...Loading");
//   console.log("constructor", constructor);
// }

// @Logger
// class Controller {
//   public id = 1;
// }

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function AddProperty() {
  return function (constructor: Function) {
    console.log("Modify");
    constructor.prototype.modify = true;
  };
}

@Logger("LOGGING - CONTROLLER")
@AddProperty()
class Controller {
  public id = 1;
  public modify?: boolean;
}

const controller = new Controller();

console.log("Modified classes", controller.modify);
