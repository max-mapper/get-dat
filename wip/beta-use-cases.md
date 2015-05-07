Dat Beta Use Cases

# Clone entire history (rows and files)
# Clone specific version
# Clone and later checkout
# Download + export file(s) from remote
# Download single file at specific version
# Download all files in dataset at specific version
# Download all files in all datasets at specific version
# Add without copying (link)
# Expose live data source to people so they can 'dat clone'

Beta Features

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