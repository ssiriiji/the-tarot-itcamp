<script lang="ts">
	import { onMount } from 'svelte';

	// import checkMoney from '../Header.svelte'
	// import { checkMoney as money } from '../../lib/store.js';

	const redeem = (title: string, star: number) => {
		let pointsP = parseInt(localStorage.getItem('the-tarot') || '0');
		// let ProductsPaid = JSON.parse(localStorage.getItem('the-tarot-product-paid') || '');
		if (pointsP >= star) {
			localStorage.setItem('the-tarot', String(pointsP - star));
			// localStorage.setItem('the-tarot-product-paid', JSON.stringify(...(ProductsPaid + title)));
		}
	};

	onMount(() => {});
</script>

<section class="w-full font-[Mali]">
	<div class="w-[90%] flex justify-center mx-auto">
		<!-- รางวัล -->
		<div class="">
			<!-- grid -->
			<div class="flex justify-center flex-col items-center">
				<h1 class="font-medium text-3xl text-white">ของลางพรางชีวิต</h1>
				<div class="w-[90%] mt-5">
					<div class="grid grid-cols-6 gap-5 text-[#fff] font-semibold">
						<div class="bg-red-700 flex flex-col items-center rounded-lg p-3">
							<h1 class="text-xl mb-3">รับคำทำนายฟรี</h1>
							<img
								class="rounded-xl w-full aspect-square object-fill"
								src="https://media.discordapp.net/attachments/1232668352992907286/1232909807854424066/LOGO.png?ex=662b2c3c&is=6629dabc&hm=2c2185d8bdc267a6a55706701d2dc9194e38d2ffcffc46e63874114e590062db&=&format=webp&quality=lossless&width=597&height=597"
								alt=""
							/>

							<p class="my-3">ทำนายฟรีไม่มีอยู่จริง</p>
							<button
								on:click={() => {
									redeem('รับคำทำนายฟรี', 3);
								}}
								class="px-5 py-3 bg-white text-black rounded-full hover:bg-gradient-to-t from-gray-300 hover:drop-shadow-2xl"
								>ต้องการดาว x3</button
							>
						</div>
						<div class="bg-red-700 flex flex-col items-center rounded-lg p-3">
							<h1 class="text-xl mb-3">หินนำโชค</h1>
							<img
								class="bg-black rounded-xl bg-opacity-20 w-full aspect-square object-fill"
								src="https://www.didyma-official.com/cdn/shop/products/6P5A6146-XLRSE1K.jpg?v=1687184301"
								alt=""
							/>

							<p class="my-3">หินนำโชค พาโคกทุกเสา</p>
							<button
								on:click={() => {
									redeem('หินนำโชค', 49);
								}}
								class="px-5 py-3 bg-white text-black rounded-full hover:bg-gradient-to-t from-gray-300 hover:drop-shadow-2xl"
								>ต้องการดาว x49</button
							>
						</div>
						<div class="bg-red-700 flex flex-col items-center rounded-lg p-3">
							<h1 class="text-xl mb-3">ถุงทองนำโชค</h1>
							<img
								class="bg-black rounded-xl bg-opacity-20 w-full aspect-square object-cover"
								src="https://24kglow.gold/cdn/shop/products/BLTF0779G_24K_Gold_Money_Bag_Charm_2000x.jpg?v=1567487381"
								alt=""
							/>

							<p class="my-3">เป็นของที่นำโชคเเต่นำเขากลับไม่ได้</p>
							<button
								on:click={() => {
									redeem('ถุงทองนำโชค', 29);
								}}
								class="px-5 py-3 bg-white text-black rounded-full hover:bg-gradient-to-t from-gray-300 hover:drop-shadow-2xl"
								>ต้องการดาว x29</button
							>
						</div>
						<div class="bg-red-700 flex flex-col items-center rounded-lg p-3">
							<h1 class="text-xl mb-3">เเมวกวักนำโชค</h1>
							<img
								class="bg-black rounded-xl bg-opacity-20 w-full aspect-square"
								src="https://laz-img-sg.alicdn.com/p/23aed04ba2f9290d928233386128da94.jpg"
								alt=""
							/>

							<p class="my-3">กวักเเค่ไหนเขาก็ไม่สนใจ</p>
							<button
								on:click={() => {
									redeem('เเมวกวักนำโชค', 39);
								}}
								class="px-5 py-3 bg-white text-black rounded-full hover:bg-gradient-to-t from-gray-300 hover:drop-shadow-2xl"
								>ต้องการดาว x39</button
							>
						</div>
						<div class="bg-red-700 flex flex-col items-center rounded-lg p-3">
							<h1 class="text-xl mb-3">แผ่นทองนำโชค</h1>
							<img
								class="bg-black rounded-xl bg-opacity-20 w-full aspect-square"
								src="https://img.lazcdn.com/g/ff/kf/S2afbc06042f3420782ef11fef068381b8.jpg_720x720q80.jpg"
								alt=""
							/>

							<p class="my-3">ของดี! เเต่เเผ่นบางระวังหาย</p>
							<button
								on:click={() => {
									redeem('แผ่นทองนำโชค', 9);
								}}
								class="px-5 py-3 bg-white text-black rounded-full hover:bg-gradient-to-t from-gray-300 hover:drop-shadow-2xl"
								>ต้องการดาว x9</button
							>
						</div>
						<div class="bg-red-700 flex flex-col items-center rounded-lg p-3">
							<h1 class="text-xl mb-3">ด้ายเเดงนำโชค</h1>
							<img
								class="bg-black rounded-xl bg-opacity-20 w-full aspect-square object-cover"
								src="https://teen.mthai.com/app/uploads/2014/07/13732552.png"
								alt=""
							/>

							<p class="my-3">สายใยเเห่งรัก สมครับ สมน้ำหน้า</p>
							<button
								on:click={() => {
									redeem('ด้ายเเดงนำโชค', 19);
								}}
								class="px-5 py-3 bg-white text-black rounded-full hover:bg-gradient-to-t from-gray-300 hover:drop-shadow-2xl"
								>ต้องการดาว x19</button
							>
						</div>
						<div class="bg-red-700 flex flex-col items-center rounded-lg p-3">
							<h1 class="text-xl mb-3">ปี่เซี๊ยะ</h1>
							<img
								class="bg-black rounded-xl bg-opacity-20 w-full aspect-square"
								src="https://www.khamchanod.in.th/wp-content/uploads/2023/01/%E0%B8%9B%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%8B%E0%B8%B5%E0%B8%A2%E0%B8%B0%E0%B8%97%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%97%E0%B9%89.jpg"
								alt=""
							/>

							<p class="my-3 text-center">
								การขจัดสิ่งชั่วร้ายได้จริง เเต่ก็ขจัดเขาออกจากกันไม่ได้
							</p>
							<button
								on:click={() => {
									redeem('ปี่เซี๊ยะ', 59);
								}}
								class="px-5 py-3 bg-white text-black rounded-full hover:bg-gradient-to-t from-gray-300 hover:drop-shadow-2xl"
								>ต้องการดาว x59</button
							>
						</div>
						<div class="bg-red-700 flex flex-col items-center rounded-lg p-3">
							<h1 class="text-xl mb-3">กังหันเปลี่ยนชีวิต</h1>
							<img
								class="bg-black rounded-xl bg-opacity-20 w-full aspect-square object-cover"
								src="https://www.aurora.co.th/img_master/uploads/Content/The_Miracle_Mill_Collection_1.jpg"
								alt=""
							/>

							<p class="my-3">เปลี่ยนชีวิตเเล้วไง เปลี่ยนไปอยู่ดี</p>
							<button
								on:click={() => {
									redeem('กังหันเปลี่ยนชีวิต', 69);
								}}
								class="px-5 py-3 bg-white text-black rounded-full hover:bg-gradient-to-t from-gray-300 hover:drop-shadow-2xl"
								>ต้องการดาว x69</button
							>
						</div>
						<div class="bg-red-700 flex flex-col items-center rounded-lg p-3">
							<h1 class="text-xl mb-3">หลวงจัง 999</h1>
							<img
								class="bg-black rounded-xl bg-opacity-20 w-full aspect-square"
								src="https://down-th.img.susercontent.com/file/th-11134207-7r990-lower0q0lwtl34_tn"
								alt=""
							/>

							<p class="my-3">หลวงจังยังไม่ได้นอน 999</p>
							<button
								on:click={() => {
									redeem('กังหันเปลี่ยนชีวิต', 199);
								}}
								class="px-5 py-3 bg-white text-black rounded-full hover:bg-gradient-to-t from-gray-300 hover:drop-shadow-2xl"
								>ต้องการดาว x199</button
							>
						</div>
						<div class="bg-red-700 flex flex-col items-center rounded-lg p-3">
							<h1 class="text-xl mb-3">หลวงอุตต้า Max++</h1>
							<img
								class="bg-black rounded-xl bg-opacity-20 w-full aspect-square"
								src="https://down-th.img.susercontent.com/file/sg-11134201-7qve6-litn7lfsxc21a3"
								alt=""
							/>

							<p class="my-3">หลวงต้าบ้ายอสองนิ้วเเต่ไม่สองใจ</p>
							<button
								on:click={() => {
									redeem('หลวงอุตต้า Max++', 299);
								}}
								class="px-5 py-3 bg-white text-black rounded-full hover:bg-gradient-to-t from-gray-300 hover:drop-shadow-2xl"
								>ต้องการดาว x299</button
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
