function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  const images = [
    "https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.15752-9/467479595_554345027552555_1453176323399042158_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEm6VjbMyQMdeIjCO4hRqqZxJZiSq3Ec6vElmJKrcRzqxefW07Pv1aNZW5M9-Ix5MxwSa_uewZq38lwvs6b3L02&_nc_ohc=wntV3DUPtHIQ7kNvgHvLJDc&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&oh=03_Q7cD1QFzjks82xtDVMlF19Z1UY0L3MoAHOojyOVInKEwCcPnqA&oe=676CAEFB",
    "https://scontent.fmnl17-5.fna.fbcdn.net/v/t1.15752-9/462566549_594227073140505_2639572883160841390_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHriBxG4w5-tXb-DX3NJqU8YkL6XDpbf_ZiQvpcOlt_9obeyZo3qDKPmRIXYlsv0ZNdSeH6_fcNpzhjmw4dtWRR&_nc_ohc=9r4M13fna_AQ7kNvgESNkAT&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&oh=03_Q7cD1QH9fWw0wOXRrJeWnIVnewD9zM0CtpMOrweO8nPKPYxwSg&oe=676CDE2E",
    "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.15752-9/467482186_8487103468083611_7948547504269546548_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFE6expoO2qLdWKyATkIyeUQACxQcDwKMdAALFBwPAox9sFF-n2uInL_Uh2iZGVYkCDxrzPb-o7ilGxsxCd90uw&_nc_ohc=1TEplrACKXoQ7kNvgGOnRDC&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&oh=03_Q7cD1QF9WpjcyczfceSc5uzjP2O9uAHOdIwa3WSlks03JR0yKg&oe=676CDAEE",
    "https://scontent.fmnl17-4.fna.fbcdn.net/v/t1.15752-9/462583533_1132422218412306_2474972397608219013_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeF148BGNf_MwgShJFmCR9StjOhlVqoF22WM6GVWqgXbZcn0wtjrBTJOVsodV9b7qsFFC0qW5rycWy6weGCy4-04&_nc_ohc=r-edeCm55L4Q7kNvgHV-Ppi&_nc_zt=23&_nc_ht=scontent.fmnl17-4.fna&oh=03_Q7cD1QGq9DWCF4DeiStnbi17aCK8Hpm4at22Hy9vGjwhOpSSTQ&oe=676F6C83",
    "https://scontent.fmnl17-6.fna.fbcdn.net/v/t1.15752-9/467470393_542874778509264_4058038346763760043_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFHaHrPyjA0blJwODVsC4vestURl3kxMM2y1RGXeTEwzVdjFsj5-3txm_zM4XhZGTyj_ONEqSSe27W-Em3vgpaK&_nc_ohc=1Qw0AemuNqoQ7kNvgGKDf13&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&oh=03_Q7cD1QE__PIw2PY57Lg-23wV3jcO07RM1uhEdWusSH2Ykhju9A&oe=676F9937",
    "https://scontent.fmnl17-5.fna.fbcdn.net/v/t1.15752-9/462583998_1238064360831447_5086782639211188528_n.png?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFSu-Te8z4bQKmAc_eIDYkuFnl_hs9YfSwWeX-Gz1h9LLkJRKKMaGr97jVvIYTgrwnQOH_bcmR9PssQp3B6SK0Z&_nc_ohc=zZAmNWo-Z0gQ7kNvgFbRKM-&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&oh=03_Q7cD1QH-sKjQY2tQd6wQMgURYEQERiCth9hs6zhJ784SsgEMrw&oe=676F9A13",
    "https://scontent.fmnl17-4.fna.fbcdn.net/v/t1.15752-9/462552453_1256267958759374_3366761080158794089_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHrU5buxg9xhIJyMvx72Lbc4eFiY7JcpQLh4WJjslylAi4xRTUAmuBNdhdHgtgjFtyE9eiZyqUmGEeETtdWrhqv&_nc_ohc=uT3Yur-E9PMQ7kNvgF4ry_s&_nc_zt=23&_nc_ht=scontent.fmnl17-4.fna&oh=03_Q7cD1QEgEBeeD2gfXFkgLztQEoeyZxvFSGZKUIMt98M5t2Tbnw&oe=676F9E69",
    "https://scontent.fmnl17-6.fna.fbcdn.net/v/t1.15752-9/462563892_1247778909610474_5812826094619034694_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFIMzZgQzyCIKpp-vhSWky2oaNlFyaZAXeho2UXJpkBd0DezmeHbnjtOn51FeWLyc2UpwoMHdc1xxsksKVWHB0D&_nc_ohc=F8WNPaKZhJoQ7kNvgFkXZ40&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&oh=03_Q7cD1QErnix7tgfK6qu_J7EC_3GbvUP_-EZktvRbXt5hjo5gLg&oe=676F85AE",
  ];
  
  let currentIndex = 0;
  
  const sliderImage = document.getElementById("sliderImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  
  // Function to update the image
  function updateImage(index) {
    sliderImage.src = images[index];
  }
  
  // Event listeners for buttons
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around to the last image
    updateImage(currentIndex);
  });
  
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Wrap around to the first image
    updateImage(currentIndex);
  });
  
  // Add this to your existing JavaScript
  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.slider-controls button');
    
    // Adjust button size based on screen width
    function adjustButtonSize() {
        const screenWidth = window.innerWidth;
        
        buttons.forEach(button => {
            if (screenWidth < 768) { // Mobile devices
                button.style.padding = '6px 15px';
                button.style.fontSize = '12px';
                button.style.minWidth = '80px';
            } else if (screenWidth < 1024) { // Tablets
                button.style.padding = '8px 20px';
                button.style.fontSize = '14px';
                button.style.minWidth = '100px';
            } else { // Desktop
                button.style.padding = '8px 20px';
                button.style.fontSize = '14px';
                button.style.minWidth = '120px';
            }
        });
    }
  
    // Initial adjustment
    adjustButtonSize();
  
    // Adjust on window resize
    window.addEventListener('resize', adjustButtonSize);
  });
  
  // Add smooth scrolling for mobile menu links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    
    if (menu.classList.contains('open') && 
        !hamburgerMenu.contains(event.target)) {
        menu.classList.remove('open');
        icon.classList.remove('open');
    }
  });