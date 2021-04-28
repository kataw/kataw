# Kataw parser test case

## Input

`````js
var _𖫵 = 11;

var 𫠝_ = 10;

var 𫠞_ = 12;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "_𖫵",
                            "rawText": "_𖫵",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 11,
                            "rawText": "11",
                            "flags": 96,
                            "start": 9,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 12
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 13,
                "end": 18
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "𫠝_",
                            "rawText": "var",
                            "flags": 96,
                            "start": 18,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 10,
                            "rawText": "10",
                            "flags": 96,
                            "start": 24,
                            "end": 27
                        },
                        "flags": 16,
                        "start": 18,
                        "end": 27
                    }
                ],
                "flags": 16,
                "start": 18,
                "end": 27
            },
            "flags": 16,
            "start": 13,
            "end": 28
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 28,
                "end": 33
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "𫠞_",
                            "rawText": "var",
                            "flags": 96,
                            "start": 33,
                            "end": 37
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 12,
                            "rawText": "12",
                            "flags": 96,
                            "start": 39,
                            "end": 42
                        },
                        "flags": 16,
                        "start": 33,
                        "end": 42
                    }
                ],
                "flags": 16,
                "start": 33,
                "end": 42
            },
            "flags": 16,
            "start": 28,
            "end": 43
        }
    ],
    "isModule": false,
    "text": "var _𖫵 = 11;\n\nvar 𫠝_ = 10;\n\nvar 𫠞_ = 12;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid astral character - start: 3, end: 5
✖ Invalid character - start: 33, end: 34
✖ Invalid astral character - start: 33, end: 34

```

