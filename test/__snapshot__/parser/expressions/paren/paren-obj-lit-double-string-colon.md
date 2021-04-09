# Kataw parser test case

## Input

`````js
({"a": "b"});

({["a"]: "b"});
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 67174403,
                                    "value": "b",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 6,
                                    "end": 10
                                },
                                "right": {
                                    "kind": 67174403,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 2,
                                    "end": 5
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 2,
                                "end": 10
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 10
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 11
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 67174403,
                                    "value": "b",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 23,
                                    "end": 27
                                },
                                "right": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 67174403,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 18,
                                        "end": 21
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 17,
                                    "end": 22
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 17,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 17,
                        "end": 27
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 16,
                    "end": 28
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "({\"a\": \"b\"});\n\n({[\"a\"]: \"b\"});",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

