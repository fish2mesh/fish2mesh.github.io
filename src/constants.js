// constants.js
export const ABSTRACT = `Egocentric human body estimation allows for the inference of user body pose and shape from the first-person 
                        perspective of a wearable camera. While research has leveraged pose estimation techniques to
                        overcome self-occlusions and image distortions caused by head-mounted fisheye images, similar
                        advancements in 3D human mesh recovery (HMR) techniques have been limited. We introduce Fish2Mesh,
                        a fisheye-aware transformer-based model designed for 3D egocentric human mesh recovery.
                        We propose an egocentric position embedding block to generate an ego-specific position table for the Swin Transformer
                        to reduce fisheye image distortion. Our model utilizes multi-task heads for SMPL (Skinned Multi-Person Linear) parametric regression
                        and camera translations estimating 3D and 2D joints as auxiliary loss to support model training.
                        To address the scarcity of egocentric camera data, we employ the pre-trained 4D-Human model to create a training
                        dataset using third-person cameras for weak supervision. Our experiments demonstrate that Fish2Mesh outperforms 
                        previous state-of-the-art models in terms of robustness and reliability of 3D HMR.`;

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


export const INTRO1 = `Egocentric human body estimation is an emerging sub-field of computer vision that focuses on estimating the human body’s pose and shape from the first-person perspective of a wearable camera, typically mounted on the head or chest. Egocentric estimation leverages the unique viewpoint of the camera worn by the user to capture visual data that closely mimics the wearer’s visual field and line of sight, affording rich applications in assistive robotics to augmented reality and virtual reality.`;
export const INTRO2 = `Given its benefits over outwards-facing egocentric images, the current work specifically leverages downwards-facing egocentric images from head-mounted cameras to pursue human body estimation, which maps the positions of key body joints to accurately model the human body’s structure and dynamic movements.`;
export const INTRO3 = `Broadly, human body estimation can be split into two fundamental categories: pose estimation and mesh recovery/reconstruction. Pose estimation centers on identifying and predicting the positions of key points or joints on the human body, such as the elbows, knees, and shoulders. These key points are then used to build 2D or 3D skeletal representations of the body, serving as a foundation for downstream tasks such as motion tracking, action recognition, and human-machine interfaces.`;
export const INTRO4 = `Constrained by the scarcity of large, diverse training datasets, human body estimation research in egocentric vision has largely focused on egocentric pose estimation. These dataset limitations are also compounded by the nature of egocentric images, which fundamentally involve self-occlusions and image distortions.`;
export const INTRO5 = `Human mesh recovery, also known as mesh reconstruction, goes beyond 2D pose estimation by constructing a detailed 3D model of the human body. Human mesh recovery involves creating a mesh that represents the surface geometry of the body, capturing both the positions of joints as well as the shape, contour, and volume of body parts. The combination of shape and volume is critical for applications that require high fidelity, rotation information, and detailed volumetric representation.`;
export const INTRO6 = `In our current work, we use human mesh recovery to pursue a human body estimation task that enhances spatial precision by mapping egocentric image data onto humanoid 3D models. In addition to meeting the precision demands of realistic simulations, human mesh recovery is better suited to address the inconsistencies arising from varying keypoint standards across pose estimation datasets. For instance, datasets like COCO 2017 (32 keypoints) and Human3.6M (17 keypoints) use different sets of key points to define human poses.`;
export const INTRO7 = `Furthermore, head-mounted cameras predominantly employ fisheye lenses to maximize field of view, an essential requirement given their proximity to the body. However, these lenses introduce significant spherical distortions that fundamentally challenge traditional mesh recovery approaches, particularly in accurate depth estimation. While existing methods attempt to correct these distortions through various projection techniques—often at the cost of spatial accuracy.`;
export const INTRO8 = `We propose a fundamentally different approach in Fish2Mesh, a transformer-based architecture that advances the handling of fisheye distortions in egocentric vision through principled geometric understanding. Rather than treating these distortions as aberrations to be corrected, our architecture implements a parameterized Egocentric Position Embedding that directly encodes equirectangular geometric properties into the feature space.`;
export const INTRO9 = `Additionally, our framework leverages a multi-headed architecture that jointly optimizes SMPL parameters and camera transformations. By implementing auxiliary 3D-2D consistency objectives alongside parameter regression, we create a geometric framework that maintains spatial coherence across dimensions, which is a critical consideration for egocentric perspectives.`;
export const INTRO10 = `To address the limitations of existing datasets, we enhance the egocentric data landscape through a prompt-based collection system that captures natural human motion. Moving beyond scripted actions, our approach generates a diverse range of movements that include realistic head motions and self-occlusions characteristic of daily activities. This improved data foundation, combined with our geometric-aware architecture, enables robust performance in challenging real-world scenarios.`;
// export const INTRO11 = `In this paper, we propose the following novel contributions in the pursuit of egocentric human mesh recovery:

// Fish2Mesh: A fisheye-aware transformer-based architecture that takes egocentric fisheye image inputs and reconstructs 3D human meshes over more conventional joint estimations.
// Egocentric Position Embedding: A novel equirectangular projection method with learned position embedding to estimate the 3D spherical coordinates of each fisheye image pixel to address image distortion.
// ECHP Dataset Augmentation: We use a prompt-based data collection method that captures naturalistic and real-world human movements with real-world occlusions, significantly improving model performance in practical applications.`;


export const INTRO11 = {
    introText: "In this paper, we propose the following novel contributions in the pursuit of egocentric human mesh recovery:",
    points: [
      {
        title: "Fish2Mesh",
        description:
          "A fisheye-aware transformer-based architecture that takes egocentric fisheye image inputs and reconstructs 3D human meshes over more conventional joint estimations.",
      },
      {
        title: "Egocentric Position Embedding",
        description:
          "A novel equirectangular projection method with learned position embedding to estimate the 3D spherical coordinates of each fisheye image pixel to address image distortion.",
      },
      {
        title: "ECHP Dataset Augmentation",
        description:
          "We use a prompt-based data collection method that captures naturalistic and real-world human movements with real-world occlusions, significantly improving model performance in practical applications.",
      },
    ],
  };
  