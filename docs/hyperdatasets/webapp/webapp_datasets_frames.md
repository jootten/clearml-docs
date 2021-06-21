---
title: Working with Frames
---

View and edit SingleFrames in the Dataset page. After selecting a Dataset version, the **Version Browser** shows a sample
of frames and enables viewing SingleFrames and FramesGroups, and edit SingleFrames, in the [frame viewer](#frame-viewer).
Before opening the frame viewer, you can filter the frames by applying [simple](#simple-frame-filtering) or [advanced](#advanced-frame-filtering)
filtering logic.

![image](../../img/hyperdatasets/frames_01.png)

## Frame viewer

Frame viewer allows you to view and edit annotations which can be FrameGroup objects (Regions of Interest) and FrameGroup
labels applied to the entire frame not a region of the frame, the frame details (see [frames](../frames.md)),
frame metadata, the raw data source URI, as well as providing navigation and viewing tools.

![image](../../img/hyperdatasets/web-app/dataset_example_frame_editor.png)

### Frame viewer controls

Use frame viewer controls to navigate between frames in a Dataset Version, and control frame changes and viewing.

|Control Icon|Actions|
|-----|------|
|<img src="/docs/latest/static/icons/ico-skip-backward.svg" className="icon size-md space-sm" />|Jump backwards (CTRL + Left). Jumps backwards by five frames.|
|<img src="/docs/latest/static/icons/ico-skip-previous.svg" className="icon size-md space-sm" />|Go to the previous frame containing a non-filtered annotation. The filter is the minimum confidence level setting. If the confidence level filter is set to zero, any frame containing annotations matches the filter.|
|<img src="/docs/latest/static/icons/ico-arrow-left.svg" className="icon size-md space-sm" />|Go to the previous frame (Left Arrow).|
|<img src="/docs/latest/static/icons/ico-arrow-right.svg" className="icon size-md space-sm" />|Go to the next frame (Right Arrow).|
|<img src="/docs/latest/static/icons/ico-skip-next.svg" className="icon size-md space-sm" />|Go to the next frame containing a non-filtered annotation (same filter as <img src="/docs/latest/static/icons/ico-skip-previous.svg" className="icon size-md space-sm" />).|
|<img src="/docs/latest/static/icons/ico-skip-forward.svg" className="icon size-md space-sm" />|Jump forwards (CTRL + Right). Jumps 5 frames forwards.|
|<img src="/docs/latest/static/icons/ico-revert.svg" className="icon size-md space-sm" />|Reload the frame.|
|<img src="/docs/latest/static/icons/ico-undo.svg" className="icon size-md space-sm" />|Undo changes.|
|<img src="/docs/latest/static/icons/ico-redo.svg" className="icon size-md space-sm" />|Redo changes.|
|<img src="/docs/latest/static/icons/ico-reset_1.svg" className="icon size-md space-sm" />|Autofit|
|<img src="/docs/latest/static/icons/ico-zoom-in.svg" className="icon size-md space-sm" />|Zoom in|
|<img src="/docs/latest/static/icons/ico-zoom-out.svg" className="icon size-md space-sm" />|Zoom out|
|Percentage textbox|Zoom percentage|

### Viewing and editing frames

**To view / edit a frame in the frame editor**

1. Locate your frame by applying a [simple frame filter](#simple) or [advanced frame filter](#advanced), and clicking <span class="tr_gui">LOAD MORE</span>, if required.
1. Click the frame thumbnail. The frame editor appears.
1. Do any of the following:
    * View frame details, including:
        * Frame file path
        * Dimensions of the image or video
        * Frame details
        * Frame metadata
        * Annotations
            * Frame objects - Labeled Regions of Interest, with confidence levels and custom metadata per frame object.
            * Frame labels - Labels applied to the entire frame, not a region in the frame.
    * Optionally, filter annotations by confidence level using the <span class="tr_gui">Minimum confidence</span> slider.
    * Add, change, and delete [annotations](#annotations) and [frame metadata](#frame-metadata).

:::important
To save frames changes at any time, click **SAVE** (below the annotation list area).
:::


### Viewing FrameGroups

Viewing and editing frames in a FrameGroup is similar to viewing and editing SingleFrames.
Click the FrameGroup in the Dataset. In the frame viewer, select SingleFrame to view / modify from
a dropdown list in the **Current Source** section.

![image](../../img/hyperdatasets/framegroup_01.png)

## Filtering frames
### Simple frame filtering

Simple frame filtering applies one annotation object (ROI) label and returns frames containing at least one annotation
with that label.

**To apply a simple frame filter:**

* In the **Version Browser**, choose a label on the label list.

For example:
* Before filtering, the **Version Browser** in the image below contains seven frames.

<details className="cml-expansion-panel screenshot">
<summary className="cml-expansion-panel-summary">View a screenshot</summary>
<div className="cml-expansion-panel-content">


![image](../../img/hyperdatasets/frame_filtering_01.png)


</div>
</details>
<br/>

* A simple label filter for `person` shows three frames with each containing at least one ROI labeled `person`.

<details className="cml-expansion-panel screenshot">
<summary className="cml-expansion-panel-summary">View a screenshot</summary>
<div className="cml-expansion-panel-content">

![image](../../img/hyperdatasets/frame_filtering_02.png)

</div>
</details>

### Advanced frame filtering

Advanced frame filtering applies sophisticated filtering logic, which is composed of as many frame filters as needed,
where each frame filter can be a combination of ROI, frame, and source rules.
* ROI rules use include and exclude logic to match frames by ROI label; an ROI label can match frames containing at least
  one annotation object (ROI) with all labels in the rule.
* Frame rules and source rules use Lucene queries with AND, OR, and NOT logic. Frame rules apply to frame metadata.
* Source rules apply to frame source information.

**To apply advanced filters:**

1. In the **Version Browser**, click **Switch to advanced filters**.
1. In a **FRAME FILTER**, create one of the following rules:

    * ROI rule

        * Choose **Include** or **Exclude**, select ROI labels, and optionally set the confidence level range.

        * To switch from the ROI dropdown list to a Lucene query mode, click <img src="/docs/latest/static/icons/ico-edit.svg" className="icon size-md space-sm" />.

    * Frame rule - Enter a Lucene query using frame metadata fields in the format `meta.<key>:<value>`.

    * Source rule - Enter a Lucene query using frame metadata fields in the format `sources.<key>:<value>`.

### Examples

#### ROI rules


* Create one ROI rule for <code>person</code> shows the same three frames as the simple frame filter (above).
  <details className="cml-expansion-panel screenshot">
  <summary className="cml-expansion-panel-summary">View a screenshot</summary>
  <div className="cml-expansion-panel-content">

  ![image](../../img/hyperdatasets/frame_filtering_03.png)

  </div>
  </details>
  <br/>

* In the ROI rule, add a second label. Add `partially_occluded`. Only frames containing at least one ROI labeled as both <code>person</code> and <code>partially_occluded</code> match the filter.
<details className="cml-expansion-panel screenshot">
   <summary className="cml-expansion-panel-summary">View a screenshot</summary>
   <div className="cml-expansion-panel-content">

   ![image](../../img/hyperdatasets/frame_filtering_04.png)

   </div>
   </details>
   <br/>

   By opening a frame in the frame viewer, you can see an ROI labeled with both.

   <details className="cml-expansion-panel screenshot">
   <summary className="cml-expansion-panel-summary">View a screenshot</summary>
   <div className="cml-expansion-panel-content">

   ![image](../../img/hyperdatasets/frame_filtering_05.png)

   </div>
   </details>
   <br/>


#### Frame rules

Filter by metadata using Lucene queries.

* Add a frame rule to filter by the metadata key <code>dangerous</code> for the value of <code>no</code>.

    <details className="cml-expansion-panel screenshot">
    <summary className="cml-expansion-panel-summary">View a screenshot</summary>
    <div className="cml-expansion-panel-content">

    ![image](../../img/hyperdatasets/frame_filtering_08.png)

    </div>
    </details>
    <br/>

    By opening a frame in the frame viewer, you can see the metadata.

    <details className="cml-expansion-panel screenshot">
    <summary className="cml-expansion-panel-summary">View a screenshot</summary>
    <div className="cml-expansion-panel-content">

    ![image](../../img/hyperdatasets/frame_filtering_09.png)

    </div>
    </details>
    <br/>


#### Source rules

Filter by sources using Lucene queries.

* Add a source rule to filter for sources URIs with a wildcards.

    <details className="cml-expansion-panel screenshot">
    <summary className="cml-expansion-panel-summary">View a screenshot</summary>
    <div className="cml-expansion-panel-content">

    ![image](../../img/hyperdatasets/frame_filtering_10.png)

    </div>
    </details>
    <br/>

Use Lucene queries in ROI label filters and frame rules.

## Annotations

### Frame objects (Regions of Interest)

You can add annotations by drawing new bounding areas, and copying existing annotations in the same or other frames.

**To draw a bounding area for a new annotation:**

1. Optionally, select a default label in the Default ROI Label(s) list. New annotations are automatically assigned this label.

1. Click one of the following modes and create a bounding area in the frame:

    * <img src="/docs/latest/static/icons/ico-rectangle-icon-purple.svg" className="icon size-md space-sm" /> - Rectangle mode: Drag a
   rectangle onto the frame.

    * <img src="/docs/latest/static/icons/ico-ellipse-icon-purple.svg" className="icon size-md space-sm" /> - Ellipse mode: Drag an ellipse
   onto the frame.

    * <img src="/docs/latest/static/icons/ico-polygon-icon-purple.svg" className="icon size-md space-sm" /> - Polygon mode: Click the polygon
   vertices onto the frame.

    * <img src="/docs/latest/static/icons/ico-keypoint-icon-purple.svg" className="icon size-md space-sm" /> - Key points mode: Click each
   keypoint onto the frame. After the clicking the last keypoint, click the first again to close the bounding area.

    A new annotation is created.

1. In the newly created annotation, select or type a label.
1. Optionally, add metadata. This is metadata for the annotation, not the entire frame.
1. Optionally, lock the annotation.
1. If you move to another frame, the frame editor automatically saves changes. Otherwise, if you exit the frame editor,
   you are prompted to save.

**To copy an annotation:**

1. Click the annotation or bounded area in the image or video clip.
1. Optionally, navigate to a different frame.
1. Click **PASTE**. The new annotation appears in the same location as the one you copied.
1. Optionally, to paste the same annotation, click **PASTE** again in the desired frame.

**To copy all annotations:**

1. Click **COPY ALL**.
1. Optionally, navigate to a different frame.
1. Click **PASTE**.

### Frame labels

**To add frame labels:**

1. Expand the **FRAME LABELS** area.
1. Click **+ Add new**.
1. Enter a label.
1. Optionally, click <img src="/docs/latest/static/icons/ico-edit.svg" className="icon size-md space-sm" />.

### Annotation management

**To move annotations:**

* Move a bounded area by clicking on it and dragging.

**To resize annotations:**

* Resize a bounded area by clicking on a vertex and dragging.

**To modify annotation metadata:**

* In the label, click edit and then in the popup modify the metadata dictionary (in JSON format).

**To modify annotation colors:**

* Modify the color of an area by clicking the circle in the label name and select a new color.

**To lock annotations:**

* All annotations - Above the annotations, click the lock / unlock.
* A specific annotation - In an annotation, click the lock / unlock.

**To delete annotations:**

1. Click the annotation or bounded area in the image or video clip.
1. Press the **DELETE** key, or in the annotation, click **X**.

**To add, change, or delete labels to annotations labels:**

* Add - Click in the annotation and choose a label from the label list, or type a new label.
* Change - In the annotation label textbox, choose a label from the list or type a new label.
* Delete - In the annotation, in the label area, click the label's **X**.

## Frame metadata

**To edit frame metadata:**

* Expand the **FRAME METADATA** area, click edit, and then in the popup modify the metadata dictionary (in JSON format).