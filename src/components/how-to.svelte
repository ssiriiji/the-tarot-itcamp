<script>
	import ContainerSection from "./container-section.svelte";

</script>


<ContainerSection id="how-to" className="py-6">
    <p class="text-[60px] text-white text-center font-mali mb-6 ">Howto Play ?</p>

    <div class="box h-[500px] flex items-center justify-center font-mali mb-[50px]">
        <div class="relative flex w-[500px] h-[700px] flex-col bg-white rounded-xl bg-clip-border shadow-md">
            <div class="relative mx-4 mt-6 h-[900px] overflow-hidden rounded-xl shadow-lg">
            <img src="./images/logo.webp" alt="" class="flex items-center justify-center w-full">
            </div>
            <div class="p-6">
              <h5 class="mb-2 block text-xl font-semibold text-[#561C24]">
                วิธีการเล่น The Tarot Random <br>
              </h5>
              <p class="block text-base font-light text-[#6D2932] ">
              -กดสุ่มการ์ด<br>
              -อ่านคำทำนายและคำแนะนำ<br>
              -สะสมแต้มตามคะแนนบนการ์ด<br>
              -สะสมแต้มให้ครบแล้วนำมาแลกของรางวัล
              </p>
            </div>
            <div class="p-6 pt-0">
              <a href="#play" data-ripple-light="true" type="button" class="select-none rounded-lg bg-[#561C24] py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md transition-all hover:scale-[95%] font-mali">
                get start
              </a>
            </div>
          </div>
    </div>

</ContainerSection>
