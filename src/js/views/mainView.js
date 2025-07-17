class MainView {
  listenCloseSuggestionLists() {
    document.addEventListener("click", function (e) {
      closeAllLists(e.target);
    });
  }

  closeAllLists(el, curFieldEl) {
    /* Close all suggestion dropdown lists in the destination-emails
    box, except the one passed as an argument:*/
    const x = document.querySelectorAll(".dropdown-items");
    for (let i = 0; i < x.length; i++)
      if (el !== x[i] && el !== curFieldEl) x[i].parentNode.removeChild(x[i]);
  }
}

export default new MainView();
