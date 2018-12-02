(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{123:function(e,t,n){"use strict";n.r(t);n(124);var a=n(6),r=n.n(a),o=n(0),i=n(126),l=(n(135),function(e){var t=e.children,n=e.bgClass,a=e.isFullHeight;return o.createElement("section",{className:"section full-height-"+!!a},o.createElement("div",{className:"section-container "+n},t))}),c=(n(136),function(e){var t=e.children;return o.createElement("h2",{className:"section-title"},t)}),s=(n(137),function(){return o.createElement(l,{bgClass:"intro-background",isFullHeight:!0},o.createElement("div",{className:"intro-description"},o.createElement("div",{className:"intro-box"},o.createElement("div",{className:"intro-title"},o.createElement(c,null,"Your Innovation Partner")),o.createElement("div",{className:"intro-text"},"At Jupio Labs we bring our clients to the modern web, using agile & lean approaches to development and design"))))}),m=(n(138),function(e){var t=e.image,n=e.imagePosition,a=e.name,r=e.stack,i=e.children;return o.createElement("div",{className:"client-info "+n},o.createElement("div",{className:"client-info-content"},o.createElement("div",{className:"client-info-image"},o.createElement("img",{src:t})),o.createElement("h3",null,a),o.createElement("div",{className:"client-info-stack"},r.map(function(e,t){return o.createElement("span",{key:"stack-item-"+t,className:"client-info-technology"},e)})),i))}),u=(n(139),n(140)),d=n.n(u),p=n(141),h=n.n(p),f=function(){return o.createElement(l,{bgClass:"past-clients"},o.createElement("div",{className:"past-clients-container"},o.createElement("div",{className:"past-clients-title"},o.createElement(c,null,"Past Clients")),o.createElement("div",{className:"past-clients-information"},o.createElement(m,{image:h.a,imagePosition:"right",stack:["UI Design","Nationbuilder","HTML5","SASS","Bulma","Javascript","Design"],name:"Documentary Organization of Canada"},o.createElement("h4",null,"The Task"),o.createElement("p",null,"The Documentary Organization of Canada (DocOrg) approached us in late September of 2018 in order to bring their website redesign to completion. Much of the site was constructed, but they needed our expertise with  Nationbuilder as a platform, our design chops, and our experience in front end development to bring the redesign to a speedy and timely launch slated for the beginning of October."),o.createElement("h4",null,"Design & Development"),o.createElement("p",null,"We worked with existing thematic elements, such as colour scheme, as well as the flex box based CSS framework Bulma."),o.createElement("p",null,"We redesigned much of the conent layout, improved readability, and improved the typography of blog article pages. In addition, we ensured proper rendering and flow of form pages. We gave the website a final rundown and polished it before launch."),o.createElement("p",null,"We also provided insight into how the Nationbuilder platform works, what its limitations are, and how features within the system could be used to ensure dynamic content tied to data in back end administration."),o.createElement("p",null,"Finally, we helped DocOrg figure out how to establish a bilingual nation with the existing theme."),o.createElement("h4",null,"Hand Off & Launch"),o.createElement("p",null,"Jupio Labs ensured that DocOrg was ready and comfortable with the feature sets that were developed while working with us."),o.createElement("p",null,"Furthermore, Nationbuilder is a powerful tool with a rich set of features, which is why we worked closely to ensure that our client would be able to make the best use of what was available for the context of their organization."),o.createElement("p",null,"We worked closely to ensure as smooth a migration as possible for launch.")),o.createElement(m,{image:d.a,imagePosition:"right",stack:["UI/UX Design","ReactJS","Redux","NodeJS","MongoDB","TypeScript","Server-side Rendering","Test-driven development","Mailchimp API","Paypal","Azure"],name:"Linda Jeffrey for Mayor of Brampton"},o.createElement("h4",null,"The Task"),o.createElement("p",null,"The Campaign for Linda Jeffrey for Mayor of Brampton approached us looking for a custom solution for a campaign site."),o.createElement("p",null,"The solution needed to be able to handle volunteer signups, voter pledges, requests for campaign signs, and donations."),o.createElement("h4",null,"A Lean Team"),o.createElement("p",null,"Understanding the task at hand, how quick turnaround needs to be in a competitive campaign cycle, and being able to implement features as fast as possible, we chose to embed lean development and UX principles into our process."),o.createElement("p",null,"We quickly established a process to handle feature requests. There was one member of the team who remained the chief point of contact with the campaign at all times, and was able to relay and prioritize implementation of new features as requests came in."),o.createElement("h4",null,"The Stack"),o.createElement("p",null,"We were running lean, so we started with making sure there was a base level of predictability to our codebase. We chose TypeScript as our primary language due to its ability to catch type errors at compile time, allowing us to work faster rather than worry about variables coming up undefined at runtime. TypeScript was our bread & butter whether we were writing browser-side code, or NodeJS microservices. We also had checks and balances in the form of githooks that ensured linters, TypeScript compilation, and unit tests all gave the green light before a commit."),o.createElement("p",null,"We chose ReactJS with server-side rendering for our front end. React provides us powerful patterns and a functional approach to writing our view. We were able to effectively build a framework while building features by building our components using the Atomic UI approach -- allowing for maximum reusability. For state management, we deferred to Redux whenever necessary."),o.createElement("p",null,"Server side rendering (SSR) was necessary: political campaigns rely on users to share across a variety of platforms, and for that to occur predictably we require Facebook, Twitter, and Google's crawlers to be able to read static HTML served from a server. Towards this end, we used NextJS as our solution.")))))},g=(n(142),function(e){var t=e.children,n=e.additionalClasses;return o.createElement("div",{className:"card "+n},t)}),w=(n(143),function(){return o.createElement(l,{bgClass:"contact"},o.createElement("div",{className:"contact-container"},o.createElement("div",{className:"contact-title"},o.createElement(c,null,"Get in Touch")),o.createElement("div",{className:"contact-information"},o.createElement(g,{additionalClasses:"contact-card"},o.createElement("p",null,o.createElement("span",{className:"contact-card-details"},"It's easiest to reach us by email")),o.createElement("p",null,o.createElement("span",{className:"contact-card-email"},o.createElement("a",{href:"mailto:info@jupio.media"},"info@jupio.media")))))))}),b=(n(144),function(){return o.createElement(l,{bgClass:"footer"},o.createElement("div",{className:"footer-overlay"},o.createElement("div",{className:"footer-content"},o.createElement("p",{className:"footer-text"},"Made with locally sourced, handcrafted, artisanal code, from a Toronto-based Company."),o.createElement("p",{className:"footer-text"},"© Jupio Media Inc."))))}),E=(n(145),n(146),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOpen:!1},n}r()(t,e);var n=t.prototype;return n.toggleHandler=function(){var e=this;return function(){e.setState({isOpen:!e.state.isOpen})}},n.render=function(){var e=this.state.isOpen;return o.createElement("nav",{className:"navigation "+(e?"open":"")},o.createElement("h1",{className:"jupio-wordmark"},"JUPIO LABS"))},t}(o.Component)),v=function(e){var t=e.children;return o.createElement("div",{className:"main-container"},o.createElement(E,null),t)},y=(n(147),n(148),n(149)),k=n.n(y);n.d(t,"indexPageQuery",function(){return N}),n.d(t,"default",function(){return S});var N="3160339082",S=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.name,n=e.tagline,a=e.description,r=e.keywords,l=e.author,c=e.canonicalLink;return o.createElement(v,null,o.createElement(i.Helmet,null,o.createElement("meta",{charSet:"utf-8"}),o.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),o.createElement("title",null,t," | ",n),o.createElement("link",{rel:"canonical",href:c}),o.createElement("meta",{name:"description",content:a}),o.createElement("meta",{name:"keywords",content:r.join(",")}),o.createElement("meta",{name:"author",content:l}),o.createElement("meta",{property:"og:title",content:t}),o.createElement("meta",{property:"og:description",content:a}),o.createElement("meta",{property:"og:image",content:k.a}),o.createElement("meta",{property:"og:url",content:c})),o.createElement(s,null),o.createElement(f,null),o.createElement(w,null),o.createElement(b,null))},t}(o.Component)},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){e.exports=n.p+"static/logo-lindajeffrey-cdc911f3f746554a77ab6d1b258217a4.png"},141:function(e,t,n){e.exports=n.p+"static/logo-docorg-b21ebd12007cbe5a7a29e850aa481e3c.png"},142:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){e.exports=n.p+"static/social-media-card-3f1b54b60446909ddbded1784b4a82d1.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-b0adce465d921fb2a34a.js.map