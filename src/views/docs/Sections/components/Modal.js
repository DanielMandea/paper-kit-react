import React from "react";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Input,
  Modal,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

class Modal extends React.Component {
  render() {
    return (
      <>
        <html lang="en">
<head>
<meta charset="utf-8">
</meta>
<link href="../../../assets/img//apple-icon.png" rel="apple-touch-icon" sizes="76x76">
</link>
<link href="../../../assets/img//favicon.png" rel="icon" type="image/png">
</link>
<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
</meta>
<title>
 Modal - Paper Kit by Creative Tim 
</title>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no" name="viewport">
</meta>
</head>
<body>
<p>
 {/* Extra details for Live View on GitHub Pages */}
 {/* Canonical SEO */}
 <link href="https://www.creative-tim.com/product/paper-kit-2" rel="canonical">
</link>
 {/* Social tags */}
 <meta content="creative tim, creativetim, bootstrap 4, bootstrap 4 uit kit, bootstrap 4 kit, paper, paper kit, creative tim, html kit, html css template, web template, bootstrap, bootstrap 4, css3 template, frontend, responsive bootstrap template, bootstrap ui kit, responsive ui kit" name="keywords">
</meta>
<meta content="Paper Kit is a responsive Bootstrap 4 kit provided for free by Invision and Creative Tim. It is a beautiful cross-platform UI kit featuring over 50 elements and 3 templates." name="description">
</meta>
 {/* Schema.org markup for Google+ */}
 <meta content="Paper Kit by Creative Tim" itemprop="name">
</meta>
<meta content="Paper Kit is a responsive Bootstrap 4 kit provided for free by Invision and Creative Tim. It is a beautiful cross-platform UI kit featuring over 50 elements and 3 templates." itemprop="description">
</meta>
<meta content="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-2-html/opt_pk2_thumbnail.jpg" itemprop="image">
</meta>
 {/* Twitter Card data */}
 <meta content="product" name="twitter:card">
</meta>
<meta content="@creativetim" name="twitter:site">
</meta>
<meta content="Paper Kit by Creative Tim" name="twitter:title">
</meta>
<meta content="Paper Kit is a responsive Bootstrap 4 kit provided for free by Invision and Creative Tim. It is a beautiful cross-platform UI kit featuring over 50 elements and 3 templates." name="twitter:description">
</meta>
<meta content="@creativetim" name="twitter:creator">
</meta>
<meta content="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-2-html/opt_pk2_thumbnail.jpg" name="twitter:image">
</meta>
 {/* Open Graph data */}
 <meta content="655968634437471" property="fb:app_id">
</meta>
<meta content="Paper Kit by Creative Tim" property="og:title">
</meta>
<meta content="article" property="og:type">
</meta>
<meta content="https://demos.creative-tim.com/paper-kit-pro/index.html" property="og:url">
</meta>
<meta content="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-2-html/opt_pk2_thumbnail.jpg" property="og:image">
</meta>
<meta content="Paper Kit is a responsive Bootstrap 4 kit provided for free by Invision and Creative Tim. It is a beautiful cross-platform UI kit featuring over 50 elements and 3 templates." property="og:description">
</meta>
<meta content="Creative Tim" property="og:site_name">
</meta>
 {/* Fonts and icons */}
 <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet">
</link>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
</link>
 {/* CSS Files */}
 <link href="../../../assets/css/bootstrap.min.css" rel="stylesheet">
</link>
<link href="../../../assets/css/paper-kit.min.css?v=2.2.0" rel="stylesheet">
</link>
 {/* Documentation extras */}
 <link href="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css" rel="stylesheet">
</link>
<link href="../../../assets/demo/docs.min.css" rel="stylesheet">
</link>
<style>
 .navbar-absolute-logo { padding-left: 45px; } .navbar-absolute-logo img { position: absolute; left: 15px; margin-top: -6px; } body { background: white; } 
</style>
 {/* CSS Just for demo purpose, don't include it in your project */}
 <link href="../../../assets/demo/demo.css" rel="stylesheet">
</link>
 {/* Extra details for Live View on GitHub Pages */}
 {/* Google Tag Manager */}
 <script>
 (function(w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&amp;l=' + l : ''; j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', 'GTM-NKDMSK6'); 
</script>
 {/* End Google Tag Manager */}

</p>
 {/* Extra details for Live View on GitHub Pages */}
 {/* Google Tag Manager (noscript) */}
 <noscript>
<iframe height="0" src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6" style={{display:none",visibility:hidden}} width="0">
</iframe>
</noscript>
 {/* End Google Tag Manager (noscript) */}
 <a className=" sr-only sr-only-focusable" href="#pablo" id="skippy" onClick={e =>
 e.preventDefault()}>
<Container>
<span className=" skiplink-text">
Skip to main content
</span>
</Container>
</a>
<Navbar className=" navbar-expand navbar-dark bg-info flex-column flex-md-row bd-navbar">
<NavbarBrand className=" mr-0 mr-md-2 navbar-absolute-logo" href="https://www.creative-tim.com/product/paper-kit-2" rel="noopener noreferrer" target="_blank">
 Paper Kit 
</NavbarBrand>
<Nav className=" flex-row d-none d-md-flex" navbar>
<NavItem>
<NavLink className=" p-2" href="#pablo" onClick={e =>
 e.preventDefault()}>
 2.2.0 
</NavLink>
</NavItem>
 {/* <UncontrolledDropdown nav>
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret className=" nav-item mr-md-2" color="default" data-toggle="dropdown" href="#pablo" id="bd-versions" nav onClick={e =>
 e.preventDefault()}>
 v2.0.0 
</DropdownToggle>
<DropdownMenu aria-labelledby="bd-versions" right>
<DropdownItem active href="/docs/1.0/">
BS4 - 1.0.0
</DropdownItem>
<DropdownItem href="">
BS3 - 1.2.1
</DropdownItem>
</DropdownMenu>
</UncontrolledDropdown>
 */}
 <NavItem>
<NavLink aria-label="GitHub" className=" p-2" href="https://github.com/creativetimofficial/paper-kit-2" rel="noopener" target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" className=" navbar-nav-svg" focusable={false} viewbox="0 0 512 499.36">
<title>
GitHub
</title>
<path d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z" fill="currentColor" fill-rule="evenodd">
</path>
</svg>
</NavLink>
</NavItem>
<NavItem>
<NavLink aria-label="Twitter" className=" p-2" href="https://twitter.com/CreativeTim" rel="noopener" target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" className=" navbar-nav-svg" focusable={false} viewbox="0 0 512 416.32">
<title>
Twitter
</title>
<path d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92" fill="currentColor">
</path>
</svg>
</NavLink>
</NavItem>
</Nav>
<div className=" navbar-nav-scroll ml-md-auto">
<Nav className=" bd-navbar-nav flex-row" navbar>
<NavItem>
<NavLink className=" active" href="/paper-kit-2/docs/1.0/getting-started/introduction.html">
<i className=" nc-icon nc-paper">
</i>
 Documentation
</NavLink>
</NavItem>
<NavItem>
<NavLink href="https://demos.creative-tim.com/paper-kit-2/index.html">
<i className=" nc-icon nc-tv-2">
</i>
 Live Preview
</NavLink>
</NavItem>
<NavItem>
<NavLink href="https://github.com/creativetimofficial/paper-kit-2/issues" rel="noopener" target="_blank">
<i className=" nc-icon nc-delivery-fast">
</i>
 Report Issue
</NavLink>
</NavItem>
</Nav>
</div>
 {/* <Button className=" btn-white d-none d-lg-inline-block" color="default" href="">
Download
</Button>
 */}
 
</Navbar>
<Container fluid>
<Row className=" flex-xl-nowrap">
<Col className=" bd-sidebar" md="3" xl="2" xs="12">
<UncontrolledCollapse className=" bd-links" id="bd-docs-nav" toggler="#bd-docs-nav">
<div className=" bd-toc-item active">
<a className=" bd-toc-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
 Getting started 
</a>
<Nav className=" bd-sidenav">
<li>
<a href="/paper-kit-2/docs/1.0/getting-started/introduction.html">
 Introduction 
</a>
</li>
<li>
<a href="https://www.creative-tim.com/license/?ref=paper-kit" rel="noopener noreferrer" target="_blank">
 License 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/getting-started/file-structure.html">
 File Structure 
</a>
</li>
</Nav>
</div>
<div className=" bd-toc-item active">
<a className=" bd-toc-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
 Components 
</a>
<Nav className=" bd-sidenav">
<li>
<a href="/paper-kit-2/docs/1.0/components/alerts.html">
 Alerts 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/components/badge.html">
 Badge 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/components/breadcrumb.html">
 Breadcrumb 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/components/buttons.html">
 Buttons 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/components/card.html">
 Card 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/components/carousel.html">
 Carousel 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/components/colors.html">
 Colors 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/components/dropdowns.html">
 Dropdowns 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/components/forms.html">
 Forms 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/components/google-maps.html">
 Google Maps 
</a>
</li>
<li className=" active bd-sidenav-active">
<a href="/paper-kit-2/docs/1.0/components/modal.html">
 Modal 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/components/nucleo-icons.html">
 Nucleo Icons 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/components/navbar.html">
 Navbar 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/components/pagination.html">
 Pagination 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/components/parallax.html">
 Parallax 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/components/popovers.html">
 Popovers 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/components/progress.html">
 Progress 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/components/tooltips.html">
 Tooltips 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/components/typography.html">
 Typography 
</a>
</li>
</Nav>
</div>
<div className=" bd-toc-item active">
<a className=" bd-toc-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
 Plugins 
</a>
<Nav className=" bd-sidenav">
<li>
<a href="/paper-kit-2/docs/1.0/plugins/datetimepicker.html">
 DateTimePicker 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/plugins/bootstrap-switch.html">
 Bootstrap Switch 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/plugins/perfect-scrollbar.html">
 Perfect Scrollbar 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/plugins/sliders.html">
 Sliders 
</a>
</li>
</Nav>
</div>
</UncontrolledCollapse>
</Col>
<Col className=" d-none d-xl-block bd-toc" xl="2">
<ul className=" section-nav">
<li className=" toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Examples
</a>
<ul>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Modal components
</a>
<ul>
<ul>
<li className=" toc-entry toc-h5">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Modal title
</a>
</li>
</ul>
</ul>
</li>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Live demo
</a>
<ul>
<ul>
<li className=" toc-entry toc-h5">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Modal title
</a>
</li>
</ul>
</ul>
</li>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Scrolling long content
</a>
<ul>
<ul>
<li className=" toc-entry toc-h5">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Modal title
</a>
</li>
</ul>
</ul>
</li>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Login modal
</a>
<ul>
<ul>
<ul>
<li className=" toc-entry toc-h6">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Welcome
</a>
</li>
</ul>
</ul>
</ul>
</li>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Paper Kit
</a>
</li>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Tooltips and popovers
</a>
<ul>
<ul>
<li className=" toc-entry toc-h5">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Modal title
</a>
</li>
<li className=" toc-entry toc-h5">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Popover in a modal
</a>
</li>
<li className=" toc-entry toc-h5">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Tooltips in a modal
</a>
</li>
</ul>
</ul>
</li>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Embedding YouTube videos
</a>
</li>
</ul>
</li>
<li className=" toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Optional sizes
</a>
<ul>
<ul>
<li className=" toc-entry toc-h4">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Large modal
</a>
</li>
<li className=" toc-entry toc-h4">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Small modal
</a>
</li>
</ul>
</ul>
</li>
<li className=" toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Usage
</a>
<ul>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Via data attributes
</a>
</li>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Via JavaScript
</a>
</li>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Options
</a>
</li>
</ul>
</li>
</ul>
</Col>
<Col className=" py-md-3 pl-md-5 bd-content" md="9" role="main" xl="8" xs="12">
<h1 className=" bd-title" id="content">
Modal
</h1>
<p className=" bd-lead">
Use Bootstrap's JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.
</p>
<h2 id="examples">
Examples
</h2>
<h3 id="modal-components">
Modal components
</h3>
<p>
Below is a <em>
static
</em>
 modal example (meaning its <code className=" highlighter-rouge">
position
</code>
 and <code className=" highlighter-rouge">
display
</code>
 have been overridden). Included are the modal header, modal body (required for <code className=" highlighter-rouge">
padding
</code>
), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.
</p>
<div className=" bd-example bd-example-modal">
<Modal>
<div className=" modal-header">
<h5 className=" modal-title text-center" id="exampleModalLabel">
Modal title
</h5>
<button aria-label="Close" className=" close" data-dismiss="modal" type="button">
<span aria-hidden={true}>
×
</span>
</button>
</div>
<div className=" modal-body">
<p>
Modal body text goes here.
</p>
</div>
<div className=" modal-footer">
<div className=" left-side">
<Button className=" btn-link" color="default" data-dismiss="modal" type="button">
Never mind
</Button>
</div>
<div className=" divider">
</div>
<div className=" right-side">
<Button className=" btn-link" color="danger" type="button">
Delete
</Button>
</div>
</div>
</Modal>
</div>
<h3 id="live-demo">
Live demo
</h3>
<p>
Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.
</p>
<Modal>
<div className=" modal-header">
<h5 className=" modal-title" id="exampleModalLiveLabel">
Modal title
</h5>
<button aria-label="Close" className=" close" data-dismiss="modal" type="button">
<span aria-hidden={true}>
×
</span>
</button>
</div>
<div className=" modal-body">
<p>
Woohoo, you're reading this text in a modal!
</p>
</div>
<div className=" modal-footer">
<div className=" left-side">
<Button className=" btn-link" color="default" data-dismiss="modal" type="button">
Never mind
</Button>
</div>
<div className=" divider">
</div>
<div className=" right-side">
<Button className=" btn-link" color="danger" type="button">
Delete
</Button>
</div>
</div>
</Modal>
<div className=" bd-example">
<Button color="primary" data-target="#exampleModalLive" data-toggle="modal" type="button">
 Launch demo modal 
</Button>
</div>
<h3 id="scrolling-long-content">
Scrolling long content
</h3>
<p>
When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.
</p>
<Modal>
<div className=" modal-header">
<h5 className=" modal-title" id="exampleModalLongTitle">
Modal title
</h5>
<button aria-label="Close" className=" close" data-dismiss="modal" type="button">
<span aria-hidden={true}>
×
</span>
</button>
</div>
<div className=" modal-body">
<p>
Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
</p>
<p>
Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
</p>
<p>
Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
</p>
<p>
Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
</p>
<p>
Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
</p>
<p>
Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
</p>
<p>
Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
</p>
<p>
Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
</p>
<p>
Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
</p>
<p>
Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
</p>
<p>
Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
</p>
<p>
Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
</p>
<p>
Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
</p>
<p>
Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
</p>
<p>
Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
</p>
<p>
Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
</p>
<p>
Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
</p>
<p>
Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
</p>
</div>
<div className=" modal-footer">
<div className=" left-side">
<Button className=" btn-link" color="default" data-dismiss="modal" type="button">
Never mind
</Button>
</div>
<div className=" divider">
</div>
<div className=" right-side">
<Button className=" btn-link" color="danger" type="button">
Delete
</Button>
</div>
</div>
</Modal>
<div className=" bd-example">
<Button color="primary" data-target="#exampleModalLong" data-toggle="modal" type="button">
 Launch demo modal 
</Button>
</div>
<h3 id="login-modal">
Login modal
</h3>
<div className=" bd-example">
<Button className=" btn-round" color="primary" data-target="#loginModal" data-toggle="modal" type="button">
 Login modal 
</Button>
<Modal>
<div className=" modal-header no-border-header text-center">
<button aria-label="Close" className=" close" data-dismiss="modal" type="button">
<span aria-hidden={true}>
×
</span>
</button>
<h6 className=" text-muted">
Welcome
</h6>
<h3 className=" modal-title text-center">
Paper Kit
</h3>
<p>
Log in to your account
</p>
</div>
<div className=" modal-body">
<FormGroup>
<label>
Email
</label>
<Input defaultValue="" placeholder="Email" type="text">
</Input>
</FormGroup>
<FormGroup>
<label>
Password
</label>
<Input defaultValue="" placeholder="Password" type="password">
</Input>
</FormGroup>
<Button block className=" btn-round" color="default">
 Log in
</Button>
</div>
<div className=" modal-footer no-border-footer">
<span className=" text-muted text-center">
Looking <a href="#pablo" onClick={e =>
 e.preventDefault()}>
create an account
</a>
 ?
</span>
</div>
</Modal>
</div>
<h3 id="tooltips-and-popovers">
Tooltips and popovers
</h3>
<p>
<a href="/docs/1.0/components/tooltips/">
Tooltips
</a>
 and <a href="/docs/1.0/components/popovers/">
popovers
</a>
 can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed.
</p>
<Modal>
<div className=" modal-header">
<h5 className=" modal-title" id="exampleModalPopoversLabel">
Modal title
</h5>
<button aria-label="Close" className=" close" data-dismiss="modal" type="button">
<span aria-hidden={true}>
×
</span>
</button>
</div>
<div className=" modal-body">
<h5>
Popover in a modal
</h5>
<p>
This <Button className=" popover-test" color="secondary" data-container="#exampleModalPopovers" data-content="Popover body content is set in this attribute." href="#pablo" onClick={e =>
 e.preventDefault()} role="button" title="Popover title">
button
</Button>
 triggers a popover on click.
</p>
<hr>
</hr>
<h5>
Tooltips in a modal
</h5>
<p>
<a className=" tooltip-test" data-container="#exampleModalPopovers" href="#pablo" onClick={e =>
 e.preventDefault()} title="Tooltip">
This link
</a>
 and <a className=" tooltip-test" data-container="#exampleModalPopovers" href="#pablo" onClick={e =>
 e.preventDefault()} title="Tooltip">
that link
</a>
 have tooltips on hover.
</p>
</div>
<div className=" modal-footer">
<div className=" left-side">
<Button className=" btn-link" color="default" data-dismiss="modal" type="button">
Never mind
</Button>
</div>
<div className=" divider">
</div>
<div className=" right-side">
<Button className=" btn-link" color="danger" type="button">
Delete
</Button>
</div>
</div>
</Modal>
<div className=" bd-example">
<Button color="primary" data-target="#exampleModalPopovers" data-toggle="modal" type="button">
 Launch demo modal 
</Button>
</div>
<h3 id="embedding-youtube-videos">
Embedding YouTube videos
</h3>
<p>
Embedding YouTube videos in modals requires additional JavaScript not in Bootstrap to automatically stop playback and more. <a href="https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal">
See this helpful Stack Overflow post
</a>
 for more information.
</p>
<h2 id="optional-sizes">
Optional sizes
</h2>
<p>
Modals have two optional sizes, available via modifier classes to be placed on a <code className=" highlighter-rouge">
.modal-dialog
</code>
. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.
</p>
<div className=" bd-example">
<Button color="primary" data-target=".bd-example-modal-lg" data-toggle="modal" type="button">
Large modal
</Button>
<Button color="primary" data-target=".bd-example-modal-sm" data-toggle="modal" type="button">
Small modal
</Button>
</div>
<Modal className="modal-lg" modalClassName=" bd-example-modal-lg">
<div className=" modal-header">
<h4 className=" modal-title" id="myLargeModalLabel">
Large modal
</h4>
<button aria-label="Close" className=" close" data-dismiss="modal" type="button">
<span aria-hidden={true}>
×
</span>
</button>
</div>
<div className=" modal-body">
 ... 
</div>
</Modal>
<Modal className="modal-sm" modalClassName=" bd-example-modal-sm">
<div className=" modal-header">
<h4 className=" modal-title" id="mySmallModalLabel">
Small modal
</h4>
<button aria-label="Close" className=" close" data-dismiss="modal" type="button">
<span aria-hidden={true}>
×
</span>
</button>
</div>
<div className=" modal-body">
 ... 
</div>
</Modal>
<h2 id="usage">
Usage
</h2>
<p>
The modal plugin toggles your hidden content on demand, via data attributes or JavaScript. It also adds <code className=" highlighter-rouge">
.modal-open
</code>
 to the <code className=" highlighter-rouge">
<body>
</code>
 to override default scrolling behavior and generates a <code className=" highlighter-rouge">
.modal-backdrop
</code>
 to provide a click area for dismissing shown modals when clicking outside the modal.
</p>
<h3 id="via-data-attributes">
Via data attributes
</h3>
<p>
Activate a modal without writing JavaScript. Set <code className=" highlighter-rouge">
data-toggle="modal"
</code>
 on a controller element, like a button, along with a <code className=" highlighter-rouge">
data-target="#foo"
</code>
 or <code className=" highlighter-rouge">
href="#foo"
</code>
 to target a specific modal to toggle.
</p>
<h3 id="via-javascript">
Via JavaScript
</h3>
<p>
Call a modal with id <code className=" highlighter-rouge">
myModal
</code>
 with a single line of JavaScript:
</p>
<h3 id="options">
Options
</h3>
<p>
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code className=" highlighter-rouge">
data-
</code>
, as in <code className=" highlighter-rouge">
data-backdrop=""
</code>
.
</p>
<Table responsive>
<tr>
<th style={{width: "100px",}}>
Name
</th>
<th style={{width: "50px",}}>
Type
</th>
<th style={{width: "50px",}}>
Default
</th>
<th>
Description
</th>
</tr>
</Table>
<p>
If you want to see more examples and properties please check the official <a href="https://getbootstrap.com/docs/4.3/components/modal/">
Bootstrap Documentation
</a>
</p>
</Col>
</Row>
</Container>
 {/* Core JS Files */}
 <script src="../../../assets/js/core/jquery.min.js" type="text/javascript">
</script>
<script src="../../../assets/js/core/popper.min.js" type="text/javascript">
</script>
<script src="../../../assets/js/core/bootstrap.min.js" type="text/javascript">
</script>
 {/* Plugin for Switches, full documentation here: http://www.jque.re/plugins/version3/bootstrap.switch/ */}
 <script src="../../../assets/js/plugins/bootstrap-switch.js">
</script>
 {/* Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ */}
 <script src="../../../assets/js/plugins/nouislider.min.js" type="text/javascript">
</script>
 {/* Plugin for the DatePicker, full documentation here: https://github.com/uxsolutions/bootstrap-datepicker */}
 <script src="../../../assets/js/plugins/moment.min.js">
</script>
<script src="../../../assets/js/plugins/bootstrap-datepicker.js" type="text/javascript">
</script>
 {/* Control Center for Paper Kit: parallax effects, scripts for the example pages etc */}
 <script src="../../../assets/js/paper-kit.min.js?v=2.2.0" type="text/javascript">
</script>
 {/* Google Maps Plugin */}
 <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI" type="text/javascript">
</script>
 {/* Sharrre libray */}
 <script src="../../../assets/demo/jquery.sharrre.js">
</script>
<script>
 $(document).ready(function() { var _gaq = _gaq || []; _gaq.push(['_setAccount', 'UA-46172202-1']); _gaq.push(['_trackPageview']); (function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })(); // Facebook Pixel Code Don't Delete ! function(f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function() { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s) }(window, document, 'script', '//connect.facebook.net/en_US/fbevents.js'); try { fbq('init', '111649226022273'); fbq('track', "PageView"); } catch (err) { console.log('Facebook Track Error:', err); } }); 
</script>
<noscript>
<img alt="..." height="1" src={require("https://www.facebook.com/tr?id=111649226022273&amp;ev=PageView&amp;noscript=1")} style={{display:none}} width="1">
</img>
</noscript>
<script>
 $(document).ready(function() { $sidebar = $('.sidebar'); $sidebar_img_container = $sidebar.find('.sidebar-background'); $full_page = $('.full-page'); $sidebar_responsive = $('body > .navbar-collapse'); sidebar_mini_active = true; window_width = $(window).width(); fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html(); // if( window_width > 767 &amp;&amp; fixed_plugin_open == 'Dashboard' ){ // if($('.fixed-plugin .dropdown').hasClass('show-dropdown')){ // $('.fixed-plugin .dropdown').addClass('show'); // } // // } $('.fixed-plugin a').click(function(event) { // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the section active if ($(this).hasClass('switch-trigger')) { if (event.stopPropagation) { event.stopPropagation(); } else if (window.event) { window.event.cancelBubble = true; } } }); $('.fixed-plugin .active-color span').click(function() { $full_page_background = $('.full-page-background'); $(this).siblings().removeClass('active'); $(this).addClass('active'); var new_color = $(this).data('color'); if ($sidebar.length != 0) { $sidebar.attr('data-active-color', new_color); } if ($full_page.length != 0) { $full_page.attr('data-active-color', new_color); } if ($sidebar_responsive.length != 0) { $sidebar_responsive.attr('data-active-color', new_color); } }); $('.fixed-plugin .background-color span').click(function() { $(this).siblings().removeClass('active'); $(this).addClass('active'); var new_color = $(this).data('color'); if ($sidebar.length != 0) { $sidebar.attr('data-color', new_color); } if ($full_page.length != 0) { $full_page.attr('filter-color', new_color); } if ($sidebar_responsive.length != 0) { $sidebar_responsive.attr('data-color', new_color); } }); $('.fixed-plugin .img-holder').click(function() { $full_page_background = $('.full-page-background'); $(this).parent('li').siblings().removeClass('active'); $(this).parent('li').addClass('active'); var new_image = $(this).find("img").attr('src'); if ($sidebar_img_container.length != 0 &amp;&amp; $('.switch-sidebar-image input:checked').length != 0) { $sidebar_img_container.fadeOut('fast', function() { $sidebar_img_container.css('background-image', 'url("' + new_image + '")'); $sidebar_img_container.fadeIn('fast'); }); } if ($full_page_background.length != 0 &amp;&amp; $('.switch-sidebar-image input:checked').length != 0) { var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src'); $full_page_background.fadeOut('fast', function() { $full_page_background.css('background-image', 'url("' + new_image_full_page + '")'); $full_page_background.fadeIn('fast'); }); } if ($('.switch-sidebar-image input:checked').length == 0) { var new_image = $('.fixed-plugin li.active .img-holder').find("img").attr('src'); var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src'); $sidebar_img_container.css('background-image', 'url("' + new_image + '")'); $full_page_background.css('background-image', 'url("' + new_image_full_page + '")'); } if ($sidebar_responsive.length != 0) { $sidebar_responsive.css('background-image', 'url("' + new_image + '")'); } }); $('.switch-sidebar-image input').on("switchChange.bootstrapSwitch", function() { $full_page_background = $('.full-page-background'); $input = $(this); if ($input.is(':checked')) { if ($sidebar_img_container.length != 0) { $sidebar_img_container.fadeIn('fast'); $sidebar.attr('data-image', '#'); } if ($full_page_background.length != 0) { $full_page_background.fadeIn('fast'); $full_page.attr('data-image', '#'); } background_image = true; } else { if ($sidebar_img_container.length != 0) { $sidebar.removeAttr('data-image'); $sidebar_img_container.fadeOut('fast'); } if ($full_page_background.length != 0) { $full_page.removeAttr('data-image', '#'); $full_page_background.fadeOut('fast'); } background_image = false; } }); $('.switch-mini input').on("switchChange.bootstrapSwitch", function() { $body = $('body'); $input = $(this); if (paperDashboard.misc.sidebar_mini_active == true) { $('body').removeClass('sidebar-mini'); paperDashboard.misc.sidebar_mini_active = false; $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar(); } else { $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar('destroy'); setTimeout(function() { $('body').addClass('sidebar-mini'); paperDashboard.misc.sidebar_mini_active = true; }, 300); } // we simulate the window Resize so the charts will get updated in realtime. var simulateWindowResize = setInterval(function() { window.dispatchEvent(new Event('resize')); }, 180); // we stop the simulation of Window Resize after the animations are completed setTimeout(function() { clearInterval(simulateWindowResize); }, 1000); }); }); 
</script>
<script src="../../../assets/demo/docs.min.js">
</script>
<script src="../../../assets/demo/vendor/anchor.min.js">
</script>
<script src="../../../assets/demo/vendor/clipboard.min.js">
</script>
<script src="../../../assets/demo/vendor/holder.min.js">
</script>
<script src="../../../assets/demo/src/application.js">
</script>
<script>
 $(document).ready(function() { if ($('#chartHours').length != 0) { demo.initDocChart(); } if ($(".datetimepicker").length != 0) { $('.datetimepicker').datetimepicker({ icons: { time: "fa fa-clock-o", date: "fa fa-calendar", up: "fa fa-chevron-up", down: "fa fa-chevron-down", previous: 'fa fa-chevron-left', next: 'fa fa-chevron-right', today: 'fa fa-screenshot', clear: 'fa fa-trash', close: 'fa fa-remove' } }); } // Activate regular switches if ($("[data-toggle='switch']").length != 0) { $("[data-toggle='switch']").bootstrapSwitch(); } // Init noUiSlider pk.initSliders(); }); 
</script>
<script>
 Holder.addTheme('gray', { bg: '#777', fg: 'rgba(255,255,255,.75)', font: 'Helvetica', fontweight: 'normal' }) 
</script>
</body>
</html>

      </>
    );
  }
}

export default Modal;