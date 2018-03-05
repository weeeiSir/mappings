import React from 'react';
import PDF from 'react-pdf-js';
import { Button } from 'antd';
import styles from './pdf.less';
class MyPdfViewer extends React.Component {
  state = {};
 
  onDocumentComplete = (pages) => {
    this.setState({ page: 1, pages });
  }
 
  onPageComplete = (page) => {
    this.setState({ page });
  }
 
  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  }
 
  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  }
 
  renderPagination = (page, pages) => {
    let previousButton = <Button  onClick={this.handlePrevious}>上一页</Button>;
    if (page === 1) {
      previousButton = <Button  disabled>上一页</Button>;
    }
    let nextButton = <Button  onClick={this.handleNext}>下一页</Button>;
    if (page === pages) {
      nextButton = <Button  disabled>下一页</Button>;
    }



    // let previousButton = <li className="previous" onClick={this.handlePrevious}><a href="javascript:;"><i className="fa fa-arrow-left"></i> 上一页</a></li>;
    // if (page === 1) {
    //   previousButton = <li className="previous disabled"><a href="javascript:;"><i className="fa fa-arrow-left"></i> 上一页</a></li>;
    // }
    // let nextButton = <li className="next" onClick={this.handleNext}><a href="javascript:;">下一页 <i className="fa fa-arrow-right"></i></a></li>;
    // if (page === pages) {
    //   nextButton = <li className="next disabled"><a href="javascript:;">下一页 <i className="fa fa-arrow-right"></i></a></li>;
    // }
    return (
      <nav className={styles.navbtn}>
        {previousButton}
        {nextButton}
      </nav>
      );
  }
 
  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <div>
        <PDF
          file="./data/123.pdf"
          onDocumentComplete={this.onDocumentComplete}
          onPageComplete={this.onPageComplete}
          page={this.state.page}
        />
        {pagination}
      </div>
    )
  }
}
 
export default MyPdfViewer;