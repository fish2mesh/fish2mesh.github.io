// constants.js
export const ABSTRACT = `Egocentric vision perception of first-person videos captured
            by a wearable cameras has gained popularity in social
            robotics and XR applications, as the methodology affords opportunity to infer user actions within the user’s naturalistic
            environment and perspective. Reconstructing a human user’s
            body motion and actions from first-person camera videos
            presents significant challenges due to self-occlusions of body
            parts seamlessly moving in and out of the frame. While extensive research leveraging pose estimation techniques have
            overcome many of these constraints, similar advances using
            3D mesh recovery of first-person camera video have not been
            met. In this paper, we propose an fish-eye aware transformerbased model, called Fish2Mesh [F2M] Transformer using
            multi-task heads for SMPL parametric-regression and camera transformations, specifically designed for egobody human mesh reconstruction. We utilize the pre-trained model,
            4D-Human to create a training dataset by setting up 3rd person cameras for weak supervisions, to compensate for the
            lack of egocentric camera data. The experiments demonstrate
            our model’s superior 3D human mesh reconstruction performance, surpassing the previous state-of-the-art models on robustness and reliability. We will publish our codes and dataset
            on the public links.`;

export const OVERVIEW = "Overview of the project";

export const OVERVIEW_DETAIL = `The Fish2Mesh model is a transformer-based architecture tailored for 3D human mesh
 reconstruction from egocentric fisheye images. As shown in the diagram, the model first partitions the input fisheye 
 image into patches and applies linear embedding to prepare the data. The Egocentric Position Embedding then adjusts 
 the spatial representation of these patches, mitigating fisheye distortion effects. These embedded patches are passed 
 through several Swin Transformer Blocks in a hierarchical structure, where the attention mechanism captures both local 
 and long-range dependencies in the image. After feature extraction, the processed data feeds into three specialized 
 heads: the SMPL Head for generating shape and pose parameters (Θs for shape and Θp for pose), the Global Head for orientation 
 coordinates, and the Camera Head for camera translation. Together, these outputs enable the model to reconstruct accurate 3D and 2D joints,
supporting high-fidelity human mesh recovery from challenging first-person perspectives. This architecture, leveraging both spatial embedding
 and multi-task heads, is designed to provide robust performance in egocentric vision applications.`;

export const RESULTS_DETAIL = `The visual results of all models across four examples from the datasets are shown. FishVIT is a pose estimation model, 
and to make the results visually clear, joints are shifted. The red color represents the ground truth, while the blue color indicates the predictions 
by the different models. The third-person view images are not used as input for the models; they are provided to help in better understanding the environment 
and human poses for comparison. Notably, Fish2Mesh demonstrates superior accuracy in estimating lower body poses, especially in complex situations such as sitting 
or squatting. This model continues to outperform state-of-the-art methods in cases of occlusion and distortion, effectively capturing realistic human body meshes 
from challenging egocentric perspectives.`;