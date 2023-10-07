<script lang="ts">
	const beforeAdvices = [
		'از مراجعه به افراد سودجوی، نا آشنا و بدون تجربه و بدون اطلاعات که مدعی انجام حجامت بوده و متأسفانه روز به روز در حال افزایش هستند جداً خودداری فرمایید. برای این منظور دانش خود را در زمینه حجامت بالا ببرید تا توانایی تشخیص حجامت خوب و بد و همچنین حجامت گرِ خوب را پیدا کنید.',
		'حجامت گرِ شما باید فهرست رژیم های غذایی و گیاهی مناسب را برحسب بیماری و طبع و مزاجتان در اختیار شما قرار دهد و الا حجامت ، فصد و زالو درمانی شما کم اثر یا بی اثر و حتی گاهی خطرناک و مضر خواهد شد و در مجموع بیماری شما سیر بهبودی نخواهد داشت.',
		'به تشخیص پزشک معالج خود در مورد ضرورت یا ممنوعیت احتمالی حجامت احترام بگذارید و آن را قبول کنید.در بسیاری از مواقع، بهترین نوع حجامت برای شروع درمان، حجامت عام است امّا ارائه طرح درمانی از وظایف پزشک شما است و بهتر است به نظر او احترام بگذارید.',
		'از ۲۴ ساعت قبل از حجامت نزدیکی (مقاربت جنسی) ممنوع است.',
		'بلافاصله بعد از خوردن غذا، حجامت نکنید.',
		'جهت استمداد از پروردگار متعال برای شفا یافتن و گرفتن نتیجه درمانی بهتر با وضو باشید و دعای حجامت (به روایت از حضرت امام رضا علیه السلام) و یا آیه مبارکه آیه الکرسی را پیش از حجامت قرائت کنید و صلوات بفرستید.',
		'حجامت های متوالی (با فواصل کوتاه) غلط است و ترتیب و زمان بندی انجام حجامت برای فرد بسته به طبع و مزاج وی متفاوت است که پزشک حاذق آن را معین و تجویز خواهد کرد.',
		'حجامت کردن بانوان، در ایام عادت ماهیانه ممنوع است.',
		'حجامت کردن خانم حامله، پس از پایان ماه چهارم مجاز است و اگر شرایظ عمومی حجامت که در این بخش ذکر شده رعایت گردد نتنها مضر نیست بلکه دارای فواید زیادی برای مادر و جنین میباشد.',
		'حجامت در ماه مبارک رمضان (پس از افطار) بلامانع است.',
		'قبل از حجامت از مصرف غذاها و ادویه های تند همچون تخم مرغ و فلفل خودداری گردد.',
		'از حمام رفتن قبل از انجام حجامت خودداری شود.',
		'از استعمال داروهای اسهال آور قبل از انجام حجامت پرهیز شود.',
		'قبل از انجام حجامت از عوامل تحریک کننده خون مثل غضب و خنده و ترس اجتناب شود.',
		'در صورتی که افراد دارای معده حساس هستند قبل از انجام حجامت یک تکه نان را به شربت میوه های شیرین و رب سیب و امثال این ها آغشته کرده میل نمایند.',
		'در صورت داشتن مشکلات معده مثل سردی و یبوست مزاج باید حتما مزاج اصلاح گشته سپس اقدام به انجام حجامت شود که در این مورد قبل از انجام حجامت حتما با پزشک خود مشورت فرمائید.',
		'افراد سوداوی و صفراوی مزاج بایستی با احتیاط و طبق نظر طبیب حجامت کنند.',
		'حجامت برای نوزادان و اطفال و نوجوانان هیچ ضرری ندارد بلکه موجب افزایش رشد قد و وزن آنها شده و موجب کاهش حالات پرخاشگری و عصبیت اطفال و موجب افزایش اشتها و محکم شدن استخوانها و عضلات آنان می شود.',
		'اطفالی که حجامت می شوند کمتر دچار عفونت و سرماخودگی و بیماری می شوند و مقاومت بدن آنان در مقایسه با اطفال و نوجوانان حجامت نشده بسیار بسیار بیشتر است.'
	]
	const afterAdvices = [
		'پس از حجامت تا ۲۴ ساعت سیگار نکشید، ورزش و کار سنگین نکنید، ماهی و نمک و غذای شور و ترشی جات و تخم مرغ و لبنیات نخورید.',
		'برای اینکه جای زخم حجامت باقی نماند و همچنین جهت رفع خارش آن سه شب متوالی قبل از خواب (به مدت ۳ دقیقه) پنبه را به شیر پاستوریزه آغشته کرده و روی زخمها بزنید و یا روزی دو مرتبه با لایه ای ازعسل موضع را آغشته نمایید.',
		'دوازده ساعت پس از حجامت می توانید استحمام کنید (اما موضع حجامت را فقط با آب خالی بشویید و لیف و صابون نزنید)',
		'نماز خواندن پس از حجامت (طبق فتاوای مراجع تقلید) بلامانع است و نیاز به شستشو یا حمام نیست.',
		'طی ۶ ساعت اول پس از حجامت خوردن شربت عسل (یک قاشق عسل با یک لیوان آب ولرم مخلوط کرده ) سکنجبین و ماء‌الشعیر طبی مطلوبست. همچنین انار و عرق شاهتره نیز پس از حجامت بسیار مفید است.',
		'خوردن انار، رب انار، سیاهدانه، زرشک سیاه، سماق، خاکشیر، عرق کاسنی، سکنجبین (مخلوط سرکه و عسل به نسبت یک به چهار و نرم جوشانیدن آن) سبب رقیق شدن خون می شود.',
		'در صورتی که موضع حجامت کبود و متورم و دردناک بود جهت کاهش درد یخ را داخل نایلون گذاشته و ۵ تا ۶ مرتبه به مدت یک دقیقه روی موضع بگذارید.',
		'پس از حجامت گاهی ضعف ، سردرد ، سرگیجه ، تپش قلب ، گرفتگی عضلات و برخی ناراحتیهای جزئی دیگر ممکن است پیش آید که اغلب پس از یک الی سه روز برطرف می شود ودر صورتی که این ناراحتی نگران کننده و آزار دهنده بود، حتماً با پزشک خود تماس بگیرید یا مراجعه حضوری کنید.',
		'پس از انجام حجامت، زالو و فصد با اطلاع و هماهنگی پزشک حجامت کننده و طبق برنامه ریزی او (نه سرخود) داروهای شیمیایی، پماد، کرم و قرص و آمپول استفاده نکنید تا تاثیر حجامت به تنهایی روشن شود و پزشک دربارۀ نوع ادامۀ روش درمان بتواند دقیق تر تصمیم گیری کند.',
		'اگر حجامت بار اول، در درصد کمی از افراد تاثیر چندانی نداشته باشد یا حتی گاهی (بطور موقت) مقداری علائم بیماری و درد بیمار بیشتر شود بایستی عجله نکنید و نگران نشوید و با پزشک خود تماس بگیرید یا مراجعه کنید تا شما را راهنمایی کند.',
		'در دو صورت حجامت بسیار عالی اثر می کند اول: تکرار حجامت با زمان بندی مشخص شده توسط پزشک (حجامت نیز مانند سایر روشهای درمانی طبی، نیازمند به چند جلسه تکرار است تا اثر کند)  دوم: دستورات غذایی و نسخه های گیاهی ارائه شده توسط پزشک کاملاً مراعات شود زیرا در غیراینصورت تأثیر حجامت کم خواهدبود. در صورت امکان ۵-۷ ساعت بعد از انجام حجامت از خوابیدن پرهیز شود.',
		'پس از حجامت تا ۲۴ ساعت زناشویی (مقاربت جنسی ) ممنوع است.',
		'کسانی که در مرتبه اول حجامت ، دچار کاهش فشار خون ، سرگیجه و حالت تهوع می شوند باید بدانند که حجامت برای بدن این دسته از افراد بسیار واجب تر است زیرا این ها اختلالات خون رسانی و گرفتگی عروق و غلظت خون دارند که با حجامت مرتفع می شود و معمولا در مراحل بعدی چنین حالتی نخواهند داشت.',
		'پس از انجام حجامت در روزهای سوم و چهاردم به مطب تشریف بیاورید تا توسط پزشک مجدداً ویزیت و معاینه شوید و تاثیرات حجامت بر مشکل شما بررسی شده و توصیه های لازم به شما داده شود.',
		'بعد از انجام حجامت از پرخوری پرهیز نمائید.',
		'مقدار خونی که از محلّ حجامت خارج می شود؛ بسته به مزاج و وضعیت جسمانی حجامت شونده، فصل و حتّی روز حجامت، متفاوت است و کم یا زیاد بودن آن تأثیر چندانی بر روند درمانی بیمار نمی گذارد. تعداد دفعات خونگیری هم در هر فرد متفاوت است و به طور متوسط ۶- ۵ بار است. خونگیری معمولاً باید تا قطع خود به خود خونریزی یا روشن شدن رنگ خون ادامه پیدا کند. بنابراین اگر در اتاق حجامت اشخاص دیگری نیز مشغول حجامت هستند؛ خود را با آنها مقایسه نکنید و کم و زیاد بودن میزان خون خروجی خود را ملاک خوب یا بد بودن حجامت قرار ندهید.'
	]
