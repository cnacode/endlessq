"use strict";(self.webpackChunkendlessq=self.webpackChunkendlessq||[]).push([[6801],{2608:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var i=t(4848),s=t(8453);function o(e){const n={mermaid:"mermaid",...(0,s.R)(),...e.components};return(0,i.jsx)(n.mermaid,{value:"%%{\n  init: {\n    'theme': 'forest',\n    'logLevel': 'debug',\n    'themeVariables': {\n\n    }\n  }\n}%%\n\n\n\nclassDiagram\n    class ViTModel {\n        +ViTEmbeddings embeddings\n        +ViTEncoder encoder\n        +ViTPooler pooler\n        +forward(pixel_values, bool_masked_pos, head_mask, output_attentions, output_hidden_states, interpolate_pos_encoding, return_dict)\n    }\n    class ViTForMaskedImageModeling {\n        +ViTModel vit\n        +nn.Sequential decoder\n        +forward(pixel_values, bool_masked_pos, head_mask, output_attentions, output_hidden_states, interpolate_pos_encoding, return_dict)\n    }\n    class ViTForImageClassification {\n        +ViTModel vit\n        +nn.Linear classifier\n        +forward(pixel_values, head_mask, labels, output_attentions, output_hidden_states, interpolate_pos_encoding, return_dict)\n    }\n    class ViTEncoder {\n        +forward(hidden_states, head_mask, output_attentions, output_hidden_states, return_dict)\n    }\n    class ViTLayer {\n        +ViTAttention attention\n        +ViTIntermediate intermediate\n        +ViTOutput output\n        +forward(hidden_states, head_mask, output_attentions)\n    }\n    class ViTAttention {\n        +ViTSelfAttention attention\n        +ViTSelfOutput output\n        +forward(hidden_states, head_mask, output_attentions)\n    }\n    class ViTSelfAttention {\n        +forward(hidden_states, head_mask, output_attentions)\n    }\n    class ViTSelfOutput {\n        +forward(hidden_states, input_tensor)\n    }\n    class ViTIntermediate {\n        +forward(hidden_states)\n    }\n    class ViTOutput {\n        +forward(hidden_states, input_tensor)\n    }\n    class ViTEmbeddings {\n        +forward(pixel_values, bool_masked_pos, interpolate_pos_encoding)\n    }\n\n    ViTModel --\x3e ViTEmbeddings : contains\n    ViTModel --\x3e ViTEncoder : contains\n    ViTModel --\x3e ViTPooler : contains\n    ViTForMaskedImageModeling --\x3e ViTModel : contains\n    ViTForImageClassification --\x3e ViTModel : contains\n    ViTEncoder --\x3e ViTLayer : contains multiple\n    ViTLayer --\x3e ViTAttention : contains\n    ViTLayer --\x3e ViTIntermediate : contains\n    ViTLayer --\x3e ViTOutput : contains\n    ViTAttention --\x3e ViTSelfAttention : contains\n    ViTAttention --\x3e ViTSelfOutput : contains"})}function r(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}function a(e){const n={h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"model-structure",children:"Model Structure"}),"\n",(0,i.jsx)(n.p,{children:"The Vision Transformer (ViT) model is an adaptation of the transformer architecture, originally designed for natural language processing, to computer vision."}),"\n",(0,i.jsx)(n.p,{children:"In this section we'll go over the underlying structure of ViT and how it is tailored for matrix inputs."}),"\n",(0,i.jsx)(n.p,{children:"Transformers revolutionized the way sequential data is processed. Central to the transformer\u2019s design is the self-attention mechanism, which allows the model to weigh the importance of different parts of the input sequence, whether they be words in a sentence or, as we\u2019ll see with ViT, matrixes of pixels."}),"\n",(0,i.jsx)(n.p,{children:"Adapting the transformer for image processing involves a conceptual leap in that it is treating an image not as a 2D array of pixels but as a sequence of flattened 2D patches."}),"\n",(0,i.jsx)(n.p,{children:"These patches are analogous to words in a sentence. Each patch is linearly embedded (similar to word embeddings in NLP) and processed through the transformer network. This approach enables the model to consider the entire image context, breaking free from the local receptive fields of traditional CNNs."}),"\n",(0,i.jsx)(n.h2,{id:"understanding-the-structure-the-vit-model",children:"Understanding the Structure the ViT Model"}),"\n",(0,i.jsx)(r,{}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Input and Patch Embeddings: The first stage in ViT involves dividing the input image into fixed-size patches. These patches are then flattened and linearly transformed into embeddings, each serving as a token to be processed by the transformer. Additionally, a special classification token (CLS) is prepended to this sequence for tasks like image classification."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Positional Embeddings: Given transformers don\u2019t inherently capture the order of input, positional embeddings are added to patch embeddings to provide spatial information. These embeddings are learned parameters and allow the model to understand the relative position of patches in the image."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Transformer Encoder: The core of ViT, the transformer encoder, consists of multiple layers, each comprising two sub-layers: a multi-head self-attention mechanism and a simple, position-wise fully connected feed-forward network. Normalization and residual connections are employed around each of these sub-layers."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Multi-Head Self-Attention: This mechanism allows the model to focus on different parts of the image, considering both local and global context simultaneously."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Feed-Forward Networks: These networks process the output from the attention mechanism. Each consists of two linear transformations with a non-linear activation in between."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Output for Downstream Tasks: For classification tasks, the representation corresponding to the CLS token is passed through a final linear layer to produce logits for classification."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"why-this-structure",children:"Why This Structure?"}),"\n",(0,i.jsx)(n.p,{children:"By treating images as sequences, it can capture long-range dependencies across the entire image, something conventional CNNs struggle with."}),"\n",(0,i.jsx)(n.p,{children:"The self-attention mechanism dynamically adapts to focus on relevant parts of the image, enhancing its capability for various tasks like image classification or object detection."}),"\n",(0,i.jsx)(n.p,{children:"Furthermore, ViT can be pre-trained on large datasets and fine-tuned for specific tasks, a practice that has led to remarkable improvements in performance."})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}const l={id:"model-structure",title:"Model Structure",hide_table_of_contents:!0,hide_title:!0},c=void 0,u={id:"vision-transformer/model-structure",title:"Model Structure",description:"",source:"@site/docs/vision-transformer/1-model-structure.mdx",sourceDirName:"vision-transformer",slug:"/vision-transformer/model-structure",permalink:"/endlessq/docs/vision-transformer/model-structure",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"model-structure",title:"Model Structure",hide_table_of_contents:!0,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Vision Transformers (ViT)",permalink:"/endlessq/docs/vision-transformer/"},next:{title:"The Main Class",permalink:"/endlessq/docs/vision-transformer/vit-model"}},h={},m=[...[{value:"Understanding the Structure the ViT Model",id:"understanding-the-structure-the-vit-model",level:2},{value:"Why This Structure?",id:"why-this-structure",level:2}]];function p(e){return(0,i.jsx)("div",{className:"one-column",children:(0,i.jsx)("div",{children:(0,i.jsx)(d,{})})})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p()}}}]);