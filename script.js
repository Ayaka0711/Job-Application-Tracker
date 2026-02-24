const jobs = [
    { id:1, companyName:"Mobile First Corp", position:"React Developer", location:"Remote", type:"Full-Time", salary:"$70k - $90k", description:"Develop and maintain responsive React applications.", status:"none" },
    { id:2, companyName:"WebFlex Agency", position:"Frontend Engineer", location:"New York", type:"Full-Time", salary:"$80k - $100k", description:"Work with UI/UX team to build scalable interfaces.", status:"none" },
    { id:3, companyName:"Data Solutions", position:"Data Analyst", location:"Chicago", type:"Contract", salary:"$60k - $75k", description:"Analyze business data and generate insights.", status:"none" },
    { id:4, companyName:"CloudNet Inc", position:"Backend Developer", location:"Remote", type:"Full-Time", salary:"$85k - $110k", description:"Build APIs and manage databases.", status:"none" },
    { id:5, companyName:"Innovate Labs", position:"UI Designer", location:"Austin", type:"Part-Time", salary:"$50k - $65k", description:"Design modern UI components and prototypes.", status:"none" },
    { id:6, companyName:"MegaCorp Solutions", position:"Software Engineer", location:"Seattle", type:"Full-Time", salary:"$95k - $120k", description:"Develop enterprise-level applications.", status:"none" },
    { id:7, companyName:"StartifyX", position:"Junior Developer", location:"Boston", type:"Internship", salary:"$40k - $50k", description:"Assist senior developers in projects.", status:"none" },
    { id:8, companyName:"TechCore Industries", position:"Full Stack Developer", location:"San Francisco", type:"Full-Time", salary:"$100k - $130k", description:"Handle frontend and backend development.", status:"none" }
  ];

  let currentTab = "all";

  function renderJobs() {
    const container = document.getElementById("jobContainer");
    const emptyState = document.getElementById("emptyState");
    container.innerHTML = "";

    let filtered = jobs.filter(job => {
      if(currentTab === "all") return true;
      return job.status === currentTab;
    });

    document.getElementById("tabCount").innerText = filtered.length + " jobs";

    if(filtered.length === 0){
      emptyState.classList.remove("hidden");
      return;
    }

    emptyState.classList.add("hidden");

    filtered.forEach(job => {
      const card = document.createElement("div");
      card.className = "border p-4 rounded";

      card.innerHTML = `
        <div class="flex justify-between items-start">
          <div>
            <h3 class="font-semibold">${job.companyName}</h3>
            <p class="text-sm text-gray-600">${job.position}</p>
            <p class="text-sm text-gray-500">${job.location} • ${job.type}</p>
            <p class="text-sm text-gray-500">${job.salary}</p>
            <p class="text-sm mt-2">${job.description}</p>
          </div>
          <button onclick="deleteJob(${job.id})" class="text-red-500 text-sm">Delete</button>
        </div>

        <div class="mt-4 flex gap-2">
          <button onclick="updateStatus(${job.id}, 'interview')" class="px-3 py-1 text-sm rounded ${job.status==='interview' ? 'bg-green-600 text-white':'bg-green-100 text-green-700'}">
            Interview
          </button>
          <button onclick="updateStatus(${job.id}, 'rejected')" class="px-3 py-1 text-sm rounded ${job.status==='rejected' ? 'bg-red-600 text-white':'bg-red-100 text-red-700'}">
            Rejected
          </button>
        </div>
      `;

      container.appendChild(card);
    });

    updateDashboard();
  }

  function updateStatus(id, status){
    const job = jobs.find(j => j.id === id);

    if(job.status === status){
      job.status = "none";
    } else {
      job.status = status;
    }

    renderJobs();
  }

  function deleteJob(id){
    const index = jobs.findIndex(j => j.id === id);
    jobs.splice(index,1);
    renderJobs();
  }

  function updateDashboard(){
    document.getElementById("totalCount").innerText = jobs.length;
    document.getElementById("interviewCount").innerText = jobs.filter(j=>j.status==="interview").length;
    document.getElementById("rejectedCount").innerText = jobs.filter(j=>j.status==="rejected").length;
  }

  function switchTab(tab){
    currentTab = tab;

    document.querySelectorAll(".tab-btn").forEach(btn=>{
      btn.classList.remove("bg-blue-500","text-white");
      btn.classList.add("bg-gray-200");
    });

    document.getElementById(tab+"Tab").classList.add("bg-blue-500","text-white");
    renderJobs();
  }

  renderJobs();
