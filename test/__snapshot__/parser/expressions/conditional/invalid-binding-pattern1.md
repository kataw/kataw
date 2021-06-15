# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
a ? (({b})) => {} : c
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
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 7,
                                        "end": 8
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 7,
                                "end": 8
                            },
                            "flags": 48,
                            "start": 6,
                            "end": 9
                        },
                        "flags": 32,
                        "start": 5,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 11
                },
                "colonToken": null,
                "alternate": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 11,
                    "end": 11
                },
                "flags": 32,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 16,
                "end": 16
            },
            "flags": 16,
            "start": 14,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 19,
                "end": 21
            },
            "flags": 16,
            "start": 19,
            "end": 21
        }
    ],
    "isModule": true,
    "source": "a ? (({b})) => {} : c",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 3, end: 14
✖ Declaration or statement expected - start: 17, end: 19

```

