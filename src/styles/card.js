import common from './common';

export default () => `
.cardm .card-header, .card-header-title, .card-footer
.card-header-icon, .card-footer-item, .card-content {
  ${common()}
}

.card-header {
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
  box-shadow: 0 1px 2px rgba(17, 17, 17, 0.1);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 40px;
}

.card-header-title {
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
      -ms-flex-align: start;
          align-items: flex-start;
  color: #222324;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  font-weight: bold;
  padding: 10px;
}

.card-header-icon {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 40px;
}

.card-image {
  display: block;
  position: relative;
}

.card-content {
  padding: 20px;
}

.card-content .title + .subtitle {
  margin-top: -20px;
}

.card-footer {
  border-top: 1px solid #d3d6db;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.card-footer-item {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding: 10px;
}

.card-footer-item:not(:last-child) {
  border-right: 1px solid #d3d6db;
}

.card {
  background: #fff;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  color: #69707a;
  max-width: 100%;
  position: relative;
  width: 300px;
}

.card .media:not(:last-child) {
  margin-bottom: 10px;
}

.card.is-fullwidth {
  width: 100%;
}

.card.is-rounded {
  border-radius: 5px;
}

`;
