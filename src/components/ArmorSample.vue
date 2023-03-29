<template>
    <div class="armor-card">
      <div>
        <h2 class="name">{{name}}</h2>
        <p class="type">{{type}}</p>
      </div> 
      <div>  
        <img rel="preload" class="picture" v-bind:src="pictureUrlM"/>
        <img rel="preload" class="picture" v-bind:src="pictureUrlF"/>
      </div> 
    </div>
  </template>
  
  <script>
      export default {
        name: 'ArmorCard',
        props: {
          name: {type: String,  required: true,default:"name not found"},
          type: {type: String, required: true, default: "type undefined"}, 
          pictureUrlM: {type: String, default:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88b6f848-7f22-44b7-a036-8e65d20a4e3d/dbfg98l-2859c4b1-575f-42e2-8180-b4dd1517a42e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg4YjZmODQ4LTdmMjItNDRiNy1hMDM2LThlNjVkMjBhNGUzZFwvZGJmZzk4bC0yODU5YzRiMS01NzVmLTQyZTItODE4MC1iNGRkMTUxN2E0MmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KBNOwhafk5njqf3VK-SenszTn5UM1rI4OHE7obvWBzg"},
          pictureUrlF: {type: String, default:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88b6f848-7f22-44b7-a036-8e65d20a4e3d/dbfg98l-2859c4b1-575f-42e2-8180-b4dd1517a42e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg4YjZmODQ4LTdmMjItNDRiNy1hMDM2LThlNjVkMjBhNGUzZFwvZGJmZzk4bC0yODU5YzRiMS01NzVmLTQyZTItODE4MC1iNGRkMTUxN2E0MmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KBNOwhafk5njqf3VK-SenszTn5UM1rI4OHE7obvWBzg"},
          //https://game.capcom.com/manual/MHW/img/page/47_1_1.jpg?t=202007090000
        }
      }
  </script>
  
  <style scoped>
      .armor-card {
        display: flex;
        align-items: center;
        align-content: space-between;
      }

      img {
        max-width: 100px;
        max-height: 100px;
      }
  
      h2 {
           font-size: 60px;
        }

        .type {
            font-size: 30px;
            color: blueviolet;
        }
  </style>