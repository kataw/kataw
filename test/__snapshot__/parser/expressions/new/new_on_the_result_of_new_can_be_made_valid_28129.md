# Kataw parser test case

## Input

`````js
new new A().foo
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
                "kind": 129,
                "member": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 768,
                        "start": 0,
                        "end": 3
                    },
                    "expression": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 768,
                            "start": 3,
                            "end": 7
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "A",
                            "rawText": "A",
                            "flags": 768,
                            "start": 7,
                            "end": 9
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 10,
                            "end": 10
                        },
                        "flags": 256,
                        "start": 3,
                        "end": 11
                    },
                    "argumentList": null,
                    "flags": 256,
                    "start": 0,
                    "end": 11
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 12,
                    "end": 15
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "new new A().foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

