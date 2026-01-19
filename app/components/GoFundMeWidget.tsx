'use client'

import { useEffect } from 'react'

export default function GoFundMeWidget() {
  useEffect(() => {
    // Load GoFundMe embed script
    const script = document.createElement('script')
    script.src = 'https://www.gofundme.com/static/js/embed.js'
    script.defer = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '800px', 
      margin: '0 auto',
      padding: '2rem 0'
    }}>
      <div 
        className="gfm-embed" 
        data-url="https://www.gofundme.com/f/love-without-barriers-accessible-dating-for-all/widget/large?sharesheet=undefined&attribution_id=sl:b512d367-786d-4aee-bd03-54eae9a435c1"
      />
    </div>
  )
}
