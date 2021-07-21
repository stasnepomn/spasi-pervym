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
      class="
        h-screen
        flex flex-col
        items-center
        justify-center
        bg-cover
        seventh-slide
        p-24
      "
    >
      <div class="flex flex-row items-center space-x-10">
        <a
          class="
            flex
            justify-center
            items-center
            text-white text-6xl
            font-bold
            block
            p-5
            hover:bg-black hover:bg-opacity-30
            transition
            rounded-lg
            cursor-pointer
            h-full
          "
          @click="tab = tab > 1 ? tab - 1 : 6"
        >
          &larr;
        </a>
        <transition name="fade" mode="out-in">
        <section v-if="tab === 1" class="flex flex-row items-center space-x-10" key="slide1">
          <div>
            <g-image
              src="../assets/7_1.jpg"
              height="600"
              width="500"
              class="rounded-xl shadow-lg"
            />
          </div>
          <div class="text-white" style="max-width: 500px">
            <h1 class="text-5xl font-bold">Конкурс "ВИЗИТКА"</h1>
            <p class="pt-8 text-2xl font-medium">
              Суть конкурса – раскрытие темы «ПОМОЩИ ДОСТОИН КАЖДЫЙ».<br /><br />
              Формат раскрытия темы определяется участниками самостоятельно
              (песня, танец, сценка, видео и т.д.). <br /><br />В конкурсе
              необходимо отобразить свое видение оказания экстренной медицинской
              помощи на различных ее этапах.
            </p>
          </div>
        </section>
        <section v-if="tab === 2" class="flex flex-row items-center space-x-10" key="slide2">
          <div>
            <g-image
              src="../assets/7_2.jpg"
              height="600"
              width="500"
              class="rounded-xl shadow-lg"
            />
          </div>
          <div class="text-white" style="max-width: 500px">
            <h1 class="text-5xl font-bold">Конкурс "ТЕОРИЯ"</h1>
            <p class="pt-8 text-2xl font-medium">
              В данном конкурсе принимает участие вся команда. Необходимо дать
              расшифровку и выявить ведущие синдромы на основании результатов 5
              клинико-диагностических методов исследований: 
              <ol class='list-decimal list-inside'>
                <li>ЭКГ</li>
                <li>Rg-исследование</li>
                <li>КЩС(КОС)</li>
                <li>ОАК+ОАМ</li>
                <li>БХ-анализ крови +
              коагулограмма</li>
              </ol>
            </p>
          </div>
        </section>
        <section v-if="tab === 3" class="flex flex-row items-center space-x-10" key="slide3">
          <div>
            <g-image
              src="../assets/7_3.jpg"
              height="600"
              width="500"
              class="rounded-xl shadow-lg"
            />
          </div>
          <div class="text-white" style="max-width: 500px">
            <h1 class="text-5xl font-bold">Конкурс  «Скорая медицинская помощь»</h1>
            <p class="pt-8 text-2xl font-medium">
              В данном конкурсе 3 участникам от каждой команды необходимо оказать помощь в составе моделируемой бригады скорой медицинской помощи по одной из предложенных клинических ситуаций.<br/><br/>Оснащение бригады СМП осуществляется согласно регламентирующим приказам МЗ РФ
            </p>
          </div>
        </section>
        <section v-if="tab === 4" class="flex flex-row items-center space-x-10" key="slide4">
          <div>
            <g-image
              src="../assets/7_4.jpg"
              height="600"
              width="500"
              class="rounded-xl shadow-lg"
            />
          </div>
          <div class="text-white" style="max-width: 500px">
            <h1 class="text-5xl font-bold">Конкурс «Локальные алгоритмы спасения»</h1>
            <p class="pt-8 text-2xl font-medium">
              Данный конкурс представляет собой несколько последовательных площадок, на которых команде из 5 человек предстоит оказать первую помощь пострадавшим в различных ситуациях на догоспитальном этапе.<br><br>На работу в рамках одной площадки отводится не более 5 минут.
            </p>
          </div>
        </section>
        <section v-if="tab === 5" class="flex flex-row items-center space-x-10" key="slide5">
          <div>
            <g-image
              src="../assets/7_5.jpg"
              height="600"
              width="500"
              class="rounded-xl shadow-lg"
            />
          </div>
          <div class="text-white" style="max-width: 500px">
            <h1 class="text-5xl font-bold">Конкурс  «Экстренная медицинская помощь»</h1>
            <p class="pt-8 text-2xl font-medium">
              Четырем участникам от каждой команды необходимо оказать помощь пациенту в условиях стационара. В каждой клинической ситуации будет 1 пациент, в качестве которого будет представлен робот-симулятор.
            </p>
          </div>
        </section>
        <section v-if="tab === 6" class="flex flex-row items-center space-x-10" key="slide6">
          <div>
            <g-image
              src="../assets/7_6.png"
              height="600"
              width="600"
              class="rounded-xl shadow-lg"
            />
          </div>
          <div class="text-white" style="max-width: 500px">
            <h1 class="text-5xl font-bold">Конкурс  “Мануальные навыки”</h1>
            <p class="pt-8 text-2xl font-medium">
              Участникам необходимо продемонстрировать владение мануальными навыками, применяемыми на различных этапах оказания экстренной медицинской помощи:
              <ol class='list-decimal list-inside'>
<li>Выполнение коникотомии;</li>
<li>Постановка ЦВК по УЗ-контролем;</li>
<li>Оказание акушерского пособия.</li>
              </ol>
            </p>
          </div>
        </section>
        </transition>
        <a
          class="
            flex
            justify-center
            items-center
            text-white text-6xl
            font-bold
            block
            p-5
            hover:bg-black hover:bg-opacity-30
            transition
            rounded-lg
            h-full
            cursor-pointer
          "
          @click="tab = tab === 6 ? 1 : tab + 1"
        >
          &rarr;
        </a>
      </div>
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
  data: function() {
    return {
      tab: 1
    };
  },
  metaInfo: {
    title: "Спаси Первым"
  }
};
</script>

<style>
body {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.first-slide {
  background-image: url("../assets/1.jpg");
  background-position: center;
}
.second-slide {
  background-image: url("../assets/2.jpg");
  background-position: center;
}
.third-slide {
  background-image: url("../assets/3.jpg");
  background-position: center;
}
.fourth-slide {
  background-image: url("../assets/4.jpg");
  background-position: center;
}
.fifth-slide {
  background-image: url("../assets/5.jpg");
  background-position: center;
}
.sixth-slide {
  background-image: url("../assets/6.jpg");
  background-position: center;
}
.seventh-slide {
  background-image: url("../assets/7.jpg");
  background-position: center;
}
.eighth-slide {
  background-image: url("../assets/8.jpg");
  background-position: center;
}
</style>
