function maxSubarrayWithElements(nums, maxSum) {
    let currentSum = 0;              // Jelenlegi összeg az ablakban
    let start = 0;                   // Az ablak kezdő indexe
    let bestSubarray = [];           // A legjobb részhalmaz
    let maxWindowSum = 0;            // Maximális ablak összeg
  
    for (let end = 0; end < nums.length; end++) {
      currentSum += nums[end];  // Új elem hozzáadása az összeghez
  
      // Ha az aktuális összeg meghaladja a max összeget, akkor szűkítjük az ablakot
      while (currentSum > maxSum && start <= end) {
        currentSum -= nums[start];  // Eltávolítjuk a bal szélső elemet
        start++;  // Mozgatjuk az ablak bal oldalát jobbra
      }
  
      // Frissítjük a maximális összegű részhalmazt, ha a jelenlegi ablak érvényes
      if (currentSum <= maxSum) {
        if (
          currentSum > maxWindowSum ||  // Ha az összeg nagyobb, vagy
          (currentSum === maxWindowSum && end - start + 1 < bestSubarray.length) // ugyanakkora összeg, de rövidebb
        ) {
          maxWindowSum = currentSum;   // Frissítjük a maximális összeget
          bestSubarray = nums.slice(start, end + 1);  // Frissítjük a legjobb részhalmazt
        }
      }
    }
  
    return bestSubarray;
  }
  
  // Példa használat:
  const nums = [10, 11, 12, 13, 31, 22];
  const maxSum = 7;
  console.log(maxSubarrayWithElements(nums, maxSum));  
  