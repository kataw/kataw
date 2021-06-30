# Kataw parser test case

## Input

`````js
({"a": "b"});

({["a"]: "b"});
`````

## Output

### CST

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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "a",
                                    "rawText": "\"a\"",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 5
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "b",
                                    "rawText": "\"b\"",
                                    "flags": 96,
                                    "start": 6,
                                    "end": 10
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 10
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 10
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 11
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "\"a\"",
                                        "flags": 96,
                                        "start": 18,
                                        "end": 21
                                    },
                                    "flags": 32,
                                    "start": 17,
                                    "end": 22
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "b",
                                    "rawText": "\"b\"",
                                    "flags": 96,
                                    "start": 23,
                                    "end": 27
                                },
                                "flags": 32,
                                "start": 17,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 17,
                        "end": 27
                    },
                    "flags": 48,
                    "start": 16,
                    "end": 28
                },
                "flags": 32,
                "start": 13,
                "end": 29
            },
            "flags": 16,
            "start": 13,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "({\"a\": \"b\"});\n\n({[\"a\"]: \"b\"});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

({ '"a"' : '"b"' });
({ ['"a"'] : '"b"' });

```

### Diagnostics

```javascript
✔ No errors
```

