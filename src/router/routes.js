const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/contact/ContactList.vue") }
    ]
  }
];

// Always leave this as last one
routes.push({
  path: "*",
  component: () => import("pages/errors/NotFound.vue")
});

export default routes;
