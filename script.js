let metrics = [];

document.getElementById("addMetricBtn").addEventListener("click", addMetric);

function addMetric() {
    const type = document.getElementById("metricType").value;
    const value = document.getElementById("metricValue").value;
    const unit = type === "Weight" ? "kg" : type === "Blood Sugar" ? "mg/dL" : "mmHg";
    const recordedAt = new Date().toLocaleString();

    if (!value) {
        alert("Please enter a value");
        return;
    }

    const metric = { type, value, unit, recordedAt };
    metrics.push(metric);
    renderMetrics();
    document.getElementById("metricValue").value = "";
}

function renderMetrics() {
    const list = document.getElementById("metricsList");
    list.innerHTML = "";
    metrics.forEach((metric) => {
        const div = document.createElement("div");
        div.className = "metric-card";
        div.innerHTML = `<p><strong>Type:</strong> ${metric.type}</p>
                         <p><strong>Value:</strong> ${metric.value} ${metric.unit}</p>
                         <p><strong>Recorded At:</strong> ${metric.recordedAt}</p>`;
        list.appendChild(div);
    });
}
