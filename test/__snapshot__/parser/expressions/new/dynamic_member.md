# Kataw parser test case

## Input

`````js
new Foo["bar"]
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
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "Foo",
                        "rawText": "Foo",
                        "flags": 768,
                        "start": 3,
                        "end": 7
                    },
                    "expression": {
                        "kind": 201392131,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 768,
                        "start": 8,
                        "end": 13
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 14
                },
                "argumentList": null,
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "new Foo[\"bar\"]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
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

