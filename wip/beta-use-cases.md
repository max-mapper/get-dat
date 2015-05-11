# Dat Beta Use Cases

## Basics

- Host a dat
```
dat host
```
- Add tabular data to a dataset
```
dat add ahi_pop.csv -d ahi-population
```
- Clone entire history (rows and files)
```
dat clone ssh/http/dat://path/to/dat/here
```
- Clone specific version
```
dat clone ssh/http/dat://path/to/dat/here#ab34d32
```

## Collaboration
*the action of working with someone(s) to produce or create something.*

- Clone specific dataset
```
dat clone ssh/http/dat://path/to/dat/here/<dataset-name>
```
- Clone specific dataset at a specific version
```
dat clone ssh/http/dat://path/to/dat/here/<dataset-name>#ab34d32
```
- Clone and later checkout
```
dat clone ssh/http/dat://path/to/dat/here/<dataset-name>#ab34d32
dat checkout b2b3413
```
- Push a dataset
```
dat push
dat push ssh/http/dat://path/to/another/dat/here
```
- Pull a version of a dataset (*uses dat.json if no remote supplied*)
```
dat pull
dat pull ssh/http/dat://path/to/dat/here
```

- Diff two versions of a dataset
```
dat pull ssh://path/to/dat/here/<dataset-name>
dat diff
```

- Merge two versions of a dataset to create one version
```
dat merge <version1> <version2>
```

## Cooperation
*the process of working together to the same end. assistance.*

- Filesystem-like interface
- Download full dat from remote
```
curl http://path/to/another/dat/here.tar > my-data.tar
```
- Download full dat at a particular version
```
curl http://path/to/another/dat/here.tar#ab34d32 > my-data.tar
```
- Download dataset from remote
```
curl http://path/to/another/dat/here/<dataset-name>.csv#ab34d32 > my-data.csv
curl http://path/to/another/dat/here/<dataset-name>.tar#ab34d32 > my-data.tar
```
- Download a file in a dataset at specific version
```
curl http://path/to/another/dat/here/<dataset-name>/<file-name>.tar#ab34d32 > my-data.tar
```

## Coordination
*the organization of the different elements of a complex body or activity so as to enable them to work together effectively.*

- Add without copying (link)
```
dat add --link test.csv
```
- Expose live data source to people so they can 'dat clone'
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