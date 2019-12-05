$(document).one('pageinit', function() {
    //Display runs
    showRuns();
    
    //Add handler
    $('#submitAdd').on('tap', addRun);
    
    //Edit Handler
    $("#submitEdit").on('tap', editRun);
    
    //Delete Handler
    $("#stats").on('tap', '#deleteLink', deleteRun);
    
    //Set Current Handler
    $("#stats").on('tap', '#editLink', setCurrent);
    
    //Clear Handler
    $("#clearRuns").on('tap', clearRuns);
    
    
    /* 
     * Show all runs on homepage
     */ 
    
    function showRuns() {
        //get runs object
        var runs = getRunsObject();
        
        // Check if empty
        if(runs != '' && runs != null ) {
           for(var i  = 0; i < runs.length; i++) {
               //append stats list
               $('#stats').append('<li class="ui-body-inherit ui-li-static"><strong>Date: </strong>'+ runs[i]["date"]+
                                  '<br /><strong>Distance: </strong>'+runs[i]["miles"]+'m<div class="controls">'+ 
                                  '<a href="#edit" id="editLink" data-miles="'+runs[i]["miles"]+'" data-date="'+runs[i]["date"]+'">Edit</a> | <a href="#" id="deleteLink" data-miles="'+runs[i]["miles"]+'" data-date="'+runs[i]["date"]+'" onclick="return confirm(\'Are you sure?\')">Delete</a></li>');
           }
            $("#home").bind('pageinit', function(){
                $('#stats').listview('refresh');
            })
       } else {
           $('#stats').html('<p>You have no logged runs</p>');
       }
    }
    
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
     * Edit run
     * - Use html local storage
     */
    function editRun() {
        //Get current data
        currentMiles = localStorage.getItem('currentMiles');
        currentDate = localStorage.getItem('currentDate');
        
        //get current runs object from local storage
        var runs = getRunsObject();
        
        //Loop through runs
        for(var i = 0; i < runs.length; i++) {
            if(runs[i].miles == currentMiles && runs[i].date == currentDate) {
               runs.splice(i, 1);
            }
            localStorage.setItem('runs', JSON.stringify(runs)); 
        }
        
        //Get form values
        var miles = $('#editMiles').val();
        var date = $('#editDate').val();
        
        //Create the 'run' object
        var update_run = {
            date: date,
            miles: parseFloat(miles)
        };
        
        //add new run to runs array
        runs.push(update_run);
        alert('Run Updated');
        //add back to local storage
        
        //Set stringified object to localStorage
        localStorage.setItem('runs', JSON.stringify(runs));
        
        //redirect to index page
        window.location.href="index.html";
        
        return false;
    }
    
    
    /*
     * Delete run
     * - Use html local storage
     */
    function deleteRun() {
        //Set local storage items
        localStorage.setItem('currentMiles', $(this).data('miles'));
        localStorage.setItem('currentDate', $(this).data('date'));
        
        //Get current data
        currentMiles = localStorage.getItem('currentMiles');
        currentDate = localStorage.getItem('currentDate');
        
        //get current runs object from local storage
        var runs = getRunsObject();
        
        //Loop through runs
        for(var i = 0; i < runs.length; i++) {
            if(runs[i].miles == currentMiles && runs[i].date == currentDate) {
               runs.splice(i, 1);
            }
            localStorage.setItem('runs', JSON.stringify(runs)); 
        }
        
        alert('Run Deleted');
        //add back to local storage
        
        //redirect to index page
        window.location.href="index.html";
        
        return false;
    }
    
    
    function clearRuns() {
        localStorage.removeItem('runs');
        $('#stats').html('<p>You have no logged runs</p>');
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
    
    /*
     * Set the current clicked miles and date
     */
    function setCurrent() {
        //Set local storage items
        localStorage.setItem('currentMiles', $(this).data('miles'));
        localStorage.setItem('currentDate', $(this).data('date'));
        
        $('#editMiles').val(localStorage.getItem('currentMiles'));
        $('#editDate').val(localStorage.getItem('currentDate'));
    }
});    