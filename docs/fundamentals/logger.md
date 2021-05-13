---
title: Logger
---

The ClearML **Logger** object is used to report experiments' results such as metrics, graphs, and debug samples. It is a 
member of the [Task](task.md) object. 

ClearML integrates with the leading visualization libraries, and automatically captures reports to them. 

## Types of Logged Results
In ClearML, there are four types of reports:
- Text - Mostly captured automatically from stdout and stderr but can be logged manually.
- Scalars - Time series data. X-axis is always a sequential number, usually iterations but can be epochs or others.
- Plots - General graphs and diagrams, such as histograms, confusion matrices line plots, and custom plotly charts.
- Debug Samples - Images, audio, and videos. Can be reported per iteration.

![image](../img/fundamentals_logger_results.png)

## Automatic Reporting

ClearML automatically captures metrics reported to tools, such as Tensorboard and Matplotlib, with no additional code
necessary.

In addition, ClearML will capture and log everything written to standard output, from debug messages to errors to 
library warning messages.

GPU, CPU, Memory and Network information is also automatically captured.

![image](../img/fundamentals_logger_cpu_monitoring.png)

### Supported packages
- [Tensorboard](https://www.tensorflow.org/tensorboard)
- [TensorboardX](https://github.com/lanpa/tensorboardX)
- [matplotlib](https://matplotlib.org/)


## Manual Reporting

ClearML also supports manually reporting multiple types of metrics and plots, such as line plots, histograms, and even plotly 
charts.


The object used for reporting metrics is called **logger** and is obtained by calling

```python
logger = task.get_logger()
```

Check out all the available object types that can be reported in the example [here](../guides/reporting/scalar_reporting.md).

#### Media reporting

ClearML also supports reporting media (such as audio, video and images) for every iteration.
This section is mostly used for debugging. It's recommended to use [artifacts](artifacts.md#artifacts) for storing script 
outputs that would be used later on.

Only the last X results of each title \ series are saved to prevent overloading the server.
See details in [Logger.report_media](../references/sdk/logger.md#report_media). 

![image](../img/fundamentals_logger_reported_images.png)

Check out the Media Reporting [example](../guides/reporting/media_reporting).