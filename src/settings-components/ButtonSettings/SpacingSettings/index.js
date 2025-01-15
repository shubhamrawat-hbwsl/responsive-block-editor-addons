/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl, PanelBody, TabPanel, Dashicon } = wp.components;

import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import ResponsiveNewPaddingControl from "../../ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl";

// Extend component
const { Component, Fragment } = wp.element;

class ButtonSpacingControl extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
      const {
          attributes: {
              ctaHpadding,
              ctaHpaddingTablet,
              ctaHpaddingMobile,
              ctaVpadding,
              ctaVpaddingTablet,
              ctaVpaddingMobile,
              vMargin,
              vMarginTablet,
              vMarginMobile,
              hMargin,
              hMarginTablet,
              hMarginMobile,
              ctaButtonTopPadding,
              ctaButtonBottomPadding,
              ctaButtonLeftPadding,
              ctaButtonRightPadding,
              ctaButtonTopPaddingTablet,
              ctaButtonBottomPaddingTablet,
              ctaButtonRightPaddingTablet,
              ctaButtonLeftPaddingTablet,
              ctaButtonTopPaddingMobile,
              ctaButtonBottomPaddingMobile,
              ctaButtonLeftPaddingMobile,
              ctaButtonRightPaddingMobile,

              ctaButtonTopMargin,
              ctaButtonBottomMargin,
              ctaButtonLeftMargin,
              ctaButtonRightMargin,
              ctaButtonTopMarginTablet,
              ctaButtonBottomMarginTablet,
              ctaButtonRightMarginTablet,
              ctaButtonLeftMarginTablet,
              ctaButtonTopMarginMobile,
              ctaButtonBottomMarginMobile,
              ctaButtonLeftMarginMobile,
              ctaButtonRightMarginMobile,
              isCtaButtonPaddingMarginValueUpdated,
          },
          setAttributes,
      } = this.props;

      const ctaButtonPaddingResetValues = {
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingTabletTop: 0,
        paddingTabletRight: 0,
        paddingTabletBottom: 0,
        paddingTabletLeft: 0,
        paddingMobileTop: 0,
        paddingMobileRight: 0,
        paddingMobileBottom: 0,
        paddingMobileLeft: 0,
      }

      const ctaButtonMarginResetValues = {
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingTabletTop: 0,
        paddingTabletRight: 0,
        paddingTabletBottom: 0,
        paddingTabletLeft: 0,
        paddingMobileTop: 0,
        paddingMobileRight: 0,
        paddingMobileBottom: 0,
        paddingMobileLeft: 0,
      }

      // backward compatibility for icon container padding control

    if (!isCtaButtonPaddingMarginValueUpdated) {
      this.props.setAttributes(
        {
          ctaButtonTopPadding:          ctaVpadding !== undefined ? ctaVpadding : ctaButtonTopPadding,
          ctaButtonBottomPadding:       ctaVpadding !== undefined ? ctaVpadding : ctaButtonBottomPadding,
          ctaButtonLeftPadding:         ctaHpadding !== undefined ? ctaHpadding : ctaButtonLeftPadding,
          ctaButtonRightPadding:        ctaHpadding !== undefined ? ctaHpadding : ctaButtonRightPadding,
          ctaButtonTopPaddingTablet:    ctaVpaddingTablet !== undefined ? ctaVpaddingTablet : ctaButtonTopPaddingTablet,
          ctaButtonBottomPaddingTablet: ctaVpaddingTablet !== undefined ? ctaVpaddingTablet : ctaButtonBottomPaddingTablet,
          ctaButtonRightPaddingTablet:  ctaHpaddingTablet !== undefined ? ctaHpaddingTablet : ctaButtonRightPaddingTablet,
          ctaButtonLeftPaddingTablet:   ctaHpaddingTablet !== undefined ? ctaHpaddingTablet : ctaButtonLeftPaddingTablet,
          ctaButtonTopPaddingMobile:    ctaVpaddingMobile !== undefined ? ctaVpaddingMobile : ctaButtonTopPaddingMobile,
          ctaButtonBottomPaddingMobile: ctaVpaddingMobile !== undefined ? ctaVpaddingMobile : ctaButtonBottomPaddingMobile,
          ctaButtonLeftPaddingMobile:   ctaHpaddingMobile !== undefined ? ctaHpaddingMobile : ctaButtonLeftPaddingMobile,
          ctaButtonRightPaddingMobile:  ctaHpaddingMobile !== undefined ? ctaHpaddingMobile : ctaButtonRightPaddingMobile,

          ctaButtonTopMargin:          vMargin !== undefined ? vMargin : ctaButtonTopMargin,
          ctaButtonBottomMargin:       vMargin !== undefined ? vMargin : ctaButtonBottomMargin,
          ctaButtonLeftMargin:         hMargin !== undefined ? hMargin : ctaButtonLeftMargin,
          ctaButtonRightMargin:        hMargin !== undefined ? hMargin : ctaButtonRightMargin,
          ctaButtonTopMarginTablet:    vMarginTablet !== undefined ? vMarginTablet : ctaButtonTopMarginTablet,
          ctaButtonBottomMarginTablet: vMarginTablet !== undefined ? vMarginTablet : ctaButtonBottomMarginTablet,
          ctaButtonRightMarginTablet:  hMarginTablet !== undefined ? hMarginTablet : ctaButtonRightMarginTablet,
          ctaButtonLeftMarginTablet:   hMarginTablet !== undefined ? hMarginTablet : ctaButtonLeftMarginTablet,
          ctaButtonTopMarginMobile:    vMarginMobile !== undefined ? vMarginMobile : ctaButtonTopMarginMobile,
          ctaButtonBottomMarginMobile: vMarginMobile !== undefined ? vMarginMobile : ctaButtonBottomMarginMobile,
          ctaButtonLeftMarginMobile:   hMarginMobile !== undefined ? hMarginMobile : ctaButtonLeftMarginMobile,
          ctaButtonRightMarginMobile:  hMarginMobile !== undefined ? hMarginMobile : ctaButtonRightMarginMobile,
        }
      )
      this.props.setAttributes({isCtaButtonPaddingMarginValueUpdated: true});
    }

    var advancedControls;
      advancedControls = (
          <PanelBody
              title={__("Spacing Settings", "responsive-block-editor-addons")}
              initialOpen={false}
          >
        <ResponsiveNewPaddingControl
          attrNameTemplate="ctaButton%s"
          resetValues={ctaButtonPaddingResetValues}
          {...this.props}
        />
          { this.props.showMarginControls == true && (
            <>
            <ResponsiveNewMarginControl
            attrNameTemplate="ctaButton%s"
            resetValues={ctaButtonMarginResetValues}
            {...this.props}
          />
            {/* <Fragment>
                <TabPanel
                    className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                    activeClass="active-tab"
                    tabs={[
                    {
                        name: "desktop",
                        title: <Dashicon icon="desktop" />,
                        className:
                        " responsive-desktop-tab  responsive-responsive-tabs",
                    },
                    {
                        name: "tablet",
                        title: <Dashicon icon="tablet" />,
                        className: " responsive-tablet-tab  responsive-responsive-tabs",
                    },
                    {
                        name: "mobile",
                        title: <Dashicon icon="smartphone" />,
                        className: " responsive-mobile-tab  responsive-responsive-tabs",
                    },
                    ]}
                >
                    {(tab) => {
                    let tabout;

                    if ("mobile" === tab.name) {
                        tabout = (
                        <Fragment>
                            <RbeaRangeControl
                            label={__(
                                "Vertical Margin",
                                "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={200}
                            allowReset
                            value={vMarginMobile}
                            onChange={(value) =>
                                setAttributes({
                                vMarginMobile: value,
                                })
                            }
                            />
                        </Fragment>
                        );
                    } else if ("tablet" === tab.name) {
                        tabout = (
                        <Fragment>
                            <RbeaRangeControl
                            label={__(
                                "Vertical Margin",
                                "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={200}
                            allowReset
                            value={vMarginTablet}
                            onChange={(value) =>
                                setAttributes({
                                vMarginTablet: value,
                                })
                            }
                            />
                        </Fragment>
                        );
                    } else {
                        tabout = (
                        <Fragment>
                            <RbeaRangeControl
                            label={__(
                                "Vertical Margin",
                                "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={200}
                            allowReset
                            value={vMargin}
                            onChange={(value) =>
                                setAttributes({
                                vMargin: value,
                                })
                            }
                            />
                        </Fragment>
                        );
                    }
                    return <div>{tabout}</div>;
                    }}
                </TabPanel>
                <TabPanel
                    className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                    activeClass="active-tab"
                    tabs={[
                    {
                        name: "desktop",
                        title: <Dashicon icon="desktop" />,
                        className:
                        " responsive-desktop-tab  responsive-responsive-tabs",
                    },
                    {
                        name: "tablet",
                        title: <Dashicon icon="tablet" />,
                        className: " responsive-tablet-tab  responsive-responsive-tabs",
                    },
                    {
                        name: "mobile",
                        title: <Dashicon icon="smartphone" />,
                        className: " responsive-mobile-tab  responsive-responsive-tabs",
                    },
                    ]}
                >
                    {(tab) => {
                    let tabout;

                    if ("mobile" === tab.name) {
                        tabout = (
                        <Fragment>
                            <RbeaRangeControl
                            label={__(
                                "Horizontal Margin",
                                "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={200}
                            allowReset
                            value={hMarginMobile}
                            onChange={(value) =>
                                setAttributes({
                                hMarginMobile: value,
                                })
                            }
                            />
                        </Fragment>
                        );
                    } else if ("tablet" === tab.name) {
                        tabout = (
                        <Fragment>
                            <RbeaRangeControl
                            label={__(
                                "Horizontal Margin",
                                "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={200}
                            allowReset
                            value={hMarginTablet}
                            onChange={(value) =>
                                setAttributes({
                                hMarginTablet: value,
                                })
                            }
                            />
                        </Fragment>
                        );
                    } else {
                        tabout = (
                        <Fragment>
                            <RbeaRangeControl
                            label={__(
                                "Horizontal Margin",
                                "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={200}
                            allowReset
                            value={hMargin}
                            onChange={(value) =>
                                setAttributes({
                                hMargin: value,
                                })
                            }
                            />
                        </Fragment>
                        );
                    }
                    return <div>{tabout}</div>;
                    }}
                </TabPanel>
            </Fragment> */}

            </>
          )}
          </PanelBody>
      );


    return (
      <div className="responsive-block-editor-addons-block-spacing-settings">
        {advancedControls}
      </div>
    );
  }
}

export default ButtonSpacingControl;
