import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false ,error:null};
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary componentStack:', errorInfo.componentStack);
    this.setState({ hasError: true,error });
    
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please refresh the page or try again later.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;