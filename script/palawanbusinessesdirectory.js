const data = {
  businesses: [
    {
      title: "Narra Digital Solutions",
      email: "contact@narradigital.com",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f",
    },
    {
      title: "Palawan Creative Studio",
      email: "hello@palawancreativestudio.com",
      image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    },
    {
      title: "Speedovate Web Agency",
      email: "info@speedovate.co",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "Wonder Van Transport Services",
      email: "support@wondervantransport.com",
      image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a0a",
    },
    {
      title: "Piksurperfect Productions",
      email: "team@piksurperfect.com",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      title: "ByaheKa Mobility",
      email: "contact@byaheka.ph",
      image: "https://images.unsplash.com/photo-1485727749690-d091e8284efc",
    },
    {
      title: "Elantress Beauty Essentials",
      email: "inquiries@elantressph.com",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    },
    {
      title: "Backride Palawan",
      email: "booking@backridepalawan.com",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
    },
    {
      title: "Coconut Grove Café",
      email: "hello@coconutgrovecafe.com",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
    {
      title: "TropicBuild Construction",
      email: "office@tropicbuild.com",
      image: "https://images.unsplash.com/photo-1486308510493-aa64833637b7",
    },
  ],
};

function renderBusinesses() {
  const container = document.getElementById("businessGrid");
  container.innerHTML = "";

  data.businesses.forEach((biz) => {
    container.innerHTML += `
<div class="card">
<img src="${biz.image}" alt="${biz.title}">
<div class="title">${biz.title}</div>
<div class="email">${biz.email}</div>
</div>
`;
  });
}

renderBusinesses();

// document.addEventListener("snippetLoaded", () => {
//   const grid = document.getElementById("businessGrid");
//   if (grid) renderBusinesses();
// });



