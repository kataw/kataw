# Kataw parser test case

## Input

`````js
(?)=>0;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 1,
                        "end": 1
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 1,
                        "end": 2
                    },
                    "consequent": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 2,
                        "end": 2
                    },
                    "colonToken": null,
                    "alternate": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 2,
                        "end": 2
                    },
                    "flags": 96,
                    "start": 1,
                    "end": 2
                },
                "flags": 0,
                "start": 32,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 3
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 5,
                "end": 6
            },
            "flags": 16,
            "start": 5,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "(?)=>0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 1, end: 2
✖ Identifier expected - start: 2, end: 3
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 0, end: 5

```

