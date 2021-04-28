// 将下列格式转换为另一种格式
// {
//     HappyPack:1,
//     UserName:1,
//     CompleteData:{
//         PhoneNumber:132
//     },
// }
//          =>


// {
//     happy_pack:1,
//         user_name:1,
//     complete_data:{
//         phone_number:132
//     },
// }
// function transform(obj) {
//     let str = '';
//     for (const key in obj) {
//         if (typeof obj[key] != 'object') {
//             str = key;
//         } else {
//             str = key;
//             transform(obj[key]);
//         }
//     }
//     return str;
// }
// function change(obj) {
//     var result = str.replace(/[A-Z]/g, function (match) {
//         return "_" + match.toLowerCase();
//     })
//     if (result.splice(0, 1) === '_') {
//         result = result.splice(1);
//     }
//     return result;

// }

// console.log(change(obj));


// var obj = {
//     HappyPack: 1,
//     UserName: 1,
//     CompleteData: {
//         PhoneNumber: 132
//     },
// }
// transform(obj);

