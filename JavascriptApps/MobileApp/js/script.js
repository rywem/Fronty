$(document).one('pageinit', function() {
    //Add handler
    $('#submitAdd').on('tap', addRun);
    
    
    /*
     * Add a run
     * - Use html local storage
     */
    function addRun() {
        //Get form values
        
        var miles = $('#addMiles').val();
        var date = $('#addDate').val();
        
        //Create the 'run' object
        var run = {
            date: date,
            miles: parseFloat(miles)
        };
        
        //get current runs object from local storage
        var runs = getRunsObject();
        
        //add new run to runs array
        
        runs.push(run);
        alert('Run added');
        //add back to local storage
        
        //Set stringified object to localStorage
        localStorage.setItem('runs', JSON.stringify(runs));
        
        //redirect to index page
        
        window.location.href="index.html";
        
        return false;
    }
    
    /*
     * Get the runs object
     */
    
    function getRunsObject() {
        //set runs array
        var runs = new Array();
        //get current runs from localStorage
        var currentRuns = localStorage.getItem('runs');
        //Check local storage
        if(currentRuns != null) {
            //Set to runs object
            var runs = JSON.parse(currentRuns);
        }
        
        //return runs object, sorted by date
        return runs.sort(function(a, b) {
            //sort by date
            return new Date(b.date) - new Date(a.date)
        });
        
        
        
        
    }
});    