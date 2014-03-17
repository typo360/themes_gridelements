lib.gridelements {
    tabs < .defaultGridSetup
    tabs {
        columns {
            default {
                prepend = TEXT
                prepend.dataWrap = <h3>{field:header}</h3>
                dataWrap = <div class="tabs-inactive">|</div>
                dataWrap.override = <div class="row"><div class="span10 tabs-active">|</div></div>
                dataWrap.override.if.isTrue.field = flexform_tabs
                renderObj.20 >
                renderObj.20 = CASE
                renderObj.20 {
                    key.dataWrap = {field:CType}_{field:parentgrid_flexform_tabs}
                    text_0 =< tt_content.text
                    text_1 = COA
                    text_1.10 = TEXT
                    text_1.10.dataWrap = <h4>{field:header}</h4>
                    text_1.20 = COA
                    text_1.20.wrap = <div class="pane">|</div>
                    text_1.20.20 =< tt_content.text.20
                    textpic_0 =< tt_content.textpic
                    textpic_1 < .text_1
                    textpic_1.20.20 < tt_content.textpic.20
                    textpic_1.20.20.text.10 >
                    gridelements_pi1_0 =< tt_content.gridelements_pi1
                    gridelements_pi1_1 =< tt_content.gridelements_pi1
                    gridelements_pi1_1.20.10.setup.10 {
                        prepend = TEXT
                        prepend.dataWrap = <h4>{field:header}</h4>
                        columns.default.prepend.dataWrap = |
                        wrap = <div class="pane">|</div>
                    }
                }
            }
        }
    }
}
tt_content.gridelements_pi1.20.10.setup.tabs < lib.gridelements.tabs
