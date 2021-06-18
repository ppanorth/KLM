self.addEventListener('push', function (e)  {
    var options ={
      body: 'PPA MONITORING APP',
      //icon: 'images/example.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {
          action: 'explore',
          title: 'PLEASE SUBMIT YOUR REPORT ASAP!',
          //icon: 'images/checkmark.png'
        },
        { action: 'close', title: 'Close'}
       ]
      
    };
    e.waitUntil(self.registration.showNotification('PLEASE SUBMIT YOUR REPORT', options));
 });
 