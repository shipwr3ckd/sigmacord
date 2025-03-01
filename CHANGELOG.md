# 1.0.0 (2025-03-01)


### Bug Fixes

* actually fix improper FAB insets ([e987723](https://github.com/shipwr3ckd/sigmacord/commit/e9877234befc837126f4a24b23c837e7ed8f6b5b))
* Adapt to change of `window.modules` being a Map ([78c303b](https://github.com/shipwr3ckd/sigmacord/commit/78c303b5f5eae283b082f96ef5923f2eac110e7c)), closes [#120](https://github.com/shipwr3ckd/sigmacord/issues/120)
* api quickfix ([652449b](https://github.com/shipwr3ckd/sigmacord/commit/652449bd505544ff0f1f65a09fd0dc03a8b1d17a))
* **api/patcher:** allow cancelling lazy patching ([e70f598](https://github.com/shipwr3ckd/sigmacord/commit/e70f59830625e41392999834968dd36b44d276a1))
* backport iOS invalid element type crash fix ([afacfa0](https://github.com/shipwr3ckd/sigmacord/commit/afacfa06480f60d461840a211c09abb363dc8546))
* **badges:** check if user is null ([a0c2ca7](https://github.com/shipwr3ckd/sigmacord/commit/a0c2ca7837c4585ead0e630d4475c354671fb8fd))
* change `Bunny` to `Revenge` in `ErrorBoundary` content ([89f1b18](https://github.com/shipwr3ckd/sigmacord/commit/89f1b18ebb8995f9b26e3eaa83223cea54c0bc3d))
* cloudsync hotfix (hopefully) ([89035fe](https://github.com/shipwr3ckd/sigmacord/commit/89035fe9a177e889a8a2f8f97474dc12ce105f71))
* **commands:** fill new required properties ([32afc78](https://github.com/shipwr3ckd/sigmacord/commit/32afc78e0a087ae21dcd9760dc4485cf87bba07f)), closes [#81](https://github.com/shipwr3ckd/sigmacord/issues/81)
* **constants:** update forward proxy link ([58781a0](https://github.com/shipwr3ckd/sigmacord/commit/58781a08ea92db1d18f5d96b543359a9f7ff0373))
* crash when opening noti settings ([1c15174](https://github.com/shipwr3ckd/sigmacord/commit/1c151745e2ad88eddd503be2c4850e515363d780))
* downgrade dependencies to fix build issue ([b803053](https://github.com/shipwr3ckd/sigmacord/commit/b803053e28c77529d62179b75c22c2365869d020))
* **entry:** await core init & unawait plugins init ([3ed0f77](https://github.com/shipwr3ckd/sigmacord/commit/3ed0f777a0d0e44c4438f9dfa3046724308ff13a))
* **entry:** load @metro/internals/modules before main init ([87913ce](https://github.com/shipwr3ckd/sigmacord/commit/87913cecfc2bb90b04b584274d3a10990e41a1b7))
* failsafe panel UI settings patching ([46a2c6e](https://github.com/shipwr3ckd/sigmacord/commit/46a2c6eaa16ca57f23f55881977f24ceb51e0d8b))
* Fix old settings menu and make some improvements to it ([#90](https://github.com/shipwr3ckd/sigmacord/issues/90)) ([e240509](https://github.com/shipwr3ckd/sigmacord/commit/e2405093eea5268d0afe88ded8735db7b5dfef43))
* fix themes page crashing? ([f542e8c](https://github.com/shipwr3ckd/sigmacord/commit/f542e8ce472a202c20d2d4d2f8989a29ddbdd2d0))
* fonts error displaying as theme error ([6243316](https://github.com/shipwr3ckd/sigmacord/commit/6243316c350fb746d204d2286227cd00798d933a)), closes [#42](https://github.com/shipwr3ckd/sigmacord/issues/42)
* **i18n:** outdated locale was used instead ([7c8ee06](https://github.com/shipwr3ckd/sigmacord/commit/7c8ee06c7e3b33f2cf8c41c3d3eb9d85d5899b75))
* **issue-template:** declare no plugin request [skip ci] ([87cfc74](https://github.com/shipwr3ckd/sigmacord/commit/87cfc742f65397297bd23d2950739ea1387c218c))
* **lib/api/native/modules:** add more native module fallbacks ([825a404](https://github.com/shipwr3ckd/sigmacord/commit/825a404cae335572aeaa713697383b7d14eca25f))
* **lib/api/native/modules:** add more native module fallbacks ([#102](https://github.com/shipwr3ckd/sigmacord/issues/102)) ([6f95203](https://github.com/shipwr3ckd/sigmacord/commit/6f95203dfa5beb3b48a9cc6061e712acd0ca8fb3)), closes [#99](https://github.com/shipwr3ckd/sigmacord/issues/99)
* **lib/api/native/modules:** add new MMKVManager fallback ([a68f137](https://github.com/shipwr3ckd/sigmacord/commit/a68f1375437e164196745ad01d1997aa9ff1e67b))
* **lib/ui/settings:** fix icon not showing up ([2fc7715](https://github.com/shipwr3ckd/sigmacord/commit/2fc7715fa4494c0b105a6399edc4877a155d3512))
* load core plugins ([ed52f33](https://github.com/shipwr3ckd/sigmacord/commit/ed52f332da8a189eb1141e1f2c17f50c50562d1a))
* load plugins traditionally ([2dda939](https://github.com/shipwr3ckd/sigmacord/commit/2dda93928cacf6c49f930e1def2c765f1996ee51))
* **metro-cache:** cache building ([072f189](https://github.com/shipwr3ckd/sigmacord/commit/072f189a728d3e913a82bdb0899633611032955b))
* **metro/modules:** patch registry instead ([4b94b7f](https://github.com/shipwr3ckd/sigmacord/commit/4b94b7fd9c4d82d2fbaaef7f14ca79a9004f94c2))
* **metro/patchNativeComponentRegistry:** return component name if fail ([26b7615](https://github.com/shipwr3ckd/sigmacord/commit/26b7615f84ea32302771323de1a8c252dfd2b7d1))
* **metro/polyfill:** correctly polyfill ([9bd47d2](https://github.com/shipwr3ckd/sigmacord/commit/9bd47d28a414681390b7c6d781d939dba1bd1bb6))
* **metro/polyfill:** unproxy polyfill ([e660447](https://github.com/shipwr3ckd/sigmacord/commit/e660447143c3a8cb286803ef5fc196bad3708242))
* **metro:** average metro fix nothing to look here ([2560e9a](https://github.com/shipwr3ckd/sigmacord/commit/2560e9aeb514c2b4efb43c4c225410aac5095bd8))
* **metro:** Blacklist IntlMessagesProxy exports ([e2a05a7](https://github.com/shipwr3ckd/sigmacord/commit/e2a05a77eef57d5eeea7204e93941278c4ed3340))
* **metro:** magical fixes ([af6ba01](https://github.com/shipwr3ckd/sigmacord/commit/af6ba01079ad82ca8a87e285b8ea905a2e6e1710))
* **metro:** more checks for the event the cache got faulty (hopefully) ([4cca972](https://github.com/shipwr3ckd/sigmacord/commit/4cca972185064c7fba7c301e9638001e460270c2))
* **metro:** proxies when unindexed ([8bbf1db](https://github.com/shipwr3ckd/sigmacord/commit/8bbf1dbf5e7a24b1d617339d8f38c41302a183ca))
* **metro:** uncached not founds ([c89dc17](https://github.com/shipwr3ckd/sigmacord/commit/c89dc175e396d0ea168311a5076c26a939beb5f3))
* **metro:** unlazify react components when needed ([4057995](https://github.com/shipwr3ckd/sigmacord/commit/4057995a86cd84f32b4ad24b7426c8b252f4756a))
* **native:** update native modules name ([99c1266](https://github.com/shipwr3ckd/sigmacord/commit/99c12660f4857abe33ddc5b7056242b5c0ea8bcc))
* only show plugin browser on dev mode ([0817e53](https://github.com/shipwr3ckd/sigmacord/commit/0817e533de7537eec47d52b4fe385ae0f65ef5cd))
* pass IconComponent for settings section ([e80ab84](https://github.com/shipwr3ckd/sigmacord/commit/e80ab84b7cfe20acefc95954fb54b588eae89b7c))
* pass IconComponent for settings section ([e56ec77](https://github.com/shipwr3ckd/sigmacord/commit/e56ec778e0ab44611d27297d9ce258c43a70ac8f))
* **plugins:** filter out internal fields when loading plugins ([e141a62](https://github.com/shipwr3ckd/sigmacord/commit/e141a62dd06761d93f4ea957c32a7d4294253214))
* **plugins:** handle unhandled cases ([61286d8](https://github.com/shipwr3ckd/sigmacord/commit/61286d8980b4c603c38aaa9a462fc0dc406867a7))
* **plugins:** only load core plugins for pyon plugins manager ([fc1ca20](https://github.com/shipwr3ckd/sigmacord/commit/fc1ca2086d210f8ddc3e5a104b496f09e046bf9d))
* **plugins:** race condition when enabling plugin ([85c10af](https://github.com/shipwr3ckd/sigmacord/commit/85c10aff12866d0f491bb6560464c46b3323077a))
* **polyfill/vendetta:** pass the right Button component ([8a4d5fc](https://github.com/shipwr3ckd/sigmacord/commit/8a4d5fc0f3a68e11f246f5ce5b0359f1f498f0ec))
* **polyfill/vendetta:** unproxy some components ([f136597](https://github.com/shipwr3ckd/sigmacord/commit/f136597edd2a110fc1950b280c62bb483ceaccae))
* **polyfills:** ??? ([ca25639](https://github.com/shipwr3ckd/sigmacord/commit/ca25639ff01adb57a35c4a9cb3b225d7643a2296))
* readd semantic fallback for spec 2 themes ([0fd2107](https://github.com/shipwr3ckd/sigmacord/commit/0fd2107473c35334cc8ff2a548021469dadbbeb4))
* remove debug traces ([863466e](https://github.com/shipwr3ckd/sigmacord/commit/863466e48a741ede369a7032554191eac81e0905))
* remove keyExtractor from flashlist (untested) ([5afcb7b](https://github.com/shipwr3ckd/sigmacord/commit/5afcb7b33069f10e5028a38110b1f8e4cc57a983))
* remove parent from emitter callback ([fe937a4](https://github.com/shipwr3ckd/sigmacord/commit/fe937a4ab5631a0bb23706794511598770015e09))
* revive vendetta compat ([945955d](https://github.com/shipwr3ckd/sigmacord/commit/945955dce8da9512bff63240db4bf567977c9d76))
* **scripts/build:** correct output filename ([c384fd1](https://github.com/shipwr3ckd/sigmacord/commit/c384fd1a3ae3d82a03d3ea3e37c9a4155f10cb5b))
* **scripts:** fix --serve and set "const and let" as unsupported ([af13f7b](https://github.com/shipwr3ckd/sigmacord/commit/af13f7ba0bf2ddc79d043ee17c51843542ca98f4))
* set bottom inset for floating buttons ([6f52993](https://github.com/shipwr3ckd/sigmacord/commit/6f52993838573cd133f128c1c0b8507524140a00))
* **settings:** update tab index lookup approach ([93c17e8](https://github.com/shipwr3ckd/sigmacord/commit/93c17e8e0c8597104d147d94da71078d6e368135))
* **settings:** update tab index lookup approach ([821cbf0](https://github.com/shipwr3ckd/sigmacord/commit/821cbf01f2b16d8ba454fdbcf41efcb754607152))
* **storage:** cache childrens proxies ([b1cd040](https://github.com/shipwr3ckd/sigmacord/commit/b1cd040993bab1bf7d886b59bf6461ec21e6e29a))
* **storage:** properly create sub-proxy storage ([c4371ed](https://github.com/shipwr3ckd/sigmacord/commit/c4371ed566411e3936ccbbd474a9022d5fcd24f5))
* **themes:** use alternative way to patch chat background ([5ec4150](https://github.com/shipwr3ckd/sigmacord/commit/5ec41500b5c498d0ff45114af692961b0d1d574e)), closes [#123](https://github.com/shipwr3ckd/sigmacord/issues/123)
* **theme:** update validation logic ([c3cbc78](https://github.com/shipwr3ckd/sigmacord/commit/c3cbc78e13d5679f5ae0f9a79a8a24b0764a0d4f))
* **types:** fix typescript [skip ci] ([61f9b65](https://github.com/shipwr3ckd/sigmacord/commit/61f9b6510b18032e4e91b7b2c87315d8ce6dea85))
* **ui/components/ErrorBoundaryScreen:** minor misspelling & update branding ([#57](https://github.com/shipwr3ckd/sigmacord/issues/57)) ([a71dd7d](https://github.com/shipwr3ckd/sigmacord/commit/a71dd7d0eb4c5e5003ff9743bcceab43ba2897c3))
* **ui/components:** fix Search icon ([#46](https://github.com/shipwr3ckd/sigmacord/issues/46)) ([105e1c5](https://github.com/shipwr3ckd/sigmacord/commit/105e1c5ba73bb57a91af2bdf355ce0b219eab96a))
* **ui/reporter/ErrorBoundaryScreen:** move comment to a single line ([657c8eb](https://github.com/shipwr3ckd/sigmacord/commit/657c8ebd78df946a1aacd75c50e50b63920ebc2f))
* **ui/settings/Developer:** actually fix asset browser border radius ([e98ad5a](https://github.com/shipwr3ckd/sigmacord/commit/e98ad5af2eed3997b66f21f18a648bacf09de6c1))
* **ui/settings/Developer:** apply rounded corners fix ([d968d18](https://github.com/shipwr3ckd/sigmacord/commit/d968d1880efbc949893b2f2c7d11aff064412860))
* **ui/settings/Developer:** fix border radiuses for Asset Browser ([87263d4](https://github.com/shipwr3ckd/sigmacord/commit/87263d4380cb4a9c62281fc1ac7326c91684b46f))
* **ui/settings/Developer:** replace references to IDs in Asset Browser with indexes ([333a391](https://github.com/shipwr3ckd/sigmacord/commit/333a3919bf37c59645b31733eef90745f415d340))
* **ui/settings:** register `Bunny` section to support bunny plugins ([03893ab](https://github.com/shipwr3ckd/sigmacord/commit/03893ab69cb0703e054229dfc0fa9697da26b31e))
* **ui:** fix react crash when uninstalling a plugin ([b629261](https://github.com/shipwr3ckd/sigmacord/commit/b629261316029cb756cf3635fe1c4592a15350b8))
* **ui:** unlazify FluxDispatcher, repair patchTabsUI ([b0acf89](https://github.com/shipwr3ckd/sigmacord/commit/b0acf895e443cdd6b7165852ca1a474e360e7909))
* update file existence check to use object for prefix ([85cbac7](https://github.com/shipwr3ckd/sigmacord/commit/85cbac714a40d4afc273e9d710608c9094942412))
* update getBuiltInCommands usage ([3eb83ee](https://github.com/shipwr3ckd/sigmacord/commit/3eb83eed333434112c9c7f99cdfa768f61e6369d))
* **vd-polyfill:** return fake object ([4181e15](https://github.com/shipwr3ckd/sigmacord/commit/4181e15e89da2b63c768f62db1ec9cee1c3e593a))
* wrap `addonpage` in `safeareaview` ([724fc1e](https://github.com/shipwr3ckd/sigmacord/commit/724fc1e135850d9439abcba03df1cd288ca3593b))
* wrap ErrorBoundaryScreen with SafeAreaProvider ([5e3f9b7](https://github.com/shipwr3ckd/sigmacord/commit/5e3f9b72361159da57c072cafed44424184d57f5))
* wrap only `FloatingActionButton` in `SafeAreaView` for `AddonPage` ([42a8268](https://github.com/shipwr3ckd/sigmacord/commit/42a8268630800d268b31f3750c3fa69d965acabc))
* wrong imports ([87ba67e](https://github.com/shipwr3ckd/sigmacord/commit/87ba67e8c2a3cec6c9b03312937dfa3f5adde0f8))


### Features

* add official plugin repo ([60a95ab](https://github.com/shipwr3ckd/sigmacord/commit/60a95aba108859e0239c970ce585c5f47b3268df))
* **AddonPage:** Add sort options ([7bd53f7](https://github.com/shipwr3ckd/sigmacord/commit/7bd53f7985013dae6b81eacc1dd0e26b7cb02654))
* adopt dev metro ([cc87948](https://github.com/shipwr3ckd/sigmacord/commit/cc879485ac7d720c04191453865c677351b86f8c))
* bunny plugins ui init ([5fe3025](https://github.com/shipwr3ckd/sigmacord/commit/5fe302533921fedb48414a17ce01225a8c9f39c4))
* **caching:** cache metro finds, persists across reboots ([e4df998](https://github.com/shipwr3ckd/sigmacord/commit/e4df998bb395c53bda51cf3269379a168c42473e))
* **ci:** allow dev builds ([73ebfbc](https://github.com/shipwr3ckd/sigmacord/commit/73ebfbc42f784655fdefcea52f352350c329c83f))
* **ci:** pass release args ([e19e89c](https://github.com/shipwr3ckd/sigmacord/commit/e19e89ca12f292e9e2d3244563d2290d6e0bcc07))
* **core/i18n:** update default strings ([e232a72](https://github.com/shipwr3ckd/sigmacord/commit/e232a7242988e74f4c81e8ef9111f63395e82cbd))
* **coreplugins:** add badges ([e3df56d](https://github.com/shipwr3ckd/sigmacord/commit/e3df56dc58c8c6078269ef800d6ad899ddfa52d3))
* Custom fonts support ([#28](https://github.com/shipwr3ckd/sigmacord/issues/28)) ([a0d1808](https://github.com/shipwr3ckd/sigmacord/commit/a0d1808cbc0dbdf01c95de2293deb1498d53be12))
* dev builds init ([bc80f43](https://github.com/shipwr3ckd/sigmacord/commit/bc80f432b1e106c0b12d05f10130aae385223d33))
* fonts overhaul ([2e3dc3c](https://github.com/shipwr3ckd/sigmacord/commit/2e3dc3c4873aa36a5c876630d4581459673cb5cf))
* highlight search keywords ([0fc8c69](https://github.com/shipwr3ckd/sigmacord/commit/0fc8c69d516b799b8c3f5873402811b36179fb3a))
* implemet basic plugin info ([a198b71](https://github.com/shipwr3ckd/sigmacord/commit/a198b71074d90c37c4d8a1042cc093c6db192d91))
* improve fonts management ux ([b30e33d](https://github.com/shipwr3ckd/sigmacord/commit/b30e33d2c6be9d5fefc26903fecbf8fcccc0df42))
* **metro+utils:** init lazyfication ([ee6669f](https://github.com/shipwr3ckd/sigmacord/commit/ee6669f514c4b489e635b89d25b657b93d4ba898))
* **metro:** assets caching ([d6b47de](https://github.com/shipwr3ckd/sigmacord/commit/d6b47dee771ee21fe6a542c29a58ea5af126c9d3))
* **metro:** cache module flags ([3667a43](https://github.com/shipwr3ckd/sigmacord/commit/3667a4361e92cdb1ef3a88a326ec763076d1bfbf))
* **metro:** expose common components & custom jsx runtime ([019fdc2](https://github.com/shipwr3ckd/sigmacord/commit/019fdc28b345e8b6f07cb96562f5e26c112da4cf))
* **metro:** lazify destructures ([dcb0408](https://github.com/shipwr3ckd/sigmacord/commit/dcb0408e31319529cc6a567f0691bcb5863ce8f2))
* **metro:** lazy patching! ([b489aea](https://github.com/shipwr3ckd/sigmacord/commit/b489aea48ad720fe5800e4907708b1bb8236aa95))
* **patcher:** resolvable proxy patch ([dd6742d](https://github.com/shipwr3ckd/sigmacord/commit/dd6742d08defd5f5c1d6b0bbcc5ba475ed06d107))
* **plugins:** include plugin hash in sourceURL for caching ([926d875](https://github.com/shipwr3ckd/sigmacord/commit/926d875de7016b11d56a746777613b2850ed4b44))
* **plugins:** init new bunny spec ([b3c1b74](https://github.com/shipwr3ckd/sigmacord/commit/b3c1b748a0112aa1754c9fec16a365fcc0be4bcb))
* port ErrorBoundary from dev ([f447910](https://github.com/shipwr3ckd/sigmacord/commit/f44791049a762fbce777b03e9d930fba0c0c6570))
* port pyoncord's plugin system ([ffc04ee](https://github.com/shipwr3ckd/sigmacord/commit/ffc04ee9c33567730c34416290114d2bd4391ab1))
* Rebrand to Revenge ([#51](https://github.com/shipwr3ckd/sigmacord/issues/51)) ([0a61404](https://github.com/shipwr3ckd/sigmacord/commit/0a614041327fa1232331676c40a8cd60839276ba))
* **settings/pages/Developer:** show assets types, mark non-previewable assets in AssetBrowser ([b7aacf7](https://github.com/shipwr3ckd/sigmacord/commit/b7aacf734e665a7af613aa5eaae8507ea31be5cd))
* show error when failing to import font entries ([9511f17](https://github.com/shipwr3ckd/sigmacord/commit/9511f174498dfa5758ad60a2e918220a685849e0))
* **storage:** port storage api from dev ([122c3a1](https://github.com/shipwr3ckd/sigmacord/commit/122c3a11e9f173c9c2ad9cd20d18926220428e8b))
* support 263+ clients ([f1ba456](https://github.com/shipwr3ckd/sigmacord/commit/f1ba456474a85cbc291bdb320a16721bd6108483))
* **themes:** port more stuff from 'dev' ([0eb28e4](https://github.com/shipwr3ckd/sigmacord/commit/0eb28e41b7243fcae952ded5a7c44c274103d753))
* **ui:** "generalize" plugin components ([e5c8799](https://github.com/shipwr3ckd/sigmacord/commit/e5c87994dbcaab98220a97b33cb3eca7ba159529))
* **ui/fonts:** rework ([8da3858](https://github.com/shipwr3ckd/sigmacord/commit/8da38589a240df481f7b3f3cfb84f8f03ede9dc6))
* **ui/plugins:** Bunny plugin sheet impl ([c168237](https://github.com/shipwr3ckd/sigmacord/commit/c168237fc97bcf34353d6bf391f360cbccdbed84))
* **ui/plugins:** overflow actions ([51c6b62](https://github.com/shipwr3ckd/sigmacord/commit/51c6b62f5c11c49fe92e4a74424d13ca3a1f33b8))
* **ui/plugins:** show error message ([d6d0801](https://github.com/shipwr3ckd/sigmacord/commit/d6d0801731fa6fdbbbb114d39ca0aa37b1c537f9))
* **ui/settings/Developer:** improve Asset Browser ([02eefe3](https://github.com/shipwr3ckd/sigmacord/commit/02eefe3223a3afe5547f88303be865cd414e2977))
* **ui/settings/Developer:** make Reload button variant destructive ([a4781d2](https://github.com/shipwr3ckd/sigmacord/commit/a4781d2a2c61ed21a78c8b81e22f21a2352b8858))
* **ui:** allow adding repository ([b5611d3](https://github.com/shipwr3ckd/sigmacord/commit/b5611d3cf185fd22b0a9adcffe3e473c3df7ca49))
* **ui:** ponyfill AlertModal's `extraContent` prop for older versions ([ad65247](https://github.com/shipwr3ckd/sigmacord/commit/ad6524772b9dd98f36b640b8fba2d36e2d6a7f2b)), closes [#91](https://github.com/shipwr3ckd/sigmacord/issues/91)
* **ui:** simplify some components ([4d88183](https://github.com/shipwr3ckd/sigmacord/commit/4d881835a63a64602dc0edc0332ee0097d28a601))
* **ui:** simplify unproxied notice ([1d4dfd3](https://github.com/shipwr3ckd/sigmacord/commit/1d4dfd311f4818d961b8667811bce7ecc0989152))
* **ui:** update icons in About page ([ad9e05c](https://github.com/shipwr3ckd/sigmacord/commit/ad9e05c2034cbf82a2784bde7c50a4f40f70e03c))
* **ui:** use new alert modal for addon installs ([4a83e32](https://github.com/shipwr3ckd/sigmacord/commit/4a83e32081f279662f59cc91c5d3b0966e43f3e6))
* **ui:** use new alert modal for unproxied plugin install ([fed8887](https://github.com/shipwr3ckd/sigmacord/commit/fed88873ca02b42b837523a4ba259c5cb609c18c))
* update visuals, strings, license, add clear bundle dev option ([ee3e53f](https://github.com/shipwr3ckd/sigmacord/commit/ee3e53f943d2733d541464bb3a969006afa31b07))
* wrap `App` in `SafeAreaProvider` ([ea1aec9](https://github.com/shipwr3ckd/sigmacord/commit/ea1aec9638f0a17e67ff38bf7d79655d19835f70))


### Performance Improvements

* **themes:** Draft rawColors normalization since writing directly is insanely slow for some reason ([e77e663](https://github.com/shipwr3ckd/sigmacord/commit/e77e6639d4a4d44f2f0cd0a9df708ea4f879d17b))
* **ui:** use FlashList and some tweaks ([43b2462](https://github.com/shipwr3ckd/sigmacord/commit/43b2462e812776f4e1db2e676841b749d66cf525))


### Reverts

* Revert "chore(ui/plugins): use buttons for toggle instead of switch" ([d71d503](https://github.com/shipwr3ckd/sigmacord/commit/d71d5037cda789a0339757b68d04e3306417da23))

## [1.7.2](https://github.com/revenge-mod/revenge-bundle/compare/v1.7.1...v1.7.2) (2025-02-27)


### Bug Fixes

* **metro:** Blacklist IntlMessagesProxy exports ([e2a05a7](https://github.com/revenge-mod/revenge-bundle/commit/e2a05a77eef57d5eeea7204e93941278c4ed3340))
* **settings:** update tab index lookup approach ([821cbf0](https://github.com/revenge-mod/revenge-bundle/commit/821cbf01f2b16d8ba454fdbcf41efcb754607152))

## [1.7.2-dev.1](https://github.com/revenge-mod/revenge-bundle/compare/v1.7.1...v1.7.2-dev.1) (2025-02-27)


### Bug Fixes

* **metro:** Blacklist IntlMessagesProxy exports ([e2a05a7](https://github.com/revenge-mod/revenge-bundle/commit/e2a05a77eef57d5eeea7204e93941278c4ed3340))
* **settings:** update tab index lookup approach ([821cbf0](https://github.com/revenge-mod/revenge-bundle/commit/821cbf01f2b16d8ba454fdbcf41efcb754607152))

## [1.7.1](https://github.com/revenge-mod/revenge-bundle/compare/v1.7.0...v1.7.1) (2025-02-14)


### Bug Fixes

* **settings:** update tab index lookup approach ([93c17e8](https://github.com/revenge-mod/revenge-bundle/commit/93c17e8e0c8597104d147d94da71078d6e368135))

## [1.7.1-dev.1](https://github.com/revenge-mod/revenge-bundle/compare/v1.7.0...v1.7.1-dev.1) (2025-02-14)


### Bug Fixes

* **settings:** update tab index lookup approach ([93c17e8](https://github.com/revenge-mod/revenge-bundle/commit/93c17e8e0c8597104d147d94da71078d6e368135))

# [1.7.0](https://github.com/revenge-mod/revenge-bundle/compare/v1.6.0...v1.7.0) (2025-02-02)


### Bug Fixes

* Adapt to change of `window.modules` being a Map ([78c303b](https://github.com/revenge-mod/revenge-bundle/commit/78c303b5f5eae283b082f96ef5923f2eac110e7c)), closes [#120](https://github.com/revenge-mod/revenge-bundle/issues/120)
* failsafe panel UI settings patching ([46a2c6e](https://github.com/revenge-mod/revenge-bundle/commit/46a2c6eaa16ca57f23f55881977f24ceb51e0d8b))
* **issue-template:** declare no plugin request [skip ci] ([87cfc74](https://github.com/revenge-mod/revenge-bundle/commit/87cfc742f65397297bd23d2950739ea1387c218c))
* **lib/api/native/modules:** add more native module fallbacks ([#102](https://github.com/revenge-mod/revenge-bundle/issues/102)) ([6f95203](https://github.com/revenge-mod/revenge-bundle/commit/6f95203dfa5beb3b48a9cc6061e712acd0ca8fb3)), closes [#99](https://github.com/revenge-mod/revenge-bundle/issues/99)
* **metro/patchNativeComponentRegistry:** return component name if fail ([26b7615](https://github.com/revenge-mod/revenge-bundle/commit/26b7615f84ea32302771323de1a8c252dfd2b7d1))
* **native:** update native modules name ([99c1266](https://github.com/revenge-mod/revenge-bundle/commit/99c12660f4857abe33ddc5b7056242b5c0ea8bcc))
* only show plugin browser on dev mode ([0817e53](https://github.com/revenge-mod/revenge-bundle/commit/0817e533de7537eec47d52b4fe385ae0f65ef5cd))
* pass IconComponent for settings section ([e80ab84](https://github.com/revenge-mod/revenge-bundle/commit/e80ab84b7cfe20acefc95954fb54b588eae89b7c))
* pass IconComponent for settings section ([e56ec77](https://github.com/revenge-mod/revenge-bundle/commit/e56ec778e0ab44611d27297d9ce258c43a70ac8f))
* **plugins:** filter out internal fields when loading plugins ([e141a62](https://github.com/revenge-mod/revenge-bundle/commit/e141a62dd06761d93f4ea957c32a7d4294253214))
* **plugins:** race condition when enabling plugin ([85c10af](https://github.com/revenge-mod/revenge-bundle/commit/85c10aff12866d0f491bb6560464c46b3323077a))
* readd semantic fallback for spec 2 themes ([0fd2107](https://github.com/revenge-mod/revenge-bundle/commit/0fd2107473c35334cc8ff2a548021469dadbbeb4))
* set bottom inset for floating buttons ([6f52993](https://github.com/revenge-mod/revenge-bundle/commit/6f52993838573cd133f128c1c0b8507524140a00))
* **themes:** use alternative way to patch chat background ([5ec4150](https://github.com/revenge-mod/revenge-bundle/commit/5ec41500b5c498d0ff45114af692961b0d1d574e)), closes [#123](https://github.com/revenge-mod/revenge-bundle/issues/123)
* **theme:** update validation logic ([c3cbc78](https://github.com/revenge-mod/revenge-bundle/commit/c3cbc78e13d5679f5ae0f9a79a8a24b0764a0d4f))
* **ui/reporter/ErrorBoundaryScreen:** move comment to a single line ([657c8eb](https://github.com/revenge-mod/revenge-bundle/commit/657c8ebd78df946a1aacd75c50e50b63920ebc2f))
* update file existence check to use object for prefix ([85cbac7](https://github.com/revenge-mod/revenge-bundle/commit/85cbac714a40d4afc273e9d710608c9094942412))
* wrap ErrorBoundaryScreen with SafeAreaProvider ([5e3f9b7](https://github.com/revenge-mod/revenge-bundle/commit/5e3f9b72361159da57c072cafed44424184d57f5))


### Features

* adopt dev metro ([cc87948](https://github.com/revenge-mod/revenge-bundle/commit/cc879485ac7d720c04191453865c677351b86f8c))
* **themes:** port more stuff from 'dev' ([0eb28e4](https://github.com/revenge-mod/revenge-bundle/commit/0eb28e41b7243fcae952ded5a7c44c274103d753))
* **ui/plugins:** Bunny plugin sheet impl ([c168237](https://github.com/revenge-mod/revenge-bundle/commit/c168237fc97bcf34353d6bf391f360cbccdbed84))
* **ui:** allow adding repository ([b5611d3](https://github.com/revenge-mod/revenge-bundle/commit/b5611d3cf185fd22b0a9adcffe3e473c3df7ca49))
* **ui:** update icons in About page ([ad9e05c](https://github.com/revenge-mod/revenge-bundle/commit/ad9e05c2034cbf82a2784bde7c50a4f40f70e03c))


### Performance Improvements

* **themes:** Draft rawColors normalization since writing directly is insanely slow for some reason ([e77e663](https://github.com/revenge-mod/revenge-bundle/commit/e77e6639d4a4d44f2f0cd0a9df708ea4f879d17b))

# [1.7.0-dev.1](https://github.com/revenge-mod/revenge-bundle/compare/v1.6.0...v1.7.0-dev.1) (2025-02-02)


### Bug Fixes

* Adapt to change of `window.modules` being a Map ([78c303b](https://github.com/revenge-mod/revenge-bundle/commit/78c303b5f5eae283b082f96ef5923f2eac110e7c)), closes [#120](https://github.com/revenge-mod/revenge-bundle/issues/120)
* failsafe panel UI settings patching ([46a2c6e](https://github.com/revenge-mod/revenge-bundle/commit/46a2c6eaa16ca57f23f55881977f24ceb51e0d8b))
* **issue-template:** declare no plugin request [skip ci] ([87cfc74](https://github.com/revenge-mod/revenge-bundle/commit/87cfc742f65397297bd23d2950739ea1387c218c))
* **lib/api/native/modules:** add more native module fallbacks ([#102](https://github.com/revenge-mod/revenge-bundle/issues/102)) ([6f95203](https://github.com/revenge-mod/revenge-bundle/commit/6f95203dfa5beb3b48a9cc6061e712acd0ca8fb3)), closes [#99](https://github.com/revenge-mod/revenge-bundle/issues/99)
* **metro/patchNativeComponentRegistry:** return component name if fail ([26b7615](https://github.com/revenge-mod/revenge-bundle/commit/26b7615f84ea32302771323de1a8c252dfd2b7d1))
* **native:** update native modules name ([99c1266](https://github.com/revenge-mod/revenge-bundle/commit/99c12660f4857abe33ddc5b7056242b5c0ea8bcc))
* only show plugin browser on dev mode ([0817e53](https://github.com/revenge-mod/revenge-bundle/commit/0817e533de7537eec47d52b4fe385ae0f65ef5cd))
* pass IconComponent for settings section ([e80ab84](https://github.com/revenge-mod/revenge-bundle/commit/e80ab84b7cfe20acefc95954fb54b588eae89b7c))
* pass IconComponent for settings section ([e56ec77](https://github.com/revenge-mod/revenge-bundle/commit/e56ec778e0ab44611d27297d9ce258c43a70ac8f))
* **plugins:** filter out internal fields when loading plugins ([e141a62](https://github.com/revenge-mod/revenge-bundle/commit/e141a62dd06761d93f4ea957c32a7d4294253214))
* **plugins:** race condition when enabling plugin ([85c10af](https://github.com/revenge-mod/revenge-bundle/commit/85c10aff12866d0f491bb6560464c46b3323077a))
* readd semantic fallback for spec 2 themes ([0fd2107](https://github.com/revenge-mod/revenge-bundle/commit/0fd2107473c35334cc8ff2a548021469dadbbeb4))
* set bottom inset for floating buttons ([6f52993](https://github.com/revenge-mod/revenge-bundle/commit/6f52993838573cd133f128c1c0b8507524140a00))
* **themes:** use alternative way to patch chat background ([5ec4150](https://github.com/revenge-mod/revenge-bundle/commit/5ec41500b5c498d0ff45114af692961b0d1d574e)), closes [#123](https://github.com/revenge-mod/revenge-bundle/issues/123)
* **theme:** update validation logic ([c3cbc78](https://github.com/revenge-mod/revenge-bundle/commit/c3cbc78e13d5679f5ae0f9a79a8a24b0764a0d4f))
* **ui/reporter/ErrorBoundaryScreen:** move comment to a single line ([657c8eb](https://github.com/revenge-mod/revenge-bundle/commit/657c8ebd78df946a1aacd75c50e50b63920ebc2f))
* update file existence check to use object for prefix ([85cbac7](https://github.com/revenge-mod/revenge-bundle/commit/85cbac714a40d4afc273e9d710608c9094942412))
* wrap ErrorBoundaryScreen with SafeAreaProvider ([5e3f9b7](https://github.com/revenge-mod/revenge-bundle/commit/5e3f9b72361159da57c072cafed44424184d57f5))


### Features

* adopt dev metro ([cc87948](https://github.com/revenge-mod/revenge-bundle/commit/cc879485ac7d720c04191453865c677351b86f8c))
* **themes:** port more stuff from 'dev' ([0eb28e4](https://github.com/revenge-mod/revenge-bundle/commit/0eb28e41b7243fcae952ded5a7c44c274103d753))
* **ui/plugins:** Bunny plugin sheet impl ([c168237](https://github.com/revenge-mod/revenge-bundle/commit/c168237fc97bcf34353d6bf391f360cbccdbed84))
* **ui:** allow adding repository ([b5611d3](https://github.com/revenge-mod/revenge-bundle/commit/b5611d3cf185fd22b0a9adcffe3e473c3df7ca49))
* **ui:** update icons in About page ([ad9e05c](https://github.com/revenge-mod/revenge-bundle/commit/ad9e05c2034cbf82a2784bde7c50a4f40f70e03c))


### Performance Improvements

* **themes:** Draft rawColors normalization since writing directly is insanely slow for some reason ([e77e663](https://github.com/revenge-mod/revenge-bundle/commit/e77e6639d4a4d44f2f0cd0a9df708ea4f879d17b))

# [1.6.0](https://github.com/revenge-mod/revenge-bundle/compare/v1.5.4...v1.6.0) (2025-01-23)


### Features

* support 263+ clients ([f1ba456](https://github.com/revenge-mod/revenge-bundle/commit/f1ba456474a85cbc291bdb320a16721bd6108483))

# [1.6.0-dev.1](https://github.com/revenge-mod/revenge-bundle/compare/v1.5.4...v1.6.0-dev.1) (2025-01-22)


### Features

* support 263+ clients ([f1ba456](https://github.com/revenge-mod/revenge-bundle/commit/f1ba456474a85cbc291bdb320a16721bd6108483))

## [1.5.4](https://github.com/revenge-mod/revenge-bundle/compare/v1.5.3...v1.5.4) (2024-12-26)


### Bug Fixes

* change `Bunny` to `Revenge` in `ErrorBoundary` content ([89f1b18](https://github.com/revenge-mod/revenge-bundle/commit/89f1b18ebb8995f9b26e3eaa83223cea54c0bc3d))
* **lib/ui/settings:** fix icon not showing up ([2fc7715](https://github.com/revenge-mod/revenge-bundle/commit/2fc7715fa4494c0b105a6399edc4877a155d3512))
* **ui/components/ErrorBoundaryScreen:** minor misspelling & update branding ([#57](https://github.com/revenge-mod/revenge-bundle/issues/57)) ([a71dd7d](https://github.com/revenge-mod/revenge-bundle/commit/a71dd7d0eb4c5e5003ff9743bcceab43ba2897c3))

## [1.5.4-dev.1](https://github.com/revenge-mod/revenge-bundle/compare/v1.5.3...v1.5.4-dev.1) (2024-12-26)


### Bug Fixes

* change `Bunny` to `Revenge` in `ErrorBoundary` content ([89f1b18](https://github.com/revenge-mod/revenge-bundle/commit/89f1b18ebb8995f9b26e3eaa83223cea54c0bc3d))
* **lib/ui/settings:** fix icon not showing up ([2fc7715](https://github.com/revenge-mod/revenge-bundle/commit/2fc7715fa4494c0b105a6399edc4877a155d3512))
* **ui/components/ErrorBoundaryScreen:** minor misspelling & update branding ([#57](https://github.com/revenge-mod/revenge-bundle/issues/57)) ([a71dd7d](https://github.com/revenge-mod/revenge-bundle/commit/a71dd7d0eb4c5e5003ff9743bcceab43ba2897c3))

## [1.5.3-dev.3](https://github.com/revenge-mod/revenge-bundle/compare/v1.5.3-dev.2...v1.5.3-dev.3) (2024-12-26)


### Bug Fixes

* change `Bunny` to `Revenge` in `ErrorBoundary` content ([89f1b18](https://github.com/revenge-mod/revenge-bundle/commit/89f1b18ebb8995f9b26e3eaa83223cea54c0bc3d))

## [1.5.3-dev.2](https://github.com/revenge-mod/revenge-bundle/compare/v1.5.3-dev.1...v1.5.3-dev.2) (2024-12-26)


### Bug Fixes

* **ui/components/ErrorBoundaryScreen:** minor misspelling & update branding ([#57](https://github.com/revenge-mod/revenge-bundle/issues/57)) ([a71dd7d](https://github.com/revenge-mod/revenge-bundle/commit/a71dd7d0eb4c5e5003ff9743bcceab43ba2897c3))

## [1.5.3](https://github.com/revenge-mod/revenge-bundle/compare/v1.5.2...v1.5.3) (2024-12-05)


* backport iOS invalid element type crash fix ([afacfa0](https://github.com/revenge-mod/revenge-bundle/commit/afacfa06480f60d461840a211c09abb363dc8546))

## [1.5.3-dev.1](https://github.com/revenge-mod/revenge-bundle/compare/v1.5.2...v1.5.3-dev.1) (2024-11-24)


### Bug Fixes

* **lib/ui/settings:** fix icon not showing up ([2fc7715](https://github.com/revenge-mod/revenge-bundle/commit/2fc7715fa4494c0b105a6399edc4877a155d3512))

## [1.5.2](https://github.com/revenge-mod/revenge-bundle/compare/v1.5.1...v1.5.2) (2024-11-13)


### Bug Fixes

* **lib/api/native/modules:** add new MMKVManager fallback ([a68f137](https://github.com/revenge-mod/revenge-bundle/commit/a68f1375437e164196745ad01d1997aa9ff1e67b))

## [1.5.1](https://github.com/revenge-mod/revenge-bundle/compare/v1.5.0...v1.5.1) (2024-11-04)


### Bug Fixes

* **lib/api/native/modules:** add more native module fallbacks ([825a404](https://github.com/revenge-mod/revenge-bundle/commit/825a404cae335572aeaa713697383b7d14eca25f))

# [1.5.0](https://github.com/revenge-mod/revenge-bundle/compare/v1.4.0...v1.5.0) (2024-10-26)


### Features

* wrap `App` in `SafeAreaProvider` ([ea1aec9](https://github.com/revenge-mod/revenge-bundle/commit/ea1aec9638f0a17e67ff38bf7d79655d19835f70))

# [1.4.0](https://github.com/revenge-mod/revenge-bundle/compare/v1.3.1...v1.4.0) (2024-10-26)


### Bug Fixes

* actually fix improper FAB insets ([e987723](https://github.com/revenge-mod/revenge-bundle/commit/e9877234befc837126f4a24b23c837e7ed8f6b5b))


### Features

* port ErrorBoundary from dev ([f447910](https://github.com/revenge-mod/revenge-bundle/commit/f44791049a762fbce777b03e9d930fba0c0c6570))
* **settings/pages/Developer:** show assets types, mark non-previewable assets in AssetBrowser ([b7aacf7](https://github.com/revenge-mod/revenge-bundle/commit/b7aacf734e665a7af613aa5eaae8507ea31be5cd))

# [1.4.0-dev.1](https://github.com/revenge-mod/revenge-bundle/compare/v1.3.1...v1.4.0-dev.1) (2024-10-26)


### Bug Fixes

* actually fix improper FAB insets ([e987723](https://github.com/revenge-mod/revenge-bundle/commit/e9877234befc837126f4a24b23c837e7ed8f6b5b))


### Features

* port ErrorBoundary from dev ([f447910](https://github.com/revenge-mod/revenge-bundle/commit/f44791049a762fbce777b03e9d930fba0c0c6570))
* **settings/pages/Developer:** show assets types, mark non-previewable assets in AssetBrowser ([b7aacf7](https://github.com/revenge-mod/revenge-bundle/commit/b7aacf734e665a7af613aa5eaae8507ea31be5cd))

## [1.3.1](https://github.com/revenge-mod/revenge-bundle/compare/v1.3.0...v1.3.1) (2024-10-23)


### Bug Fixes

* wrap only `FloatingActionButton` in `SafeAreaView` for `AddonPage` ([42a8268](https://github.com/revenge-mod/revenge-bundle/commit/42a8268630800d268b31f3750c3fa69d965acabc))

# [1.3.0](https://github.com/revenge-mod/revenge-bundle/compare/v1.2.0...v1.3.0) (2024-10-23)


### Bug Fixes

* wrap `addonpage` in `safeareaview` ([724fc1e](https://github.com/revenge-mod/revenge-bundle/commit/724fc1e135850d9439abcba03df1cd288ca3593b))


### Features

* improve fonts management ux ([b30e33d](https://github.com/revenge-mod/revenge-bundle/commit/b30e33d2c6be9d5fefc26903fecbf8fcccc0df42))
* show error when failing to import font entries ([9511f17](https://github.com/revenge-mod/revenge-bundle/commit/9511f174498dfa5758ad60a2e918220a685849e0))

# [1.3.0-dev.2](https://github.com/revenge-mod/revenge-bundle/compare/v1.3.0-dev.1...v1.3.0-dev.2) (2024-10-22)


### Bug Fixes

* wrap `addonpage` in `safeareaview` ([724fc1e](https://github.com/revenge-mod/revenge-bundle/commit/724fc1e135850d9439abcba03df1cd288ca3593b))

# [1.3.0-dev.1](https://github.com/revenge-mod/revenge-bundle/compare/v1.2.0...v1.3.0-dev.1) (2024-10-21)


### Features

* improve fonts management ux ([b30e33d](https://github.com/revenge-mod/revenge-bundle/commit/b30e33d2c6be9d5fefc26903fecbf8fcccc0df42))
* show error when failing to import font entries ([9511f17](https://github.com/revenge-mod/revenge-bundle/commit/9511f174498dfa5758ad60a2e918220a685849e0))

# [1.2.0](https://github.com/revenge-mod/revenge-bundle/compare/v1.1.2...v1.2.0) (2024-10-20)


### Bug Fixes

* **badges:** check if user is null ([a0c2ca7](https://github.com/revenge-mod/revenge-bundle/commit/a0c2ca7837c4585ead0e630d4475c354671fb8fd))
* downgrade dependencies to fix build issue ([b803053](https://github.com/revenge-mod/revenge-bundle/commit/b803053e28c77529d62179b75c22c2365869d020))
* Fix old settings menu and make some improvements to it ([#90](https://github.com/revenge-mod/revenge-bundle/issues/90)) ([e240509](https://github.com/revenge-mod/revenge-bundle/commit/e2405093eea5268d0afe88ded8735db7b5dfef43))
* load core plugins ([ed52f33](https://github.com/revenge-mod/revenge-bundle/commit/ed52f332da8a189eb1141e1f2c17f50c50562d1a))
* remove debug traces ([863466e](https://github.com/revenge-mod/revenge-bundle/commit/863466e48a741ede369a7032554191eac81e0905))
* remove parent from emitter callback ([fe937a4](https://github.com/revenge-mod/revenge-bundle/commit/fe937a4ab5631a0bb23706794511598770015e09))
* **types:** fix typescript [skip ci] ([61f9b65](https://github.com/revenge-mod/revenge-bundle/commit/61f9b6510b18032e4e91b7b2c87315d8ce6dea85))
* wrong imports ([87ba67e](https://github.com/revenge-mod/revenge-bundle/commit/87ba67e8c2a3cec6c9b03312937dfa3f5adde0f8))


### Features

* **coreplugins:** add badges ([e3df56d](https://github.com/revenge-mod/revenge-bundle/commit/e3df56dc58c8c6078269ef800d6ad899ddfa52d3))
* **metro:** expose common components & custom jsx runtime ([019fdc2](https://github.com/revenge-mod/revenge-bundle/commit/019fdc28b345e8b6f07cb96562f5e26c112da4cf))
* Rebrand to Revenge ([#51](https://github.com/revenge-mod/revenge-bundle/issues/51)) ([0a61404](https://github.com/revenge-mod/revenge-bundle/commit/0a614041327fa1232331676c40a8cd60839276ba))
* **storage:** port storage api from dev ([122c3a1](https://github.com/revenge-mod/revenge-bundle/commit/122c3a11e9f173c9c2ad9cd20d18926220428e8b))
* **ui:** ponyfill AlertModal's `extraContent` prop for older versions ([ad65247](https://github.com/revenge-mod/revenge-bundle/commit/ad6524772b9dd98f36b640b8fba2d36e2d6a7f2b)), closes [#91](https://github.com/revenge-mod/revenge-bundle/issues/91)
* **ui:** simplify some components ([4d88183](https://github.com/revenge-mod/revenge-bundle/commit/4d881835a63a64602dc0edc0332ee0097d28a601))
* **ui:** simplify unproxied notice ([1d4dfd3](https://github.com/revenge-mod/revenge-bundle/commit/1d4dfd311f4818d961b8667811bce7ecc0989152))

# [1.2.0-dev.3](https://github.com/revenge-mod/revenge-bundle/compare/v1.2.0-dev.2...v1.2.0-dev.3) (2024-10-19)


### Bug Fixes

* downgrade dependencies to fix build issue ([b803053](https://github.com/revenge-mod/revenge-bundle/commit/b803053e28c77529d62179b75c22c2365869d020))

# [1.2.0-dev.2](https://github.com/revenge-mod/revenge-bundle/compare/v1.2.0-dev.1...v1.2.0-dev.2) (2024-10-19)


### Bug Fixes

* wrong imports ([87ba67e](https://github.com/revenge-mod/revenge-bundle/commit/87ba67e8c2a3cec6c9b03312937dfa3f5adde0f8))

# [1.2.0-dev.1](https://github.com/revenge-mod/revenge-bundle/compare/v1.1.2...v1.2.0-dev.1) (2024-10-19)


### Bug Fixes

* **badges:** check if user is null ([a0c2ca7](https://github.com/revenge-mod/revenge-bundle/commit/a0c2ca7837c4585ead0e630d4475c354671fb8fd))
* Fix old settings menu and make some improvements to it ([#90](https://github.com/revenge-mod/revenge-bundle/issues/90)) ([e240509](https://github.com/revenge-mod/revenge-bundle/commit/e2405093eea5268d0afe88ded8735db7b5dfef43))
* load core plugins ([ed52f33](https://github.com/revenge-mod/revenge-bundle/commit/ed52f332da8a189eb1141e1f2c17f50c50562d1a))
* remove debug traces ([863466e](https://github.com/revenge-mod/revenge-bundle/commit/863466e48a741ede369a7032554191eac81e0905))
* remove parent from emitter callback ([fe937a4](https://github.com/revenge-mod/revenge-bundle/commit/fe937a4ab5631a0bb23706794511598770015e09))
* **types:** fix typescript [skip ci] ([61f9b65](https://github.com/revenge-mod/revenge-bundle/commit/61f9b6510b18032e4e91b7b2c87315d8ce6dea85))


### Features

* **coreplugins:** add badges ([e3df56d](https://github.com/revenge-mod/revenge-bundle/commit/e3df56dc58c8c6078269ef800d6ad899ddfa52d3))
* **metro:** expose common components & custom jsx runtime ([019fdc2](https://github.com/revenge-mod/revenge-bundle/commit/019fdc28b345e8b6f07cb96562f5e26c112da4cf))
* Rebrand to Revenge ([#51](https://github.com/revenge-mod/revenge-bundle/issues/51)) ([0a61404](https://github.com/revenge-mod/revenge-bundle/commit/0a614041327fa1232331676c40a8cd60839276ba))
* **storage:** port storage api from dev ([122c3a1](https://github.com/revenge-mod/revenge-bundle/commit/122c3a11e9f173c9c2ad9cd20d18926220428e8b))
* **ui:** ponyfill AlertModal's `extraContent` prop for older versions ([ad65247](https://github.com/revenge-mod/revenge-bundle/commit/ad6524772b9dd98f36b640b8fba2d36e2d6a7f2b)), closes [#91](https://github.com/revenge-mod/revenge-bundle/issues/91)
* **ui:** simplify some components ([4d88183](https://github.com/revenge-mod/revenge-bundle/commit/4d881835a63a64602dc0edc0332ee0097d28a601))
* **ui:** simplify unproxied notice ([1d4dfd3](https://github.com/revenge-mod/revenge-bundle/commit/1d4dfd311f4818d961b8667811bce7ecc0989152))
