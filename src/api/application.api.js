import axios from 'axios';

export const sendApplication = async (values) => {
  const { data } = axios.post('https://fastoomerchant.com/add.php', values);

  console.log(data);
};

export const getApplications = async () => {
  // const { data } = axios.get('https://fastoomerchant.com/get.php?ID=314393565');
  const data = {
    ID: '314393565',
    add_time: '2023-08-01 10:14:45',
    save_data:
      '{\r\n    "application_date": "2023-09-01",\r\n    "merchant": {\r\n        "type": "test",\r\n        "name": "test",\r\n        "url": "test",\r\n        "address": "test",\r\n        "state": "test",\r\n        "country": "test",\r\n        "postcode": "test",\r\n        "nature_of_core_business": "test",\r\n        "documents": "test",\r\n        "contact_person_name": "test",\r\n        "contact_person_phone": "test",\r\n        "contact_person_email": "test",\r\n        "it_person_name": "test",\r\n        "it_person_phone": "test",\r\n        "it_person_email": "test",\r\n        "support_person_name": "test",\r\n        "support_person_phone": "test",\r\n        "support_person_email": "test",\r\n        "scanned_urls": "test"\r\n    },\r\n    "owneship": {\r\n        "type": "test",\r\n        "owner_name": "test",\r\n        "id_card": "test",\r\n        "structure": "test",\r\n        "address": "test",\r\n        "counry": "test",\r\n        "post_code": "test",\r\n        "phone": "test",\r\n        "email": "test"\r\n    },\r\n    "limits": {\r\n        "terminal_currency": "test",\r\n        "terminal_timezone": "test",\r\n        "trans_avg": "test",\r\n        "estimated_month_value": "test",\r\n        "avg_ticket_size": "test",\r\n        "max_ticket_size": "test",\r\n        "max_tps": "test",\r\n        "avg_tps": "test",\r\n        "refund_amount": "test"\r\n    },\r\n    "activity_range": "test",\r\n    "type_of_integration": {\r\n        "isSecureStructure": false,\r\n        "payment_page": "Bank Payment Page"\r\n    },\r\n    "additional_features": {\r\n        "hasAuthMessage": false,\r\n        "dynamicDescription": false,\r\n        "refund": false,\r\n        "merchant_portal_access": false,\r\n        "application_status_receiver": "email"\r\n    },\r\n    "merchants": [\r\n        {\r\n            "merchant_web_link": "test",\r\n            "legal_name": "test",\r\n            "cin": "test",\r\n            "mcc": "test",\r\n            "expected_transations_amount": "test",\r\n            "expected_transations_count": "test"\r\n        }\r\n    ]\r\n}',
  };

  return {
    ...data,
    save_data: JSON.parse(data.save_data),
  };
};
