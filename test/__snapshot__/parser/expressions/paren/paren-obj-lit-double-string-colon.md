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
    "directives": [],
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
                                    "kind": 201392131,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 6,
                                    "end": 10
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 2,
                                    "end": 5
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 10
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 10
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 11
                },
                "flags": 256,
                "start": 0,
                "end": 12
            },
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
                                    "kind": 201392131,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 23,
                                    "end": 27
                                },
                                "right": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 18,
                                        "end": 21
                                    },
                                    "flags": 256,
                                    "start": 17,
                                    "end": 22
                                },
                                "flags": 256,
                                "start": 17,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 17,
                        "end": 27
                    },
                    "flags": 256,
                    "start": 16,
                    "end": 28
                },
                "flags": 256,
                "start": 13,
                "end": 29
            },
            "flags": 128,
            "start": 13,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "({\"a\": \"b\"});\n\n({[\"a\"]: \"b\"});",
    "fileName": "__root__",
    "flags": 0,
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

