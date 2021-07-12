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

### CST

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
                    "kind": 24752947,
                    "flags": 96,
                    "start": 0,
                    "end": 4
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
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
                            "flags": 96,
                            "start": 6,
                            "end": 12
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "waterfall",
                            "rawText": "waterfall",
                            "flags": 96,
                            "start": 13,
                            "end": 22
                        },
                        "flags": 96,
                        "start": 6,
                        "end": 22
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 23,
                        "end": 23
                    },
                    "flags": 268435488,
                    "start": 6,
                    "end": 24
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 24,
                    "end": 26
                },
                "alternate": {
                    "kind": 138477575,
                    "flags": 96,
                    "start": 26,
                    "end": 31
                },
                "flags": 96,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "true ? async.waterfall() : null;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

  true ? async.waterfall() : null;

```

### Diagnostics

```javascript
✔ No errors
```

