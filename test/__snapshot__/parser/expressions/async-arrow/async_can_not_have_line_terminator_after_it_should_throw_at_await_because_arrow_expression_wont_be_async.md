# Kataw parser test case

## Input

`````js
let f = async
g => await g
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 81921,
                            "text": "f",
                            "rawText": "f",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "text": "async",
                            "rawText": "async",
                            "flags": 768,
                            "start": 7,
                            "end": 13
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 13
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 81921,
                            "text": "g",
                            "rawText": "g",
                            "flags": 768,
                            "start": 13,
                            "end": 15
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 13,
                        "end": 15
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "await",
                "rawText": "await",
                "flags": 768,
                "start": 18,
                "end": 24
            },
            "flags": 128,
            "start": 18,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "g",
                "rawText": "g",
                "flags": 768,
                "start": 24,
                "end": 26
            },
            "flags": 128,
            "start": 24,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "let f = async\ng => await g",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 13,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 15,
            "end": 18
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 18
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 15,
            "end": 18
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 24,
            "end": 26
        }
    ],
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

