# Kataw parser test case

## Input

`````js
foo(...a)
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 768,
                                "start": 4,
                                "end": 7
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 7,
                                "end": 8
                            },
                            "flags": 256,
                            "start": 4,
                            "end": 8
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 4,
                    "end": 8
                },
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "text": "foo(...a)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
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

