
function Looger(){
    this.write(message);
}

class ConsoleLogger() {

    function write(message) {
        console.log(message);
    }
}

// Interface
class FileLoggerStrategy {

    write(message) {
        alert(message);
    }
}


 
function app(){

    const log = new FileLogger();


}
app();