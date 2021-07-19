<template>
  <Layout>
    <header
      class="
        fixed
        right-0
        left-0
        bg-blue-900 bg-opacity-80
        p-5
        shadow-lg
        md:mx-20
        mx-5
        md:mt-5
        z-20
        mt-3
        rounded-xl
        flex
        justify-between
      "
      style="backdrop-filter: blur(6px)"
    >
      <div
        class="
          text-2xl
          leading-7
          font-bold
          text-white
          flex
          justify-center
          items-center
        "
      >
        <img src="../assets/logo.png" width="75" class="mr-3" />
        <span class="uppercase"
          >Спаси<br />
          Первым</span
        >
      </div>
      <div
        class="
          text-2xl
          leading-7
          font-light
          text-white
          flex
          justify-center
          items-center
        "
      >
        <a
          href="https://vk.com/olimpemc"
          target="_blank"
          class="opacity-75 hover:opacity-100 transition"
        >
          <img src="../assets/vk.png" width="60" class="mr-3" />
        </a>
        <a
          href="https://www.instagram.com/OLIMP_EMP_2021/"
          target="_blank"
          class="opacity-75 hover:opacity-100 transition"
        >
          <img src="../assets/inst.png" width="60" />
        </a>
      </div>
    </header>
    <div
      class="
        h-screen
        flex flex-col
        items-center
        justify-center
        bg-cover
        first-slide
        p-24
        text-center
      "
    >
      <h1 class="text-8xl font-bold text-white">
        III Всероссийская олимпиада по ЭМП 2022
      </h1>
      <h2 class="uppercase text-4xl text-white pt-10">
        В рамках конгресса &laquo;спаси первым&raquo; 18-24 апреля 2022
      </h2>
    </div>
    <div
      class="
        h-screen
        flex flex-col
        items-center
        justify-center
        bg-cover
        second-slide
        p-24
        text-center
      "
    >
      <h1 class="text-8xl font-bold text-white">
        Крупнейшая олимпиада по экстренной медицинской помощи в Сибири
      </h1>
      <h2 class="uppercase text-4xl text-white pt-10">
        Проходящая на базе аккредитационно-симуляционного центра ИГМУ
      </h2>
    </div>
    <div
      class="
        h-screen
        flex flex-col
        items-center
        justify-center
        bg-cover
        third-slide
        p-24
        text-center
      "
    >
      <h1 class="text-8xl font-bold text-white">Уникальные конкурсные этапы</h1>
      <h2 class="uppercase text-4xl text-white pt-10">
        С участием живых статистов и новейших роботов-симуляторов
      </h2>
    </div>
    <div
      class="
        h-screen
        flex flex-col
        items-center
        justify-center
        bg-cover
        fourth-slide
        p-24
        text-center
      "
    >
      <h1 class="text-8xl font-bold text-white">
        Высокий уровень подготовки участников
      </h1>
      <h2 class="uppercase text-4xl text-white pt-10">
        Поверь в свои силы и участвуй!
      </h2>
    </div>
    <div
      class="
        h-screen
        flex flex-col
        items-start
        justify-center
        bg-cover
        fifth-slide
        p-24
        text-center
      "
    >
      <div style="width: 500px" class="text-center">
        <img src="../assets/logo.png" class="m-auto" />

        <h2 class="uppercase text-5xl font-bold text-white pt-2">
          Спаси первым
        </h2>
        <h2 class="uppercase text-2xl text-white pt-10 font-medium">
          Кафедра экстренной медицинской помощи Иркутского государственного
          медицинского университета приглашает Вас принять участие в III
          Всероссийской студенческой олимпиаде "ЭМП 2022" в рамках конгресса
          "Спаси Первым"
        </h2>
        <a
          href="https://docs.google.com/forms/d/16FPGNpMRDbkNUFXa8JdbQ1CEDwThWFrtshzJwKNftMY/prefill"
          target="_blank"
          class="
            px-10
            py-7
            mt-5
            rounded-xl
            block
            bg-red-500
            text-white text-3xl
            uppercase
            font-bold
            opacity-80
            hover:opacity-100
            transition
            z-10
          "
          >Подать заявку</a
        >
      </div>
    </div>
    <div
      class="
        h-screen
        flex flex-col
        items-end
        justify-center
        bg-cover
        sixth-slide
        p-24
        text-center
      "
    >
      <div style="width: 500px" class="text-center">
        <img src="../assets/logo.png" class="m-auto" />

        <h2 class="uppercase text-5xl font-bold text-white pt-2">
          Спаси первым
        </h2>
        <h2 class="uppercase text-6xl font-bold text-white pt-10 font-medium">
          Шесть конкурсных этапов
        </h2>
        <a
          href="/Polozhenie_EMP_2022.docx"
          target="_blank"
          class="
            px-10
            py-7
            mt-5
            rounded-xl
            block
            bg-red-500
            text-white text-3xl
            uppercase
            font-bold
            opacity-80
            hover:opacity-100
            transition
            z-10
          "
          >Положение</a
        >
      </div>
    </div>
    <div
      class="h-screen flex items-center justify-center bg-cover seventh-slide"
    >
      test
    </div>
    <div
      class="
        h-screen
        flex flex-col
        items-end
        justify-center
        bg-cover
        eighth-slide
        p-24
        text-center
      "
    >
      <div style="width: 500px" class="text-center">
        <h1 class="text-6xl font-bold text-white pb-10">
          Участвуйте и выигрывайте!
        </h1>
        <img src="../assets/logo.png" class="m-auto" />

        <h2 class="uppercase text-5xl font-bold text-white pt-2">
          Спаси первым
        </h2>
        <h2 class="uppercase text-2xl font-medium text-white pt-10">
          По всем вопросам обращайтесь:<br />
          <a
            href="mailto:OLIMPIADA_SAVE_FIRST_IGMU@mail.ru"
            class="border-b-2 border-dashed"
            target="_blank"
            >OLIMPIADA_SAVE_FIRST_IGMU@mail.ru</a
          ><br />
          <a href="HTTPS://VK.COM/OLIMPEMC" class="border-b-2" target="_blank"
            >ВКонтакте</a
          >
        </h2>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
body {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
}
.first-slide {
  background-image: url("../assets/1.jpg");
}
.second-slide {
  background-image: url("../assets/2.jpg");
}
.third-slide {
  background-image: url("../assets/3.jpg");
}
.fourth-slide {
  background-image: url("../assets/4.jpg");
}
.fifth-slide {
  background-image: url("../assets/5.jpg");
}
.sixth-slide {
  background-image: url("../assets/6.jpg");
}
.seventh-slide {
  background-image: url("../assets/7.jpg");
}
.eighth-slide {
  background-image: url("../assets/8.jpg");
}
</style>
