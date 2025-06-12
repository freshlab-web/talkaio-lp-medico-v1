import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Redireciona imediatamente para a home
    navigate("/", { replace: true });
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Página não encontrada.</p>
        <p className="text-gray-500 mb-6">Redirecionando para a página inicial...</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Voltar para a Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;