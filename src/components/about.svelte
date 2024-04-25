<script>
	import ContainerSection from './container-section.svelte';
</script>

<ContainerSection id="about" className=" py-24 flex  flex-col md:flex-row">
	<div class="flex flex-col gap-2 justify-center">
		<p class="text-white text-5xl font-mali m-2">ไพ่ทาโรต์ (Tarot Card)</p>

		<p class="text-white font-mali px-2">
			เป็นไพ่ชนิดหนึ่ง เป็นที่รู้จักตั้งแต่ พุทธศตวรรษที่ 20 แต่ลักษณะไพ่ไม่เหมือนในปัจจุบัน
			กระทั่งพุทธศตวรรษที่ 23 ในทวีปยุโรปเป็นที่รู้จักในฐานะเครื่องมือในการทำนายโชคชะตามากกว่า
			ไพ่จะมีลักษณะคล้ายกับไพ่ป๊อกที่ใช้เล่นกันตามปัจจุบัน แต่แยกออกเป็น 2 ชนิด คือ สำรับใหญ่ (Major
			Arcana) ซึ่งประกอบด้วยไพ่ 22 ใบ และสำรับเล็ก (Minor Arcana) 56 ใบ ไพ่แต่ละใบมีสัญลักษณ์ประจำ
			การอ่านไพ่ขึ้นอยู่หลายปัจจัย อย่างแรก ดูจากความหมายของสัญลักษณ์ของตัวไพ่ และอีกประการหนึ่งคือ
			อ่านรวมกับไพ่ใบอื่นโดยดูจากตำแหน่งของไพ่ ไพ่ทาโรต์มีหลายแบบและได้รับความนิยม
			เนื่องจากความไม่ยุ่งยากในการอ่านไพ่ที่มีสัญลักษณ์บอกความหมายอยู่แล้ว
		</p>
	</div>

	<img src="./images/about/example.webp" alt="logo" class="flex justify-end items-center ml-5" />
</ContainerSection>