</script>

<section>
	<div class="accordion">
		<div class="accordion-item">
			<input
				id="accordion-trigger-1"
				class="accordion-trigger-input"
				type="checkbox"
			/>
			<label class="accordion-trigger" for="accordion-trigger-1">
				توصیه های قبل از حجامت
			</label>

			<section class="accordion-animation-wrapper">
				<div class="accordion-animation">
					<div class="accordion-transform-wrapper">
						<div class="accordion-content">
							<ol>
								{#each beforeAdvices as advice}
									<li>{advice}</li>
								{/each}
							</ol>
						</div>
					</div>
				</div>
			</section>
		</div>

		<div class="accordion-item">
			<input
				id="accordion-trigger-2"
				class="accordion-trigger-input"
				type="checkbox"
			/>
			<label class="accordion-trigger" for="accordion-trigger-2">
				Accordion item 2
			</label>
			<section class="accordion-animation-wrapper">
				<div class="accordion-animation">
					<div class="accordion-transform-wrapper">
						<div class="accordion-content">
							<h2>Accordion content</h2>
							<p>
								This accordion content can be any height. It
								does not require fixed max-height, or any ways
								of transitioning height with Javascript. This
								content could be as long as it might and should
								resize and animate effortlessly.
							</p>
							<p>
								This should function smoothly in newest
								Webkit/Chromium browsers.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>

		<div class="accordion-item">
			<input
				id="accordion-trigger-3"
				class="accordion-trigger-input"
				type="checkbox"
			/>
			<label class="accordion-trigger" for="accordion-trigger-3">
				توصیه های بعد از حجامت
			</label>

			<section class="accordion-animation-wrapper">
				<div class="accordion-animation">
					<div class="accordion-transform-wrapper">
						<div class="accordion-content">
							<ol>
								{#each afterAdvices as advice}
									<li>{advice}</li>
								{/each}
							</ol>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</section>

<style>
	ol li {
		list-style-type: decimal;
	}

	/* The accordion functionality */
	:root {
		--transitionLength: 0.4s;
		--transitionTiming: ease;
	}

	.accordion-animation-wrapper {
		display: grid;
		grid-template-rows: 0fr;
		overflow: hidden;
		transition: grid-template-rows var(--transitionLength)
			var(--transitionTiming);
	}

	.accordion-trigger-input:checked ~ .accordion-animation-wrapper {
		grid-template-rows: 1fr;
	}

	.accordion-animation {
		min-height: 0;
	}

	.accordion-transform-wrapper {
		transform: translateY(-100%);
		visibility: hidden;
		transition: transform var(--transitionLength) var(--transitionTiming),
			visibility 0s var(--transitionLength) var(--transitionTiming);
	}

	.accordion-trigger-input:checked
		~ .accordion-animation-wrapper
		.accordion-transform-wrapper {
		transform: translateY(0);
		visibility: visible;
		transition: transform var(--transitionLength) var(--transitionTiming),
			visibility 0s linear;
	}

	/* Margins inside the container will throw animation height calculations off, better use paddings */
	.accordion-content * {
		margin: 0;
	}

	/* The styles */

	.accordion {
		min-width: 320px;
		width: 80%;
		margin: 0 auto;
		background: white;
	}

	.accordion-item {
		border-top: 2px solid #676767;
		border-bottom: 2px solid #676767;
		margin-bottom: -2px;
		overflow: hidden;
	}

	.accordion-trigger-input {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}

	.accordion-trigger {
		display: block;
		position: relative;
		padding: 16px;
		transition: box-shadow var(--transitionLength) var(--transitionTiming);
		z-index: 1;
		cursor: pointer;
	}

	.accordion-trigger-input:focus-visible ~ .accordion-trigger {
		outline: 2px solid;
		outline-offset: -2px;
	}

	.accordion-trigger::after {
		display: block;
		position: absolute;
		left: 16px;
		top: 18px;
		content: '';
		width: 8px;
		height: 8px;
		border: 2px solid #676767;
		border-bottom: transparent;
		border-left: transparent;
		transform: rotate(135deg);
		transition: transform var(--transitionLength) var(--transitionTiming);
	}

	.accordion-trigger-input:checked ~ .accordion-trigger::after {
		transform: rotate(135deg) rotateX(180deg) rotateY(180deg)
			translateY(4px) translateX(-4px);
	}

	.accordion-trigger-input:checked ~ .accordion-trigger {
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
		transition: box-shadow calc(var(--transitionLength) / 4)
			var(--transitionTiming);
	}

	.accordion-content {
		padding: 1rem 2rem;
		background: #f8f8f8;
	}

	.accordion-content li {
		padding-bottom: 1.5em;
	}

	.accordion-content li:last-of-type {
		padding-bottom: 0;
	}
</style>
