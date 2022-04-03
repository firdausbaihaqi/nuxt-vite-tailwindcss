<template>
  <div v-if="post" class="min-h-screen p-4 bg-gray-100 rounded shadow-sm bg-opacity-80">
    <div class="max-w-xl p-8 mx-auto mt-10 bg-white rounded-3xl">
      <h2 class="text-3xl font-semibold">{{ post.title }}</h2>
      <p class="mt-10">{{ post.content }}</p>
    </div>
    <div class="max-w-xl mx-auto">
      <div class="p-2 mt-5 bg-white md:p-5 rounded-xl">
        <form @submit.prevent="sendComment" class="mt-6">
          <div class="w-full">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            >
              Nama
            </label>

            <input
              class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
              required
              v-model="name"
            />
          </div>

          <div class="w-full mt-4">
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              >Komentar</label
            >

            <textarea
              required
              v-model="content"
              class="block w-full h-20 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            ></textarea>
          </div>

          <div class="flex justify-center mt-6">
            <button
              type="submit"
              class="px-4 py-2 text-white transition-colors duration-200 transform bg-red-400 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Kirim Komentar
            </button>
          </div>
        </form>
      </div>
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="flex w-full mx-auto my-4 antialiased text-black dark:bg-gray-800 dark:text-gray-200"
      >
        <img
          class="w-12 mt-1 mr-2 rounded-full h-9"
          src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png"
        />
        <div>
          <div class="bg-white dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5 w-full">
            <div class="text-sm font-semibold leading-relaxed">
              {{ comment.attributes.name }}
            </div>
            <div class="leading-snug text-normal md:leading-normal">
              {{ comment.attributes.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostDetail",
  props: {
    post: {
      type: Object,
      required: true,
    },
    comments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      name: "",
      content: "",
    };
  },
  methods: {
    async sendComment() {
      const payload = {
        data: {
          article: this.$route.params.id,
          content: this.content,
          name: this.name,
        },
      };

      const resp = await this.$axios.$post(
        `https://mcpd-backend.herokuapp.com/api/comments`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (resp.error) {
        console.log(resp.error);
        alert("Komentar gagal terkirim, silahkan coba beberapa saat lagi");
      } else {
        alert("Komentar telah terkirim");
      }
      location.reload();
    },
  },
};
</script>
