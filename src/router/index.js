import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import LayoutUser from "../layout/LayoutUser.vue";
import LayoutAdmin from "../layout/LayoutAdmin.vue";
import Home from "../views/user/Home.vue";
import Landing from "../views/user/LandingPage.vue"
import Tanaman from "../views/user/Tanaman.vue";
import Kontak from "../views/user/Kontak.vue";
import Dashboard from "../views/admin/Dashboard.vue";
import MeneUser from "../views/admin/MeneUser.vue";
import Perawatan from "../views/admin/Perawatan.vue";
import Profile from "../views/admin/Profile.vue";
import Tanamann from "../views/admin/Tanamann.vue";
import Kategorii from "../views/admin/Kategorii.vue";
import Perawatann from "../views/user/Perawatann.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        title: "Login",
      },
      beforeEnter: (to, from, next) => {
        const isAuthenticated = store.getters["auth/isAuthenticated"];
        if (isAuthenticated) {
          const role = localStorage.getItem("role");
          if (role === "admin") {
            next("/admin");
          } else if (role === "user") {
            next("/");
          }
        } else {
          next();
        }
      },
    },
    {
      path: "/",
      component: LayoutUser,
      children: [
        {
          path: "",
          name: "Home",
          component: Home,
          meta: {
            title: "Home",
          },
        },
        {
          path: "tanaman",
          name: "Tanaman",
          component: Tanaman,
          meta: {
            title: "Tanaman",
            requiresAuth: true,
          },
        },
        {
          path: "kontak",
          name: "Kontak",
          component: Kontak,
          meta: {
            title: "Kontak",
            requiresAuth: true,
          },
        },
        {
          path: "perawatann",
          name: "Perawatann",
          component: Perawatann,
          meta: {
            title: "Perawatann",
            requiresAuth: true,
          },
        },
      ],
    },
    {
      path: "/admin",
      component: LayoutAdmin,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "",
          name: "Dashboard",
          component: Dashboard,
          meta: {
            title: "Dashboard",
            requiresAuth: true,
          },
        },
        {
          path: "meneuser",
          name: "MeneUser",
          component: MeneUser,
          meta: {
            title: "Manage Users",
            requiresAuth: true,
          },
        },
        {
          path: "perawatan",
          name: "Perawatan",
          component: Perawatan,
          meta: {
            title: "Perawatan",
            requiresAuth: true,
          },
        },
        {
          path: "profile",
          name: "Profile",
          component: Profile,
          meta: {
            title: "Profile",
            requiresAuth: true,
          },
        },
        {
          path: "tanamann",
          name: "Tanamann",
          component: Tanamann,
          meta: {
            title: "Tanaman",
            requiresAuth: true,
          },
        },
        {
          path: "kategorii",
          name: "Kategorii",
          component: Kategorii,
          meta: {
            title: "Kategori",
            requiresAuth: true,
          },
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters["auth/isAuthenticated"];
  const requiresAuth = to.meta.requiresAuth;
  const userRole = localStorage.getItem("role");

  if (requiresAuth && !isAuthenticated) {
    next({ name: "Login" });
  } else {
    if (userRole === "admin" && to.path.indexOf("/admin") === -1) {
      next({ name: "Dashboard" });
    } else if (userRole === "user" && to.path.indexOf("/admin") !== -1) {
      next({ name: "Home" });
    } else {
      next();
    }
  }
});

export default router;
