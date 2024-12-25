import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styles from "../../styles/DisplayAttackes.module.css";
import { AttackData } from "../../interface/Eevent";
import ElevateAppBar from "../app/AppBr";
const baseurl = import.meta.env.VITE_BASE_URL

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export default function DisplayAttackes() {
  const [attackData, setAttackData] = useState<AttackData[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://localhost:55555/api/analysis/deadliest-attack-types"
        );

        const data = await res.json();
        const sorteDada = [...data].sort((a, b) => b.total - a.total);

        setAttackData(sorteDada);
        setSelectedTypes(sorteDada.map((attack) => attack._id));
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchData();
  }, []);

  const handleType = (type: string) => {
    setSelectedTypes((prev) => {
      if (prev.includes(type)) {
        return prev.filter((t) => t !== type);
      } else {
        return [...prev, type];
      }
    });
  };

  const filterData = attackData.filter((attack) =>
    selectedTypes.includes(attack._id)
  );

  const options = {
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    labels: filterData.map((attack) => attack._id),
    datasets: [
      {
        data: filterData.map((attack) => attack.total),
        backgroundColor: "rgba(53, 162, 235, 0.8)",
        borderColor: "rgb(53, 162, 235)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <ElevateAppBar />
      <div className={styles.chartWrapper}>
        <div className={styles.chartContainer}>
          <h2 className={styles.chartTitle}>Attack types by casualties</h2>
          <div className={styles.filtersContainer}>
            {attackData.map((attack) => (
              <label key={attack._id} className={styles.filterOption}>
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(attack._id)}
                  onChange={() => handleType(attack._id)}
                />
                <span className={styles.filterLabel}>{attack._id}</span>
              </label>
            ))}
          </div>
          <Bar options={options} data={data} />
        </div>
      </div>
    </>
  );
}
