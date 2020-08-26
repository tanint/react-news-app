import React, { ReactNode } from 'react'
import { get } from 'lodash'

import { Error400, Error500 } from '@/components/Error'

interface ErrorProviderProps {
  children: ReactNode
}

class ErrorProvider extends React.Component<ErrorProviderProps> {
  state = {
    hasRuntimeError: false,
    error: {},
  }

  static getDerivedStateFromError(error) {
    // React Error Boundary here allows us to set state flagging the error (and
    // later render a fallback UI).

    const errorResponse = get(error, 'response', {})

    return {
      hasRuntimeError: true,
      error: errorResponse,
    }
  }

  render() {
    const statusCode = get(this.props.children, 'props.statusCode', 200)

    if (this.state.hasRuntimeError) {
      return <Error500 />
    }

    if (statusCode >= 500) {
      return <Error500 />
    }

    if (statusCode >= 400) {
      return <Error400 />
    }

    return this.props.children
  }
}

export default ErrorProvider
