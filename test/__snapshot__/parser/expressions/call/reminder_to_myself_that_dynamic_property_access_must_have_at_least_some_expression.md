# Kataw parser test case

## Input

`````js
foo(async[])
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
                    "kind": 81921,
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
                            "kind": 130,
                            "member": {
                                "kind": 81921,
                                "text": "async",
                                "rawText": "async",
                                "flags": 768,
                                "start": 4,
                                "end": 9
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "autofix": 0,
                                "flags": 12,
                                "start": 10,
                                "end": 10
                            },
                            "flags": 256,
                            "start": 4,
                            "end": 11
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 4,
                    "end": 11
                },
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "foo(async[])",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 34,
            "error": "An element access expression should take an argument.",
            "start": 10,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 10,
            "end": 11
        }
    ],
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

