app.component('lightsOutComponent', {
    templateUrl: 'app/components/lights-out/lights-out.html',
    controllerAs: 'loc',
    bindings: {
        rows: '<',
        cols: '<',
        cellClick: '<'
    },
    controller: function() {
        var vm = this;
        vm.test = "Lights Out Controller"
        
        vm.grid = [];
        
        vm.toggleCell = function(cell, grid) {
            vm.grid = grid;
            toggle(cell);
            toggleNeighbors(cell);
        }
        
        function toggle(cell) {
            cell.active = !cell.active;
        }
        
        // function checkNeighbor(cell, row, col) {
        //     if (vm.grid[cell.row - row])
        // }
        
        function idNeighbors(cell) {
           var size = vm.grid.length - 1;
            // check north
            if (cell.row > 0) {
                toggle(vm.grid[cell.row-1][cell.col]);
            }
            //check south
            if (cell.row < size) {
                toggle(vm.grid[cell.row+1][cell.col]);
            }
            //check west
            if (cell.col > 0) {
                toggle(vm.grid[cell.row][cell.col-1]);
            }
            //check east
            if (cell.col < size) { 
                toggle(vm.grid[cell.row][cell.col+1]);
            }
        }
    }
})