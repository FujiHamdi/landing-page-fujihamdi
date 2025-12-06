// src/app/page.jsx
import Loader from "@/components/common/Loader/Loader";
import LandingPage from "@/components/templates/LandingPage";
import { getCategories } from "@/lib/getCategories";
import { getEmployeesData } from "@/lib/getEmployeesData";
import { getHeroData } from "@/lib/getHeroData";
import { useEffect, useState } from "react";

export default function Home() {
  const [hero, setHero] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getHeroData(), getEmployeesData(), getCategories()])
      .then(([heroData, employeesData, categoriesData]) => {
        setHero(heroData);
        setEmployees(employeesData);
        setCategories(categoriesData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <LandingPage
      hero={hero}
      employees={employees}
      categories={categories}
    />
  );
}
