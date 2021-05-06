# Kataw parser test case

## Input

`````js
new Foo`a${b}c${c}e`
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
                        "flags": 96,
                        "start": 3,
                        "end": 7
                    },
                    "template": {
                        "kind": 227,
                        "spans": [
                            {
                                "kind": 65764,
                                "rawText": "a",
                                "text": "a",
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 11,
                                    "end": 12
                                },
                                "flags": 32,
                                "start": 7,
                                "end": 12
                            },
                            {
                                "kind": 65764,
                                "rawText": "c",
                                "text": "c",
                                "expression": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 17
                                },
                                "flags": 32,
                                "start": 12,
                                "end": 17
                            }
                        ],
                        "tail": {
                            "kind": 458761,
                            "text": "e",
                            "rawText": "e",
                            "flags": 96,
                            "start": 17,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 20
                },
                "argumentList": null,
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "new Foo`a${b}c${c}e`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
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

