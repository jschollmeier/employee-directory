import axios from "axios";


// Export an object containing methods we'll use for accessing the GitHub Jobs API

export default {
  employees: function() {
    return axios.get(
      "https://randomuser.me/api/?results=200&nat=us"
    );
  }
};
