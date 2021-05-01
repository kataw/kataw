# Kataw parser test case

## Input

`````js
async x=>{}[x]
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 7,
                    "end": 9
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "original": "x",
                            "text": "x",
                            "rawText": " x",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 0,
                        "end": 7
                    }
                ],
                "asyncToken": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 10,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 9,
                    "end": 11
                },
                "flags": 288,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "original": "x",
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 12,
                            "end": 13
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 12,
                    "end": 13
                },
                "flags": 32,
                "start": 11,
                "end": 14
            },
            "flags": 16,
            "start": 11,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "async x=>{}[x]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Block body arrows can not be immediately invoked without a group - start: 11, end: 12
✖ Expected a `;` - start: 11, end: 12

```

