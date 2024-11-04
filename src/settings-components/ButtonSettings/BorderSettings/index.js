/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl, PanelBody } = wp.components;

import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaBorderStyleTabControl from "../../../utils/components/rbea-border-style-tab-control";

// Extend component
const { Component, Fragment } = wp.element;

class ButtonBorderControl extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
      const {
          attributes: {
              ctaBorderStyle,
              ctaBorderWidth,
              ctaBorderRadius,
          },
          setAttributes,
      } = this.props;

    var advancedControls;
      advancedControls = (
          <PanelBody
              title={__("Border Settings", "responsive-block-editor-addons")}
              initialOpen={false}
          >
                <RbeaBorderStyleTabControl
                    selected={ctaBorderStyle}
                    onChange={(value) => setAttributes({ ctaBorderStyle: value })}
                />
              {"none" != ctaBorderStyle && (
                  <Fragment>
                      <RbeaRangeControl
                          label={__("Border Width", "responsive-block-editor-addons")}
                          value={ctaBorderWidth}
                          onChange={(value) =>
                              setAttributes({
                                  ctaBorderWidth: value !== undefined ? value : 2,
                              })
                          }
                          min={0}
                          max={50}
                          allowReset
                      />

                      <RbeaRangeControl
                          label={__("Border Radius", "responsive-block-editor-addons")}
                          value={ctaBorderRadius}
                          onChange={(value) =>
                              setAttributes({
                                  ctaBorderRadius: value !== undefined ? value : 0,
                              })
                          }
                          min={0}
                          max={100}
                          allowReset
                      />
                  </Fragment>
              )}
          </PanelBody>
      );

    return (
      <div className="responsive-block-editor-addons-block-border-settings">
        {advancedControls}
      </div>
    );
  }
}

export default ButtonBorderControl;
