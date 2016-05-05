app.component('grid', {
    templateUrl: 'app/components/grid/grid.html',
    controllerAs: 'vm',
    bindings: {
        rows: '<',
        cols: '<'
    },
    controller: function() {
        var vm = this;
        
         vm.grid = [];
        
        function buildGrid() {
            //create 5x5 grid
            //each cell is an object
            for (var row = 0; row < vm.rows; row++) {
                vm.grid[row] = [];
                for (var col = 0; col < vm.cols; col++)
                vm.grid[row][col] = {row: row, col: col};
            }
        }
        buildGrid();
        
        vm.onCellClick
    }
})