import { Routes } from "@angular/router";

// add route to /about
// copilot?
//  1. add route to /about

export const routes: Routes = [
  {
    //  1. add route to /about
    path: "about",
    loadComponent: () =>
      import("./about/about.component").then((m) => m.AboutComponent),
  },
];
