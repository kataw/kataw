# Kataw parser test case

## Input

`````js
new Foo`bar`
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
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 226,
                    "member": {
                        "kind": 134299649,
                        "text": "Foo",
                        "rawText": "Foo",
                        "flags": 768,
                        "start": 3,
                        "end": 7
                    },
                    "template": {
                        "kind": 458761,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 768,
                        "start": 7,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 12
                },
                "argumentList": null,
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
    "text": "new Foo`bar`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
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

