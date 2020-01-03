import React, { useState } from "react";
import { connect } from "react-redux";
import { numberWithCommas } from "../utils/helper";

import { InputNumber, Modal } from "antd";
import { adjust, remove } from "../actions/cart";

// modal
const { confirm } = Modal;

const CartList = ({ list, adjust, remove }) => {
  const [total, updateTotal] = useState(0);
  const confirmDelete = index => {
    confirm({
      title: "Do you want to delete these items?",
      content:
        "When clicked the OK button, this dialog will be closed after 1 second",
      onOk() {
        // delete index
        remove(index);
        sum(list);
      },
      onCancel() {}
    });
  };

  const updateAmount = (index, number) => {
    adjust(index, number);
    sum(list);
  };

  const sum = list => {
    let total = 0;
    list.forEach(item => (total += item.price * item.number));
    updateTotal(total);
  };

  if (total === 0 && list.length !== 0) {
    sum(list);
  }

  return (
    <div class="ant-table-wrapper container cart-table">
      <div class="ant-spin-nested-loading">
        <div class="ant-spin-container">
          <div class="ant-table ant-table-default ant-table-scroll-position-left">
            <div class="ant-table-content">
              <div class="ant-table-body">
                <table class="">
                  <thead class="ant-table-thead">
                    <tr>
                      <th class="">
                        <span class="ant-table-header-column">
                          <div>
                            <span class="ant-table-column-title">#</span>
                            <span class="ant-table-column-sorter"></span>
                          </div>
                        </span>
                      </th>
                      <th class="">
                        <span class="ant-table-header-column">
                          <div>
                            <span class="ant-table-column-title">
                              Tên sản phẩm
                            </span>
                            <span class="ant-table-column-sorter"></span>
                          </div>
                        </span>
                      </th>
                      <th class="">
                        <span class="ant-table-header-column">
                          <div>
                            <span class="ant-table-column-title">Đơn giá</span>
                            <span class="ant-table-column-sorter"></span>
                          </div>
                        </span>
                      </th>
                      <th class="">
                        <span class="ant-table-header-column">
                          <div>
                            <span class="ant-table-column-title">Số lượng</span>
                            <span class="ant-table-column-sorter"></span>
                          </div>
                        </span>
                      </th>
                      <th class="">
                        <span class="ant-table-header-column">
                          <div>
                            <span class="ant-table-column-title">
                              Tổng cộng
                            </span>
                            <span class="ant-table-column-sorter"></span>
                          </div>
                        </span>
                      </th>
                      <th class="">
                        <span class="ant-table-header-column">
                          <div>
                            <span class="ant-table-column-title">Xử lí</span>
                            <span class="ant-table-column-sorter"></span>
                          </div>
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="ant-table-tbody">
                    {list.map((value, index) => (
                      <tr
                        class="ant-table-row ant-table-row-level-0"
                        data-row-key={index}
                      >
                        <td class="">{index}</td>
                        <td class="">{value.name}</td>
                        <td class="">{numberWithCommas(value.price)}₫</td>
                        <td class="">
                          <InputNumber
                            min={1}
                            max={10}
                            defaultValue={value.number}
                            onChange={number => updateAmount(index, number)}
                          />
                        </td>
                        <td class="">
                          {numberWithCommas(value.number * value.price)}₫
                        </td>
                        <td class="">
                          <button
                            type="button"
                            class="ant-btn delete ant-btn-danger"
                            onClick={index => confirmDelete()}
                          >
                            <span>Xóa</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                    <tr
                      class="ant-table-row ant-table-row-level-0"
                      data-row-key="sum"
                    >
                      <td class=""></td>
                      <td class=""></td>
                      <td class=""></td>
                      <td class="">Total</td>
                      <td class="">{numberWithCommas(total)}₫</td>
                      <td class=""></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  state => ({
    list: state.cart.list
  }),
  { adjust, remove }
)(CartList);
