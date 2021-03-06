export default () => `
.label {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
  background: transparent;
  cursor: pointer;
}

.label {
  color: #222324;
  display: block;
  font-weight: bold;
}

.label:not(:last-child) {
  margin-bottom: 5px;
}
`;

