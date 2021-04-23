# Kataw parser test case

## Input

`````js
new false.__proto__.constructor
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
                            "kind": 134,
                            "text": false,
                            "flags": 768,
                            "start": 3,
                            "end": 9
                        },
                        "argumentList": null,
                        "flags": 256,
                        "start": 0,
                        "end": 9
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "__proto__",
                        "rawText": "__proto__",
                        "flags": 768,
                        "start": 10,
                        "end": 19
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 19
                },
                "expression": {
                    "kind": 134299649,
                    "text": "constructor",
                    "rawText": "constructor",
                    "flags": 768,
                    "start": 20,
                    "end": 31
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 31
            },
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "new false.__proto__.constructor",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

