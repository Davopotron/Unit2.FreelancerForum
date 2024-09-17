
const NAMES = ["Alice", "Bob", "Carol", "Sterling", "Cyril", "Malory"]

const LANCEWORK = ["Writer", "Teacher", "Programmer", "Expediter", "Comptroller", "CEO"]

const freelancers = [
    { name: "Alice", price: 30, occupation: "Writer" },
    { name: "Bob", price: 50, occupation: "Teacher" },

    { name: "Carol", price: 70, occupation: "Programmer" },

    { name: "Sterling", price: 55, occupation: "Expediter" },
    { name: "Cyril", price: 45, occupation: "Comptroller" },
    { name: "Malory", price: 75, occupation: "CEO" },
  ];

  function getAvr() { 
    let sum = 0
    for (let i = 0; i < freelancers.length; i++) {
        sum += freelancers[i].price
    }
    return sum/freelancers.length
  }


  function addFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    LANCEWORK[Math.floor(Math.random() * LANCEWORK.length)];
  const price = 1 + Math.floor(Math.random() * 100);

  freelancers.push({ name, occupation, price });
}

function updateAveragePrice(state) {
    const total = freelancers.reduce(
      (acc, freelancer) => acc + freelancer.price,
      0
    );
    averagePrice = total / freelancers.length;
  }

function renderFreelancers() {
    const $$freelancers = freelancers.map => {;
        const $$tr = document.createElement("tr");
    }


const $$nameTd = document.createElement("td");
$$nameTd.textContent = freelancers.occupation;

const $$occupationTd = document.createElement("td");
$$occupationTd.textContent = freelancer.occupation;

const $$priceTd = document.createElement("td");
$$priceTd.textContent = freelancer.price;

$$tr.replaceChildren(freelancers [$$nameTd, $$occupationTd, $$priceTd]);

return $$tr;
}

const $tbody = document.querySelector(".freelancers tbody");
$tbody.replaceChildren(...$freelancers);


function renderAveragePrice() {
const $price = document.querySelector(".average_price");
$price.textContent = `$${averagePrice.toFixed(2)}`;
}

function render() {
renderFreelancers();
renderAveragePrice();
}


updateAveragePrice();
render();

const freelancerInterval = setInterval(function () {
addFreelancer();
updateAveragePrice();
render();

if (freelancers.length >= MAX_FREELANCERS) {
  clearInterval(freelancerInterval);
}
}, 1000);
/** */