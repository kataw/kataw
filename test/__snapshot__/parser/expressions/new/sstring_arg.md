# Kataw parser test case

## Input

`````js
new 'foo'.__proto__.constructor
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
                            "kind": 201392131,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 67109632,
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
    "text": "new 'foo'.__proto__.constructor",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

