'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">squac documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-dbeff38b4f13982c8809c8c5341e28abfbd2caf871817603a3e81f3016c4035eca0e35f56f942a247f62587a65ccd991d6e5dcc05dfbdf3d3e4ff7f5f1c39341"' : 'data-target="#xs-components-links-module-AppModule-dbeff38b4f13982c8809c8c5341e28abfbd2caf871817603a3e81f3016c4035eca0e35f56f942a247f62587a65ccd991d6e5dcc05dfbdf3d3e4ff7f5f1c39341"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-dbeff38b4f13982c8809c8c5341e28abfbd2caf871817603a3e81f3016c4035eca0e35f56f942a247f62587a65ccd991d6e5dcc05dfbdf3d3e4ff7f5f1c39341"' :
                                            'id="xs-components-links-module-AppModule-dbeff38b4f13982c8809c8c5341e28abfbd2caf871817603a3e81f3016c4035eca0e35f56f942a247f62587a65ccd991d6e5dcc05dfbdf3d3e4ff7f5f1c39341"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CalendarModule.html" data-type="entity-link" >CalendarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CalendarModule-c880099bc89bf86723ff8e04649381f60dd6636701fa3ef04f14633057623ffed8757a25934e320e78077ee07006f9023be39466487ef84e8d56986a1393a2f3"' : 'data-target="#xs-components-links-module-CalendarModule-c880099bc89bf86723ff8e04649381f60dd6636701fa3ef04f14633057623ffed8757a25934e320e78077ee07006f9023be39466487ef84e8d56986a1393a2f3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CalendarModule-c880099bc89bf86723ff8e04649381f60dd6636701fa3ef04f14633057623ffed8757a25934e320e78077ee07006f9023be39466487ef84e8d56986a1393a2f3"' :
                                            'id="xs-components-links-module-CalendarModule-c880099bc89bf86723ff8e04649381f60dd6636701fa3ef04f14633057623ffed8757a25934e320e78077ee07006f9023be39466487ef84e8d56986a1393a2f3"' }>
                                            <li class="link">
                                                <a href="components/CalendarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalendarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChannelGroupModule.html" data-type="entity-link" >ChannelGroupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChannelGroupModule-9ad2db26d1062c9d69c0055f089d0dc274dd18cfc23ff6c636363c3595589e28f6f88503dcdc237c5ae4276adb85485e2ccbfd65a43b3a701d0335ee0f369292"' : 'data-target="#xs-components-links-module-ChannelGroupModule-9ad2db26d1062c9d69c0055f089d0dc274dd18cfc23ff6c636363c3595589e28f6f88503dcdc237c5ae4276adb85485e2ccbfd65a43b3a701d0335ee0f369292"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChannelGroupModule-9ad2db26d1062c9d69c0055f089d0dc274dd18cfc23ff6c636363c3595589e28f6f88503dcdc237c5ae4276adb85485e2ccbfd65a43b3a701d0335ee0f369292"' :
                                            'id="xs-components-links-module-ChannelGroupModule-9ad2db26d1062c9d69c0055f089d0dc274dd18cfc23ff6c636363c3595589e28f6f88503dcdc237c5ae4276adb85485e2ccbfd65a43b3a701d0335ee0f369292"' }>
                                            <li class="link">
                                                <a href="components/ChannelGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChannelGroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChannelGroupDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChannelGroupDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChannelGroupEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChannelGroupEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChannelGroupFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChannelGroupFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChannelGroupMapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChannelGroupMapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChannelGroupTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChannelGroupTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChannelGroupViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChannelGroupViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CsvUploadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CsvUploadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatchingRuleEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MatchingRuleEditComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChannelGroupRoutingModule.html" data-type="entity-link" >ChannelGroupRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-a718c15637dafc74e400fa86eeda0bc582cad33b8dc80310fc7b3ee52edd06e51e62d254ba701019a7f7a794712e7a2c9d00fe193af4685a1c9d426285fc0f6c"' : 'data-target="#xs-components-links-module-DashboardModule-a718c15637dafc74e400fa86eeda0bc582cad33b8dc80310fc7b3ee52edd06e51e62d254ba701019a7f7a794712e7a2c9d00fe193af4685a1c9d426285fc0f6c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-a718c15637dafc74e400fa86eeda0bc582cad33b8dc80310fc7b3ee52edd06e51e62d254ba701019a7f7a794712e7a2c9d00fe193af4685a1c9d426285fc0f6c"' :
                                            'id="xs-components-links-module-DashboardModule-a718c15637dafc74e400fa86eeda0bc582cad33b8dc80310fc7b3ee52edd06e51e62d254ba701019a7f7a794712e7a2c9d00fe193af4685a1c9d426285fc0f6c"' }>
                                            <li class="link">
                                                <a href="components/ChannelFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChannelFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardEditEntryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardEditEntryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataTypeSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataTypeSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MetricToggleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetricToggleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetEditEntryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetEditEntryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetEditInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetEditInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetEditMetricsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetEditMetricsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetEditOptionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetEditOptionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetMainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetMainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-DashboardModule-a718c15637dafc74e400fa86eeda0bc582cad33b8dc80310fc7b3ee52edd06e51e62d254ba701019a7f7a794712e7a2c9d00fe193af4685a1c9d426285fc0f6c"' : 'data-target="#xs-directives-links-module-DashboardModule-a718c15637dafc74e400fa86eeda0bc582cad33b8dc80310fc7b3ee52edd06e51e62d254ba701019a7f7a794712e7a2c9d00fe193af4685a1c9d426285fc0f6c"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DashboardModule-a718c15637dafc74e400fa86eeda0bc582cad33b8dc80310fc7b3ee52edd06e51e62d254ba701019a7f7a794712e7a2c9d00fe193af4685a1c9d426285fc0f6c"' :
                                        'id="xs-directives-links-module-DashboardModule-a718c15637dafc74e400fa86eeda0bc582cad33b8dc80310fc7b3ee52edd06e51e62d254ba701019a7f7a794712e7a2c9d00fe193af4685a1c9d426285fc0f6c"' }>
                                        <li class="link">
                                            <a href="directives/WidgetTypeExampleDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetTypeExampleDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MapModule.html" data-type="entity-link" >MapModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MapModule-3c11affbe1a45c9ccf0f8007d541f81b276fd741dabae0dddd7a837cc1444dd09cb76065b7c9d8a550947dd1fea3689b6a99d22cebe1d4c662f0a5670985e97a"' : 'data-target="#xs-components-links-module-MapModule-3c11affbe1a45c9ccf0f8007d541f81b276fd741dabae0dddd7a837cc1444dd09cb76065b7c9d8a550947dd1fea3689b6a99d22cebe1d4c662f0a5670985e97a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MapModule-3c11affbe1a45c9ccf0f8007d541f81b276fd741dabae0dddd7a837cc1444dd09cb76065b7c9d8a550947dd1fea3689b6a99d22cebe1d4c662f0a5670985e97a"' :
                                            'id="xs-components-links-module-MapModule-3c11affbe1a45c9ccf0f8007d541f81b276fd741dabae0dddd7a837cc1444dd09cb76065b7c9d8a550947dd1fea3689b6a99d22cebe1d4c662f0a5670985e97a"' }>
                                            <li class="link">
                                                <a href="components/MapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MetricModule.html" data-type="entity-link" >MetricModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MetricModule-b1abfd93906754ed239fd141c9da9604ba260f427ea1ba6eec46e817f6a1a3482fe8c4d2b3f94499150519be388aba58c9f6e3dc243c5c182f9951466beb1de4"' : 'data-target="#xs-components-links-module-MetricModule-b1abfd93906754ed239fd141c9da9604ba260f427ea1ba6eec46e817f6a1a3482fe8c4d2b3f94499150519be388aba58c9f6e3dc243c5c182f9951466beb1de4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MetricModule-b1abfd93906754ed239fd141c9da9604ba260f427ea1ba6eec46e817f6a1a3482fe8c4d2b3f94499150519be388aba58c9f6e3dc243c5c182f9951466beb1de4"' :
                                            'id="xs-components-links-module-MetricModule-b1abfd93906754ed239fd141c9da9604ba260f427ea1ba6eec46e817f6a1a3482fe8c4d2b3f94499150519be388aba58c9f6e3dc243c5c182f9951466beb1de4"' }>
                                            <li class="link">
                                                <a href="components/MetricComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetricComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MetricEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetricEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MetricEditEntryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetricEditEntryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MetricViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetricViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MetricRoutingModule.html" data-type="entity-link" >MetricRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MonitorModule.html" data-type="entity-link" >MonitorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MonitorModule-b5fe1a21fb31ac7de5bce5abd11314162c4722753655f20a17b09e10d089e93b12375a8885afdfa4445b3655c0afe834492fb4b131983df91997dc25018e50f5"' : 'data-target="#xs-components-links-module-MonitorModule-b5fe1a21fb31ac7de5bce5abd11314162c4722753655f20a17b09e10d089e93b12375a8885afdfa4445b3655c0afe834492fb4b131983df91997dc25018e50f5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MonitorModule-b5fe1a21fb31ac7de5bce5abd11314162c4722753655f20a17b09e10d089e93b12375a8885afdfa4445b3655c0afe834492fb4b131983df91997dc25018e50f5"' :
                                            'id="xs-components-links-module-MonitorModule-b5fe1a21fb31ac7de5bce5abd11314162c4722753655f20a17b09e10d089e93b12375a8885afdfa4445b3655c0afe834492fb4b131983df91997dc25018e50f5"' }>
                                            <li class="link">
                                                <a href="components/AlertViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MonitorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MonitorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MonitorEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MonitorEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MonitorEditEntryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MonitorEditEntryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MonitorViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MonitorViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MonitorRoutingModule.html" data-type="entity-link" >MonitorRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ParallelModule.html" data-type="entity-link" >ParallelModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ParallelModule-ac94653600b02457bcd940afb6a5d5e85b729db761a067ddc44cca701a7f8e5cc1f43500b6b48562a6d9e1ed88aee28b568b03e37017c7fe53721605b172bb42"' : 'data-target="#xs-components-links-module-ParallelModule-ac94653600b02457bcd940afb6a5d5e85b729db761a067ddc44cca701a7f8e5cc1f43500b6b48562a6d9e1ed88aee28b568b03e37017c7fe53721605b172bb42"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ParallelModule-ac94653600b02457bcd940afb6a5d5e85b729db761a067ddc44cca701a7f8e5cc1f43500b6b48562a6d9e1ed88aee28b568b03e37017c7fe53721605b172bb42"' :
                                            'id="xs-components-links-module-ParallelModule-ac94653600b02457bcd940afb6a5d5e85b729db761a067ddc44cca701a7f8e5cc1f43500b6b48562a6d9e1ed88aee28b568b03e37017c7fe53721605b172bb42"' }>
                                            <li class="link">
                                                <a href="components/ParallelPlotComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParallelPlotComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ScatterModule.html" data-type="entity-link" >ScatterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ScatterModule-e9aba3216fe2faa22a91360f99ffbcf4a846e7702decceb1ac40744eba759cb6eea514be5afd2ea8b55a3f656885c595136ab4a014649306f22074b7e475ce27"' : 'data-target="#xs-components-links-module-ScatterModule-e9aba3216fe2faa22a91360f99ffbcf4a846e7702decceb1ac40744eba759cb6eea514be5afd2ea8b55a3f656885c595136ab4a014649306f22074b7e475ce27"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ScatterModule-e9aba3216fe2faa22a91360f99ffbcf4a846e7702decceb1ac40744eba759cb6eea514be5afd2ea8b55a3f656885c595136ab4a014649306f22074b7e475ce27"' :
                                            'id="xs-components-links-module-ScatterModule-e9aba3216fe2faa22a91360f99ffbcf4a846e7702decceb1ac40744eba759cb6eea514be5afd2ea8b55a3f656885c595136ab4a014649306f22074b7e475ce27"' }>
                                            <li class="link">
                                                <a href="components/ScatterPlotComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScatterPlotComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-9b7c398d2c132b22ec9a6706754ed79a9a14308599e66901b03ee402805dedf62e75ad62747cd92af0d5601ca559c77e08c897c6acaa37ce2b2e32304bd066d5"' : 'data-target="#xs-components-links-module-SharedModule-9b7c398d2c132b22ec9a6706754ed79a9a14308599e66901b03ee402805dedf62e75ad62747cd92af0d5601ca559c77e08c897c6acaa37ce2b2e32304bd066d5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-9b7c398d2c132b22ec9a6706754ed79a9a14308599e66901b03ee402805dedf62e75ad62747cd92af0d5601ca559c77e08c897c6acaa37ce2b2e32304bd066d5"' :
                                            'id="xs-components-links-module-SharedModule-9b7c398d2c132b22ec9a6706754ed79a9a14308599e66901b03ee402805dedf62e75ad62747cd92af0d5601ca559c77e08c897c6acaa37ce2b2e32304bd066d5"' }>
                                            <li class="link">
                                                <a href="components/ChannelGroupSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChannelGroupSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DateSelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateSelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingOverlayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingOverlayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingSpinnerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingSpinnerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SharedIndicatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SharedIndicatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SnackbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SnackbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-9b7c398d2c132b22ec9a6706754ed79a9a14308599e66901b03ee402805dedf62e75ad62747cd92af0d5601ca559c77e08c897c6acaa37ce2b2e32304bd066d5"' : 'data-target="#xs-directives-links-module-SharedModule-9b7c398d2c132b22ec9a6706754ed79a9a14308599e66901b03ee402805dedf62e75ad62747cd92af0d5601ca559c77e08c897c6acaa37ce2b2e32304bd066d5"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-9b7c398d2c132b22ec9a6706754ed79a9a14308599e66901b03ee402805dedf62e75ad62747cd92af0d5601ca559c77e08c897c6acaa37ce2b2e32304bd066d5"' :
                                        'id="xs-directives-links-module-SharedModule-9b7c398d2c132b22ec9a6706754ed79a9a14308599e66901b03ee402805dedf62e75ad62747cd92af0d5601ca559c77e08c897c6acaa37ce2b2e32304bd066d5"' }>
                                        <li class="link">
                                            <a href="directives/LoadingDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-9b7c398d2c132b22ec9a6706754ed79a9a14308599e66901b03ee402805dedf62e75ad62747cd92af0d5601ca559c77e08c897c6acaa37ce2b2e32304bd066d5"' : 'data-target="#xs-pipes-links-module-SharedModule-9b7c398d2c132b22ec9a6706754ed79a9a14308599e66901b03ee402805dedf62e75ad62747cd92af0d5601ca559c77e08c897c6acaa37ce2b2e32304bd066d5"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-9b7c398d2c132b22ec9a6706754ed79a9a14308599e66901b03ee402805dedf62e75ad62747cd92af0d5601ca559c77e08c897c6acaa37ce2b2e32304bd066d5"' :
                                            'id="xs-pipes-links-module-SharedModule-9b7c398d2c132b22ec9a6706754ed79a9a14308599e66901b03ee402805dedf62e75ad62747cd92af0d5601ca559c77e08c897c6acaa37ce2b2e32304bd066d5"' }>
                                            <li class="link">
                                                <a href="pipes/ReplacePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplacePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-64b00f462b9578440a72a34a1efd479e0d6bae5995691aca2940aa4b195c78910d7bd2195acd3d77082d19139f1c65d6002698a61471d9404a60815e3f82d65e-1"' : 'data-target="#xs-pipes-links-module-SharedModule-64b00f462b9578440a72a34a1efd479e0d6bae5995691aca2940aa4b195c78910d7bd2195acd3d77082d19139f1c65d6002698a61471d9404a60815e3f82d65e-1"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-64b00f462b9578440a72a34a1efd479e0d6bae5995691aca2940aa4b195c78910d7bd2195acd3d77082d19139f1c65d6002698a61471d9404a60815e3f82d65e-1"' :
                                            'id="xs-pipes-links-module-SharedModule-64b00f462b9578440a72a34a1efd479e0d6bae5995691aca2940aa4b195c78910d7bd2195acd3d77082d19139f1c65d6002698a61471d9404a60815e3f82d65e-1"' }>
                                            <li class="link">
                                                <a href="pipes/GuardTypePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuardTypePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PrecisionPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrecisionPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SquacapiModule.html" data-type="entity-link" >SquacapiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SquacapiModule-659778584b2cca7ef4db2cc7a5a4a03cffce212fefca433498570cb38d77878715839aa2d563202c8b4488988a26d8a1936a0d2380e0b8a59e92cadfe3390a70"' : 'data-target="#xs-pipes-links-module-SquacapiModule-659778584b2cca7ef4db2cc7a5a4a03cffce212fefca433498570cb38d77878715839aa2d563202c8b4488988a26d8a1936a0d2380e0b8a59e92cadfe3390a70"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SquacapiModule-659778584b2cca7ef4db2cc7a5a4a03cffce212fefca433498570cb38d77878715839aa2d563202c8b4488988a26d8a1936a0d2380e0b8a59e92cadfe3390a70"' :
                                            'id="xs-pipes-links-module-SquacapiModule-659778584b2cca7ef4db2cc7a5a4a03cffce212fefca433498570cb38d77878715839aa2d563202c8b4488988a26d8a1936a0d2380e0b8a59e92cadfe3390a70"' }>
                                            <li class="link">
                                                <a href="pipes/OrganizationPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrganizationPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/UserPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabularModule.html" data-type="entity-link" >TabularModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabularModule-99d74c77bf1e52c74ee0099a73e5cbfe831b6ef1db4445884f1f36d746d315af4a518c58acce2f88f09ae1c4f93c639650f34d274e36fc108c90a2b9cd3577d0"' : 'data-target="#xs-components-links-module-TabularModule-99d74c77bf1e52c74ee0099a73e5cbfe831b6ef1db4445884f1f36d746d315af4a518c58acce2f88f09ae1c4f93c639650f34d274e36fc108c90a2b9cd3577d0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabularModule-99d74c77bf1e52c74ee0099a73e5cbfe831b6ef1db4445884f1f36d746d315af4a518c58acce2f88f09ae1c4f93c639650f34d274e36fc108c90a2b9cd3577d0"' :
                                            'id="xs-components-links-module-TabularModule-99d74c77bf1e52c74ee0099a73e5cbfe831b6ef1db4445884f1f36d746d315af4a518c58acce2f88f09ae1c4f93c639650f34d274e36fc108c90a2b9cd3577d0"' }>
                                            <li class="link">
                                                <a href="components/TabularComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabularComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TimechartModule.html" data-type="entity-link" >TimechartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TimechartModule-e6dfa8078700b0aee63cdc22dcbd1ba7e382dab4d2f0bd616d252c3a50bfbc31e9590fec1a67bf21b70380fc417f375b47a18b5202e72fb7f1d6c85819fb8e9c"' : 'data-target="#xs-components-links-module-TimechartModule-e6dfa8078700b0aee63cdc22dcbd1ba7e382dab4d2f0bd616d252c3a50bfbc31e9590fec1a67bf21b70380fc417f375b47a18b5202e72fb7f1d6c85819fb8e9c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TimechartModule-e6dfa8078700b0aee63cdc22dcbd1ba7e382dab4d2f0bd616d252c3a50bfbc31e9590fec1a67bf21b70380fc417f375b47a18b5202e72fb7f1d6c85819fb8e9c"' :
                                            'id="xs-components-links-module-TimechartModule-e6dfa8078700b0aee63cdc22dcbd1ba7e382dab4d2f0bd616d252c3a50bfbc31e9590fec1a67bf21b70380fc417f375b47a18b5202e72fb7f1d6c85819fb8e9c"' }>
                                            <li class="link">
                                                <a href="components/TimechartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimechartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TimelineModule.html" data-type="entity-link" >TimelineModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TimelineModule-7dc2bc1d2f901372ec835d6cc1ec0e29a7fcc7adb57153d86045507798b4c78974b9f316c16dfd2abac649f10e99c2150160f22d4a2b3d4d6eea7590500f923b"' : 'data-target="#xs-components-links-module-TimelineModule-7dc2bc1d2f901372ec835d6cc1ec0e29a7fcc7adb57153d86045507798b4c78974b9f316c16dfd2abac649f10e99c2150160f22d4a2b3d4d6eea7590500f923b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TimelineModule-7dc2bc1d2f901372ec835d6cc1ec0e29a7fcc7adb57153d86045507798b4c78974b9f316c16dfd2abac649f10e99c2150160f22d4a2b3d4d6eea7590500f923b"' :
                                            'id="xs-components-links-module-TimelineModule-7dc2bc1d2f901372ec835d6cc1ec0e29a7fcc7adb57153d86045507798b4c78974b9f316c16dfd2abac649f10e99c2150160f22d4a2b3d4d6eea7590500f923b"' }>
                                            <li class="link">
                                                <a href="components/TimelineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimelineComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-b6a7d169ade8a3a043a5ab07398f344ac4c8c2ba9d970c468283bd157cf9c0e3e4c3797490476ef7f79e2ac6e06c66fc6c96598220a164ebc9fb20904c38a2b9"' : 'data-target="#xs-components-links-module-UserModule-b6a7d169ade8a3a043a5ab07398f344ac4c8c2ba9d970c468283bd157cf9c0e3e4c3797490476ef7f79e2ac6e06c66fc6c96598220a164ebc9fb20904c38a2b9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-b6a7d169ade8a3a043a5ab07398f344ac4c8c2ba9d970c468283bd157cf9c0e3e4c3797490476ef7f79e2ac6e06c66fc6c96598220a164ebc9fb20904c38a2b9"' :
                                            'id="xs-components-links-module-UserModule-b6a7d169ade8a3a043a5ab07398f344ac4c8c2ba9d970c468283bd157cf9c0e3e4c3797490476ef7f79e2ac6e06c66fc6c96598220a164ebc9fb20904c38a2b9"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrganizationDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrganizationDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrganizationEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrganizationEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrganizationEditEntryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrganizationEditEntryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrganizationsViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrganizationsViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PasswordResetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PasswordResetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserSettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserSettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WidgetsModule.html" data-type="entity-link" >WidgetsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-WidgetsModule-e3e5980b786cd0d09456cb2db71d058a3d5ab38d7f19388bfa9b50edd88b0cba5b2e624ff5e1a63d4cd425bbc98cb93781258cb120a9a52b61025b1a8134f577"' : 'data-target="#xs-directives-links-module-WidgetsModule-e3e5980b786cd0d09456cb2db71d058a3d5ab38d7f19388bfa9b50edd88b0cba5b2e624ff5e1a63d4cd425bbc98cb93781258cb120a9a52b61025b1a8134f577"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-WidgetsModule-e3e5980b786cd0d09456cb2db71d058a3d5ab38d7f19388bfa9b50edd88b0cba5b2e624ff5e1a63d4cd425bbc98cb93781258cb120a9a52b61025b1a8134f577"' :
                                        'id="xs-directives-links-module-WidgetsModule-e3e5980b786cd0d09456cb2db71d058a3d5ab38d7f19388bfa9b50edd88b0cba5b2e624ff5e1a63d4cd425bbc98cb93781258cb120a9a52b61025b1a8134f577"' }>
                                        <li class="link">
                                            <a href="directives/WidgetTypeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetTypeDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AuthComponent.html" data-type="entity-link" >AuthComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EChartComponent.html" data-type="entity-link" >EChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ErrorComponent-1.html" data-type="entity-link" >ErrorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GenericWidgetComponent.html" data-type="entity-link" >GenericWidgetComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MenuComponent.html" data-type="entity-link" >MenuComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NotFoundComponent.html" data-type="entity-link" >NotFoundComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OrganizationDetailComponent.html" data-type="entity-link" >OrganizationDetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PasswordResetComponent.html" data-type="entity-link" >PasswordResetComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserComponent.html" data-type="entity-link" >UserComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserEditComponent.html" data-type="entity-link" >UserEditComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Aggregate.html" data-type="entity-link" >Aggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/AggregateListParams.html" data-type="entity-link" >AggregateListParams</a>
                            </li>
                            <li class="link">
                                <a href="classes/Alert.html" data-type="entity-link" >Alert</a>
                            </li>
                            <li class="link">
                                <a href="classes/Archive.html" data-type="entity-link" >Archive</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseApiService.html" data-type="entity-link" >BaseApiService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Channel.html" data-type="entity-link" >Channel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChannelGroup.html" data-type="entity-link" >ChannelGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/Dashboard.html" data-type="entity-link" >Dashboard</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpCache.html" data-type="entity-link" >HttpCache</a>
                            </li>
                            <li class="link">
                                <a href="classes/MatchingRule.html" data-type="entity-link" >MatchingRule</a>
                            </li>
                            <li class="link">
                                <a href="classes/Measurement.html" data-type="entity-link" >Measurement</a>
                            </li>
                            <li class="link">
                                <a href="classes/Metric.html" data-type="entity-link" >Metric</a>
                            </li>
                            <li class="link">
                                <a href="classes/Monitor.html" data-type="entity-link" >Monitor</a>
                            </li>
                            <li class="link">
                                <a href="classes/Network.html" data-type="entity-link" >Network</a>
                            </li>
                            <li class="link">
                                <a href="classes/Organization.html" data-type="entity-link" >Organization</a>
                            </li>
                            <li class="link">
                                <a href="classes/Trigger.html" data-type="entity-link" >Trigger</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/Widget.html" data-type="entity-link" >Widget</a>
                            </li>
                            <li class="link">
                                <a href="classes/Widget-1.html" data-type="entity-link" >Widget</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AggregateAdapter.html" data-type="entity-link" >AggregateAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AggregateService.html" data-type="entity-link" >AggregateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AlertAdapter.html" data-type="entity-link" >AlertAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AlertService.html" data-type="entity-link" >AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ArchiveAdapter.html" data-type="entity-link" >ArchiveAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChannelAdapter.html" data-type="entity-link" >ChannelAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChannelGroupAdapter.html" data-type="entity-link" >ChannelGroupAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChannelGroupService.html" data-type="entity-link" >ChannelGroupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChannelService.html" data-type="entity-link" >ChannelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfirmDialogService.html" data-type="entity-link" >ConfirmDialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardAdapter.html" data-type="entity-link" >DashboardAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardService.html" data-type="entity-link" >DashboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DateService.html" data-type="entity-link" >DateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DayArchiveService.html" data-type="entity-link" >DayArchiveService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FakeMeasurementBackend.html" data-type="entity-link" >FakeMeasurementBackend</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HourArchiveService.html" data-type="entity-link" >HourArchiveService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpCacheService.html" data-type="entity-link" >HttpCacheService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InviteService.html" data-type="entity-link" >InviteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoadingService.html" data-type="entity-link" >LoadingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStorageService.html" data-type="entity-link" >LocalStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MatchingRuleAdapter.html" data-type="entity-link" >MatchingRuleAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MatchingRuleService.html" data-type="entity-link" >MatchingRuleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MeasurementAdapter.html" data-type="entity-link" >MeasurementAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MeasurementService.html" data-type="entity-link" >MeasurementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MetricAdapter.html" data-type="entity-link" >MetricAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MetricService.html" data-type="entity-link" >MetricService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MonitorAdapter.html" data-type="entity-link" >MonitorAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MonitorService.html" data-type="entity-link" >MonitorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MonthArchiveService.html" data-type="entity-link" >MonthArchiveService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NetworkAdapter.html" data-type="entity-link" >NetworkAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NetworkService.html" data-type="entity-link" >NetworkService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrganizationAdapter.html" data-type="entity-link" >OrganizationAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrganizationService.html" data-type="entity-link" >OrganizationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrganizationUserService.html" data-type="entity-link" >OrganizationUserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PasswordResetService.html" data-type="entity-link" >PasswordResetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TriggerAdapter.html" data-type="entity-link" >TriggerAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TriggerService.html" data-type="entity-link" >TriggerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserAdapter.html" data-type="entity-link" >UserAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserMeService.html" data-type="entity-link" >UserMeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ViewService.html" data-type="entity-link" >ViewService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WeekArchiveService.html" data-type="entity-link" >WeekArchiveService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetAdapter.html" data-type="entity-link" >WidgetAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetConfigService.html" data-type="entity-link" >WidgetConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetConnectService.html" data-type="entity-link" >WidgetConnectService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetDataService.html" data-type="entity-link" >WidgetDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetManagerService.html" data-type="entity-link" >WidgetManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetService.html" data-type="entity-link" >WidgetService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/CacheInterceptor.html" data-type="entity-link" >CacheInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/HttpErrorInterceptor.html" data-type="entity-link" >HttpErrorInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AlertResolver.html" data-type="entity-link" >AlertResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/ChannelGroupResolver.html" data-type="entity-link" >ChannelGroupResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/DashboardResolver.html" data-type="entity-link" >DashboardResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoggedInGuard.html" data-type="entity-link" >LoggedInGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/MetricResolver.html" data-type="entity-link" >MetricResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/MonitorResolver.html" data-type="entity-link" >MonitorResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/OrganizationResolver.html" data-type="entity-link" >OrganizationResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserResolver.html" data-type="entity-link" >UserResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/WidgetResolver.html" data-type="entity-link" >WidgetResolver</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Adapter.html" data-type="entity-link" >Adapter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ArchiveTypeOption.html" data-type="entity-link" >ArchiveTypeOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChannelRow.html" data-type="entity-link" >ChannelRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChannelRow-1.html" data-type="entity-link" >ChannelRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Color.html" data-type="entity-link" >Color</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfirmDialogOptions.html" data-type="entity-link" >ConfirmDialogOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContinousVisualMapOption.html" data-type="entity-link" >ContinousVisualMapOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DashboardProperties.html" data-type="entity-link" >DashboardProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataParams.html" data-type="entity-link" >DataParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteService.html" data-type="entity-link" >DeleteService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HttpOptions.html" data-type="entity-link" >HttpOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListService.html" data-type="entity-link" >ListService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Locale.html" data-type="entity-link" >Locale</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MapBounds.html" data-type="entity-link" >MapBounds</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MapStation.html" data-type="entity-link" >MapStation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatchingRoute.html" data-type="entity-link" >MatchingRoute</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Options.html" data-type="entity-link" >Options</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PartialUpdateService.html" data-type="entity-link" >PartialUpdateService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PiecewiseVisualMapOption.html" data-type="entity-link" >PiecewiseVisualMapOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReadAggregate.html" data-type="entity-link" >ReadAggregate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReadOnlyApiService.html" data-type="entity-link" >ReadOnlyApiService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReadService.html" data-type="entity-link" >ReadService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReadUpdateApiService.html" data-type="entity-link" >ReadUpdateApiService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResourceLink.html" data-type="entity-link" >ResourceLink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RowData.html" data-type="entity-link" >RowData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RowData-1.html" data-type="entity-link" >RowData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RowMetric.html" data-type="entity-link" >RowMetric</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchFilter.html" data-type="entity-link" >SearchFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchFilterConfig.html" data-type="entity-link" >SearchFilterConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchProps.html" data-type="entity-link" >SearchProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SquacApiService.html" data-type="entity-link" >SquacApiService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SquacObject.html" data-type="entity-link" >SquacObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StationRow.html" data-type="entity-link" >StationRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StationRow-1.html" data-type="entity-link" >StationRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StoplightVisualMapOption.html" data-type="entity-link" >StoplightVisualMapOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableControls.html" data-type="entity-link" >TableControls</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableFilters.html" data-type="entity-link" >TableFilters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableLink.html" data-type="entity-link" >TableLink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableMenuConfig.html" data-type="entity-link" >TableMenuConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableMenuOptionConfig.html" data-type="entity-link" >TableMenuOptionConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableMessages.html" data-type="entity-link" >TableMessages</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableOptions.html" data-type="entity-link" >TableOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Threshold.html" data-type="entity-link" >Threshold</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ThresholdForm.html" data-type="entity-link" >ThresholdForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TimeRange.html" data-type="entity-link" >TimeRange</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateService.html" data-type="entity-link" >UpdateService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualMapBase.html" data-type="entity-link" >VisualMapBase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualPiece.html" data-type="entity-link" >VisualPiece</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WidgetConfig.html" data-type="entity-link" >WidgetConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WidgetDisplayOption.html" data-type="entity-link" >WidgetDisplayOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WidgetGridsterItem.html" data-type="entity-link" >WidgetGridsterItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WidgetLayout.html" data-type="entity-link" >WidgetLayout</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WidgetProperties.html" data-type="entity-link" >WidgetProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WidgetTypeComponent.html" data-type="entity-link" >WidgetTypeComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WriteableApiService.html" data-type="entity-link" >WriteableApiService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WriteService.html" data-type="entity-link" >WriteService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});