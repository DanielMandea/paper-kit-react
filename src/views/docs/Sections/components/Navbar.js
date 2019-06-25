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
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class Navbar extends React.Component {
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
 Navbar - Paper Kit by Creative Tim 
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
<li>
<a href="/paper-kit-2/docs/1.0/components/modal.html">
 Modal 
</a>
</li>
<li>
<a href="/paper-kit-2/docs/1.0/components/nucleo-icons.html">
 Nucleo Icons 
</a>
</li>
<li className=" active bd-sidenav-active">
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
How it works
</a>
<ul>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Nav
</a>
</li>
</ul>
</li>
<li className=" toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Color schemes
</a>
</li>
<li className=" toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Containers
</a>
</li>
<li className=" toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Placement
</a>
</li>
<li className=" toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Responsive behaviors
</a>
<ul>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Toggler
</a>
</li>
</ul>
</li>
</ul>
</Col>
<Col className=" py-md-3 pl-md-5 bd-content" md="9" role="main" xl="8" xs="12">
<h1 className=" bd-title" id="content">
Navbar
</h1>
<p className=" bd-lead">
Documentation and examples for Bootstrap's powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.
</p>
<h2 id="how-it-works">
How it works
</h2>
<p>
Here’s what you need to know before getting started with the navbar:
</p>
<ul>
<li>
Navbars require a wrapping <code className=" highlighter-rouge">
.navbar
</code>
 with <code className=" highlighter-rouge">
.navbar-expand{-sm|-md|-lg|-xl}
</code>
 for responsive collapsing and <a href="#pablo" onClick={e =>
 e.preventDefault()}>
color scheme
</a>
 classes.
</li>
<li>
Navbars and their contents are fluid by default. Use <a href="#pablo" onClick={e =>
 e.preventDefault()}>
optional containers
</a>
 to limit their horizontal width.
</li>
<li>
Use our <a href="/docs/1.0/utilities/spacing/">
spacing
</a>
 and <a href="/docs/1.0/utilities/flex/">
flex
</a>
 utility classes for controlling spacing and alignment within navbars.
</li>
<li>
Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
</li>
<li>
Navbars are hidden by default when printing. Force them to be printed by adding <code className=" highlighter-rouge">
.d-print
</code>
 to the <code className=" highlighter-rouge">
.navbar
</code>
. See the <a href="/docs/1.0/utilities/display/">
display
</a>
 utility class.
</li>
<li>
Ensure accessibility by using a <code className=" highlighter-rouge">
<nav>
</code>
 element or, if using a more generic element such as a <code className=" highlighter-rouge">
<div>
</code>
, add a <code className=" highlighter-rouge">
role="navigation"
</code>
 to every navbar to explicitly identify it as a landmark region for users of assistive technologies.
</li>
</ul>
<p>
Read on for an example and list of supported sub-components.
</p>
<h3 id="nav">
Nav
</h3>
<p>
Navbar navigation links build on our <code className=" highlighter-rouge">
.nav
</code>
 options with their own modifier class and require the use of <a href="#pablo" onClick={e =>
 e.preventDefault()}>
toggler classes
</a>
 for proper responsive styling. <strong>
Navigation in navbars will also grow to occupy as much horizontal space as possible
</strong>
 to keep your navbar contents securely aligned.
</p>
<p>
Active states—with <code className=" highlighter-rouge">
.active
</code>
—to indicate the current page can be applied directly to <code className=" highlighter-rouge">
.nav-link
</code>
s or their immediate parent <code className=" highlighter-rouge">
.nav-item
</code>
s.
</p>
<div className=" bd-example" data-example-id="">
<Navbar className=" bg-primary" expand="lg">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Navbar
</NavbarBrand>
<button aria-controls="navbarNav" aria-expanded={false} aria-label="Toggle navigation" className=" navbar-toggler" data-target="#navbarNav" data-toggle="collapse" id="navbarNav" type="button">
<span className=" navbar-toggler-icon">
</span>
</button>
<UncontrolledCollapse id="navbarNav" navbar toggler="#navbarNav">
<Nav navbar>
<NavItem className=" active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Home <span className=" sr-only">
(current)
</span>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Features
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Pricing
</NavLink>
</NavItem>
<NavItem>
<NavLink className=" disabled" href="#pablo" onClick={e =>
 e.preventDefault()}>
Disabled
</NavLink>
</NavItem>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
</div>
<p>
You may also utilize dropdowns in your navbar nav. Dropdown menus require a wrapping element for positioning, so be sure to use separate and nested elements for <code className=" highlighter-rouge">
.nav-item
</code>
 and <code className=" highlighter-rouge">
.nav-link
</code>
 as shown below.
</p>
<div className=" bd-example" data-example-id="">
<Navbar className=" bg-primary" expand="lg">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Navbar
</NavbarBrand>
<button aria-controls="navbarNavDropdown" aria-expanded={false} aria-label="Toggle navigation" className=" navbar-toggler" data-target="#navbarNavDropdown" data-toggle="collapse" id="navbarNavDropdown" type="button">
<span className=" navbar-toggler-icon">
</span>
</button>
<UncontrolledCollapse id="navbarNavDropdown" navbar toggler="#navbarNavDropdown">
<Nav navbar>
<NavItem className=" active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Home <span className=" sr-only">
(current)
</span>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Features
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Pricing
</NavLink>
</NavItem>
<UncontrolledDropdown nav>
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="default" data-toggle="dropdown" href="#pablo" id="navbarDropdownMenuLink" nav onClick={e =>
 e.preventDefault()}>
 Dropdown link 
</DropdownToggle>
<DropdownMenu aria-labelledby="navbarDropdownMenuLink">
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
Action
</DropdownItem>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
Another action
</DropdownItem>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
Something else here
</DropdownItem>
</DropdownMenu>
</UncontrolledDropdown>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
</div>
<h2 id="color-schemes">
Color schemes
</h2>
<p>
Theming the navbar has never been easier thanks to the combination of theming classes and <code className=" highlighter-rouge">
background-color
</code>
 utilities. Choose from <code className=" highlighter-rouge">
.navbar-light
</code>
 for use with light background colors, or <code className=" highlighter-rouge">
.navbar-dark
</code>
 for dark background colors. Then, customize with <code className=" highlighter-rouge">
.bg-*
</code>
 utilities.
</p>
<div className=" bd-example">
<Navbar className=" bg-primary" expand="lg">
<Container>
<div className=" navbar-translate">
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Primary color
</NavbarBrand>
<button aria-controls="navbarSupportedContent" aria-expanded={false} aria-label="Toggle navigation" className=" navbar-toggler" data-target="#example-navbar-primary" data-toggle="collapse" id="example-navbar-primary" type="button">
<span className=" navbar-toggler-bar bar1">
</span>
<span className=" navbar-toggler-bar bar2">
</span>
<span className=" navbar-toggler-bar bar3">
</span>
</button>
</div>
<UncontrolledCollapse id="example-navbar-primary" navbar toggler="#example-navbar-primary">
<Nav className=" ml-auto" navbar>
<NavItem className=" active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className=" nc-icon nc-sun-fog-29">
</i>
<p>
Discover
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className=" nc-icon nc-single-02">
</i>
<p>
Profile
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className=" nc-icon nc-settings">
</i>
<p>
Settings
</p>
</NavLink>
</NavItem>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
<Navbar className=" bg-info" expand="lg">
<Container>
<div className=" navbar-translate">
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Info color
</NavbarBrand>
<button aria-controls="navbarSupportedContent" aria-expanded={false} aria-label="Toggle navigation" className=" navbar-toggler" data-target="#example-navbar-primary" data-toggle="collapse" id="example-navbar-primary" type="button">
<span className=" navbar-toggler-bar bar1">
</span>
<span className=" navbar-toggler-bar bar2">
</span>
<span className=" navbar-toggler-bar bar3">
</span>
</button>
</div>
<UncontrolledCollapse id="example-navbar-primary" navbar toggler="#example-navbar-primary">
<Nav className=" ml-auto" navbar>
<NavItem className=" active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className=" nc-icon nc-sun-fog-29">
</i>
<p>
Discover
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className=" nc-icon nc-single-02">
</i>
<p>
Profile
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className=" nc-icon nc-settings">
</i>
<p>
Settings
</p>
</NavLink>
</NavItem>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
<Navbar className=" bg-success" expand="lg">
<Container>
<div className=" navbar-translate">
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Success color
</NavbarBrand>
<button aria-controls="navbarSupportedContent" aria-expanded={false} aria-label="Toggle navigation" className=" navbar-toggler" data-target="#example-navbar-primary" data-toggle="collapse" id="example-navbar-primary" type="button">
<span className=" navbar-toggler-bar bar1">
</span>
<span className=" navbar-toggler-bar bar2">
</span>
<span className=" navbar-toggler-bar bar3">
</span>
</button>
</div>
<UncontrolledCollapse id="example-navbar-primary" navbar toggler="#example-navbar-primary">
<Nav className=" ml-auto" navbar>
<NavItem className=" active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className=" nc-icon nc-sun-fog-29">
</i>
<p>
Discover
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className=" nc-icon nc-single-02">
</i>
<p>
Profile
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className=" nc-icon nc-settings">
</i>
<p>
Settings
</p>
</NavLink>
</NavItem>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
<Navbar className=" bg-warning" expand="lg">
<Container>
<div className=" navbar-translate">
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Warning color
</NavbarBrand>
<button aria-controls="navbarSupportedContent" aria-expanded={false} aria-label="Toggle navigation" className=" navbar-toggler" data-target="#example-navbar-primary" data-toggle="collapse" id="example-navbar-primary" type="button">
<span className=" navbar-toggler-bar bar1">
</span>
<span className=" navbar-toggler-bar bar2">
</span>
<span className=" navbar-toggler-bar bar3">
</span>
</button>
</div>
<UncontrolledCollapse id="example-navbar-primary" navbar toggler="#example-navbar-primary">
<Nav className=" ml-auto" navbar>
<NavItem className=" active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className=" nc-icon nc-sun-fog-29">
</i>
<p>
Discover
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className=" nc-icon nc-single-02">
</i>
<p>
Profile
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className=" nc-icon nc-settings">
</i>
<p>
Settings
</p>
</NavLink>
</NavItem>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
<Navbar className=" bg-danger" expand="lg">
<Container>
<div className=" navbar-translate">
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Danger color
</NavbarBrand>
<button aria-controls="navbarSupportedContent" aria-expanded={false} aria-label="Toggle navigation" className=" navbar-toggler" data-target="#example-navbar-primary" data-toggle="collapse" id="example-navbar-primary" type="button">
<span className=" navbar-toggler-bar bar1">
</span>
<span className=" navbar-toggler-bar bar2">
</span>
<span className=" navbar-toggler-bar bar3">
</span>
</button>
</div>
<UncontrolledCollapse id="example-navbar-primary" navbar toggler="#example-navbar-primary">
<Nav className=" ml-auto" navbar>
<NavItem className=" active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className=" nc-icon nc-sun-fog-29">
</i>
<p>
Discover
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className=" nc-icon nc-single-02">
</i>
<p>
Profile
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className=" nc-icon nc-settings">
</i>
<p>
Settings
</p>
</NavLink>
</NavItem>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
<div className=" navigation-example" style={{background-image: "url('../../../../assets/img/kit/free/ilya-yakover.jpg')}}>
<Navbar className=" navbar-transparent" expand="md">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Transparent
</NavbarBrand>
<button aria-controls="navbarNav" aria-expanded={false} aria-label="Toggle navigation" className=" navbar-toggler navbar-toggler-right" data-target="#navbar-transparent" data-toggle="collapse" id="navbar-transparent" type="button">
<span className=" navbar-toggler-bar">
</span>
<span className=" navbar-toggler-bar">
</span>
<span className=" navbar-toggler-bar">
</span>
</button>
<UncontrolledCollapse id="navbar-transparent" navbar toggler="#navbar-transparent">
<Nav className=" ml-auto" navbar>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i aria-hidden={true} className=" fa fa-facebook-official">
</i>
  Facebook
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i aria-hidden={true} className=" fa fa-twitter">
</i>
  Twitter
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i aria-hidden={true} className=" fa fa-instagram">
</i>
  Instagram
</NavLink>
</NavItem>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
</div>
</div>
<h2 id="containers">
Containers
</h2>
<p>
When the container is within your navbar, its horizontal padding is removed at breakpoints lower than your specified <code className=" highlighter-rouge">
.navbar-expand{-sm|-md|-lg|-xl}
</code>
 class. This ensures we’re not doubling up on padding unnecessarily on lower viewports when your navbar is collapsed.
</p>
<div className=" bd-example" data-example-id="">
<Navbar className=" navbar-light bg-primary" expand="lg">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Navbar
</NavbarBrand>
</Container>
</Navbar>
</div>
<h2 id="placement">
Placement
</h2>
<p>
Use our <a href="/docs/1.0/utilities/position/">
position utilities
</a>
 to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use <code className=" highlighter-rouge">
position: fixed
</code>
, meaning they’re pulled from the normal flow of the DOM and may require custom CSS (e.g., <code className=" highlighter-rouge">
padding-top
</code>
 on the <code className=" highlighter-rouge">
<body>
</code>
) to prevent overlap with other elements.
</p>
<p>
Also note that <strong>
<code className=" highlighter-rouge">
.sticky-top
</code>
 uses <code className=" highlighter-rouge">
position: sticky
</code>
, which <a href="#pablo" onClick={e =>
 e.preventDefault()}>
isn’t fully supported in every browser
</a>
</strong>
.
</p>
<div className=" bd-example" data-example-id="">
<Navbar className=" navbar-light bg-primary">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Default
</NavbarBrand>
</Container>
</Navbar>
</div>
<div className=" bd-example" data-example-id="">
<Navbar className=" fixed-top navbar-light bg-primary">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Fixed top
</NavbarBrand>
</Container>
</Navbar>
</div>
<div className=" bd-example" data-example-id="">
<Navbar className=" fixed-bottom navbar-light bg-primary">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Fixed bottom
</NavbarBrand>
</Container>
</Navbar>
</div>
<div className=" bd-example" data-example-id="">
<Navbar className=" sticky-top navbar-light bg-primary">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Sticky top
</NavbarBrand>
</Container>
</Navbar>
</div>
<h2 id="responsive-behaviors">
Responsive behaviors
</h2>
<p>
Navbars can utilize <code className=" highlighter-rouge">
.navbar-toggler
</code>
, <code className=" highlighter-rouge">
.navbar-collapse
</code>
, and <code className=" highlighter-rouge">
.navbar-expand{-sm|-md|-lg|-xl}
</code>
 classes to change when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements.
</p>
<p>
For navbars that never collapse, add the <code className=" highlighter-rouge">
.navbar-expand
</code>
 class on the navbar. For navbars that always collapse, don’t add any <code className=" highlighter-rouge">
.navbar-expand
</code>
 class.
</p>
<h3 id="toggler">
Toggler
</h3>
<p>
Navbar togglers are left-aligned by default, but should they follow a sibling element like a <code className=" highlighter-rouge">
.navbar-brand
</code>
, they’ll automatically be aligned to the far right. Reversing your markup will reverse the placement of the toggler. Below are examples of different toggle styles.
</p>
<p>
With no <code className=" highlighter-rouge">
.navbar-brand
</code>
 shown in lowest breakpoint:
</p>
<div className=" bd-example" data-example-id="">
<Navbar className=" bg-primary" expand="lg">
<Container>
<button aria-controls="navbarSupportedContent" aria-expanded={false} aria-label="Toggle navigation" className=" navbar-toggler" data-target="#example-navbar" data-toggle="collapse" id="example-navbar" type="button">
<span className=" navbar-toggler-bar bar1">
</span>
<span className=" navbar-toggler-bar bar2">
</span>
<span className=" navbar-toggler-bar bar3">
</span>
</button>
<UncontrolledCollapse id="navbarTogglerDemo01" navbar toggler="#navbarTogglerDemo01">
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Hidden brand
</NavbarBrand>
<Nav className=" mr-auto mt-2 mt-lg-0" navbar>
<NavItem className=" active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Home <span className=" sr-only">
(current)
</span>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
</NavItem>
<NavItem>
<NavLink className=" disabled" href="#pablo" onClick={e =>
 e.preventDefault()}>
Disabled
</NavLink>
</NavItem>
</Nav>
<Form className=" form-inline ml-auto">
<FormGroup className=" has-white">
<Input placeholder="Search" type="text">
</Input>
</FormGroup>
</Form>
</UncontrolledCollapse>
</Container>
</Navbar>
</div>
<p>
With a brand name shown on the left and toggler on the right:
</p>
<div className=" bd-example" data-example-id="">
<Navbar className=" bg-primary" expand="lg">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Navbar
</NavbarBrand>
<button aria-controls="navbarSupportedContent" aria-expanded={false} aria-label="Toggle navigation" className=" navbar-toggler" data-target="#example-navbar" data-toggle="collapse" id="example-navbar" type="button">
<span className=" navbar-toggler-bar bar1">
</span>
<span className=" navbar-toggler-bar bar2">
</span>
<span className=" navbar-toggler-bar bar3">
</span>
</button>
<UncontrolledCollapse id="navbarTogglerDemo02" navbar toggler="#navbarTogglerDemo02">
<Nav className=" mr-auto mt-2 mt-lg-0" navbar>
<NavItem className=" active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Home <span className=" sr-only">
(current)
</span>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
</NavItem>
<NavItem>
<NavLink className=" disabled" href="#pablo" onClick={e =>
 e.preventDefault()}>
Disabled
</NavLink>
</NavItem>
</Nav>
<Form className=" form-inline ml-auto">
<FormGroup className=" has-white">
<Input placeholder="Search" type="text">
</Input>
</FormGroup>
</Form>
</UncontrolledCollapse>
</Container>
</Navbar>
</div>
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

export default Navbar;