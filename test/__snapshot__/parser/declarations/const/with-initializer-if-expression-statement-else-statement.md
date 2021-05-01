# Kataw parser test case

## Input

`````js
if (true) {} else const x = 1;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134,
                "text": true,
                "flags": 96,
                "start": 4,
                "end": 8
            },
            "consequent": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 11,
                    "end": 11
                },
                "flags": 16,
                "start": 9,
                "end": 12
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "start": 12,
                "end": 17
            },
            "alternate": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 17,
                    "end": 17
                },
                "flags": 16,
                "start": 17,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 0,
                "start": 17,
                "end": 23
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "original": "x",
                            "text": "x",
                            "rawText": " x",
                            "flags": 96,
                            "start": 23,
                            "end": 25
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "original": "1",
                            "rawText": " 1",
                            "flags": 96,
                            "start": 27,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 23,
                        "end": 29
                    }
                ],
                "flags": 16777232,
                "start": 23,
                "end": 29
            },
            "flags": 33554448,
            "start": 17,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "if (true) {} else const x = 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 17, end: 23
✖ Expected a `;` - start: 17, end: 23

```

