# Kataw parser test case

## Input

`````js
if (x) { "use strict"; with (x) y; }
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
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 4,
                "end": 5
            },
            "consequent": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 67174403,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 768,
                                "start": 8,
                                "end": 21
                            },
                            "flags": 128,
                            "start": 8,
                            "end": 22
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 8,
                    "end": 22
                },
                "flags": 128,
                "start": 6,
                "end": 22
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 0,
            "end": 22
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 768,
                "start": 22,
                "end": 27
            },
            "expression": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 29,
                "end": 30
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 81921,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 31,
                    "end": 33
                },
                "flags": 128,
                "start": 31,
                "end": 34
            },
            "flags": 128,
            "start": 22,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "if (x) { \"use strict\"; with (x) y; }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22,
            "end": 27
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 34,
            "end": 36
        }
    ],
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

