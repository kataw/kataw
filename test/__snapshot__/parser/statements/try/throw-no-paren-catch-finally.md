# Kataw parser test case

## Input

`````js
throw {x} catch finally
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 158,
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 7,
                            "end": 8
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "autofix": 0,
                    "flags": 0,
                    "start": 7,
                    "end": 8
                },
                "autofix": 0,
                "flags": 256,
                "start": 5,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 9
        },
        {
            "kind": 159,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 9,
                    "end": 9
                },
                "autofix": 0,
                "flags": 128,
                "start": 9,
                "end": 9
            },
            "catchClause": {
                "kind": 173,
                "catchParameter": null,
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "autofix": 0,
                        "flags": 128,
                        "start": 15,
                        "end": 15
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 15,
                    "end": 15
                },
                "autofix": 0,
                "flags": 128,
                "start": 9,
                "end": 15
            },
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 23,
                    "end": 23
                },
                "autofix": 0,
                "flags": 128,
                "start": 23,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 9,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "throw {x} catch finally",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 23,
            "end": 23
        }
    ],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

