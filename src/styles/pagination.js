import common from './common';
import button from './button';

export default () => `
.pagination {
  ${common()}
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
  text-align: center;
}

.pagination ul, .pagination li {
  box-sizing: inherit;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
  background: transparent;
}

.pagination a {
  box-sizing: inherit;
  display: block;
  min-width: 32px;
  padding: 3px 8px;
}

.pagination span {
  color: #aeb1b5;
  display: block;
  margin: 0 4px;
}

.pagination li {
  margin: 0 2px;
}

.pagination ul {
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
}

@media screen and (max-width: 768px) {
  .pagination {
    -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
  }
  .pagination > a {
    width: calc(50% - 5px);
  }
  .pagination > a:not(:first-child) {
    margin-left: 10px;
  }
  .pagination li {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
  }
  .pagination ul {
    margin-top: 10px;
  }
}

@media screen and (min-width: 769px) {
  .pagination > a:not(:first-child) {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1;
  }
}

${button()}
`;
