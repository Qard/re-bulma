import common from './common';

export default () => `
.nav, .nav-item, .nav > .container,
.nav-left, .nav-center, .nav-right, .nav-menu {
  ${common()}
};

.nav-toggle {
  cursor: pointer;
  display: block;
  height: 50px;
  position: relative;
  width: 50px;
}

.nav-toggle span {
  background: #69707a;
  display: block;
  height: 1px;
  left: 50%;
  margin-left: -7px;
  position: absolute;
  top: 50%;
  -webkit-transition: none 86ms ease-out;
  transition: none 86ms ease-out;
  -webkit-transition-property: background, left, opacity, -webkit-transform;
  transition-property: background, left, opacity, -webkit-transform;
  transition-property: background, left, opacity, transform;
  transition-property: background, left, opacity, transform, -webkit-transform;
  width: 15px;
}

.nav-toggle span:nth-child(1) {
  margin-top: -6px;
}

.nav-toggle span:nth-child(2) {
  margin-top: -1px;
}

.nav-toggle span:nth-child(3) {
  margin-top: 4px;
}

.nav-toggle:hover {
  background: #f5f7fa;
}

.is-active.nav-toggle span {
  background: #1fc8db;
}

.is-active.nav-toggle span:nth-child(1) {
  margin-left: -5px;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  -webkit-transform-origin: left top;
          transform-origin: left top;
}

.is-active.nav-toggle span:nth-child(2) {
  opacity: 0;
}

.is-active.nav-toggle span:nth-child(3) {
  margin-left: -5px;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  -webkit-transform-origin: left bottom;
          transform-origin: left bottom;
}

@media screen and (min-width: 769px) {
  .nav-toggle {
    display: none;
  }
}

.nav-item {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding: 10px;
}

.nav-item a {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
}

.nav-item img {
  max-height: 24px;
}

.nav-item .button + .button {
  margin-left: 10px;
}

.nav-item .tag:first-child {
  margin-right: 5px;
}

.nav-item .tag:last-child {
  margin-left: 5px;
}

@media screen and (max-width: 768px) {
  .nav-item {
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start;
  }
}

.nav-item a,
a.nav-item {
  color: #69707a;
}

.nav-item a:hover,
a.nav-item:hover {
  color: #222324;
}

.nav-item a.is-active,
a.nav-item.is-active {
  color: #222324;
}

.nav-item a.is-tab,
a.nav-item.is-tab {
  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;
  padding-left: 12px;
  padding-right: 12px;
}

.nav-item a.is-tab:hover,
a.nav-item.is-tab:hover {
  border-bottom: 1px solid #1fc8db;
  border-top: 1px solid transparent;
}

.nav-item a.is-tab.is-active,
a.nav-item.is-tab.is-active {
  border-bottom: 3px solid #1fc8db;
  border-top: 3px solid transparent;
  color: #1fc8db;
}

@media screen and (max-width: 768px) {
  .nav-menu {
    background: #fff;
    box-shadow: 0 4px 7px rgba(17, 17, 17, 0.1);
    left: 0;
    display: none;
    right: 0;
    top: 100%;
    position: absolute;
  }
  .nav-menu .nav-item {
    border-top: 1px solid rgba(211, 214, 219, 0.5);
    padding: 10px;
  }
  .nav-menu.is-active {
    display: block;
  }
}

.nav-left {
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}

.nav-center {
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}

@media screen and (min-width: 769px) {
  .nav-right {
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
            justify-content: flex-end;
  }
}

.nav {
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
  background: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 50px;
  position: relative;
  text-align: center;
  z-index: 2;
}

.nav > .container {
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 50px;
  width: 100%;
}

.nav > .container > .nav-left > .nav-item:first-child:not(.is-tab) {
  padding-left: 0;
}

.nav > .container > .nav-right > .nav-item:last-child:not(.is-tab) {
  padding-right: 0;
}

.container > .nav > .nav-left > .nav-item:first-child:not(.is-tab) {
  padding-left: 0;
}

.container > .nav > .nav-right > .nav-item:last-child:not(.is-tab) {
  padding-right: 0;
}

.nav.has-shadow {
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);
}

`;
