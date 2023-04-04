// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]
OVERLAY = document.querySelector('.wrap > .overlay')


document.addEventListener('DOMContentLoaded', function () {
	// Основной слайдер на главной
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})
	}


	// Карусель товаров
	const productsSliders = [],
		products = document.querySelectorAll('.products:not(.kits) .swiper'),
		productsKits = document.querySelectorAll('.products.kits .swiper')

	products.forEach(function (el, i) {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 4
				},
				1440: {
					spaceBetween: 30,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setHeight(swiper.el.querySelectorAll('.product .name'))
					setHeight(swiper.el.querySelectorAll('.product .desc'))
				},
				resize: swiper => {
					let productsName = swiper.el.querySelectorAll('.product .name'),
						productsDesc = swiper.el.querySelectorAll('.product .desc')

					productsName.forEach(el => el.style.height = 'auto')
					productsDesc.forEach(el => el.style.height = 'auto')

					setHeight(productsName)
					setHeight(productsDesc)
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})

	productsKits.forEach(function (el, i) {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				}
			},
			on: {
				init: swiper => {
					setHeight(swiper.el.querySelectorAll('.product .name'))
					setHeight(swiper.el.querySelectorAll('.product .desc'))
				},
				resize: swiper => {
					let productsName = swiper.el.querySelectorAll('.product .name'),
						productsDesc = swiper.el.querySelectorAll('.product .desc')

					productsName.forEach(el => el.style.height = 'auto')
					productsDesc.forEach(el => el.style.height = 'auto')

					setHeight(productsName)
					setHeight(productsDesc)
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Карусель статей
	const articlesSliders = [],
		articles = document.querySelectorAll('.articles .swiper')

	articles.forEach(function (el, i) {
		el.classList.add('articles_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1440: {
					spaceBetween: 30,
					slidesPerView: 2
				}
			}
		}

		articlesSliders.push(new Swiper('.articles_s' + i, options))
	})


	// Карусель брендов
	const brandsSliders = [],
		brands = document.querySelectorAll('.brands .swiper')

	brands.forEach(function (el, i) {
		el.classList.add('brands_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 4
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 5
				},
				1280: {
					spaceBetween: 30,
					slidesPerView: 6
				}
			}
		}

		brandsSliders.push(new Swiper('.brands_s' + i, options))
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>',
		spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		main: null
	}


	// Всплывающие окна
	const modalBtns = document.querySelectorAll('.modal_btn'),
		modalCloseBtns = document.querySelectorAll('.modal .close_btn')

	if (modalBtns) {
		modalBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				Fancybox.close()

				Fancybox.show([{
					src: document.getElementById(el.getAttribute('data-modal')),
					type: 'inline'
				}])
			})
		})
	}

	if (modalCloseBtns) {
		modalCloseBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				Fancybox.close()
			})
		})
	}


	// Увеличение картинки
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	// Моб. меню
	const mobMenuBtn = document.querySelector('.mob_header .mob_menu_btn'),
		mobMenu = document.querySelector('header'),
		mobMenuCloseBtn = document.querySelector('header .mob_close_btn')

	if (mobMenuBtn) {
		mobMenuBtn.addEventListener('click', e => {
			e.preventDefault()

			mobMenuBtn.classList.toggle('active')
			BODY.classList.toggle('menu_open')
			mobMenu.classList.toggle('show')
			OVERLAY.classList.toggle('visible')
		})
	}

	if (mobMenuCloseBtn) {
		mobMenuCloseBtn.addEventListener('click', e => {
			e.preventDefault()

			mobMenuBtn.classList.toggle('active')
			BODY.classList.toggle('menu_open')
			mobMenu.classList.toggle('show')
			OVERLAY.classList.toggle('visible')
		})
	}

	if (OVERLAY) {
		OVERLAY.addEventListener('click', e => {
			e.preventDefault()

			mobMenuBtn.classList.remove('active')
			BODY.classList.remove('menu_open')
			mobMenu.classList.remove('show')
			OVERLAY.classList.remove('visible')
		})
	}


	// Маска ввода
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true,
			})
		})
	}


	// Кастомный select
	const selects = document.querySelectorAll('select')

	if (selects) {
		selects.forEach(el => NiceSelect.bind(el))
	}


	// Мини всплывающие окна
	const miniModalBtns = document.querySelectorAll('.mini_modal_btn'),
		miniModals = document.querySelectorAll('.mini_modal')

	miniModalBtns.forEach(el => {
		let eventName = ''

		el.classList.contains('on_hover')
			? eventName = 'mouseenter'
			: eventName = 'click'

		el.addEventListener(eventName, e => {
			e.preventDefault()

			const modalId = el.getAttribute('data-modal-id')

			if (el.classList.contains('active')) {
				el.classList.remove('active')
				miniModals.forEach(modal => modal.classList.remove('active'))

				if (is_touch_device()) BODY.style = 'cursor: default;'
			} else {
				miniModalBtns.forEach(btn => btn.classList.remove('active'))
				el.classList.add('active')

				miniModals.forEach(modal => modal.classList.remove('active'))

				const modal = document.getElementById(modalId)

				modal.classList.add('active')

				if (is_touch_device()) BODY.style = 'cursor: pointer;'
			}
		})
	})

	// Закрываем всплывашку при клике за её пределами
	document.addEventListener('click', e => {
		if (!e.target.closest('.modal_cont')) {
			miniModals.forEach(modal => modal.classList.remove('active'))
			miniModalBtns.forEach(btn => btn.classList.remove('active'))

			OVERLAY.classList.remove('show')

			if (is_touch_device()) BODY.style = 'cursor: default;'
		}
	})


	// Фильтр
	$('.mob_filter_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	$('.filter .label').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.item')

		$(this).toggleClass('active')
		parent.find('.data').slideToggle(300)
	})


	$priceRange = $('.filter #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 150000,
		from: 129,
		to: 129000,
		step: 1,
		onChange: data => {
			$('.filter .price_range input.from').val(data.from)
			$('.filter .price_range input.to').val(data.to)
		},
		onUpdate: data => {
			$('.filter .price_range input.from').val(data.from)
			$('.filter .price_range input.to').val(data.to)
		}
	}).data('ionRangeSlider')

	$('.filter .price_range .input').keyup(function () {
		$priceRange.update({
			from: parseInt($('.filter .price_range input.from').val()),
			to: parseInt($('.filter .price_range input.to').val())
		})
	})


	// Фильтр - спойлер
	$('.filter .spoler_btn').click(function(e) {
		e.preventDefault()

		let data = $(this).closest('.data')

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? data.find('.hide').slideDown(300)
			: data.find('.hide').slideUp(200)
	})


	// Изменение количества товара
	const amountMinusBtns = document.querySelectorAll('.amount .minus'),
		amountPlusBtns = document.querySelectorAll('.amount .plus'),
		amountInputs = document.querySelectorAll('.amount input')

	if (amountMinusBtns) {
		amountMinusBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				let parent = el.closest('.amount'),
					input = parent.querySelector('.input'),
					inputVal = parseFloat(input.value),
					minimum = parseFloat(input.getAttribute('data-minimum')),
					step = parseFloat(input.getAttribute('data-step')),
					unit = input.getAttribute('data-unit')

				if (inputVal > minimum) input.value = inputVal - step + unit
			})
		})
	}

	if (amountPlusBtns) {
		amountPlusBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				let parent = el.closest('.amount'),
					input = parent.querySelector('input'),
					inputVal = parseFloat(input.value),
					maximum = parseFloat(input.getAttribute('data-maximum')),
					step = parseFloat(input.getAttribute('data-step')),
					unit = input.getAttribute('data-unit')

				if (inputVal < maximum) input.value = inputVal + step + unit
			})
		})
	}

	if (amountInputs) {
		amountInputs.forEach(el => {
			el.addEventListener('keydown', e => {
				let maximum = parseInt(el.getAttribute('data-maximum'))

				setTimeout(() => {
					if (el.value == '' || el.value == 0) el.maximum = parseInt(el.getAttribute('data-minimum'))
					if (el.value > maximum) el.value = maximum
				})
			})
		})
	}


	// ЛК - заказы
	$('.lk_info .orders .order .head').click(function(e) {
		e.preventDefault()

		let order = $(this).closest('.order')

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? order.find('.data').slideDown(300)
			: order.find('.data').slideUp(200)
	})


	// Копирование промокода
	const clipboard = new ClipboardJS('.copy_btn')

	clipboard.on('success', e => {
		e.preventDefault()

		$(e.trigger).addClass('copied')

		setTimeout(() => $(e.trigger).removeClass('copied'), 3000)

		e.clearSelection()
	})


	// Показать/Скрыьт пароль
	$('.form .visible_btn').click(function(e) {
		e.preventDefault()

		let field = $(this).closest('.field')

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? field.find('.input').attr('type', 'text')
			: field.find('.input').attr('type', 'password')
	})


	// Подтверждение возраста
	// Fancybox.show([{
	// 	src: '#confirm_age_modal',
	// 	type: 'inline'
	// }])


	// Карточка товара - Винтажи и объемы
	$('.product_info .volumes .more_btn .btn').click(function(e) {
		e.preventDefault()

		$('.product_info .volumes label.hide').show()
		$(this).hide()
	})


	// Товар в избранное
	$('.product .favorite_btn, .product_info .favorite_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})
})



window.addEventListener('load', function () {
	// Выравнивание элементов в сетке
	document.querySelectorAll('.products .row').forEach(el => {
		let styles = getComputedStyle(el)

		productsHeight(el, parseInt(styles.getPropertyValue('--products_count')))
	})
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


		// Выравнивание элементов в сетке
		document.querySelectorAll('.products .row').forEach(el => {
			let styles = getComputedStyle(el)

			productsHeight(el, parseInt(styles.getPropertyValue('--products_count')))
		})


		// Моб. версия
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



// Выравнивание товаров
function productsHeight(context, step) {
	let start = 0,
		finish = step,
		products = [...context.querySelectorAll('.product')],
		productsName = context.querySelectorAll('.name'),
		productsDesc = context.querySelectorAll('.desc'),
		i = 0

	productsName.forEach(el => el.style.height = 'auto')
	productsDesc.forEach(el => el.style.height = 'auto')

	products.forEach(el => {
		products.slice(start, finish).forEach(el => el.setAttribute('nodeList', i))

		setHeight(context.querySelectorAll('[nodeList="' + i + '"] .name'))
		setHeight(context.querySelectorAll('[nodeList="' + i + '"] .desc'))

		start = start + step
		finish = finish + step
		i++
	})
}