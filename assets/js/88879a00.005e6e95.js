"use strict";(self.webpackChunkendlessq=self.webpackChunkendlessq||[]).push([[9746],{1538:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=t(4848),r=t(8453);const s={},o="ViTIntermediate and ViTOutput",d={id:"vision-transformer/sub-modules/sub-modules-output",title:"ViTIntermediate and ViTOutput",description:"ViTIntermediate and ViTOutput together form the feed-forward part of the Transformer's encoder block in the Vision Transformer model, with ViTIntermediate serving as the expansion layer and ViTOutput applying a projection back to the original dimension and making a residual connection.",source:"@site/docs/vision-transformer/sub-modules/sub-modules-output.md",sourceDirName:"vision-transformer/sub-modules",slug:"/vision-transformer/sub-modules/sub-modules-output",permalink:"/endlessq/docs/vision-transformer/sub-modules/sub-modules-output",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ViTEncoder and ViTLayer",permalink:"/endlessq/docs/vision-transformer/sub-modules/sub-modules-encoder"},next:{title:"Weight Initialization and Model Utilities",permalink:"/endlessq/docs/vision-transformer/utils"}},a={},c=[{value:"Constructor",id:"constructor",level:2},{value:"Dense Layer Definition",id:"dense-layer-definition",level:2},{value:"Activation Function",id:"activation-function",level:2},{value:"Forward Method",id:"forward-method",level:2},{value:"Constructor",id:"constructor-1",level:2},{value:"Dense Layer for Output",id:"dense-layer-for-output",level:2},{value:"Dropout Layer",id:"dropout-layer",level:2},{value:"Forward Method",id:"forward-method-1",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"vitintermediate-and-vitoutput",children:"ViTIntermediate and ViTOutput"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ViTIntermediate"})," and ",(0,i.jsx)(n.code,{children:"ViTOutput"})," together form the feed-forward part of the Transformer's encoder block in the Vision Transformer model, with ",(0,i.jsx)(n.code,{children:"ViTIntermediate"})," serving as the expansion layer and ",(0,i.jsx)(n.code,{children:"ViTOutput"})," applying a projection back to the original dimension and making a residual connection."]}),"\n",(0,i.jsxs)(n.h1,{id:"the-vitintermediate-class",children:["The ",(0,i.jsx)(n.code,{children:"ViTIntermediate"})," Class"]}),"\n",(0,i.jsx)(n.h2,{id:"constructor",children:"Constructor"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def __init__(self, config: ViTConfig) -> None:\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The constructor of ",(0,i.jsx)(n.code,{children:"ViTIntermediate"})," takes a ",(0,i.jsx)(n.code,{children:"ViTConfig"})," object, containing configuration parameters such as size and activation function."]}),"\n",(0,i.jsx)(n.h2,{id:"dense-layer-definition",children:"Dense Layer Definition"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"self.dense = nn.Linear(config.hidden_size, config.intermediate_size)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This line creates a linear layer (",(0,i.jsx)(n.code,{children:"nn.Linear"}),") that projects the input tensor from ",(0,i.jsx)(n.code,{children:"hidden_size"})," to ",(0,i.jsx)(n.code,{children:"intermediate_size"}),". This is the first part of the feed-forward neural network."]}),"\n",(0,i.jsx)(n.h2,{id:"activation-function",children:"Activation Function"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"if isinstance(config.hidden_act, str):\n    self.intermediate_act_fn = ACT2FN[config.hidden_act]\nelse:\n    self.intermediate_act_fn = config.hidden_act\n"})}),"\n",(0,i.jsxs)(n.p,{children:["These lines set the activation function for the intermediate layer. If ",(0,i.jsx)(n.code,{children:"hidden_act"})," in the configuration is a string, it retrieves the corresponding function from ",(0,i.jsx)(n.code,{children:"ACT2FN"})," (a dictionary mapping activation function names to their implementations). If not a string, it assumes ",(0,i.jsx)(n.code,{children:"hidden_act"})," is a callable activation function."]}),"\n",(0,i.jsx)(n.h2,{id:"forward-method",children:"Forward Method"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def forward(self, hidden_states: torch.Tensor) -> torch.Tensor:\n    hidden_states = self.dense(hidden_states)\n    hidden_states = self.intermediate_act_fn(hidden_states)\n    return hidden_states\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"forward"})," method, the input tensor ",(0,i.jsx)(n.code,{children:"hidden_states"})," is first passed through the dense layer and then through the activation function. The result is the output of the intermediate layer."]}),"\n",(0,i.jsxs)(n.h1,{id:"vitoutput-class-exploration",children:[(0,i.jsx)(n.code,{children:"ViTOutput"})," Class Exploration"]}),"\n",(0,i.jsx)(n.h2,{id:"constructor-1",children:"Constructor"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def __init__(self, config: ViTConfig) -> None:\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Similar to most classes in this quest, the constructor receives a ",(0,i.jsx)(n.code,{children:"ViTConfig"})," object."]}),"\n",(0,i.jsx)(n.h2,{id:"dense-layer-for-output",children:"Dense Layer for Output"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"self.dense = nn.Linear(config.intermediate_size, config.hidden_size)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["A linear layer that projects the output of the intermediate layer back to the ",(0,i.jsx)(n.code,{children:"hidden_size"}),". This forms the second part of the feed-forward neural network."]}),"\n",(0,i.jsx)(n.h2,{id:"dropout-layer",children:"Dropout Layer"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"self.dropout = nn.Dropout(config.hidden_dropout_prob)\n"})}),"\n",(0,i.jsx)(n.p,{children:"A dropout layer is added for regularization, using the dropout probability specified in the configuration."}),"\n",(0,i.jsx)(n.h2,{id:"forward-method-1",children:"Forward Method"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def forward(self, hidden_states: torch.Tensor, input_tensor: torch.Tensor) -> torch.Tensor:\n    hidden_states = self.dense(hidden_states)\n    hidden_states = self.dropout(hidden_states)\n    hidden_states = hidden_states + input_tensor\n    return hidden_states\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"forward"})," method processes ",(0,i.jsx)(n.code,{children:"hidden_states"})," (output from the intermediate layer) through the dense layer and then applies dropout.\nIt then adds the result to ",(0,i.jsx)(n.code,{children:"input_tensor"}),", which is the output of the self-attention layer in the Transformer block. This addition forms the residual connection, a key feature of Transformers.\nThe resulting tensor is returned as the output of the ViTOutput layer."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);