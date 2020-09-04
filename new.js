fetch(
  "https://api.openweathermap.org/data/2.5/onecall?lat=-33.9258&lon=18.4232&exclude=hourly&appid=7c6e27d6b44caf97de1dc3735100d92c"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data.daily);
    let widget = data.daily;

    let card = document.getElementById("main");

    widget.map((info) => {
      console.log(info);
      let head = document.createElement("h2");
      let sub_head = document.createElement("h3");
      let wind = document.createElement("span");
      let precip = document.createElement("span");
      let today = document.createElement("h1");
      let sky = document.createElement("div");
      let sun = document.createElement("img");
      let table = document.createElement("table");
      let list = document.createElement("tr");
      let list2 = document.createElement("tr");
      let item1 = document.createElement("td");
      let item2 = document.createElement("td");
      let item3 = document.createElement("td");
      let item4 = document.createElement("td");
      let item5 = document.createElement("td");
      let item6 = document.createElement("td");

      sky.className = "sky";
      sun.className = "sun";

      wind.innerHTML = info.wind_speed;
      item1.innerHTML = info.temp.max;
      item4.innerHTML = info.temp.min;

      info.weather.map((weather) => {
        head.innerHTML = weather.main;
        sub_head.innerHTML = weather.description;
        sun.src = weather.icon;

        card.appendChild(head);
        card.appendChild(sub_head);
        card.appendChild(wind);
        card.appendChild(precip);
        card.appendChild(today);
        card.appendChild(sky);
        sky.appendChild(sun);
        card.appendChild(table);
        table.appendChild(list);
        list.appendChild(item1);
        list.appendChild(item2);
        list.appendChild(item3);
        table.appendChild(list2);
        list2.appendChild(item4);
        list2.appendChild(item5);
        list2.appendChild(item6);
        card.appendChild(table);
      });
    });
  });
