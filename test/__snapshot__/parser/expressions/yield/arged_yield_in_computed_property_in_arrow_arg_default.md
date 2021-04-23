# Kataw parser test case

## Input

`````js
{ (x = {[yield y]: 1}) => z }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "flags": 256,
                                "start": 1,
                                "end": 16
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 16
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 16
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 1,
                "rawText": "1",
                "flags": 768,
                "start": 18,
                "end": 20
            },
            "flags": 128,
            "start": 18,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "z",
                "rawText": "z",
                "flags": 768,
                "start": 25,
                "end": 27
            },
            "flags": 128,
            "start": 25,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "{ (x = {[yield y]: 1}) => z }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

