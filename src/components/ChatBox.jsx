// import React from 'react'

// const ChatBox = ({ showChatbox, closeBox , friend , message }) => {
//   return (
//     <div class="chatbox" style={{ right: showChatbox ? "0" : "-500px" }}>
//     <span class="comm-msg-pop-clo">
//       <i class="fa fa-times" aria-hidden="true" onClick={closeBox}></i>
//     </span>

//     <div class="inn">
//       <form name="new_chat_form" method="post">
//         <div class="s1">
//           <img src="images/user/2.jpg" class="intephoto2" alt="" />
//           <h4>
//             <b class="intename2">{friend?.name}</b>,
//           </h4>
//           <span class="avlsta avilyes text-white">Available online</span>
//         </div>
//         <div class="s2 chat-box-messages">
//           <span class="chat-wel">Start a new chat!!! now</span>
//           <div class="chat-con">
//             {/* <div class="chat-lhs">Hi</div>
//             <div class="chat-rhs">Hi</div> */}
//           </div>
//           <span>Start A New Chat!!! Now</span>
//         </div>
//         <div class="s3">
//           <input
//             type="text"
//             name="chat_message"
//             placeholder="Type a message here.."
//             required=""
//           />
//           <button id="chat_send1" name="chat_send" type="submit">
//             Send <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
//   )
// }

// export default ChatBox