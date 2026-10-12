  const checkInInput = document.getElementById("checkIn");
  const checkOutInput = document.getElementById("checkOut");

  if (checkInInput && checkOutInput) {
    const today = new Date();
    const localToday = new Date(
      today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    checkInInput.min = localToday;
    checkOutInput.min = localToday;

    checkInInput.addEventListener("change", () => {
      checkOutInput.min = checkInInput.value || localToday;

      if (
        checkOutInput.value &&
        checkOutInput.value <= checkInInput.value
      ) {
        checkOutInput.value = "";
      }
    });
  }