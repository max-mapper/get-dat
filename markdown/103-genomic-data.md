# Extra Credit: Import genomic data into Dat with the JavaScript API

We are going to download the flu virus genome from [NCBI](https://www.ncbi.nlm.nih.gov) with [Bionode](https://bionode.io) and import it into Dat!

Create a new folder named `infuenza`, enter that folder with your local terminal (`cd`) and install [bionode-ncbi](https://doc.bionode.io/#bionode-ncbi).

```bash
npm install bionode-ncbi
```

Create a `script.js` file with the following content:

```javascript
var Dat = require('dat')
var Bionode = require('bionode-ncbi')

Dat('.', function (err, dat) {
  if (err) throw err
  var download = Bionode.download('assembly', 'ViralMultiSegProj15622')
  download.on('data', console.log)
  download.on('end', function() {
    dat.importFiles()
    dat.joinNetwork()
    console.log('My Dat link is: dat://', dat.key.toString('hex'))
  })
})
```

Run it:

```bash
node script.js
```

Clone this Dat archive into another folder (change it to your Dat link):

```bash
❯ dat clone d3457d9e11c9548faa704a799e6553d1dfb672264cdd0374a62564213c3c3474 influenzaCopy
```

Check that you got a copy of the influenza genome from Dat:

```bash
❯ gunzip -c influenzaCopy/266481/GCF_000865085.1_ViralMultiSegProj15622_genomic.fna.gz | head -n 5
```

Should give you:

```bash
>NC_007373.1 Influenza A virus (A/New York/392/2004(H3N2)) segment 1, complete sequence
AGCAAAAGCAGGTCAATTATATTCAGTATGGAAAGAATAAAAGAACTACGGAACCTGATGTCGCAGTCTCGCACTCGCGA
GATACTGACAAAAACCACAGTGGACCATATGGCCATAATTAAGAAGTACACATCGGGGAGACAGGAAAAGAACCCGTCAC
TTAGGATGAAATGGATGATGGCAATGAAATACCCAATCACTGCTGACAAAAGGATAACAGAAATGGTTCCGGAGAGAAAT
GAACAAGGACAAACTCTATGGAGTAAAATGAGTGATGCTGGATCAGATCGAGTGATGGTATCACCTTTGGCTGTAACATG
```