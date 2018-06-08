import React from 'react';

class DetailsItem extends React.Component {

  renderHtml(markup) {
    return { __html: markup };
  }

  renderLink(content, url) {
    return (
      <div className="service_url">
        <a href={url} target="_blank">{ content }</a>
      </div>
    );
  }

  render() {
    return (
      <div className="details-item">
        <div className="version">Version: { this.props.data.version }</div>
        <div className="status">{ this.props.data.service_status }</div>
        <div className="features">
          <h3>{ this.props.service_name } { this.props.data.version } features</h3>
          <p dangerouslySetInnerHTML={this.renderHtml(this.props.data.features_current)} />
        </div>
        <div className="user-cases">
          <h3>Use cases</h3>
          <p dangerouslySetInnerHTML={this.renderHtml(this.props.data.use_cases)} />
        </div>
        { (this.props.data.user_documentation_has) ?
          this.renderLink(this.props.data.user_documentation_link.related.meta.desc, this.props.data.user_documentation_link.related.href)
          : ''
        }
        { (this.props.data.usage_policy_has) ?
          this.renderLink(this.props.data.usage_policy_link.related.meta.desc, this.props.data.usage_policy_link.related.href)
          : ''
        }
      </div>
    );
  }

}

export default DetailsItem;
