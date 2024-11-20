"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Container from "@/components/container";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Skip empty strings and create breadcrumb items
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  // Create breadcrumb items with accumulated paths
  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = "/" + pathSegments.slice(0, index + 1).join("/");
    // Convert path segments to readable format (e.g., "about-us" -> "About Us")
    const label = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return { path, label };
  });

  // Add home as the first breadcrumb
  const allBreadcrumbs = [{ path: "/", label: "Home" }, ...breadcrumbs];

  return (
    <div className="w-full bg-white fixed z-10">
      <Container>
        <motion.nav
          className="px-4 py-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ol className="flex flex-wrap items-center space-x-2 text-gray-600">
            {allBreadcrumbs.map((crumb, index) => (
              <li key={crumb.path} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-gray-400">&gt;&gt;</span>
                )}
                {index === allBreadcrumbs.length - 1 ? (
                  // Current page (non-clickable)
                  <motion.span
                    className="text-blue-600 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {crumb.label}
                  </motion.span>
                ) : (
                  // Clickable breadcrumb link
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={crumb.path}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  </motion.div>
                )}
              </li>
            ))}
          </ol>
        </motion.nav>
      </Container>
    </div>
  );
}
