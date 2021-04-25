# Kataw parser test case

## Input

`````js
async
(2);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 201392130,
                        "text": 2,
                        "rawText": "2",
                        "flags": 768,
                        "start": 7,
                        "end": 8
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 0,
                "end": 8
            },
            "flags": 256,
            "start": 0,
            "end": 9
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 9,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "async\n(2);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

