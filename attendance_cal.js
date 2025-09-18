function calculateAttendance() {
      let total = parseInt(document.getElementById("totalClasses").value);
      let attended = parseInt(document.getElementById("attendedClasses").value);
      let target = parseInt(document.getElementById("targetPercentage").value);
      let result = "";

      // 🔹 Validation checks
      if (isNaN(total) || isNaN(attended) || isNaN(target) || total <= 0 || attended < 0) {
        result = "⚠️ Please enter valid numbers.";
      } else if (attended > total) {
        result = "⚠️ Attended classes cannot be greater than total classes held.";
      } else {
        // 🔹 Current attendance percentage
        let currentPercentage = (attended / total) * 100;

        if (currentPercentage >= target) {
          // ✅ Already safe
          let maxBunks = Math.floor((attended * 100 / target) - total);

          result = `✅ Your attendance is ${currentPercentage.toFixed(2)}%. Target achieved! 🎉 <br>
                    📌 You can still miss <b>${maxBunks}</b> more classes and stay at or above ${target}%.`;
        } else {
          // ❌ Target not achieved
          let x = Math.ceil(((target/100) * total - attended) / (1 - (target/100)));

          result = `📉 Current Attendance: ${currentPercentage.toFixed(2)}% <br>
                    You need to attend <b>${x}</b> more classes in a row to reach ${target}%.`;
        }
      }
      document.getElementById("result").innerHTML = result;
    }