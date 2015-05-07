# Dat Beta Use Cases

## Basics

- Host a dat
- Add tabular data to a dataset
- Clone entire history (rows and files)
- Clone specific version

## Collaboration
*the action of working with someone(s) to produce or create something.*

- Clone specific dataset
- Clone specific dataset at a specific version
- Clone and later checkout
- Push a dataset
- Pull a version of a dataset
- Diff two versions of a dataset
- Merge two versions of a dataset to create one version

## Cooperation
*the process of working together to the same end. assistance.*

- Filesystem-like interface
- Download full dat from remote
- Download full dat at a particular version
- Download dataset from remote
- Download a file in a dataset at specific version

## Coordination
*the organization of the different elements of a complex body or activity so as to enable them to work together effectively.*

- Expose live data source to people so they can 'dat clone'
- Add without copying (link)
- Fork: Clone (perhaps at a specific version), edit, and host
- Pipeline integration hooks

# Beta Features

- It's a graph
  - Supports merging
  - Supports branches

- It's a log
  - Supports checkout
  - Supports pull

- It's streaming
  - Supports stream processing jobs
  - Individual large files can be streamed
  - Replication modules
  - Stream data source wrappers (this should be a standalone effort)

- Data is not stored in the graph, only referenced
  - Supports shallow or partial clone