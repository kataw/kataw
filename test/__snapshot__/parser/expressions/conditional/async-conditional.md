# Kataw parser test case

## Input

`````js
true ? async.waterfall() : null;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134,
                    "text": true,
                    "flags": 768,
                    "start": 0,
                    "end": 4
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 768,
                    "start": 4,
                    "end": 6
                },
                "consequent": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 768,
                            "start": 6,
                            "end": 12
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "waterfall",
                            "rawText": "waterfall",
                            "flags": 768,
                            "start": 13,
                            "end": 22
                        },
                        "flags": 256,
                        "start": 6,
                        "end": 22
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 23,
                        "end": 23
                    },
                    "flags": 256,
                    "start": 6,
                    "end": 24
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 768,
                    "start": 24,
                    "end": 26
                },
                "alternate": {
                    "kind": 269,
                    "text": null,
                    "flags": 768,
                    "start": 26,
                    "end": 31
                },
                "flags": 256,
                "start": 0,
                "end": 31
            },
            "flags": 128,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "true ? async.waterfall() : null;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

