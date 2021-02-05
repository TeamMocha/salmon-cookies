<style>
  main#salesPage {
    background: #88F0D0;
    height: 100%;
    overflow: auto;
    text-align: left;
    padding-left: 1rem;
    padding-right: 1rem;
  }
</style>

<!-- routify:options index=2 -->

<main id="salesPage">
  <br />
  <h1>Sales Info</h1>

  <section style="text-align: left;">
    {#each stores as store, i}
    <!-- {@debug store} -->
    <p><strong>Store: </strong>{ store.city }</p>
    <p><strong>Customers (min/max): </strong>{store.minCust}/{store.maxCust}</p>
    <p><strong>Avg. Cookies / Customer: </strong>{store.aveCookieSale}</p>
    <p><strong>Hourly: </strong></p>
    <table>
      <tr style="font-weight: bold">
        {#each hours as hour, i}
        <td>{hour}</td>
        {/each}
      </tr>
      <tr>
        {#each store.cookiesEachHour as cookies, i}
        <td>{cookies}</td>
        {/each}
      </tr>
    </table>
    <br />
    {/each}

    <!-- 
    {#each stores as { city, minCust, maxCust, aveCookieSale, cookiesEachHour }, i}
      <p>Store: { city }</p>
      <p>Customers (min/max): {minCust}/{maxCust}</p>
      <p>Avg. Cookies / Customer: {aveCookieSale}</p>
      <p>Hourly: {cookiesEachHour}</p>
      <br />
    {/each}
    -->


    <!-- <pre>{JSON.stringify(stores, null, 4)}</pre> -->
    <table id="myTable"></table>
    <div id="storeSales"></div>
  </section>

  <form id='new-store-form' on:submit|preventDefault={createNewStore}>
    <fieldset>
        <legend>Create a Store</legend>
        <label for="city">
            City
        </label>
        <input name="city" id="city" type="text" required> 
        <label for="min">
            Minimum Customer
        </label>
        <input name="min" id="min" type="number" required>
        <label for="max">
            Maximum Customer
        </label>
        <input name="max" id="max" type="number" required>
        <label for="average">
            Average Cookies Per Customer
        </label>
        <input name="average" id="average" type="number" required>
        <button>
            Submit
        </button>
    </fieldset>
  </form>

</main>

<script>
import { each } from "svelte/internal";

  var stores = [];
  // var storeInfo = document.getElementById('storeSales');
  
  var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  function Store (city, minCust, maxCust, aveCookieSale, cookiesEachHour) {
      this.city = city;
      this.minCust = minCust;
      this.maxCust = maxCust;
      this.aveCookieSale = aveCookieSale;
      this.cookiesEachHour = cookiesEachHour;
      this.totalCookies = function() {
          return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      } 
  }

  Store.prototype.render = function() {
    // var trElement = document.createElement('tr');
    // var tdElement = document.createElement('td');
    // tdElement.textContent = (this.city);
    // trElement.appendChild(tdElement);
    
    var totalCookiesPerDay = 0;
    for (var i = 0; i < hours.length; i++) {
      // var table = document.createElement('td');
      var cookiesThisHour = Math.round(this.totalCookies(this.minCust, this.maxCust) * this.aveCookieSale);
      // table.textContent = cookiesThisHour;
      // trElement.appendChild(table)
      // myTable.appendChild(trElement);
      totalCookiesPerDay += cookiesThisHour;
      this.cookiesEachHour.push(cookiesThisHour); 
    }
    // var total = document.createElement('td');
    // total.textContent = totalCookiesPerDay;
    // console.log(myTable)
    // trElement.appendChild(total);
  }

  var Seattle = new Store('Seattle', 23, 65, 6.3, []);
  var Tokyo = new Store('Tokyo', 3, 24, 1.2, []);
  var Dubai = new Store('Dubai', 11, 38, 3.7, []);
  var Paris = new Store('Paris', 20, 38, 2.3, []);
  var Lima = new Store('Lima', 2, 16, 4.6, [])

  Seattle.render();
  Tokyo.render();
  Dubai.render();
  Paris.render();
  Lima.render();
  stores = [Seattle, Tokyo, Dubai, Paris, Lima];

  console.log({stores});

  function createNewStore(event) {
      //event.preventDefault();
      var city = event.target.city.value;
      var min = parseInt(event.target.min.value);
      var max = parseInt(event.target.max.value);
      var average = parseFloat(event.target.average.value);
      var newStore = new Store(city, min, max, average, []);
      stores.push(newStore);
      console.log(city, min, max, average);
      console.log({stores});
    // refreshTable();   
  }

  // var myTable = document.getElementById('myTable');

  // function createTableHeader() {
  //     var trElement = document.createElement('tr');
  //     myTable.appendChild(trElement);
  //     var thElement = document.createElement('th');
  //     thElement.textContent = "Store location";
  //     trElement.appendChild(thElement);

  //     for (var i =0; i < hours.length; i++) {
  //         thElement = document.createElement('th');
  //         thElement.textContent = hours[i];
  //         trElement.appendChild(thElement);
  //     }
  //     thElement = document.createElement('th');
  //     thElement.textContent = 'Total';
  //     trElement.appendChild(thElement);
  // }
  // createTableHeader();

  // function createTableFooter() {
  //     var trElement = document.createElement('tr');
  //     myTable.appendChild(trElement);
  //     var thElement = document.createElement('th');
  //     trElement.appendChild(thElement);
  //     thElement.textContent = ('Totals');

  //     var grandTotal = 0;
  //     for (var i = 0; i < hours.length; i++) {
  //         var hourlySum = 0;
  //         var tdElement = document.createElement ('td');
  //         trElement.appendChild(tdElement);

  //         for (var j = 0; j < stores.length; j++) {
  //             hourlySum += stores[j].cookiesEachHour[i];
  //             grandTotal += stores[j].cookiesEachHour[i];
  //         }
  //         tdElement.textContent = hourlySum;
  //     }
  //     tdElement = document.createElement('td');
  //     trElement.appendChild(tdElement);
  //     tdElement.textContent = grandTotal;
  // }

  // createTableFooter();

  // function logger(event) {
  //     console.log('Input changed', event.target.name, event.target.value);
  // }


  // var formElement = document.getElementById('new-store-form');
  // formElement.addEventListener('submit', createNewStore);

  // function refreshTable() {
  //     var table = document.getElementById("myTable");
  //     table.innerHTML = "";
  //     createTableHeader();
      
  //     for (var j = 0; j < stores.length; j++) {
  //         stores[j].render();
  //     }
  //     createTableFooter();
  // }
</script>
