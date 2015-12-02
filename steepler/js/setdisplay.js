function setDIVDisplay(divId, state) {
  state1 = false; state2 = false;

  display = document.getElementById(divId).style.display;
  vis = document.getElementById(divId).style.visibility;

  if(state === false) state = 2;

  if (state == 2) {
    if (display != "none")
      state1 = "none";
    else
      state1 = "block";

    if (vis) {
      if (vis != "hidden")
        state2 = "hidden";
      else
        state2 = "visible";
    }
  }
  else {
    state1 = (state == 1) ? "block" : "none";
    state2 = (state == 1) ? "visible" : "hidden";
  }

  document.getElementById(divId).style.display = state1;

  if (vis)
    document.getElementById(divId).style.visibility = state2;
}